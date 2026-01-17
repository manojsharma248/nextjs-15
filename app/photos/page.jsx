import Link from "next/link";

// Mock photo data
const photos = [
  { id: "1", title: "Mountain Landscape", url: "/images/mountain.jpg" },
  { id: "2", title: "Ocean View", url: "/images/ocean.jpg" },
  { id: "3", title: "City Lights", url: "/images/city.jpg" },
  { id: "4", title: "Forest Path", url: "/images/forest.jpg" },
  { id: "5", title: "Desert Sunset", url: "/images/desert.jpg" },
  { id: "6", title: "Winter Wonderland", url: "/images/winter.jpg" },
];

export default function PhotosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>
      <p className="text-gray-600 mb-6">
        Click on any photo to view it in a modal (intercepted route). Or open in
        a new tab to see the full page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photos/${photo.id}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-6xl">📷</span>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                {photo.title}
              </h3>
              <p className="text-sm text-gray-500">Photo #{photo.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
