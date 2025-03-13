"use client";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface Student {
  phone: string;
  customer_name: string;
  order_code: string;
  order_date: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  // Load danh sách học viên từ localStorage khi trang mở
  useEffect(() => {
    const storedData = localStorage.getItem("students");
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
  }, []);

  // Xử lý file Excel
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet);

      // Lưu dữ liệu vào localStorage
      localStorage.setItem("students", JSON.stringify(jsonData));
      setStudents(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý Học viên</h1>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="border px-4 py-2 rounded-md cursor-pointer text-gray-900"
        />
      </div>

      {/* Hiển thị danh sách học viên */}
      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Danh sách học viên
        </h2>

        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-400 p-3">Số điện thoại</th>
              <th className="border border-gray-400 p-3">Họ và tên</th>
              <th className="border border-gray-400 p-3">Mã đơn hàng</th>
              <th className="border border-gray-400 p-3">Ngày đặt hàng</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100 text-gray-900">
                  <td className="border border-gray-300 p-3">
                    {student.phone}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {student.customer_name}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {student.order_code}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {student.order_date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-700 p-4 font-medium"
                >
                  Chưa có dữ liệu học viên.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
