import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatbot",
  description: "My Chatbot",
};

export default function Chatbot() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Chatbot</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my chatbot! This is a nano-scale GPT-2 based chatbot that you can interact with.
          Feel free to ask questions about my research, work, and projects.
        </p>
        {/* Add your chatbot iframe or component here */}
        <div className="mt-6">
          <iframe
            src="YOUR_CHATBOT_URL"
            width="100%"
            height="600px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}