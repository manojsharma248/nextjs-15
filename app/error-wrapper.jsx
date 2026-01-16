"use client";

import { useState } from "react";

export default function ErrorWrapper({ children }) {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a simulated error for testing error boundaries!");
  }

  return (
    <div>
      {children}

      {/* Error Simulation Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShouldError(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Simulate Error
        </button>
      </div>
    </div>
  );
}
