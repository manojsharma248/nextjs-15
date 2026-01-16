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
            <div key={post.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
