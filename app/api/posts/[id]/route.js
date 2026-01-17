import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/posts/[id] - Get post by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const post = db.posts.getById(id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// PUT /api/posts/[id] - Update post
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updatedPost = db.posts.update(id, body);

    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({
      post: updatedPost,
      message: "Post updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// DELETE /api/posts/[id] - Delete post
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const deleted = db.posts.delete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
