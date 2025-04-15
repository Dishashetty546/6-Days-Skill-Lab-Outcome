"use client";
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="text-center p-4 text-2xl font-bold">
        🎬 TMDB Movie App
      </header>
      <Home />
    </div>
  );
}

export default App;
