
'use client';

import { Search, User, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold font-pacifico">
              logo
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="hover:text-orange-200 transition-colors">Trang Chủ</Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">Truyện Mới</Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">Xếp Hạng</Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">Thể Loại</Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">Tác Giả</Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">Yêu Thích</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm truyện, tác giả..."
                className="bg-white text-gray-900 px-4 py-2 pr-10 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-sm hidden md:block">Tài Khoản</span>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
