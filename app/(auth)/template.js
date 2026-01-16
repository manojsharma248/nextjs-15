"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  let isActive = (path) => pathname === path;
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header className="bg-blue-600 text-white py-4 px-6">
          <nav className="max-w-7xl mx-auto flex gap-6">
            <Link
              href="/login"
              className={`hover:underline ${
                isActive("/login") ? "font-bold" : ""
              }`}
            >
              Login
            </Link>
            <Link
              href="/forget-password"
              className={`hover:underline ${
                isActive("/forget-password") ? "font-bold" : ""
              }`}
            >
              Forget Password
            </Link>
          </nav>
        </header>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 w-64"
          placeholder="Search..."
        />
        {children}
      </body>
      <footer className="bg-gray-800 text-white py-6 px-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p>My App Footer</p>
        </div>
      </footer>
    </html>
  );
}
