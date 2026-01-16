import Link from "next/link";

async function getPost(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        cache: "force-cache",
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post with status: ${res.status}`);
    }

    const data = await res.json();

    if (!data || !data.id) {
      throw new Error("Invalid post data received");
    }

    return data;
  } catch (error) {
    throw new Error(
      error.message || "Failed to load post. Please try again later."
    );
  }
}

async function getComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      {
        cache: "force-cache",
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch comments with status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    // For comments, we'll throw the error so error.jsx catches it
    throw new Error(error.message || "Failed to load comments");
  }
}

export default async function PostDetail({ params }) {
  const { postId } = await params;

  const [post, comments] = await Promise.all([
    getPost(postId),
    getComments(postId),
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/posts"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Posts
        </Link>

        {/* Post Content */}
        <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              Post #{post.id}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>User ID: {post.userId}</span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
        </article>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comments ({comments.length})
          </h2>

          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border-l-4 border-blue-500 bg-gray-50 p-4 rounded"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 capitalize">
                      {comment.name}
                    </h3>
                  </div>
                  <p className="text-sm text-blue-600 mb-2">{comment.email}</p>
                  <p className="text-gray-700">{comment.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
