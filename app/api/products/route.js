import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/products - Get all products
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    // Filter by category if provided
    if (category) {
      const products = db.products.getByCategory(category);
      return NextResponse.json({
        products,
        count: products.length,
        category,
      });
    }

    // Get all products
    const products = db.products.getAll();
    return NextResponse.json({
      products,
      count: products.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// POST /api/products - Create a new product
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.price) {
      return NextResponse.json(
        { error: "Name and price are required" },
        { status: 400 },
      );
    }

    const newProduct = db.products.create({
      name: body.name,
      price: parseFloat(body.price),
      category: body.category || "Uncategorized",
      stock: body.stock || 0,
      description: body.description || "",
    });

    return NextResponse.json(
      { product: newProduct, message: "Product created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
