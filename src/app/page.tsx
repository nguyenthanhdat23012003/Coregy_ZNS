"use client";
import { BarChart, Users, Tag, FileText, Send } from "lucide-react";

const stats = [
  { title: "Tổng số học viên", value: "1,250", icon: <Users size={24} /> },
  { title: "Tổng số Tag", value: "12", icon: <Tag size={24} /> },
  { title: "Tổng số Template", value: "25", icon: <FileText size={24} /> },
  { title: "Chiến dịch đang chạy", value: "5", icon: <Send size={24} /> },
];

export default function Home() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4 border border-gray-200"
          >
            <div className="bg-gray-200 p-3 rounded-full text-gray-800">
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <p className="text-xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white shadow-md p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Thống kê chiến dịch
        </h2>
        <div className="flex justify-center items-center h-40">
          <BarChart size={48} className="text-gray-500" />
          <p className="ml-4 text-gray-600">
            Biểu đồ thống kê sẽ hiển thị tại đây...
          </p>
        </div>
      </div>
    </div>
  );
}
