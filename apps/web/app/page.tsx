"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div>
      <div>
        <h1>All messages will come here</h1>
      </div>
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]}
          placeholder="message..."
        />
        <button
          onClick={() => sendMessage(message)}
          className={classes["chat-btn"]}
        >
          Send
        </button>
      </div>
      <div>
        {messages.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
}
