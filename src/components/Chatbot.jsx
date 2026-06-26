import { useMemo, useState } from "react";
import "./Chatbot.css";
import knowledge from "../portfolio-knowledge.json";

const SUGGESTED_QUESTIONS = [
  "Tell me about Atnafu's AWS experience",
  "What is CareSync?",
  "What cloud projects has he built?",
  "Does he have data engineering experience?",
  "How can I contact him?",
];

const CHATBOT_API_URL = import.meta.env.VITE_CHATBOT_API_URL;

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4Z" />
    </svg>
  );
}

function normalize(text = "") {
  return text.toLowerCase();
}

function buildFallbackProjects(projects = []) {
  if (!projects.length) {
    return "Atnafu has built cloud and data projects across AWS architecture, application deployment, and analytics.";
  }
  const names = projects.map((project) => project.name).join(", ");
  return `Atnafu's portfolio includes ${names}. I can tell you more about any of them.`;
}

function getMockResponse(question, data) {
  const q = normalize(question);

  if (q.includes("caresync")) {
    const project = data.projects?.find(
      (item) => item.name.toLowerCase() === "caresync"
    );
    if (project) {
      return `${project.summary} Key contributions included ${project.details
        .slice(0, 3)
        .join(", ")}.`;
    }
  }

  if (
    q.includes("aws") ||
    q.includes("cloud experience") ||
    q.includes("cloud skills")
  ) {
    const awsSkills = data.skills?.aws_cloud?.slice(0, 10).join(", ");
    return `Atnafu has hands-on AWS experience with ${awsSkills}. His work includes portfolio deployment on S3 + CloudFront and infrastructure design for projects like CareSync.`;
  }

  if (
    q.includes("data engineering") ||
    q.includes("etl") ||
    q.includes("sql") ||
    q.includes("python")
  ) {
    const dataSkills = data.skills?.data_engineering?.join(", ");
    return `Yes — Atnafu has data engineering experience with ${dataSkills}. His work includes housing market analytics and an ETL pipeline design using S3, Glue, Redshift, and QuickSight.`;
  }

  if (q.includes("project") || q.includes("portfolio")) {
    return buildFallbackProjects(data.projects);
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("linkedin") ||
    q.includes("github")
  ) {
    return `You can reach Atnafu at ${data.contact?.email}. His GitHub is ${data.contact?.github} and LinkedIn is ${data.contact?.linkedin}.`;
  }

  return (
    data.bot_rules?.fallback_response ||
    "I can answer questions about Atnafu's projects, AWS experience, technical skills, and contact information."
  );
}

async function getChatbotResponse(question) {
  if (!CHATBOT_API_URL) {
    return getMockResponse(question, knowledge);
  }

  try {
    const response = await fetch(CHATBOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error("Chatbot API request failed");
    }

    const data = await response.json();
    return data.answer || getMockResponse(question, knowledge);
  } catch (error) {
    console.error("Chatbot API error:", error);
    return "I’m having trouble reaching the AI service right now. You can still ask about Atnafu’s AWS projects, cloud experience, data engineering background, and contact information.";
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi — I’m Atnafu’s AI portfolio assistant. I can answer questions about his AWS experience, cloud projects, data engineering background, technical skills, and how to contact him.",
    },
  ]);

  const quickQuestions = useMemo(() => SUGGESTED_QUESTIONS, []);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(async () => {
      const reply = await getChatbotResponse(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: reply,
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        className="chatbot-launcher"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-eyebrow">AI Portfolio Assistant</p>
              <h3>Ask about Atnafu's work</h3>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`chatbot-message ${message.sender}`}>
                <div className="chatbot-bubble">{message.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message bot">
                <div className="chatbot-bubble chatbot-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-suggestions">
            {quickQuestions.map((question) => (
              <button key={question} type="button" onClick={() => sendMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask about AWS, projects, or skills..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" aria-label="Send message">
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  );
}