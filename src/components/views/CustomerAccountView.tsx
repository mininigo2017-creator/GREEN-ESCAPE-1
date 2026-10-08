import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  Calendar,
  Gift,
  Share2,
  Heart,
  Star,
  CheckCircle2,
  Clock,
  Ticket,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';

export const CustomerAccountView: React.FC = () => {
  const { user, bookings, products, promotions, navigateTo, openBookingModal } = useApp();

  const [activeTab, setActiveTab] = useState<'bookings' | 'favorites' | 'vouchers' | 'profile'>('bookings');
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewBookingCode, setReviewBookingCode] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const favoriteProducts = products.filter(p => user.favoriteIds.includes(p.id));

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(user.referralCode);
    setCopiedReferral(true);
    setTimeout(() => setCopiedReferral(false), 2000);
  };

  const handleOpenReview = (bookingCode: string) => {
    setReviewBookingCode(bookingCode);
    setReviewModalOpen(true);
    setReviewSubmitted(false);
  };

  const handleSaveReview = () => {
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewModalOpen(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* User Header Profile Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DFD7CA] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-[#1B3C2A] text-white flex items-center justify-center font-serif text-2xl font-bold">
            {user.name.split(' ').pop()?.[0] || 'L'}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-serif text-2xl font-bold text-[#1B3C2A]">{user.name}</h1>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EAF2EC] text-[#245C38]">
                Hội viên Green Life
              </span>
            </div>
            <p className="text-xs text-[#6F8173] mt-0.5">{user.email} · {user.phone}</p>
          </div>
        </div>

        {/* Stats Chips */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="bg-[#FAF8F5] px-4 py-2.5 rounded-xl border border-[#E5DED2]">
            <span className="text-[#8A7D70] block">Chuyến đi đã đặt</span>
            <strong className="font-mono text-base font-bold text-[#1B3C2A]">{bookings.length}</strong>
          </div>
          <div className="bg-[#FAF8F5] px-4 py-2.5 rounded-xl border border-[#E5DED2]">
            <span className="text-[#8A7D70] block">Điểm thưởng tích lũy</span>
            <strong className="font-mono text-base font-bold text-[#1B3C2A]">{user.rewardPoints} pts</strong>
          </div>
          <div className="bg-[#FAF8F5] px-4 py-2.5 rounded-xl border border-[#E5DED2]">
            <span className="text-[#8A7D70] block">Mã giới thiệu (Referral)</span>
            <div className="flex items-center space-x-2 mt-0.5">
              <strong className="font-mono text-xs font-bold text-[#2A5C3D]">{user.referralCode}</strong>
              <button
                onClick={handleCopyReferral}
                className="text-[#655546] hover:text-[#1B3C2A] cursor-pointer"
                title="Sao chép mã"
              >
                {copiedReferral ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 border-b border-[#E3DBD0] text-xs font-semibold">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`pb-3 px-3 transition-colors cursor-pointer ${
            activeTab === 'bookings'
              ? 'text-[#1B3C2A] border-b-2 border-[#1B3C2A]'
              : 'text-[#6A7B6E] hover:text-[#1B3C2A]'
          }`}
        >
          Chuyến Đi Của Tôi ({bookings.length})
        </button>
        <button
          onClick={() => setActiveTab('favorites')}
          className={`pb-3 px-3 transition-colors cursor-pointer ${
            activeTab === 'favorites'
              ? 'text-[#1B3C2A] border-b-2 border-[#1B3C2A]'
              : 'text-[#6A7B6E] hover:text-[#1B3C2A]'
          }`}
        >
          Yêu Thích ({user.favoriteIds.length})
        </button>
        <button
          onClick={() => setActiveTab('vouchers')}
          className={`pb-3 px-3 transition-colors cursor-pointer ${
            activeTab === 'vouchers'
              ? 'text-[#1B3C2A] border-b-2 border-[#1B3C2A]'
              : 'text-[#6A7B6E] hover:text-[#1B3C2A]'
          }`}
        >
          Kho Ưu Đãi & Voucher ({promotions.length})
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 px-3 transition-colors cursor-pointer ${
            activeTab === 'profile'
              ? 'text-[#1B3C2A] border-b-2 border-[#1B3C2A]'
              : 'text-[#6A7B6E] hover:text-[#1B3C2A]'
          }`}
        >
          Thông Tin Cá Nhân
        </button>
      </div>

      {/* Tab 1: BOOKINGS LIST */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          {bookings.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-[#DFD7CA] space-y-3">
              <Ticket className="w-10 h-10 text-[#8C9E90] mx-auto" />
              <p className="text-sm font-semibold text-[#1B3C2A]">Bạn chưa có chuyến đi nào được đặt.</p>
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-2 text-xs font-semibold text-white bg-[#1B3C2A] rounded-full cursor-pointer"
              >
                Khám phá và đặt chuyến ngay
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map(b => (
                <div
                  key={b.id}
                  className="bg-white p-6 rounded-2xl border border-[#DFD7CA] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-sm font-bold text-[#1B3C2A]">
                        {b.bookingCode}
                      </span>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          b.status === 'paid'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : b.status === 'confirmed'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : b.status === 'completed'
                            ? 'bg-neutral-100 text-neutral-700'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {b.status === 'paid'
                          ? 'Đã Thanh Toán'
                          : b.status === 'confirmed'
                          ? 'Đã Xác Nhận'
                          : b.status === 'completed'
                          ? 'Đã Hoàn Thành'
                          : 'Chờ Thanh Toán'}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
                      {b.experienceName}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#5D6F61]">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Khởi hành: {b.departureDate}</span>
                      </span>
                      <span>·</span>
                      <span>{b.guestCount} người lớn</span>
                      <span>·</span>
                      <span>Người đặt: {b.contactName}</span>
                    </div>

                    {b.extraServices.length > 0 && (
                      <p className="text-[11px] text-[#786D60]">
                        Dịch vụ thêm: {b.extraServices.map(s => `${s.serviceName} (x${s.quantity})`).join(', ')}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#F0EBE1]">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] text-[#8A7D70] block">Tổng chi phí</span>
                      <span className="font-mono text-lg font-bold text-[#1B3C2A]">
                        {b.finalTotal.toLocaleString('vi-VN')} đ
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleOpenReview(b.bookingCode)}
                        className="px-3 py-1.5 text-xs font-semibold text-[#1B3C2A] bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#DDD5C5] rounded-lg transition-colors cursor-pointer"
                      >
                        Viết đánh giá
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: FAVORITES */}
      {activeTab === 'favorites' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favoriteProducts.length === 0 ? (
            <div className="col-span-2 bg-white p-12 text-center rounded-2xl border border-[#DFD7CA] space-y-2">
              <Heart className="w-8 h-8 text-[#8C9E90] mx-auto" />
              <p className="text-xs text-[#6B7D6E]">Bạn chưa lưu chuyến đi nào vào mục yêu thích.</p>
            </div>
          ) : (
            favoriteProducts.map(prod => (
              <div
                key={prod.id}
                className="bg-white p-4 rounded-2xl border border-[#DFD7CA] flex space-x-4 items-center"
              >
                <img
                  src={prod.heroImage}
                  alt={prod.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#1B3C2A]">{prod.name}</h4>
                  <p className="text-xs text-[#6E8072]">{prod.duration} · {prod.location}</p>
                  <p className="font-mono text-xs font-bold text-[#1B3C2A]">
                    {prod.price.toLocaleString('vi-VN')} đ
                  </p>
                  <button
                    onClick={() => navigateTo('experience-detail', prod.slug)}
                    className="text-xs text-[#2A5C3D] font-semibold underline cursor-pointer"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 3: VOUCHERS */}
      {activeTab === 'vouchers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promotions.map(promo => (
            <div
              key={promo.id}
              className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-2 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono font-bold text-base text-[#1B3C2A] tracking-wider">
                    {promo.code}
                  </span>
                  <h4 className="font-semibold text-xs text-[#3D4F41] mt-0.5">{promo.name}</h4>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Giảm {promo.discountPercent}%
                </span>
              </div>
              <p className="text-xs text-[#6B5E51]">{promo.description}</p>
              <span className="text-[11px] text-[#8A7D70] block">Điều kiện: {promo.condition}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: PROFILE */}
      {activeTab === 'profile' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DFD7CA] max-w-xl space-y-4 text-xs">
          <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Thông Tin Cá Nhân</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-[#695D50] font-semibold mb-1">Họ và tên</label>
              <input
                type="text"
                disabled
                value={user.name}
                className="w-full p-2.5 rounded-lg border border-[#D5CCC0] bg-[#FAF8F5] text-[#1B3C2A]"
              />
            </div>
            <div>
              <label className="block text-[#695D50] font-semibold mb-1">Email</label>
              <input
                type="text"
                disabled
                value={user.email}
                className="w-full p-2.5 rounded-lg border border-[#D5CCC0] bg-[#FAF8F5] text-[#1B3C2A]"
              />
            </div>
            <div>
              <label className="block text-[#695D50] font-semibold mb-1">Số điện thoại</label>
              <input
                type="text"
                disabled
                value={user.phone}
                className="w-full p-2.5 rounded-lg border border-[#D5CCC0] bg-[#FAF8F5] text-[#1B3C2A]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Write Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full border border-[#DFD7CA] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Viết Đánh Giá Trải Nghiệm ({reviewBookingCode})
            </h3>
            {reviewSubmitted ? (
              <div className="py-4 text-center text-xs text-emerald-800 font-semibold">
                ✓ Cảm ơn bạn! Đánh giá đã được lưu vào hồ sơ chuyến đi.
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Mức độ hài lòng:</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(st => (
                      <button
                        key={st}
                        onClick={() => setReviewRating(st)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            st <= reviewRating
                              ? 'fill-amber-500 text-amber-500'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Cảm nhận của bạn:</label>
                  <textarea
                    rows={3}
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                    placeholder="Không gian homestay, món ăn, người hướng dẫn hoặc hoạt động yoga thế nào?..."
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    onClick={() => setReviewModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-[#695D50] hover:bg-neutral-100 cursor-pointer"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleSaveReview}
                    className="px-4 py-2 rounded-lg text-white bg-[#1B3C2A] cursor-pointer"
                  >
                    Gửi Đánh Giá
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
