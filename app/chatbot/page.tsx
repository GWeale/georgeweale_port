"use client";


import React, { useState } from "react";


export default function Chatbot() {
 const [message, setMessage] = useState("");
 const [error, setError] = useState("");


 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   if (message.trim()) {
     setError("API is no longer connected. Please try again later.");
     setMessage("");
   }
 };


 return (
   <section>
     <h1 className="mb-8 text-2xl font-medium tracking-tight">Chatbot</h1>
     <div className="prose prose-neutral dark:prose-invert">
       <p>
         Welcome to my chatbot! This is <a href="https://github.com/GWeale/ChatBot" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">my own pico-scale chatbot</a> that you can interact with.
         Feel free to ask questions about my research, work, and projects.
         Sorry, but I discontinued the chatbot because it was too expensive to keep running. :(
       </p>
     </div>


     {error && (
       <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
         {error}
       </div>
     )}


     <form onSubmit={handleSubmit} className="mt-6">
       <div className="flex gap-2">
         <input
           type="text"
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           placeholder="Type your message here..."
           className="flex-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
         />
         <button
           type="submit"
           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
         >
           Send
         </button>
       </div>
     </form>


     <div className="mt-8 flex flex-col items-center">
       <h2 className="text-xl font-medium mb-4">Former Glory</h2>
       <img
         src="/photos/chatbot-screenshot.png"
         alt="It was so beautiful"
         className="rounded-lg shadow-md w-full max-w-2xl"
       />
     </div>
   </section>
 );
}





