import Card from "../../components/Card";

export default function UsersSlot() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active" },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      status: "Active",
    },
  ];

  return (
    <Card title="Recent Users" className="h-full">
      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex-1">
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
