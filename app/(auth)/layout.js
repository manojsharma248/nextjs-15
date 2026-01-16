export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <footer className="bg-gray-800 text-white py-6 px-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p>My App Footer</p>
        </div>
      </footer>
    </html>
  );
}
