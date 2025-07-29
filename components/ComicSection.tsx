
'use client';

interface Comic {
  title: string;
  author: string;
  image: string;
  rating: number;
  chapter: string;
  genre: string;
}

interface ComicSectionProps {
  title: string;
  comics: Comic[];
  showMore?: boolean;
}

export default function ComicSection({ title, comics, showMore = false }: ComicSectionProps) {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 bg-orange-500 text-white px-4 py-2 rounded-lg">
            {title}
          </h2>
          {showMore && (
            <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
              Xem thêm →
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {comics.map((comic, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={comic.image}
                  alt={comic.title}
                  className="w-full h-32 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1 right-1">
                  <div className="bg-orange-500 text-white px-1 py-0.5 rounded text-xs font-bold">
                    ★{comic.rating}
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <h3 className="font-medium text-xs text-gray-800 truncate">{comic.title}</h3>
                <p className="text-xs text-gray-600 truncate">{comic.author}</p>
                <p className="text-xs text-orange-500">{comic.chapter}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
