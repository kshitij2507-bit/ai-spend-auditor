"use client";

import React from "react";

export default function ReportsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Audit Reports</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">
        View detailed breakdowns of your AI tool expenses, monthly trends, and
        recommended optimizations.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Sample Report</h2>
        <ul className="text-gray-200 list-disc list-inside">
          <li>Tool A: ₹12,000/month</li>
          <li>Tool B: ₹8,500/month</li>
          <li>Suggested Savings: ₹4,000/month</li>
        </ul>
      </div>
    </main>
  );
}
