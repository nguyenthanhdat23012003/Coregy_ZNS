"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Tag,
  FileText,
  Send,
  BarChart,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/", icon: <Home size={18} /> },
    { name: "Quản lý Học viên", href: "/students", icon: <Users size={18} /> },
    { name: "Quản lý Tag", href: "/tags", icon: <Tag size={18} /> },
    {
      name: "Quản lý Template",
      href: "/templates",
      icon: <FileText size={18} />,
    },
    {
      name: "Quản lý Nhóm KH",
      href: "/customer-groups",
      icon: <Users size={18} />,
    },
    {
      name: "Quản lý Chiến Dịch",
      href: "/campaigns",
      icon: <Send size={18} />,
    },
    {
      name: "Thống kê & Báo cáo",
      href: "/reports",
      icon: <BarChart size={18} />,
    },
    { name: "Cài đặt", href: "/settings", icon: <Settings size={18} /> }, // 🔥 Thêm mục Cài đặt
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-center">ZNS Admin</h2>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={`mb-2 ${
                pathname === item.href ? "bg-gray-700 rounded" : ""
              }`}
            >
              <Link
                href={item.href}
                className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="mt-auto flex items-center gap-2 p-2 text-red-500 hover:bg-red-700 rounded">
        <LogOut size={18} />
        Đăng xuất
      </button>
    </aside>
  );
};

export default Sidebar;
