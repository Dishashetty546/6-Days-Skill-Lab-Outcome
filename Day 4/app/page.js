"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-white flex flex-col justify-center items-center w-full h-screen font-bold">
      <h1 className="text-black text-4xl text-center p-10">
        Welcome to Jarvis
      </h1>
      <p className="text-black text-2xl text-center m-5 p-5">
        Your personal AI assistant
      </p>
      <button
        onClick={() => router.push("/chatpage")}
        className="bg-blue-800 text-white text-2xl px-6 py-3 rounded-4xl hover:bg-blue-600"
      >
        Try Once
      </button>
    </div>
  );
}
