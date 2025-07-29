
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const recommendedComics = [
    {
      id: '1',
      title: "Phù Sinh Như Mộng",
      author: "Tác giả A",
      image: "https://readdy.ai/api/search-image?query=ancient%20chinese%20fantasy%20manga%20cover%2C%20beautiful%20traditional%20art%2C%20mystical%20atmosphere%2C%20elegant%20characters%20with%20ornate%20clothing%2C%20golden%20and%20blue%20color%20scheme%20with%20simple%20background&width=150&height=180&seq=rec1&orientation=portrait",
      rating: 4.8,
      chapter: "Cập nhật đến tập 23",
      genre: "Cổ Phong/Kỳ Huyễn",
      tag: "Nhân Khí"
    },
    {
      id: '2',
      title: "Kiếm Thần Truyền Thuyết",
      author: "Tác giả B",
      image: "https://readdy.ai/api/search-image?query=sword%20master%20fantasy%20manga%20cover%2C%20legendary%20warrior%2C%20mystical%20sword%2C%20epic%20battle%20scene%2C%20vibrant%20colors%20with%20simple%20background&width=150&height=180&seq=rec2&orientation=portrait",
      rating: 4.6,
      chapter: "Cập nhật đến tập 45",
      genre: "Huyền Huyễn/Hành Động",
      tag: "Hot"
    },
    {
      id: '3',
      title: "Thiên Sứ Băng Giá",
      author: "Tác giả C",
      image: "https://readdy.ai/api/search-image?query=ice%20angel%20manga%20cover%2C%20beautiful%20ethereal%20character%2C%20winter%20fantasy%20theme%2C%20crystal%20ice%20effects%2C%20blue%20and%20white%20color%20palette%20with%20simple%20background&width=150&height=180&seq=rec3&orientation=portrait",
      rating: 4.7,
      chapter: "Cập nhật đến tập 18",
      genre: "Lãng Mạn/Phép Thuật",
      tag: "Mới"
    },
    {
      id: '4',
      title: "Hoàng Tử Bóng Đêm",
      author: "Tác giả D",
      image: "https://readdy.ai/api/search-image?query=dark%20prince%20manga%20cover%2C%20mysterious%20vampire%20character%2C%20gothic%20atmosphere%2C%20night%20scene%2C%20dark%20romantic%20style%20with%20simple%20background&width=150&height=180&seq=rec4&orientation=portrait",
      rating: 4.5,
      chapter: "Cập nhật đến tập 67",
      genre: "Siêu Nhiên/Romance",
      tag: "Nhân Khí"
    },
    {
      id: '5',
      title: "Ma Pháp Học Viện",
      author: "Tác giả E",
      image: "https://readdy.ai/api/search-image?query=magic%20academy%20manga%20cover%2C%20young%20wizard%20students%2C%20magical%20school%20setting%2C%20spell%20casting%20scene%2C%20colorful%20magic%20effects%20with%20simple%20background&width=150&height=180&seq=rec5&orientation=portrait",
      rating: 4.4,
      chapter: "Cập nhật đến tập 89",
      genre: "Học Đường/Phép Thuật",
      tag: "Hot"
    },
    {
      id: '6',
      title: "Rồng Thiêng Cửu Thiên",
      author: "Tác giả F",
      image: "https://readdy.ai/api/search-image?query=nine%20heavens%20dragon%20manga%20cover%2C%20majestic%20dragon%2C%20ancient%20chinese%20mythology%2C%20golden%20clouds%2C%20epic%20fantasy%20scene%20with%20simple%20background&width=150&height=180&seq=rec6&orientation=portrait",
      rating: 4.9,
      chapter: "Cập nhật đến tập 156",
      genre: "Tu Tiên/Huyền Huyễn",
      tag: "Nhân Khí"
    }
  ];

  const completedAnime = [
    {
      id: '7',
      title: "Ma Pháp Chiến Ký",
      author: "Studio Madhouse",
      image: "https://readdy.ai/api/search-image?query=completed%20magic%20battle%20anime%20cover%2C%20epic%20fantasy%20war%2C%20magical%20warriors%2C%20finished%20series%2C%20detailed%20anime%20art%20style%20with%20ornate%20decorations%20and%20simple%20background&width=150&height=200&seq=comp1&orientation=portrait",
      rating: 4.8,
      chapter: "Hoàn thành - 24 tập",
      genre: "Ma Pháp/Hành Động",
      status: "Hoàn thành",
      year: "2023"
    },
    {
      id: '8',
      title: "Huyền Thoại Rồng Thiêng",
      author: "Pierrot Studio",
      image: "https://readdy.ai/api/search-image?query=completed%20dragon%20legend%20anime%20cover%2C%20majestic%20dragon%2C%20ancient%20mythology%2C%20finished%20series%2C%20epic%20fantasy%20art%20with%20golden%20effects%20and%20simple%20background&width=150&height=200&seq=comp2&orientation=portrait",
      rating: 4.9,
      chapter: "Hoàn thành - 36 tập",
      genre: "Huyền Huyễn/Phiêu Lưu",
      status: "Hoàn thành",
      year: "2022"
    },
    {
      id: '9',
      title: "Thiên Thần Số Phận",
      author: "Studio Bones",
      image: "https://readdy.ai/api/search-image?query=completed%20angel%20destiny%20anime%20cover%2C%20beautiful%20ethereal%20angel%20character%2C%20divine%20powers%2C%20finished%20series%2C%20celestial%20theme%20with%20wings%20and%20halos%2C%20simple%20background&width=150&height=200&seq=comp3&orientation=portrait",
      rating: 4.7,
      chapter: "Hoàn thành - 12 tập",
      genre: "Siêu Nhiên/Drama",
      status: "Hoàn thành",
      year: "2023"
    },
    {
      id: '10',
      title: "Kiếm Sĩ Cuối Cùng",
      author: "Wit Studio",
      image: "https://readdy.ai/api/search-image?query=completed%20last%20samurai%20anime%20cover%2C%20lone%20warrior%2C%20final%20battle%2C%20finished%20series%2C%20dramatic%20sword%20fighting%20scene%20with%20traditional%20japanese%20art%20style%20and%20simple%20background&width=150&height=200&seq=comp4&orientation=portrait",
      rating: 4.6,
      chapter: "Hoàn thành - 26 tập",
      genre: "Lịch Sử/Hành Động",
      status: "Hoàn thành",
      year: "2022"
    },
    {
      id: '11',
      title: "Nữ Hoàng Băng Giá",
      author: "Studio Trigger",
      image: "https://readdy.ai/api/search-image?query=completed%20ice%20queen%20anime%20cover%2C%20majestic%20ice%20princess%2C%20winter%20palace%2C%20finished%20series%2C%20beautiful%20frozen%20kingdom%20with%20crystal%20effects%20and%20simple%20background&width=150&height=200&seq=comp5&orientation=portrait",
      rating: 4.5,
      chapter: "Hoàn thành - 20 tập",
      genre: "Phép Thuật/Romance",
      status: "Hoàn thành",
      year: "2023"
    }
  ];

  const shounenManga = [
    {
      id: '12',
      title: "Vua Hải Tặc",
      author: "Oda Eiichiro",
      image: "https://readdy.ai/api/search-image?query=one%20piece%20manga%20style%2C%20pirate%20adventure%2C%20straw%20hat%20crew%2C%20epic%20sea%20battle%2C%20colorful%20characters%20with%20treasure%20map%20background%2C%20shounen%20manga%20art%20style%20with%20simple%20background&width=150&height=200&seq=sho1&orientation=portrait",
      rating: 4.9,
      chapter: "Chương 1050",
      genre: "Phiêu Lưu/Hành Động",
      status: "Đang cập nhật"
    },
    {
      id: '13',
      title: "Naruto",
      author: "Masashi Kishimoto",
      image: "https://readdy.ai/api/search-image?query=naruto%20manga%20style%2C%20ninja%20warrior%2C%20hidden%20leaf%20village%2C%20action%20scene%2C%20orange%20and%20blue%20colors%2C%20shounen%20adventure%20with%20simple%20background&width=150&height=200&seq=sho2&orientation=portrait",
      rating: 4.8,
      chapter: "Chương 700",
      genre: "Ninja/Hành Động",
      status: "Hoàn thành"
    },
    {
      id: '14',
      title: "Dragon Ball",
      author: "Akira Toriyama",
      image: "https://readdy.ai/api/search-image?query=dragon%20ball%20manga%20style%2C%20super%20saiyan%20warrior%2C%20energy%20blast%2C%20epic%20battle%2C%20classic%20shounen%20art%20with%20simple%20background&width=150&height=200&seq=sho3&orientation=portrait",
      rating: 4.7,
      chapter: "Chương 519",
      genre: "Siêu Năng Lực/Hành Động",
      status: "Hoàn thành"
    },
    {
      id: '15',
      title: "Bleach",
      author: "Tite Kubo",
      image: "https://readdy.ai/api/search-image?query=bleach%20manga%20style%2C%20soul%20reaper%2C%20sword%20fighting%2C%20supernatural%20battle%2C%20black%20and%20white%20aesthetic%20with%20simple%20background&width=150&height=200&seq=sho4&orientation=portrait",
      rating: 4.6,
      chapter: "Chương 686",
      genre: "Siêu Nhiên/Hành Động",
      status: "Hoàn thành"
    }
  ];

  const shoujoManga = [
    {
      id: '16',
      title: "Thủy Thủ Mặt Trăng",
      author: "Naoko Takeuchi",
      image: "https://readdy.ai/api/search-image?query=sailor%20moon%20manga%20style%2C%20magical%20girl%2C%20moon%20princess%2C%20beautiful%20transformation%2C%20pink%20and%20blue%20colors%2C%20shoujo%20romance%20with%20sparkles%20and%20simple%20background&width=150&height=200&seq=shj1&orientation=portrait",
      rating: 4.8,
      chapter: "Chương 60",
      genre: "Phép Thuật/Romance",
      status: "Hoàn thành"
    },
    {
      id: '17',
      title: "Hoa Anh Đào",
      author: "CLAMP",
      image: "https://readdy.ai/api/search-image?query=cardcaptor%20sakura%20manga%20style%2C%20magical%20girl%20with%20cards%2C%20cherry%20blossom%20background%2C%20cute%20characters%2C%20shoujo%20art%20style%20with%20simple%20background&width=150&height=200&seq=shj2&orientation=portrait",
      rating: 4.7,
      chapter: "Chương 50",
      genre: "Phép Thuật/Học Đường",
      status: "Hoàn thành"
    },
    {
      id: '18',
      title: "Nana",
      author: "Ai Yazawa",
      image: "https://readdy.ai/api/search-image?query=nana%20manga%20style%2C%20two%20girls%20friendship%2C%20music%20band%2C%20emotional%20drama%2C%20fashion%20style%2C%20shoujo%20romance%20with%20simple%20background&width=150&height=200&seq=shj3&orientation=portrait",
      rating: 4.6,
      chapter: "Chương 84",
      genre: "Romance/Drama",
      status: "Tạm ngưng"
    },
    {
      id: '19',
      title: "Fruits Basket",
      author: "Ai Yazawa",
      image: "https://readdy.ai/api/search-image?query=fruits%20basket%20manga%20style%2C%20zodiac%20animals%2C%20heartwarming%20story%2C%20shoujo%20romance%2C%20cute%20characters%20with%20simple%20background&width=150&height=200&seq=shj4&orientation=portrait",
      rating: 4.9,
      chapter: "Chương 136",
      genre: "Romance/Siêu Nhiên",
      status: "Hoàn thành"
    }
  ];

  const weeklyRankings = [
    { rank: 1, title: "Đấu La Đại Lục", rating: 9.8 },
    { rank: 2, title: "Quỷ Diệt Chi Kiếm", rating: 9.7 },
    { rank: 3, title: "Vua Hải Tặc", rating: 9.6 },
    { rank: 4, title: "Nhẫn Giả Naruto", rating: 9.5 },
    { rank: 5, title: "Tấn Công Người Khổng Lồ", rating: 9.4 },
    { rank: 6, title: "Học Viện Anh Hùng", rating: 9.3 },
    { rank: 7, title: "Jujutsu Kaisen", rating: 9.2 },
    { rank: 8, title: "Tokyo Revengers", rating: 9.1 },
    { rank: 9, title: "Dragon Ball", rating: 9.0 },
    { rank: 10, title: "Spy x Family", rating: 8.9 }
  ];

  const monthlyRankings = [
    { rank: 1, title: "Thần Võ Thiên Tôn", rating: 9.9 },
    { rank: 2, title: "Đấu Phá Thương Khung", rating: 9.8 },
    { rank: 3, title: "Tối Cường Chí Tôn", rating: 9.7 },
    { rank: 4, title: "Vạn Cổ Tối Cường Tông", rating: 9.6 },
    { rank: 5, title: "Thần Y Độc Phi", rating: 9.5 },
    { rank: 6, title: "Toàn Chức Pháp Sư", rating: 9.4 },
    { rank: 7, title: "Linh Vũ Thiên Hạ", rating: 9.3 },
    { rank: 8, title: "Ngài Khủng Long", rating: 9.2 },
    { rank: 9, title: "Thôn Phệ Tinh Không", rating: 9.1 },
    { rank: 10, title: "Nhất Niệm Vĩnh Hằng", rating: 9.0 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Đề xuất hôm nay */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
              <span>Đề xuất hôm nay</span>
            </h2>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-orange-500 flex items-center"
            >
              Xem thêm
              <div className="w-4 h-4 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recommendedComics.map((comic, index) => (
              <Link key={index} href={`/comic/${comic.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer">
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={comic.image}
                    alt="Đề xuất truyện"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-0 left-0 bg-orange-500/80 text-white text-xs px-2 py-1">
                    {comic.tag}
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-bold truncate">{comic.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{comic.genre}</p>
                  <p className="text-xs text-gray-500 mt-1">{comic.chapter}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Anime đã hoàn thành */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
              <span>Anime đã hoàn thành</span>
            </h2>
            <div className="flex items-center">
              <div className="flex items-center mr-4 text-sm">
                <button className="px-3 py-1 bg-orange-500 text-white rounded-l-full whitespace-nowrap cursor-pointer">
                  Phổ biến
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-r-full whitespace-nowrap cursor-pointer">
                  Mới nhất
                </button>
              </div>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-orange-500 flex items-center cursor-pointer"
              >
                Xem thêm
                <div className="w-4 h-4 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-s-line"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {completedAnime.map((anime, index) => (
              <Link key={index} href={`/comic/${anime.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer">
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={anime.image}
                    alt="Anime đã hoàn thành"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold truncate">{anime.title}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-500">
                      <i className="ri-star-fill text-xs"></i>
                      <span className="text-xs ml-1">{anime.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400 mx-2">•</span>
                    <span className="text-xs text-gray-500">{anime.year}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{anime.genre}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                      {anime.status}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Truyện tranh thiếu niên */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
              <span>Truyện tranh thiếu niên</span>
            </h2>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-orange-500 flex items-center cursor-pointer"
            >
              Xem thêm
              <div className="w-4 h-4 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/4 lg:pr-4">
              <Link href="/comic/12" className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition h-full cursor-pointer">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=one%20piece%20manga%20main%20character%20luffy%2C%20straw%20hat%20pirate%20crew%2C%20epic%20adventure%20scene%2C%20shounen%20battle%20manga%20style%2C%20vibrant%20colors%20with%20ocean%20background%2C%20detailed%20anime%20art%20style%20with%20simple%20background&width=300&height=300&seq=shounen_main&orientation=squarish"
                    alt="Truyện thiếu niên"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                      </div>
                      <span className="text-white text-sm ml-2">4.9</span>
                    </div>
                    <h3 className="text-white text-lg font-bold">Vua Hải Tặc</h3>
                    <p className="text-white/90 text-sm mt-1">
                      Cuộc phiêu lưu tìm kiếm kho báu One Piece của Luffy và băng Mũ Rơm
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {shounenManga.map((manga, index) => (
                  <Link key={index} href={`/comic/${manga.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer">
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={manga.image}
                        alt="Truyện thiếu niên"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-bold truncate">{manga.title}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-500">
                          <i className="ri-star-fill text-xs"></i>
                          <span className="text-xs ml-1">{manga.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400 mx-2">•</span>
                        <span className="text-xs text-gray-500">{manga.status}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{manga.genre}</p>
                      <p className="text-xs text-gray-500 mt-1">{manga.chapter}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Truyện tranh thiếu nữ */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
              <span>Truyện tranh thiếu nữ</span>
            </h2>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-orange-500 flex items-center cursor-pointer"
            >
              Xem thêm
              <div className="w-4 h-4 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/4 lg:pr-4">
              <Link href="/comic/16" className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition h-full cursor-pointer">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=sailor%20moon%20manga%20main%20character%2C%20magical%20girl%20transformation%2C%20moon%20princess%2C%20beautiful%20shoujo%20art%20style%2C%20pink%20and%20blue%20colors%20with%20sparkles%20and%20moon%20background%2C%20detailed%20anime%20art%20style%20with%20simple%20background&width=300&height=300&seq=shoujo_main&orientation=squarish"
                    alt="Truyện thiếu nữ"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                      </div>
                      <span className="text-white text-sm ml-2">4.8</span>
                    </div>
                    <h3 className="text-white text-lg font-bold">Thủy Thủ Mặt Trăng</h3>
                    <p className="text-white/90 text-sm mt-1">
                      Câu chuyện về Usagi và các thủy thủ chiến sĩ bảo vệ Trái Đất
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {shoujoManga.map((manga, index) => (
                  <Link key={index} href={`/comic/${manga.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer">
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={manga.image}
                        alt="Truyện thiếu nữ"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-bold truncate">{manga.title}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-500">
                          <i className="ri-star-fill text-xs"></i>
                          <span className="text-xs ml-1">{manga.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400 mx-2">•</span>
                        <span className="text-xs text-gray-500">{manga.status}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{manga.genre}</p>
                      <p className="text-xs text-gray-500 mt-1">{manga.chapter}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bảng xếp hạng */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
                <span>Xếp hạng tuần</span>
              </h2>
              <div className="space-y-3">
                {[
                  { rank: 1, title: "Đấu La Đại Lục", rating: 9.8 },
                  { rank: 2, title: "Quỷ Diệt Chi Kiếm", rating: 9.7 },
                  { rank: 3, title: "Vua Hải Tặc", rating: 9.6 },
                  { rank: 4, title: "Nhẫn Giả Naruto", rating: 9.5 },
                  { rank: 5, title: "Tấn Công Người Khổng Lồ", rating: 9.4 },
                  { rank: 6, title: "Học Viện Anh Hùng", rating: 9.3 },
                  { rank: 7, title: "Jujutsu Kaisen", rating: 9.2 },
                  { rank: 8, title: "Tokyo Revengers", rating: 9.1 },
                  { rank: 9, title: "Dragon Ball", rating: 9.0 },
                  { rank: 10, title: "Spy x Family", rating: 8.9 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
                    <div className={`w-6 h-6 ${item.rank <= 3 ? 'bg-orange-500' : 'bg-gray-400'} text-white rounded-full flex items-center justify-center text-xs mr-3`}>
                      {item.rank}
                    </div>
                    <div className="flex-1 flex items-center">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-gray-500 ml-auto">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-1 h-5 bg-blue-500 mr-2 rounded-sm"></span>
                <span>Xếp hàng tháng</span>
              </h2>
              <div className="space-y-3">
                {[
                  { rank: 1, title: "Thần Võ Thiên Tôn", rating: 9.9 },
                  { rank: 2, title: "Đấu Phá Thương Khung", rating: 9.8 },
                  { rank: 3, title: "Tối Cường Chí Tôn", rating: 9.7 },
                  { rank: 4, title: "Vạn Cổ Tối Cường Tông", rating: 9.6 },
                  { rank: 5, title: "Thần Y Độc Phi", rating: 9.5 },
                  { rank: 6, title: "Toàn Chức Pháp Sư", rating: 9.4 },
                  { rank: 7, title: "Linh Vũ Thiên Hạ", rating: 9.3 },
                  { rank: 8, title: "Ngài Khủng Long", rating: 9.2 },
                  { rank: 9, title: "Thôn Phệ Tinh Không", rating: 9.1 },
                  { rank: 10, title: "Nhất Niệm Vĩnh Hằng", rating: 9.0 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
                    <div className={`w-6 h-6 ${item.rank <= 3 ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded-full flex items-center justify-center text-xs mr-3`}>
                      {item.rank}
                    </div>
                    <div className="flex-1 flex items-center">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-gray-500 ml-auto">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
