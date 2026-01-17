import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

// GET /api/users - Get all users
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const headers = new Headers(request.headers);
    console.log("Request Headers:", Object.fromEntries(headers.entries()));
    const email = searchParams.get("email");

    // Filter by email if provided
    if (email) {
      const user = db.users.getByEmail(email);
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json({ user });
    }

    // Get all users
    const users = db.users.getAll();
    return NextResponse.json({
      users,
      count: users.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// POST /api/users - Create a new user
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Check if email already exists
    const existingUser = db.users.getByEmail(body.email);
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 },
      );
    }

    const newUser = db.users.create({
      name: body.name,
      email: body.email,
      role: body.role || "user",
    });

    // Set cookies
    const cookieStore = await cookies();
    cookieStore.set("userId", newUser.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    cookieStore.set("userName", newUser.name, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json(
      { user: newUser, message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
