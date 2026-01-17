import Card from "../../components/Card";

export default function RevenueSlot() {
  const revenueData = [
    { month: "January", amount: 45000, growth: "+12%" },
    { month: "February", amount: 52000, growth: "+15%" },
    { month: "March", amount: 48000, growth: "-8%" },
    { month: "April", amount: 61000, growth: "+27%" },
  ];

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Card title="Revenue Overview" className="h-full">
      <div className="mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
        <p className="text-sm opacity-90">Total Revenue</p>
        <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
      </div>

      <div className="space-y-3">
        {revenueData.map((item) => (
          <div
            key={item.month}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <p className="font-medium text-gray-800">{item.month}</p>
              <p className="text-sm text-gray-600">
                ${item.amount.toLocaleString()}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.growth.startsWith("+")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {item.growth}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
