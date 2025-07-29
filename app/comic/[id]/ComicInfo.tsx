'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ComicInfoProps {
  comicId: string;
}

export default function ComicInfo({ comicId }: ComicInfoProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const comicData: any = {
    '1': {
      title: 'Phù Sinh Như Mộng',
      author: 'Tác giả A',
      status: 'Đang cập nhật',
      genre: ['Cổ Phong', 'Kỳ Huyễn', 'Lãng Mạn'],
      rating: 4.8,
      views: '2.5M',
      followers: '1.2M',
      description: 'Trong thế giới phù hoa như mộng, nàng là một thiếu nữ bình thường nhưng lại mang trong mình sức mạnh kỳ bí. Khi số phận đưa đẩy nàng gặp gỡ hoàng tử lạnh lùng, một cuộc tình vượt thời gian bắt đầu. Giữa những âm mưu cung đình và thế lực hắc ám, liệu tình yêu của họ có thể vượt qua mọi thử thách?',
      image: 'https://readdy.ai/api/search-image?query=ancient%20chinese%20fantasy%20manga%20cover%20with%20beautiful%20princess%2C%20mystical%20palace%20background%2C%20traditional%20clothing%2C%20romantic%20atmosphere%2C%20golden%20and%20pink%20colors%20with%20ornate%20decorations%20and%20simple%20background&width=300&height=400&seq=comic1_detail&orientation=portrait',
      chapters: 156,
      lastUpdate: '2 giờ trước'
    },
    '2': {
      title: 'Kiếm Thần Truyền Thuyết',
      author: 'Tác giả B',
      status: 'Đang cập nhật',
      genre: ['Huyền Huyễn', 'Hành Động', 'Phiêu Lưu'],
      rating: 4.6,
      views: '1.8M',
      followers: '950K',
      description: 'Trong thế giới võ hiệp huyền bí, một thanh niên bình thường tình cờ tìm được thanh kiếm huyền thoại. Từ đây, hành trình trở thành kiếm thần bắt đầu. Với sức mạnh của thanh kiếm và ý chí kiên cường, anh sẽ đối mặt với những thử thách khốc liệt nhất.',
      image: 'https://readdy.ai/api/search-image?query=legendary%20sword%20master%20manga%20cover%20with%20epic%20warrior%2C%20magical%20sword%2C%20fantasy%20battlefield%2C%20dynamic%20action%20scene%2C%20blue%20and%20silver%20colors%20with%20mystical%20effects%20and%20simple%20background&width=300&height=400&seq=comic2_detail&orientation=portrait',
      chapters: 234,
      lastUpdate: '1 ngày trước'
    }
  };

  const comic = comicData[comicId] || comicData['1'];

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-orange-500">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span>Chi tiết truyện</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src={comic.image}
              alt={comic.title}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{comic.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-6">
                <div className="flex text-yellow-500 mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-5 h-5 flex items-center justify-center">
                      <i className={star <= Math.floor(comic.rating) ? "ri-star-fill" : "ri-star-line"}></i>
                    </div>
                  ))}
                </div>
                <span className="text-lg font-semibold">{comic.rating}</span>
                <span className="text-gray-500 ml-1">/5</span>
              </div>
              <span className="text-sm text-gray-500">{comic.views} lượt xem</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <span className="text-gray-600">Tác giả:</span>
                <span className="ml-2 font-medium">{comic.author}</span>
              </div>
              <div>
                <span className="text-gray-600">Trạng thái:</span>
                <span className="ml-2 text-green-600 font-medium">{comic.status}</span>
              </div>
              <div>
                <span className="text-gray-600">Số chương:</span>
                <span className="ml-2 font-medium">{comic.chapters}</span>
              </div>
              <div>
                <span className="text-gray-600">Cập nhật:</span>
                <span className="ml-2 font-medium">{comic.lastUpdate}</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-gray-600 text-sm">Thể loại:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {comic.genre.map((g: string, index: number) => (
                  <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Tóm tắt nội dung</h3>
              <p className="text-gray-700 leading-relaxed">{comic.description}</p>
            </div>

            <div className="flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition whitespace-nowrap cursor-pointer">
                Đọc từ đầu
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition whitespace-nowrap cursor-pointer">
                Đọc chương mới nhất
              </button>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`px-4 py-3 rounded-lg border transition whitespace-nowrap cursor-pointer ${
                  isFavorite ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:border-red-500'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={isFavorite ? "ri-heart-fill" : "ri-heart-line"}></i>
                </div>
              </button>
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-4 py-3 rounded-lg border transition whitespace-nowrap cursor-pointer ${
                  isFollowing ? 'bg-green-500 text-white border-green-500' : 'border-gray-300 text-gray-700 hover:border-green-500'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={isFollowing ? "ri-bookmark-fill" : "ri-bookmark-line"}></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}