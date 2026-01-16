"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-red-600">
              {/* Critical Error Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-ping"></div>
                  <div className="relative rounded-full bg-red-100 p-6">
                    <svg
                      className="h-20 w-20 text-red-600"
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
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Critical Application Error
              </h1>

              {/* Error Description */}
              <p className="text-center text-gray-600 text-lg mb-8">
                Something went seriously wrong with the application. We
                apologize for the inconvenience.
              </p>

              {/* Error Details Box */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <svg
                    className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-red-900 mb-2">
                      Technical Details:
                    </p>
                    <p className="text-sm text-red-800 font-mono break-words bg-white p-3 rounded border border-red-200">
                      {error?.message || "An unexpected global error occurred"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={reset}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Try Reloading the Application
                </button>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-xl transition duration-200"
                >
                  Return to Homepage
                </button>
              </div>

              {/* Help Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-500 text-sm">
                  If this error persists, please try:
                </p>
                <ul className="text-center text-gray-500 text-sm space-y-1 mt-2">
                  <li>• Refreshing your browser</li>
                  <li>• Clearing browser cache and cookies</li>
                  <li>• Checking your internet connection</li>
                  <li>• Contacting support if the problem continues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
