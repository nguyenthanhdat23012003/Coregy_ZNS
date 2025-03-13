"use client";
import { usePathname } from "next/navigation";
import { UserCircle } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const titleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/students": "Quản lý Học viên",
    "/tags": "Quản lý Tag",
    "/templates": "Quản lý Template",
    "/customer-groups": "Quản lý Nhóm KH",
    "/campaigns": "Quản lý Chiến Dịch",
    "/reports": "Thống kê & Báo cáo",
    "/settings": "Cài đặt",
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">{""}</h1>
      <div className="flex items-center gap-3">
        <UserCircle size={24} className="text-gray-600" />
        <span className="text-gray-700">Admin</span>
      </div>
    </header>
  );
};

export default Header;
