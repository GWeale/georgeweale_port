import React from "react";
import type { Metadata } from "next";
import ChatInterface from "../components/ChatInterface";

export const metadata: Metadata = {
  title: "Chatbot",
  description: "My Chatbot",
};

export default function Chatbot() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Chatbot</h1>
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p>
          Welcome to my chatbot! This is a pico-scal chatbot that I made from the ground up chatbot.
          Feel free to ask questions about my research, work, and projects.
        </p>
      </div>
      <ChatInterface apiEndpoint="YOUR_CHATBOT_API_ENDPOINT" />
    </section>
  );
}
