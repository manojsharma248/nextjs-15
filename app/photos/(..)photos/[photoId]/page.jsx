// This is the INTERCEPTED route that shows the photo in a modal
// when navigating from /photos to /photos/[id] (client-side navigation)

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

const photoData = {
  1: {
    title: "Mountain Landscape",
    description: "Breathtaking mountain peaks covered in snow.",
  },
  2: {
    title: "Ocean View",
    description: "Pristine blue waters meeting the horizon.",
  },
  3: {
    title: "City Lights",
    description: "Urban skyline illuminated at night.",
  },
  4: {
    title: "Forest Path",
    description: "Serene walking trail through ancient trees.",
  },
  5: {
    title: "Desert Sunset",
    description: "Golden hour over rolling sand dunes.",
  },
  6: {
    title: "Winter Wonderland",
    description: "Snow-covered landscape in pristine white.",
  },
};

export default function PhotoModal({ params }) {
  const router = useRouter();
  const photo = photoData[params.photoId];

  // Close modal on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        router.back();
      }
    },
    [router],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!photo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => router.back()}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          aria-label="Close modal"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Photo content */}
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <span className="text-white text-9xl">📷</span>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
          <p className="text-gray-600 mb-4">{photo.description}</p>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-gray-500">
              <span className="font-semibold">Photo ID:</span> {params.photoId}
            </div>
            <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Modal View (Intercepted Route)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
