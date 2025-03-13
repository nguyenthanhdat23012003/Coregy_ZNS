"use client";
import { UserCircle } from "lucide-react";

const Header = () => {
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
