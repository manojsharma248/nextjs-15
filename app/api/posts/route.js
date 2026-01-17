import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/posts - Get all posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get("published");

    // Filter by published status if provided
    if (published === "true") {
      const posts = db.posts.getPublished();
      return NextResponse.json({
        posts,
        count: posts.length,
      });
    }

    // Get all posts
    const posts = db.posts.getAll();
    return NextResponse.json({
      posts,
      count: posts.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// POST /api/posts - Create a new post
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 },
      );
    }

    const newPost = db.posts.create({
      title: body.title,
      content: body.content,
      author: body.author || "Anonymous",
      published: body.published || false,
    });

    return NextResponse.json(
      { post: newPost, message: "Post created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
