import Card from "../../../components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  const archivedNotifications = [
    {
      id: 1,
      type: "success",
      message: "Database backup completed successfully",
      time: "2 days ago",
      archivedDate: "Jan 15, 2026",
    },
    {
      id: 2,
      type: "info",
      message: "Monthly report generated",
      time: "3 days ago",
      archivedDate: "Jan 14, 2026",
    },
    {
      id: 3,
      type: "warning",
      message: "SSL certificate expiring soon",
      time: "5 days ago",
      archivedDate: "Jan 12, 2026",
    },
    {
      id: 4,
      type: "success",
      message: "Payment processed successfully",
      time: "1 week ago",
      archivedDate: "Jan 10, 2026",
    },
    {
      id: 5,
      type: "error",
      message: "API rate limit exceeded",
      time: "1 week ago",
      archivedDate: "Jan 9, 2026",
    },
    {
      id: 6,
      type: "info",
      message: "New feature deployment completed",
      time: "2 weeks ago",
      archivedDate: "Jan 3, 2026",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-700";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-700";
      case "error":
        return "bg-red-50 border-red-200 text-red-700";
      default:
        return "bg-blue-50 border-blue-200 text-blue-700";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "error":
        return "✕";
      default:
        return "ℹ";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Archived Notifications
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {archivedNotifications.length} archived notifications
          </p>
        </div>
        <Link
          href="/complex-dashboard"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <Card className="h-full">
        <div className="space-y-3">
          {archivedNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-l-4 rounded-lg ${getTypeStyles(
                notification.type,
              )} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">
                      {getTypeIcon(notification.type)}
                    </span>
                    <p className="font-medium">{notification.message}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs opacity-75">
                    <span>Original: {notification.time}</span>
                    <span className="text-gray-400">•</span>
                    <span>Archived: {notification.archivedDate}</span>
                  </div>
                </div>
                <button
                  className="ml-4 px-3 py-1 text-xs font-medium bg-white bg-opacity-50 rounded hover:bg-opacity-75 transition"
                  title="Restore notification"
                >
                  Restore
                </button>
              </div>
            </div>
          ))}
        </div>

        {archivedNotifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No archived notifications</p>
            <p className="text-gray-400 text-sm mt-2">
              Archived notifications will appear here
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
