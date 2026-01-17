"use client";

import { useState } from "react";

export default function APITestPage() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testAPI = async (method, url, body = null) => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(url, options);
      const data = await res.json();
      setResponse({ status: res.status, data });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">API Testing Dashboard</h1>

      {/* Health Check */}
      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Health Check</h2>
        <button
          onClick={() => testAPI("GET", "/api/health")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          GET /api/health
        </button>
      </section>

      {/* Users API */}
      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Users API</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => testAPI("GET", "/api/users")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET All Users
          </button>
          <button
            onClick={() => testAPI("GET", "/api/users/1")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET User #1
          </button>
          <button
            onClick={() => testAPI("GET", "/api/users?email=john@example.com")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET by Email
          </button>
          <button
            onClick={() =>
              testAPI("POST", "/api/users", {
                name: "Test User",
                email: "test@example.com",
                role: "user",
              })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            POST New User
          </button>
          <button
            onClick={() =>
              testAPI("PUT", "/api/users/1", {
                name: "Updated Name",
              })
            }
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
          >
            PUT Update User
          </button>
          <button
            onClick={() => testAPI("DELETE", "/api/users/3")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            DELETE User #3
          </button>
        </div>
      </section>

      {/* Products API */}
      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Products API</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => testAPI("GET", "/api/products")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET All Products
          </button>
          <button
            onClick={() => testAPI("GET", "/api/products/1")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET Product #1
          </button>
          <button
            onClick={() => testAPI("GET", "/api/products?category=Electronics")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET by Category
          </button>
          <button
            onClick={() =>
              testAPI("POST", "/api/products", {
                name: "New Product",
                price: 99.99,
                category: "Test",
                stock: 10,
              })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            POST New Product
          </button>
          <button
            onClick={() =>
              testAPI("PUT", "/api/products/1", {
                price: 899.99,
              })
            }
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
          >
            PUT Update Product
          </button>
          <button
            onClick={() => testAPI("DELETE", "/api/products/4")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            DELETE Product #4
          </button>
        </div>
      </section>

      {/* Posts API */}
      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Posts API</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => testAPI("GET", "/api/posts")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET All Posts
          </button>
          <button
            onClick={() => testAPI("GET", "/api/posts/1")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET Post #1
          </button>
          <button
            onClick={() => testAPI("GET", "/api/posts?published=true")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            GET Published Posts
          </button>
          <button
            onClick={() =>
              testAPI("POST", "/api/posts", {
                title: "Test Post",
                content: "This is a test post content",
                author: "Tester",
                published: true,
              })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            POST New Post
          </button>
          <button
            onClick={() =>
              testAPI("PUT", "/api/posts/3", {
                published: true,
              })
            }
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
          >
            PUT Update Post
          </button>
          <button
            onClick={() => testAPI("DELETE", "/api/posts/3")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            DELETE Post #3
          </button>
        </div>
      </section>

      {/* Response Display */}
      <section className="bg-gray-900 text-gray-100 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Response</h2>
        {loading && (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="ml-3">Loading...</span>
          </div>
        )}
        {error && (
          <div className="bg-red-600 text-white p-4 rounded">
            Error: {error}
          </div>
        )}
        {response && (
          <div>
            <div className="mb-2">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={
                  response.status < 400 ? "text-green-400" : "text-red-400"
                }
              >
                {response.status}
              </span>
            </div>
            <pre className="bg-gray-800 p-4 rounded overflow-auto max-h-96">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
        {!loading && !error && !response && (
          <p className="text-gray-400">
            Click any button above to test the API
          </p>
        )}
      </section>
    </div>
  );
}
