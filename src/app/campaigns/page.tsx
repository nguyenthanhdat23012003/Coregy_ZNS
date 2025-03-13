"use client";
import { useState, useEffect } from "react";

export default function CampaignsPage() {
  interface Student {
    phone: string;
    customer_name: string;
    order_code: string;
    order_date: string;
  }

  const [students, setStudents] = useState<Student[]>([]);
  const [templateId, setTemplateId] = useState("");
  const [sending, setSending] = useState(false);

  // Load danh sách học viên từ localStorage khi trang mở
  useEffect(() => {
    const storedData = localStorage.getItem("students");
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
  }, []);

  // Gửi API ZNS
  const sendZNS = async (student: Student) => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      alert("Không tìm thấy Access Token!");
      return;
    }
    if (!templateId) {
      alert("Vui lòng nhập Template ID trước khi gửi!");
      return;
    }

    const payload = {
      phone: student.phone,
      template_id: templateId,
      template_data: {
        customer_name: student.customer_name,
        order_code: student.order_code,
        order_date: student.order_date,
      },
      tracking_id: student.order_code,
    };

    setSending(true);
    try {
      const response = await fetch(
        "https://business.openapi.zalo.me/message/template",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            access_token: accessToken,
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      if (result.error === 0) {
        alert(`Gửi ZNS thành công cho ${student.customer_name}`);
      } else {
        alert(`Lỗi gửi ZNS: ${result.message}`);
      }
    } catch (error) {
      alert("Lỗi khi gửi yêu cầu đến Zalo API!");
      console.error(error);
    }
    setSending(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Quản lý Chiến Dịch
      </h1>

      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Danh sách học viên
        </h2>

        {/* Ô nhập Template ID */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nhập Template ID
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
            placeholder="Nhập Template ID..."
          />
        </div>

        <table className="w-full border-collapse border border-gray-400 mt-4">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-400 p-3">Số điện thoại</th>
              <th className="border border-gray-400 p-3">Họ và tên</th>
              <th className="border border-gray-400 p-3">Mã đơn hàng</th>
              <th className="border border-gray-400 p-3">Ngày đặt hàng</th>
              <th className="border border-gray-400 p-3">Hành động</th>
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
                  <td className="border border-gray-300 p-3">
                    <button
                      onClick={() => sendZNS(student)}
                      className={`px-4 py-2 rounded-md text-white font-semibold ${
                        sending
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-gray-600 hover:bg-gray-700"
                      } transition`}
                      disabled={sending}
                    >
                      {sending ? "Đang gửi..." : "Gửi ZNS"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
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
