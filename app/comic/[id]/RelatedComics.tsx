'use client';

import Link from 'next/link';

interface RelatedComicsProps {
  comicId: string;
}

export default function RelatedComics({ comicId }: RelatedComicsProps) {
  const relatedComics = [
    {
      id: '2',
      title: 'Kiếm Thần Truyền Thuyết',
      author: 'Tác giả B',
      image: 'https://readdy.ai/api/search-image?query=legendary%20sword%20master%20manga%20cover%2C%20mystical%20warrior%20with%20ancient%20sword%2C%20fantasy%20theme%2C%20action%20scene%20with%20blue%20and%20silver%20colors%20and%20simple%20background&width=120&height=150&seq=related1&orientation=portrait',
      rating: 4.6,
      chapter: 'Chương 234',
      genre: 'Huyền Huyễn'
    },
    {
      id: '3',
      title: 'Thiên Sứ Băng Giá',
      author: 'Tác giả C',
      image: 'https://readdy.ai/api/search-image?query=ice%20angel%20manga%20cover%2C%20beautiful%20ethereal%20character%2C%20winter%20fantasy%20theme%2C%20crystal%20effects%20with%20blue%20and%20white%20colors%20and%20simple%20background&width=120&height=150&seq=related2&orientation=portrait',
      rating: 4.7,
      chapter: 'Chương 118',
      genre: 'Lãng Mạn'
    },
    {
      id: '4',
      title: 'Hoàng Tử Bóng Đêm',
      author: 'Tác giả D',
      image: 'https://readdy.ai/api/search-image?query=dark%20prince%20manga%20cover%2C%20mysterious%20vampire%20character%2C%20gothic%20atmosphere%2C%20night%20scene%20with%20dark%20romantic%20style%20and%20simple%20background&width=120&height=150&seq=related3&orientation=portrait',
      rating: 4.5,
      chapter: 'Chương 167',
      genre: 'Siêu Nhiên'
    },
    {
      id: '5',
      title: 'Ma Pháp Học Viện',
      author: 'Tác giả E',
      image: 'https://readdy.ai/api/search-image?query=magic%20academy%20manga%20cover%2C%20young%20wizard%20students%2C%20magical%20school%20setting%2C%20colorful%20magic%20effects%20with%20educational%20theme%20and%20simple%20background&width=120&height=150&seq=related4&orientation=portrait',
      rating: 4.4,
      chapter: 'Chương 189',
      genre: 'Học Đường'
    },
    {
      id: '6',
      title: 'Rồng Thiêng Cửu Thiên',
      author: 'Tác giả F',
      image: 'https://readdy.ai/api/search-image?query=nine%20heavens%20dragon%20manga%20cover%2C%20majestic%20dragon%2C%20ancient%20chinese%20mythology%2C%20golden%20clouds%2C%20epic%20fantasy%20scene%20with%20traditional%20elements%20and%20simple%20background&width=120&height=150&seq=related5&orientation=portrait',
      rating: 4.9,
      chapter: 'Chương 256',
      genre: 'Tu Tiên'
    }
  ];

  const popularComics = [
    { title: 'Đấu La Đại Lục', rating: 9.8, trend: 'up' },
    { title: 'Quỷ Diệt Chi Kiếm', rating: 9.7, trend: 'up' },
    { title: 'Vua Hải Tặc', rating: 9.6, trend: 'same' },
    { title: 'Naruto', rating: 9.5, trend: 'down' },
    { title: 'Dragon Ball', rating: 9.4, trend: 'up' },
    { title: 'Bleach', rating: 9.3, trend: 'up' },
    { title: 'Attack on Titan', rating: 9.2, trend: 'same' },
    { title: 'One Punch Man', rating: 9.1, trend: 'down' }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return 'ri-arrow-up-s-line text-green-500';
      case 'down': return 'ri-arrow-down-s-line text-red-500';
      default: return 'ri-subtract-line text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Truyện cùng thể loại */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <span className="w-1 h-4 bg-orange-500 mr-2 rounded-sm"></span>
          Truyện cùng thể loại
        </h3>
        <div className="space-y-4">
          {relatedComics.map((comic) => (
            <Link
              key={comic.id}
              href={`/comic/${comic.id}`}
              className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <img
                src={comic.image}
                alt={comic.title}
                className="w-16 h-20 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate text-gray-900 hover:text-orange-600">
                  {comic.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{comic.author}</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-yellow-500">
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className="ri-star-fill text-xs"></i>
                    </div>
                    <span className="text-xs ml-1">{comic.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400 mx-1">•</span>
                  <span className="text-xs text-gray-500">{comic.genre}</span>
                </div>
                <p className="text-xs text-orange-600 mt-1">{comic.chapter}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bảng xếp hạng phổ biến */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <span className="w-1 h-4 bg-blue-500 mr-2 rounded-sm"></span>
          Bảng xếp hạng
        </h3>
        <div className="space-y-3">
          {popularComics.map((comic, index) => (
            <div key={index} className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
              <div className={`w-5 h-5 ${index < 3 ? 'bg-orange-500' : 'bg-gray-400'} text-white rounded-full flex items-center justify-center text-xs mr-3`}>
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium truncate">{comic.title}</span>
                  <div className="flex items-center ml-2">
                    <div className={`w-3 h-3 flex items-center justify-center ${getTrendIcon(comic.trend)}`}>
                      <i className={getTrendIcon(comic.trend)}></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">{comic.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner quảng cáo */}
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-6 text-white text-center">
        <h4 className="font-bold mb-2">Ứng dụng di động</h4>
        <p className="text-sm mb-4">Đọc truyện mọi lúc, mọi nơi với ứng dụng di động</p>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          Tải ngay
        </button>
      </div>
    </div>
  );
}