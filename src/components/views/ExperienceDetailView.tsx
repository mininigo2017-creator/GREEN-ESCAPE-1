import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  XCircle,
  HelpCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Leaf,
  Sparkles,
  ArrowLeft,
  Coffee,
  Home,
  Bus
} from 'lucide-react';

export const ExperienceDetailView: React.FC = () => {
  const { products, selectedProductSlug, navigateTo, openBookingModal } = useApp();

  const [activeDayTab, setActiveDayTab] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const product = products.find(p => p.slug === selectedProductSlug) || products[0];

  if (!product) return null;

  return (
    <div className="space-y-16 pb-20">
      {/* Top back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigateTo('experiences')}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-[#536555] hover:text-[#1B3C2A] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh mục trải nghiệm</span>
        </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] flex items-end">
          <img
            src={product.heroImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Hero text */}
          <div className="relative z-10 p-6 sm:p-12 text-white max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#E0ECE2]">
              <span>{product.duration}</span>
              <span>·</span>
              <span>{product.location}</span>
              <span>·</span>
              <span>{product.distanceFromHanoi}</span>
              <span>·</span>
              <span>{product.groupSize}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-[#E2ECE3] font-light leading-relaxed">
              {product.tagline}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <span className="text-xs text-[#C8D6C9] block">Giá trọn gói từ</span>
                <span className="font-mono text-2xl font-bold text-white">
                  {product.price.toLocaleString('vi-VN')} đ <span className="text-xs font-normal">/ khách</span>
                </span>
              </div>

              <button
                onClick={() => {
                  if (product.category === 'custom') {
                    navigateTo('customized');
                  } else if (product.category === 'corporate') {
                    navigateTo('corporate');
                  } else {
                    openBookingModal(product.id);
                  }
                }}
                className="px-8 py-3.5 text-xs font-semibold tracking-widest text-[#1B3C2A] bg-white hover:bg-[#F2ECE1] rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                {product.category === 'corporate' ? 'YÊU CẦU BÁO GIÁ' : 'ĐẶT NGAY'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & CONCEPT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Concept & Story */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DFD7CA] space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
                Concept Chuyến Đi
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1B3C2A]">
                {product.concept}
              </h2>
              <p className="text-sm text-[#4E6152] leading-relaxed">
                {product.overview}
              </p>

              <div className="pt-4 border-t border-[#F2ECE1] space-y-2">
                <span className="text-xs font-semibold text-[#1B3C2A] block">Điểm nhấn nổi bật:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.coreHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-[#526356]">
                      <CheckCircle className="w-4 h-4 text-[#2A5C3D] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DETAILED ITINERARY (Timeline day by day) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DFD7CA] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F2ECE1] pb-4">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
                    Lịch Trình Chi Tiết
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1B3C2A]">
                    Thời Gian Biểu Hành Trình
                  </h3>
                </div>

                {/* Day selector tabs */}
                <div className="flex space-x-1 p-1 bg-[#F5EFE5] rounded-xl self-start sm:self-auto">
                  {product.schedule.map(sch => (
                    <button
                      key={sch.dayNumber}
                      onClick={() => setActiveDayTab(sch.dayNumber)}
                      className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        activeDayTab === sch.dayNumber
                          ? 'bg-[#1B3C2A] text-white shadow-xs'
                          : 'text-[#635547] hover:text-[#1B3C2A]'
                      }`}
                    >
                      Ngày {sch.dayNumber}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Items */}
              {product.schedule
                .filter(sch => sch.dayNumber === activeDayTab)
                .map(day => (
                  <div key={day.dayNumber} className="space-y-6">
                    <p className="text-xs font-semibold text-[#2D603F]">{day.dayTitle}</p>
                    <div className="relative pl-6 space-y-6 border-l-2 border-[#D9E3DA]">
                      {day.items.map((item, idx) => (
                        <div key={idx} className="relative group">
                          {/* Dot marker */}
                          <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2A5C3D]" />
                          <div className="space-y-1">
                            <div className="flex items-center space-x-3">
                              <span className="font-mono text-xs font-bold text-[#2A5C3D]">{item.time}</span>
                              <h4 className="text-sm font-bold text-[#1B3C2A]">{item.title}</h4>
                            </div>
                            <p className="text-xs text-[#526356] leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* SERVICES: ACCOMMODATION, DINING, TRANSPORT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#234B34]">
                  <Home className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1B3C2A]">Nơi Lưu Trú</h4>
                <p className="text-xs text-[#526356]">{product.accommodation.name}</p>
                <p className="text-[11px] text-[#786C5E] leading-relaxed">{product.accommodation.description}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#234B34]">
                  <Coffee className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1B3C2A]">Ăn Uống Organic</h4>
                <p className="text-xs text-[#526356]">{product.dining.style}</p>
                <p className="text-[11px] text-[#786C5E] leading-relaxed">{product.dining.mealsCount}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#234B34]">
                  <Bus className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1B3C2A]">Phương Tiện</h4>
                <p className="text-xs text-[#526356]">Xe Dcar Limousine</p>
                <p className="text-[11px] text-[#786C5E] leading-relaxed">{product.transportation}</p>
              </div>
            </div>

            {/* INCLUDED & NOT INCLUDED */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Dịch Vụ Bao Gồm
                </span>
                <ul className="space-y-2 text-xs text-[#48594C]">
                  {product.included.map((inc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
                <span className="text-xs font-bold text-[#8A7D70] uppercase tracking-wider block">
                  Dịch Vụ Không Bao Gồm
                </span>
                <ul className="space-y-2 text-xs text-[#6B5E51]">
                  {product.notIncluded.map((ninc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>{ninc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COMMUNITY CONTRIBUTION */}
            <div className="p-6 bg-[#EAF2EC] rounded-2xl border border-[#C5DBCB] space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#1C4D2E]">
                <Leaf className="w-4 h-4" />
                <span>Đóng góp cho cộng đồng & Môi trường địa phương</span>
              </div>
              <p className="text-xs text-[#2A593A] leading-relaxed">
                {product.communityContribution}
              </p>
            </div>

            {/* FAQS */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DFD7CA] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1B3C2A]">
                Câu Hỏi Thường Gặp (FAQ)
              </h3>
              <div className="divide-y divide-[#F2ECE1]">
                {product.faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="py-3.5">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between text-left text-xs font-bold text-[#1B3C2A] cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#2A5C3D]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#8A7D70]" />}
                      </button>
                      {isOpen && (
                        <p className="text-xs text-[#526356] mt-2.5 leading-relaxed pl-1">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: BOOKING CARD & DEPARTURES */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#DFD7CA] shadow-sm space-y-5">
              <div>
                <span className="text-xs text-[#8A7D70] block">Giá trọn gói niêm yết</span>
                <span className="font-mono text-3xl font-bold text-[#1B3C2A]">
                  {product.price.toLocaleString('vi-VN')} đ
                </span>
                <span className="text-xs text-[#6B5E51] block mt-1">Đã bao gồm xe Limousine, phòng nghỉ & ẩm thực</span>
              </div>

              {/* Departures in card */}
              <div className="space-y-2 border-t border-[#F2ECE1] pt-4">
                <span className="text-xs font-semibold text-[#1B3C2A] block">Lịch khởi hành sắp tới:</span>
                <div className="space-y-2">
                  {product.departures.map(dep => {
                    const seatsLeft = dep.seatsTotal - dep.seatsBooked;
                    return (
                      <div
                        key={dep.id}
                        className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E9E2D5] flex items-center justify-between text-xs"
                      >
                        <div>
                          <p className="font-medium text-[#1B3C2A]">{dep.dateLabel}</p>
                          <span className="text-[11px] text-[#7A6D60]">
                            {seatsLeft <= 0 ? 'Hết chỗ' : `Còn ${seatsLeft} chỗ trống`}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            seatsLeft <= 0
                              ? 'bg-rose-100 text-rose-800'
                              : seatsLeft <= 3
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {seatsLeft <= 0 ? 'Kín' : `${seatsLeft} chỗ`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  if (product.category === 'custom') {
                    navigateTo('customized');
                  } else if (product.category === 'corporate') {
                    navigateTo('corporate');
                  } else {
                    openBookingModal(product.id);
                  }
                }}
                className="w-full py-3.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap text-center block"
              >
                {product.category === 'corporate' ? 'YÊU CẦU BÁO GIÁ' : 'ĐẶT NGAY'}
              </button>

              <div className="text-[11px] text-[#8A7D70] text-center space-y-1">
                <p>✓ Miễn phí hoàn hủy trước 7 ngày</p>
                <p>✓ Cam kết không phát sinh chi phí ẩn</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
