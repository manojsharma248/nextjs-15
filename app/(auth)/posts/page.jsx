import Link from "next/link";

export default async function Posts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // or "no-store" for fresh data
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!posts.ok) {
    throw new Error(`HTTP error! status: ${posts.status}`);
  }

  const postsData = await posts.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {postsData.length > 0 &&
          postsData.slice(0, 5).map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block border rounded-lg p-4 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
              <div className="mt-3 text-sm text-blue-500 font-medium">
                Read more →
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
