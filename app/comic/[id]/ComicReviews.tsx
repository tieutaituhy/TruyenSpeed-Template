'use client';

import { useState } from 'react';

interface ComicReviewsProps {
  comicId: string;
}

export default function ComicReviews({ comicId }: ComicReviewsProps) {
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  const reviews = [
    {
      id: 1,
      user: 'Nguyễn Minh Anh',
      avatar: 'https://readdy.ai/api/search-image?query=anime%20style%20avatar%2C%20young%20girl%20with%20brown%20hair%2C%20friendly%20smile%2C%20simple%20background&width=40&height=40&seq=avatar1&orientation=squarish',
      rating: 5,
      date: '2 ngày trước',
      content: 'Truyện hay quá! Nội dung hấp dẫn, tranh vẽ đẹp. Mong tác giả ra chương mới sớm hơn.',
      likes: 24,
      isLiked: false
    },
    {
      id: 2,
      user: 'Trần Hoàng Long',
      avatar: 'https://readdy.ai/api/search-image?query=anime%20style%20avatar%2C%20young%20boy%20with%20black%20hair%2C%20confident%20expression%2C%20simple%20background&width=40&height=40&seq=avatar2&orientation=squarish',
      rating: 4,
      date: '1 tuần trước',
      content: 'Cốt truyện thú vị, nhân vật được xây dựng khá tốt. Tuy nhiên cảm giác tiết tấu hơi chậm ở một số chương.',
      likes: 18,
      isLiked: true
    },
    {
      id: 3,
      user: 'Lê Thị Hoa',
      avatar: 'https://readdy.ai/api/search-image?query=anime%20style%20avatar%2C%20girl%20with%20long%20hair%2C%20gentle%20smile%2C%20simple%20background&width=40&height=40&seq=avatar3&orientation=squarish',
      rating: 5,
      date: '2 tuần trước',
      content: 'Đã theo dõi từ chương đầu đến giờ. Cảm ơn tác giả đã tạo ra một tác phẩm tuyệt vời như vậy!',
      likes: 31,
      isLiked: false
    }
  ];

  const handleSubmitReview = () => {
    if (newReview.trim()) {
      console.log('Gửi đánh giá:', { rating: newRating, content: newReview });
      setNewReview('');
      setNewRating(5);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <span className="w-1 h-5 bg-orange-500 mr-2 rounded-sm"></span>
        Đánh giá và bình luận
      </h2>

      {/* Form đánh giá mới */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-3">Viết đánh giá của bạn</h3>
        <div className="mb-4">
          <span className="text-sm text-gray-600 mr-3">Đánh giá:</span>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setNewRating(star)}
                className="w-6 h-6 flex items-center justify-center text-yellow-500 hover:text-yellow-600 cursor-pointer"
              >
                <i className={star <= newRating ? "ri-star-fill" : "ri-star-line"}></i>
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-600">({newRating}/5)</span>
          </div>
        </div>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Chia sẻ cảm nghĩ của bạn về bộ truyện này..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          maxLength={500}
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-gray-500">{newReview.length}/500 ký tự</span>
          <button
            onClick={handleSubmitReview}
            disabled={!newReview.trim()}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
          >
            Gửi đánh giá
          </button>
        </div>
      </div>

      {/* Danh sách đánh giá */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.user}</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-500 mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="w-4 h-4 flex items-center justify-center">
                            <i className={star <= review.rating ? "ri-star-fill text-xs" : "ri-star-line text-xs"}></i>
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{review.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center text-gray-500 hover:text-orange-500 text-sm cursor-pointer">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className={review.isLiked ? "ri-thumb-up-fill" : "ri-thumb-up-line"}></i>
                    </div>
                    <span>{review.likes}</span>
                  </button>
                  <button className="text-gray-500 hover:text-orange-500 text-sm cursor-pointer">
                    Trả lời
                  </button>
                  <button className="text-gray-500 hover:text-red-500 text-sm cursor-pointer">
                    Báo cáo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer">
          Xem thêm bình luận
        </button>
      </div>
    </div>
  );
}