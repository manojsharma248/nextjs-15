export default function ComplexDashboardLayout({
  children,
  notifications,
  users,
  revenues,
  login,
}) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <div>{login}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800">Complex Dashboard</h1>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">{children}</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">{notifications}</div>
          <div className="lg:col-span-1">{users}</div>
          <div className="lg:col-span-1">{revenues}</div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12 px-6 py-4 text-center">
        <p className="text-gray-600 text-sm">
          &copy; 2024 Complex Dashboard Inc.
        </p>
      </footer>
    </div>
  );
}
