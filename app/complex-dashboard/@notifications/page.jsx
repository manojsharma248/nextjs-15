import Card from "../../components/Card";

export default function NotificationSlot() {
  const notifications = [
    {
      id: 1,
      type: "success",
      message: "New user registered successfully",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "warning",
      message: "Server response time is high",
      time: "15 minutes ago",
    },
    {
      id: 3,
      type: "info",
      message: "System update scheduled for tonight",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "error",
      message: "Failed to sync data",
      time: "2 hours ago",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "error":
        return "bg-red-50 border-red-200 text-red-800";
      default:
        return "bg-blue-50 border-blue-200 text-blue-800";
    }
  };

  return (
    <Card title="Notifications" className="h-full">
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 border-l-4 rounded ${getTypeStyles(
              notification.type,
            )}`}
          >
            <p className="font-medium">{notification.message}</p>
            <p className="text-xs mt-1 opacity-75">{notification.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
