export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">
        Đang trong quá trình phát triển
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Vui lòng quay lại sau khi ứng dụng hoàn thiện.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
      >
        Quay lại trang chủ
      </a>
    </div>
  );
}
