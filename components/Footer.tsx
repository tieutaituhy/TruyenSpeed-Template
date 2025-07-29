
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pacifico">logo</h3>
            <p className="text-gray-400 text-sm">
              Đọc truyện tranh online miễn phí, cập nhật liên tục những bộ truyện mới nhất và hay nhất.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Danh Mục</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white">Trang Chủ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Truyện Mới</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Xếp Hạng</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Thể Loại</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Tác Giả</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white">Hướng Dẫn</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Câu Hỏi Thường Gặp</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Liên Hệ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Điều Khoản</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Chính Sách</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Theo Dõi</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">y</span>
                </div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Comic Reader. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
