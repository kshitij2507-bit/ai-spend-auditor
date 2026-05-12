"use client";

import React from "react";

export default function AuditPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Start Your Audit</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">
        Upload your AI expense data and let the system analyze usage patterns,
        detect overspending, and suggest savings.
      </p>

      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition">
        Upload Data
      </button>
    </main>
  );
}
