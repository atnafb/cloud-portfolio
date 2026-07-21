import json
import logging
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from lambda_function import lambda_handler


HOST = os.environ.get("LOCAL_CHATBOT_HOST", "127.0.0.1")
PORT = int(os.environ.get("LOCAL_CHATBOT_PORT", "8000"))


class LocalLambdaContext:
    aws_request_id = "local-request"


class ChatbotRequestHandler(BaseHTTPRequestHandler):
    def send_lambda_response(self, result):
        body = result.get("body", "")
        body_bytes = body.encode("utf-8")

        self.send_response(result.get("statusCode", 500))
        for name, value in result.get("headers", {}).items():
            self.send_header(name, value)
        self.send_header("Content-Length", str(len(body_bytes)))
        self.end_headers()
        self.wfile.write(body_bytes)

    def do_OPTIONS(self):
        event = {"requestContext": {"http": {"method": "OPTIONS"}}}
        self.send_lambda_response(lambda_handler(event, LocalLambdaContext()))

    def do_GET(self):
        if self.path not in ("/", "/health"):
            self.send_error(404)
            return

        body = json.dumps({"status": "ok", "service": "portfolio-chatbot"})
        body_bytes = body.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body_bytes)))
        self.end_headers()
        self.wfile.write(body_bytes)

    def do_POST(self):
        if self.path != "/chat":
            self.send_error(404)
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(content_length).decode("utf-8")
        event = {
            "requestContext": {"http": {"method": "POST"}},
            "body": body,
        }
        self.send_lambda_response(lambda_handler(event, LocalLambdaContext()))

    def log_message(self, message, *args):
        logging.info("%s - %s", self.address_string(), message % args)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
    server = ThreadingHTTPServer((HOST, PORT), ChatbotRequestHandler)
    print(f"Portfolio chatbot API running at http://{HOST}:{PORT}/chat")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping local chatbot API.")
    finally:
        server.server_close()
