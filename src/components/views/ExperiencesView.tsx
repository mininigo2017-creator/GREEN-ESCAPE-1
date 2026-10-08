import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Filter, CheckCircle, ArrowRight, Heart } from 'lucide-react';

export const ExperiencesView: React.FC = () => {
  const { products, navigateTo, openBookingModal, user, toggleFavorite } = useApp();

  const [destinationFilter, setDestinationFilter] = useState<string>('all');
  const [durationFilter, setDurationFilter] = useState<string>('all');
  const [budgetFilter, setBudgetFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Destination filter
      if (destinationFilter !== 'all') {
        if (!p.location.toLowerCase().includes(destinationFilter.toLowerCase())) {
          return false;
        }
      }
      // Duration filter
      if (durationFilter !== 'all') {
        if (durationFilter === '2N1D' && p.durationDays !== 2) return false;
        if (durationFilter === 'flexible' && p.durationDays !== 0 && !p.duration.includes('Linh hoạt')) return false;
      }
      // Budget filter
      if (budgetFilter !== 'all') {
        if (budgetFilter === 'under_3.5m' && p.price >= 3500000) return false;
        if (budgetFilter === '3.5m_4m' && (p.price < 3500000 || p.price > 4000000)) return false;
        if (budgetFilter === 'above_4m' && p.price <= 4000000) return false;
      }
      // Category filter
      if (categoryFilter !== 'all') {
        if (p.category !== categoryFilter) return false;
      }
      return true;
    });
  }, [products, destinationFilter, durationFilter, budgetFilter, categoryFilter]);

  const resetFilters = () => {
    setDestinationFilter('all');
    setDurationFilter('all');
    setBudgetFilter('all');
    setCategoryFilter('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Editorial Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
          Bộ Sưu Tập Trải Nghiệm
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B3C2A] tracking-tight">
          Các Chuyến Đi Chữa Lành & Tái Tạo
        </h1>
        <p className="text-sm text-[#556958] leading-relaxed">
          Tất cả hành trình đều được thiết kế theo triết lý Du lịch Chậm (Slow Travel), tôn trọng thiên nhiên và nhịp sống của bạn.
        </p>
      </div>

      {/* Interactive Filter Bar */}
      <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#1B3C2A]">
            <Filter className="w-4 h-4 text-[#2C623F]" />
            <span>Bộ Lọc Trải Nghiệm</span>
          </div>
          {(destinationFilter !== 'all' || durationFilter !== 'all' || budgetFilter !== 'all' || categoryFilter !== 'all') && (
            <button
              onClick={resetFilters}
              className="text-xs text-[#8A7D70] hover:text-[#1B3C2A] underline cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Destination */}
          <div>
            <label className="block text-[#695D50] font-semibold mb-1">Điểm Đến</label>
            <select
              value={destinationFilter}
              onChange={e => setDestinationFilter(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#DCD3C6] bg-[#FAF8F5] text-[#1B3C2A] focus:outline-none focus:border-[#1B3C2A]"
            >
              <option value="all">Tất cả điểm đến</option>
              <option value="Ba Vì">Ba Vì (Hà Nội)</option>
              <option value="Mai Châu">Mai Châu (Hòa Bình)</option>
              <option value="Ninh Bình">Ninh Bình</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-[#695D50] font-semibold mb-1">Thời Lượng</label>
            <select
              value={durationFilter}
              onChange={e => setDurationFilter(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#DCD3C6] bg-[#FAF8F5] text-[#1B3C2A] focus:outline-none focus:border-[#1B3C2A]"
            >
              <option value="all">Tất cả thời lượng</option>
              <option value="2N1D">2 Ngày 1 Đêm (2N1Đ)</option>
              <option value="flexible">Linh hoạt theo yêu cầu</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[#695D50] font-semibold mb-1">Mức Ngân Sách</label>
            <select
              value={budgetFilter}
              onChange={e => setBudgetFilter(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#DCD3C6] bg-[#FAF8F5] text-[#1B3C2A] focus:outline-none focus:border-[#1B3C2A]"
            >
              <option value="all">Tất cả mức giá</option>
              <option value="under_3.5m">Dưới 3.500.000 đ</option>
              <option value="3.5m_4m">3.500.000 đ – 4.000.000 đ</option>
              <option value="above_4m">Từ 4.000.000 đ trở lên</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-[#695D50] font-semibold mb-1">Loại Trải Nghiệm</label>
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#DCD3C6] bg-[#FAF8F5] text-[#1B3C2A] focus:outline-none focus:border-[#1B3C2A]"
            >
              <option value="all">Tất cả loại hình</option>
              <option value="rest">Rest (Nghỉ ngơi, Detox)</option>
              <option value="reconnect">Reconnect (Kết nối, Bản địa)</option>
              <option value="explore">Explore (Khám phá nhẹ nhàng)</option>
              <option value="custom">Customized (Thiết kế riêng)</option>
              <option value="corporate">Corporate (Doanh nghiệp)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-[#DFD7CA] space-y-3">
          <p className="text-sm font-semibold text-[#1B3C2A]">Không tìm thấy chuyến đi phù hợp với bộ lọc hiện tại.</p>
          <button
            onClick={resetFilters}
            className="text-xs text-[#2A5C3D] underline font-medium cursor-pointer"
          >
            Bỏ chọn bộ lọc để xem toàn bộ sản phẩm
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(prod => {
            const isFav = user.favoriteIds.includes(prod.id);
            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-[#DFD7CA] overflow-hidden group flex flex-col justify-between transition-all hover:shadow-lg"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#ECE6DC]">
                    <img
                      src={prod.heroImage}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1B3C2A]">
                      {prod.duration}
                    </div>
                    <button
                      onClick={() => toggleFavorite(prod.id)}
                      title={isFav ? 'Bỏ lưu trải nghiệm' : 'Lưu vào danh sách yêu thích'}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-[#1B3C2A] transition-colors cursor-pointer"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-[#615446]'}`} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#7A6D60]">
                      <span>{prod.location}</span>
                      <span>{prod.groupSize}</span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-[#1B3C2A] group-hover:text-[#2D6643] transition-colors">
                      {prod.name}
                    </h2>

                    <p className="text-xs text-[#5D6F62] leading-relaxed line-clamp-2">
                      {prod.concept}
                    </p>

                    <div className="pt-2 border-t border-[#F2ECE1] space-y-1.5 text-xs text-[#4E6152]">
                      {prod.coreHighlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2A5C3D] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 pt-0 border-t border-[#F2ECE1] flex items-center justify-between mt-4">
                  <div>
                    <span className="text-[11px] text-[#8C7F72] block">
                      {prod.category === 'custom' || prod.category === 'corporate' ? 'Giá từ' : 'Giá trọn gói'}
                    </span>
                    <span className="font-mono text-base font-bold text-[#1B3C2A]">
                      {prod.price.toLocaleString('vi-VN')} đ
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => navigateTo('experience-detail', prod.slug)}
                      className="px-3 py-2 text-xs font-medium text-[#4B3C2F] hover:text-[#1B3C2A] hover:bg-[#F2ECE1] rounded-lg transition-colors cursor-pointer"
                    >
                      Chi tiết
                    </button>
                    <button
                      onClick={() => {
                        if (prod.category === 'custom') {
                          navigateTo('customized');
                        } else if (prod.category === 'corporate') {
                          navigateTo('corporate');
                        } else {
                          openBookingModal(prod.id);
                        }
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full transition-all cursor-pointer whitespace-nowrap"
                    >
                      {prod.category === 'corporate' ? 'Báo giá' : 'Đặt ngay'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
