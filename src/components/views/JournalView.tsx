import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { JournalArticle } from '../../types';

export const JournalView: React.FC = () => {
  const { journalArticles } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [readingArticle, setReadingArticle] = useState<JournalArticle | null>(null);

  const categories = ['All', 'Digital Detox', 'Slow Travel', 'Wellness', 'Văn Hóa Bản Địa'];

  const filteredArticles = activeCategory === 'All'
    ? journalArticles
    : journalArticles.filter(a => a.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Magazine Editorial Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
          Green Escape Magazine
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B3C2A]">
          Tạp Chí Sống Chậm & Chữa Lành
        </h1>
        <p className="text-sm text-[#556958]">
          Những ghi chép, cảm xúc và góc nhìn về nghệ thuật nghỉ ngơi, văn hóa bản địa và lối sống tối giản.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#1B3C2A] text-white shadow-xs'
                : 'bg-white border border-[#DFD7CA] text-[#635547] hover:text-[#1B3C2A]'
            }`}
          >
            {cat === 'All' ? 'Tất Cả Bài Viết' : cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map(article => (
          <article
            key={article.id}
            onClick={() => setReadingArticle(article)}
            className="bg-white rounded-2xl border border-[#DFD7CA] overflow-hidden group cursor-pointer transition-all hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-16/9 overflow-hidden bg-[#ECE6DC]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-[#7A6D60]">
                  <span className="text-[#2A5C3D] font-semibold">{article.category}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                  <span>·</span>
                  <span>{article.publishDate}</span>
                </div>

                <h2 className="font-serif text-xl font-bold text-[#1B3C2A] group-hover:text-[#2D6643] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-[#526356] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#786C5E] mt-4">
              <span>Tác giả: {article.author}</span>
              <span className="font-semibold text-[#1B3C2A] group-hover:underline flex items-center space-x-1">
                <span>Đọc bài</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E3DBD0] overflow-hidden my-8 max-h-[90vh] flex flex-col">
            <div className="p-4 bg-white border-b border-[#EAE3D6] flex justify-between items-center sticky top-0 z-10">
              <span className="text-xs font-semibold text-[#2A5C3D] uppercase tracking-wider">
                {readingArticle.category} · {readingArticle.readTime}
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-1 rounded-full text-[#635547] hover:text-[#1B3C2A] hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <div className="space-y-3">
                <span className="text-xs text-[#8A7D70]">Đăng ngày {readingArticle.publishDate} bởi {readingArticle.author}</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3C2A] leading-tight">
                  {readingArticle.title}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-16/9 bg-neutral-100">
                <img
                  src={readingArticle.coverImage}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-[#38483B] leading-relaxed font-normal">
                {readingArticle.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#EAE3D6] text-center">
                <p className="text-xs text-[#7A6D60] italic">
                  "Không chỉ là một chuyến đi – đó là khoảng thời gian để nghỉ ngơi, kết nối và tái tạo năng lượng."
                </p>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="mt-4 px-6 py-2 text-xs font-semibold text-white bg-[#1B3C2A] rounded-full cursor-pointer"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
