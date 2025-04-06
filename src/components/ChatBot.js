import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const API_KEY = "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"; // Replace with your actual key

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatContent = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/\n\* (.*?)\n/g, "<ul><li>$1</li></ul>") // Bullet list
      .replace(/\* (.*?)\n/g, "<li>$1</li>")            // List item
      .replace(/\n/g, "<br>");                          // Line break
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "CustomerQueryAssistant"
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.2-3b-instruct:free",
          messages: updatedMessages
        })
      });

      const data = await response.json();
      const aiReply = data?.choices?.[0]?.message?.content || "⚠️ No response from AI.";

      setMessages([...updatedMessages, {
        role: "assistant",
        content: aiReply
      }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...updatedMessages, {
        role: "assistant",
        content: "❌ Failed to connect to OpenRouter."
      }]);
    }
  };

  return (
    <div className="chatbox">
      <h2>💬 Customer Query Assistant</h2>
      <div className="chatlog">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.role}
            dangerouslySetInnerHTML={{ __html: formatContent(msg.content) }}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          value={input}
          placeholder="Ask your customer service question..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
