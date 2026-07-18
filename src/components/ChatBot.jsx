import { useEffect, useRef, useState } from "react";
import { profile } from "../data.js";
import { answerQuestion, suggestedQuestions } from "./chatbotKnowledge.js";

const INTRO = `Hi! I’m Aditya’s portfolio guide — ask me about his projects, skills, research, or how to reach him.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: INTRO }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);
  const showSuggestions = messages.every((m) => m.role === "bot");

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open, isTyping]);

  function send(text) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const answer = answerQuestion(trimmed);
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answer }]);
      setIsTyping(false);
    }, 550);
  }

  return (
    <>
      <button
        className="chat-launcher"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : `Open chat about ${profile.name}`}
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="chat-window"
          role="dialog"
          aria-label={`Chat about ${profile.name}`}
        >
          <div className="chat-header">
            <div className="chat-header-copy">
              <div className="chat-title">Ask {profile.name.split(" ")[0]}</div>
              <span className="sub">
                Portfolio guide · projects · research · contact
              </span>
            </div>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`chat-msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-msg bot typing" aria-live="polite">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            )}
          </div>
          {showSuggestions && (
            <div className="chat-suggestions">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  className="chat-suggest-btn"
                  onClick={() => send(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              type="text"
              placeholder="Ask about his work…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={!input.trim() || isTyping}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
