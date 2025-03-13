"use client";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [accessToken, setAccessToken] = useState("");

  // Load Access Token từ localStorage khi trang mở
  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token") || "");
  }, []);

  // Lưu Access Token vào localStorage
  const handleSave = () => {
    localStorage.setItem("access_token", accessToken);
    alert("Access Token đã được lưu!");
  };

  return (
    <div className="p-6">
      {/* Header với Button Save ở góc phải */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cài đặt hệ thống</h1>
        <button
          className="px-5 py-2 rounded-lg text-white font-semibold bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          onClick={handleSave}
        >
          Lưu cấu hình
        </button>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Thiết lập API
        </h2>

        <div className="mb-6 flex flex-row items-center flex-wrap gap-4">
          <label className="block text-gray-700 font-medium">
            Access Token
          </label>
          <input
            type="text"
            className="mx-6 w-max p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            placeholder="Nhập Access Token..."
          />
        </div>
      </div>
    </div>
  );
}
