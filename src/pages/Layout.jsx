import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-white text-2xl">Layout Test</h1>
      {children}
    </div>
  );
}
