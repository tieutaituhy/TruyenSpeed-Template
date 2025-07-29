
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const featuredComics = [
    {
      title: "Lời hứa bên kia những vì sao",
      description: "Cuộc phiêu lưu kỳ ảo của cô gái và bầu trời sao, tìm kiếm ký ức và sự thật đã mất",
      image: "https://readdy.ai/api/search-image?query=anime%20scene%20with%20beautiful%20blonde%20girl%20character%20with%20long%20hair%2C%20emotional%20moment%2C%20soft%20lighting%2C%20detailed%20anime%20art%20style%2C%20high%20quality%20illustration%2C%20vibrant%20colors%2C%20dramatic%20sky%20background&width=800&height=360&seq=2&orientation=landscape"
    },
    {
      title: "Truyện Nổi Bật 2", 
      description: "Hành trình trở thành anh hùng mạnh nhất",
      image: "https://readdy.ai/api/search-image?query=anime%20fantasy%20adventure%20banner%20with%20magical%20world%2C%20brave%20warriors%2C%20mystical%20creatures%2C%20epic%20battle%20scene%20with%20bright%20colors&width=800&height=360&seq=hero2&orientation=landscape"
    },
    {
      title: "Truyện Nổi Bật 3",
      description: "Tình yêu tuổi học trò ngọt ngào",
      image: "https://readdy.ai/api/search-image?query=romantic%20anime%20school%20banner%20with%20cherry%20blossoms%2C%20cute%20characters%2C%20spring%20atmosphere%2C%20soft%20pastel%20colors&width=800&height=360&seq=hero3&orientation=landscape"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3 relative overflow-hidden rounded-lg shadow-md">
            <div className="relative h-[360px]">
              <img
                src={featuredComics[0].image}
                alt="热门动漫"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">
                  {featuredComics[0].title}
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  {featuredComics[0].description}
                </p>
              </div>
              
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <button className="w-8 h-8 bg-black/30 hover:bg-black/50 rounded-r-full flex items-center justify-center text-white">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </button>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <button className="w-8 h-8 bg-black/30 hover:bg-black/50 rounded-l-full flex items-center justify-center text-white">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
              
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {featuredComics.map((_, index) => (
                  <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-gray-800 font-semibold mb-3">Truyện Đề Xuất</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=anime%20manga%20cover%20with%20cute%20characters%2C%20colorful%20illustration%2C%20simple%20background&width=60&height=80&seq=rec1&orientation=portrait"
                    alt="Truyện đề xuất"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-gray-800">Thế Giới Khác</h5>
                    <p className="text-xs text-gray-600">Chương 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=romance%20anime%20manga%20cover%20with%20school%20setting%2C%20cherry%20blossoms%2C%20soft%20colors&width=60&height=80&seq=rec2&orientation=portrait"
                    alt="Truyện đề xuất"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-gray-800">Tình Yêu Học Trò</h5>
                    <p className="text-xs text-gray-600">Chương 28</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=action%20adventure%20manga%20cover%20with%20warrior%20character%2C%20dynamic%20pose%2C%20vibrant%20colors&width=60&height=80&seq=rec3&orientation=portrait"
                    alt="Truyện đề xuất"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-gray-800">Kiếm Sĩ Huyền Thoại</h5>
                    <p className="text-xs text-gray-600">Chương 42</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=magic%20fantasy%20manga%20cover%20with%20spells%20and%20wizards%2C%20mystical%20atmosphere%2C%20bright%20colors&width=60&height=80&seq=rec4&orientation=portrait"
                    alt="Truyện đề xuất"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-gray-800">Ma Pháp Học Viện</h5>
                    <p className="text-xs text-gray-600">Chương 33</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}