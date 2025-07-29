
'use client';

export default function GenreSection() {
  const genres = [
    { name: "Hành Động", count: 1234, color: "bg-red-500" },
    { name: "Lãng Mạn", count: 987, color: "bg-pink-500" },
    { name: "Hài Hước", count: 756, color: "bg-yellow-500" },
    { name: "Kinh Dị", count: 543, color: "bg-gray-700" },
    { name: "Huyền Huyễn", count: 432, color: "bg-purple-500" },
    { name: "Học Đường", count: 321, color: "bg-blue-500" },
    { name: "Thể Thao", count: 210, color: "bg-green-500" },
    { name: "Trinh Thám", count: 189, color: "bg-indigo-500" },
    { name: "Phiêu Lưu", count: 167, color: "bg-orange-500" },
    { name: "Khoa Học", count: 143, color: "bg-cyan-500" }
  ];

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">
          Thể Loại
        </h2>
        
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {genres.map((genre, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`${genre.color} text-white rounded-lg p-3 text-center hover:opacity-90 transition-opacity shadow-md`}>
                <div className="text-lg font-bold mb-1">{genre.count}</div>
                <div className="text-xs font-medium">{genre.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
