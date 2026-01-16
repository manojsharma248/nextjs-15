"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <svg
                className="h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Error Loading Posts
              </h2>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 mb-2">
              We encountered an error while fetching the posts. This could be
              due to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
              <li>Network connectivity issues</li>
              <li>API server unavailability</li>
              <li>Timeout or connection problems</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded p-3 mb-4">
            <p className="text-sm font-mono text-gray-700 break-words">
              {error.message || "An unexpected error occurred"}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={reset}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
            >
              Try Again
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-200"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
