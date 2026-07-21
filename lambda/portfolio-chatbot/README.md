# Portfolio Chatbot Lambda

## Run locally

The local server invokes Amazon Bedrock, so valid AWS credentials with
`bedrock:InvokeModel` permission are required.

From the repository root:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r lambda/portfolio-chatbot/requirements.txt
python lambda/portfolio-chatbot/local_server.py
```

Test the backend in another terminal:

```bash
curl -X POST http://127.0.0.1:8000/chat \
  -H 'Content-Type: application/json' \
  -d '{"question":"What AWS experience does Atnafu have?"}'
```

Run the React application in another terminal:

```bash
VITE_CHATBOT_API_URL=http://127.0.0.1:8000/chat npm run dev
```

The backend also provides a health check at `http://127.0.0.1:8000/health`.

Optional environment variables:

- `AWS_PROFILE`: local AWS CLI profile to use
- `BEDROCK_REGION`: defaults to `us-east-1`
- `BEDROCK_MODEL_ID`: defaults to `amazon.nova-micro-v1:0`
- `LOCAL_CHATBOT_HOST`: defaults to `127.0.0.1`
- `LOCAL_CHATBOT_PORT`: defaults to `8000`
