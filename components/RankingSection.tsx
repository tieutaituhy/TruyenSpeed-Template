
'use client';

export default function RankingSection() {
  const weeklyRankings = [
    { rank: 1, title: "Thanh Gươm Diệt Quỷ", author: "Gotoge Koyoharu", views: "1.2M", trend: "up" },
    { rank: 2, title: "Vua Hải Tặc", author: "Oda Eiichiro", views: "1.1M", trend: "up" },
    { rank: 3, title: "Tấn Công Người Khổng Lồ", author: "Hajime Isayama", views: "980K", trend: "down" },
    { rank: 4, title: "Chú Thuật Hồi Chiến", author: "Gege Akutami", views: "850K", trend: "up" },
    { rank: 5, title: "Tokyo Revengers", author: "Ken Wakui", views: "720K", trend: "same" },
    { rank: 6, title: "Học Viện Siêu Anh Hùng", author: "Kohei Horikoshi", views: "650K", trend: "up" },
    { rank: 7, title: "Haikyuu!!", author: "Haruichi Furudate", views: "580K", trend: "down" },
    { rank: 8, title: "Vùng Đất Hứa", author: "Kaiu Shirai", views: "520K", trend: "up" },
    { rank: 9, title: "Spy x Family", author: "Tatsuya Endo", views: "480K", trend: "up" },
    { rank: 10, title: "Chainsaw Man", author: "Tatsuki Fujimoto", views: "420K", trend: "same" }
  ];

  const monthlyRankings = [
    { rank: 1, title: "Vua Hải Tặc", author: "Oda Eiichiro", views: "5.2M", trend: "up" },
    { rank: 2, title: "Thanh Gươm Diệt Quỷ", author: "Gotoge Koyoharu", views: "4.8M", trend: "down" },
    { rank: 3, title: "Chú Thuật Hồi Chiến", author: "Gege Akutami", views: "4.1M", trend: "up" },
    { rank: 4, title: "Tấn Công Người Khổng Lồ", author: "Hajime Isayama", views: "3.9M", trend: "down" },
    { rank: 5, title: "Học Viện Siêu Anh Hùng", author: "Kohei Horikoshi", views: "3.2M", trend: "up" },
    { rank: 6, title: "Tokyo Revengers", author: "Ken Wakui", views: "2.8M", trend: "same" },
    { rank: 7, title: "Spy x Family", author: "Tatsuya Endo", views: "2.5M", trend: "up" },
    { rank: 8, title: "Chainsaw Man", author: "Tatsuki Fujimoto", views: "2.3M", trend: "up" },
    { rank: 9, title: "Haikyuu!!", author: "Haruichi Furudate", views: "2.1M", trend: "down" },
    { rank: 10, title: "Vùng Đất Hứa", author: "Kaiu Shirai", views: "1.9M", trend: "same" }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">
              Xếp Hạng Tuần
            </h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-orange-500 text-white px-3 py-2">
                <div className="grid grid-cols-12 gap-2 items-center font-bold text-sm">
                  <div className="col-span-1">Hạng</div>
                  <div className="col-span-6">Tên Truyện</div>
                  <div className="col-span-3">Lượt Xem</div>
                  <div className="col-span-2">Xu Hướng</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {weeklyRankings.map((item, index) => (
                  <div key={index} className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                    <div className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                          item.rank <= 3 ? 'bg-orange-500' : 'bg-gray-400'
                        }`}>
                          {item.rank}
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="font-bold text-gray-800 text-sm truncate">{item.title}</div>
                        <div className="text-xs text-gray-600 truncate">{item.author}</div>
                      </div>
                      <div className="col-span-3">
                        <div className="font-bold text-gray-800 text-sm">{item.views}</div>
                      </div>
                      <div className="col-span-2">
                        <div className={`font-bold ${getTrendColor(item.trend)}`}>
                          {getTrendIcon(item.trend)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">
              Xếp Hạng Tháng
            </h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-500 text-white px-3 py-2">
                <div className="grid grid-cols-12 gap-2 items-center font-bold text-sm">
                  <div className="col-span-1">Hạng</div>
                  <div className="col-span-6">Tên Truyện</div>
                  <div className="col-span-3">Lượt Xem</div>
                  <div className="col-span-2">Xu Hướng</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {monthlyRankings.map((item, index) => (
                  <div key={index} className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                    <div className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                          item.rank <= 3 ? 'bg-blue-500' : 'bg-gray-400'
                        }`}>
                          {item.rank}
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="font-bold text-gray-800 text-sm truncate">{item.title}</div>
                        <div className="text-xs text-gray-600 truncate">{item.author}</div>
                      </div>
                      <div className="col-span-3">
                        <div className="font-bold text-gray-800 text-sm">{item.views}</div>
                      </div>
                      <div className="col-span-2">
                        <div className={`font-bold ${getTrendColor(item.trend)}`}>
                          {getTrendIcon(item.trend)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
