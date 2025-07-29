'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ChapterListProps {
  comicId: string;
}

export default function ChapterList({ comicId }: ChapterListProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 20;

  const chapters = Array.from({ length: 156 }, (_, i) => ({
    number: i + 1,
    title: `Chương ${i + 1}: ${
      i === 155 ? 'Đỉnh cao quyền lực' :
      i === 154 ? 'Trận chiến cuối cùng' :
      i === 153 ? 'Bí mật được hé lộ' :
      i === 152 ? 'Sức mạnh thức tỉnh' :
      i === 151 ? 'Cuộc đối đầu định mệnh' :
      i === 150 ? 'Lời thề kiếm sĩ' :
      i === 149 ? 'Ký ức bị lãng quên' :
      i === 148 ? 'Thử thách khắc nghiệt' :
      i === 147 ? 'Tình yêu và thù hận' :
      i === 146 ? 'Đồng minh bất ngờ' :
      i % 5 === 0 ? 'Bước ngoặt quan trọng' :
      i % 3 === 0 ? 'Cuộc chiến khốc liệt' :
      i % 2 === 0 ? 'Bí mật được tiết lộ' :
      'Hành trình mới bắt đầu'
    }`,
    date: new Date(2024, 0, 1 + Math.floor(i / 2)).toLocaleDateString('vi-VN'),
    isNew: i >= 150,
    views: Math.floor(Math.random() * 50000) + 10000
  }));

  const sortedChapters = [...chapters].sort((a, b) => 
    sortOrder === 'desc' ? b.number - a.number : a.number - b.number
  );

  const totalPages = Math.ceil(chapters.length / chaptersPerPage);
  const startIndex = (currentPage - 1) * chaptersPerPage;
  const displayedChapters = sortedChapters.slice(startIndex, startIndex + chaptersPerPage);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
          Danh sách chương
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Sắp xếp:</span>
          <div className="flex">
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-3 py-1 text-sm rounded-l-full whitespace-nowrap cursor-pointer ${
                sortOrder === 'desc' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Mới nhất
            </button>
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-3 py-1 text-sm rounded-r-full whitespace-nowrap cursor-pointer ${
                sortOrder === 'asc' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Cũ nhất
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayedChapters.map((chapter) => (
          <Link
            key={chapter.number}
            href={`/comic/${comicId}/chapter/${chapter.number}`}
            className="flex items-center justify-between p-3 bg-gray-50 hover:bg-orange-50 rounded-lg transition cursor-pointer group"
          >
            <div className="flex-1">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 group-hover:text-orange-600">
                  {chapter.title}
                </span>
                {chapter.isNew && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <span>{chapter.date}</span>
                <span className="mx-2">•</span>
                <span>{chapter.views.toLocaleString()} lượt xem</span>
              </div>
            </div>
            <div className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-orange-500">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
          >
            Trước
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
            if (page > totalPages) return null;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded cursor-pointer ${
                  currentPage === page
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            );
          })}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
          >
            Sau
          </button>
        </div>
      )}
    </div>
  );
}