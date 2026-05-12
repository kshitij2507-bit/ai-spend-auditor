"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg">
        AI Spend Auditor
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl leading-relaxed">
        Track your AI tool expenses, detect overspending, and discover smarter
        savings opportunities — all in one dashboard.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link href="/audit">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition">
            🚀 Start Audit
          </button>
        </Link>
        <Link href="/reports">
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-8 rounded-lg shadow-md transition">
            📊 View Reports
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        © 2026 AI Spend Auditor | Built with Next.js + TailwindCSS
      </footer>
    </main>
  );
}
