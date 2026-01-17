// This is the full page view when accessing /photos/[id] directly
// or when opening in a new tab

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

export default async function PhotoPage({ params }) {
  const { photoId } = await params;
  const photo = photoData[photoId];

  if (!photo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Photo not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <a
        href="/photos"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Gallery
      </a>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <span className="text-white text-9xl">📷</span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{photo.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{photo.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div>
              <span className="font-semibold">Photo ID:</span> {photoId}
            </div>
            <div>
              <span className="font-semibold">View:</span> Full Page
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
