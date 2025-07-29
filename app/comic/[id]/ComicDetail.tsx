'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComicInfo from './ComicInfo';
import ChapterList from './ChapterList';
import ComicReviews from './ComicReviews';
import RelatedComics from './RelatedComics';

interface ComicDetailProps {
  comicId: string;
}

export default function ComicDetail({ comicId }: ComicDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ComicInfo comicId={comicId} />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChapterList comicId={comicId} />
            <ComicReviews comicId={comicId} />
          </div>
          <div>
            <RelatedComics comicId={comicId} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}