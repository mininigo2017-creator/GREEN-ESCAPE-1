import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  CheckCircle2,
  Calendar,
  Users,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  QrCode,
  Building,
  CreditCard,
  Plus,
  Minus,
  Clock
} from 'lucide-react';
import { Booking } from '../types';

export const BookingModal: React.FC = () => {
  const {
    bookingModalOpen,
    closeBookingModal,
    preselectedProductId,
    products,
    extraServices,
    promotions,
    calculateSmartPromotion,
    createBooking
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(2);

  // Step 4: Contact info
  const [contactName, setContactName] = useState<string>('Đặng Ngọc Linh');
  const [contactPhone, setContactPhone] = useState<string>('0989 123 456');
  const [contactEmail, setContactEmail] = useState<string>('ngoclinh.dang@gmail.com');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Step 5: Extra services (serviceId -> quantity)
  const [selectedExtras, setSelectedExtras] = useState<Record<string, number>>({});

  // Step 6: Promo code
  const [couponInput, setCouponInput] = useState<string>('');
  const [appliedCouponCode, setAppliedCouponCode] = useState<string>('');

  // Step 7: Payment method
  const [paymentMethod, setPaymentMethod] = useState<'qr_vietqr' | 'bank_transfer' | 'office'>('qr_vietqr');

  // Completed State
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [bookingError, setBookingError] = useState<string>('');

  // Initialize selected product
  useEffect(() => {
    if (bookingModalOpen) {
      if (preselectedProductId) {
        setSelectedProductId(preselectedProductId);
        const prod = products.find(p => p.id === preselectedProductId);
        if (prod && prod.departures.length > 0) {
          const firstOpen = prod.departures.find(d => d.status !== 'sold_out') || prod.departures[0];
          setSelectedDate(firstOpen ? firstOpen.date : '');
        }
      } else if (products.length > 0) {
        const defaultProd = products[0];
        setSelectedProductId(defaultProd.id);
        if (defaultProd.departures.length > 0) {
          setSelectedDate(defaultProd.departures[0].date);
        }
      }
      setCurrentStep(1);
      setBookingSuccess(false);
      setConfirmedBooking(null);
      setBookingError('');
    }
  }, [bookingModalOpen, preselectedProductId, products]);

  if (!bookingModalOpen) return null;

  const currentProduct = products.find(p => p.id === selectedProductId) || products[0];
  const selectedDeparture = currentProduct?.departures.find(d => d.date === selectedDate);
  const availableSeats = selectedDeparture ? selectedDeparture.seatsTotal - selectedDeparture.seatsBooked : 0;

  // Real-time Pricing Calculations
  const basePricePerPerson = currentProduct?.price || 0;
  const totalBasePrice = basePricePerPerson * guestCount;

  // Calculate Best Promotion (Non-stacking)
  const promoAnalysis = calculateSmartPromotion(
    currentProduct?.id || '',
    selectedDate,
    guestCount,
    appliedCouponCode || couponInput
  );
  const discountAmount = Math.round((totalBasePrice * promoAnalysis.discountPercent) / 100);

  // Extras total
  let extrasTotal = 0;
  const extrasList = Object.entries(selectedExtras).map(([serviceId, qty]) => {
    const service = extraServices.find(s => s.id === serviceId);
    if (!service || qty <= 0) return null;
    const subtotal = service.price * qty;
    extrasTotal += subtotal;
    return { service, qty, subtotal };
  }).filter(Boolean);

  const finalTotal = Math.max(0, totalBasePrice - discountAmount + extrasTotal);

  const handleExtraQuantity = (serviceId: string, delta: number) => {
    setSelectedExtras(prev => {
      const current = prev[serviceId] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [serviceId]: next };
    });
  };

  const handleApplyCoupon = () => {
    setAppliedCouponCode(couponInput.trim().toUpperCase());
  };

  const handleNextStep = () => {
    setBookingError('');
    if (currentStep === 2 && !selectedDate) {
      setBookingError('Vui lòng chọn ngày khởi hành để tiếp tục.');
      return;
    }
    if (currentStep === 3 && selectedDeparture && availableSeats < guestCount) {
      setBookingError(`Ngày khởi hành này chỉ còn ${availableSeats} chỗ. Vui lòng chọn số lượng ít hơn hoặc ngày khác.`);
      return;
    }
    if (currentStep === 4) {
      if (!contactName.trim() || !contactPhone.trim() || !contactEmail.trim()) {
        setBookingError('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Email liên hệ.');
        return;
      }
    }
    setCurrentStep(prev => Math.min(7, prev + 1));
  };

  const handlePrevStep = () => {
    setBookingError('');
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleConfirmBooking = () => {
    setBookingError('');
    const extraServicesPayload = Object.entries(selectedExtras)
      .filter(([_, qty]) => qty > 0)
      .map(([serviceId, qty]) => ({ serviceId, quantity: qty }));

    const res = createBooking({
      experienceId: currentProduct.id,
      departureDate: selectedDate,
      guestCount,
      contactName,
      contactPhone,
      contactEmail,
      specialRequests,
      extraServices: extraServicesPayload,
      couponCode: appliedCouponCode,
      paymentMethod
    });

    if (res.success && res.booking) {
      setConfirmedBooking(res.booking);
      setBookingSuccess(true);
    } else {
      setBookingError(res.error || 'Có lỗi xảy ra khi xử lý đặt chỗ.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E3DBD0] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#1B3C2A] text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-xl tracking-wider font-semibold">GREEN ESCAPE</span>
            <span className="text-xs text-[#9BBDA7] font-medium hidden sm:inline">
              · Quy trình đặt ngay 7 bước
            </span>
          </div>
          <button
            onClick={closeBookingModal}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Header (Steps 1 to 7) */}
        {!bookingSuccess && (
          <div className="px-6 py-3 bg-[#F4EFE6] border-b border-[#E7DFD2] overflow-x-auto">
            <div className="flex items-center justify-between min-w-[580px] text-xs">
              {[
                '1. Chọn Tour',
                '2. Chọn Ngày',
                '3. Số Khách',
                '4. Thông Tin',
                '5. Dịch Vụ',
                '6. Khuyến Mại',
                '7. Thanh Toán'
              ].map((stepTitle, idx) => {
                const stepNum = idx + 1;
                const isCurrent = currentStep === stepNum;
                const isPassed = currentStep > stepNum;
                return (
                  <button
                    key={stepTitle}
                    onClick={() => {
                      if (isPassed) setCurrentStep(stepNum);
                    }}
                    disabled={!isPassed}
                    className={`flex items-center space-x-1.5 transition-colors ${
                      isCurrent
                        ? 'text-[#1B3C2A] font-bold'
                        : isPassed
                        ? 'text-[#47664F] hover:text-[#1B3C2A] cursor-pointer'
                        : 'text-[#9A9084] cursor-not-allowed'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                        isCurrent
                          ? 'bg-[#1B3C2A] text-white'
                          : isPassed
                          ? 'bg-[#47664F] text-white'
                          : 'bg-[#DDD6C8] text-[#7A7064]'
                      }`}
                    >
                      {stepNum}
                    </span>
                    <span className="whitespace-nowrap">{stepTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal Main Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {bookingSuccess && confirmedBooking ? (
            /* SUCCESS CONFIRMATION SCREEN */
            <div className="py-6 px-4 text-center max-w-xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#25633C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1B3C2A]">
                  Đặt Chuyến Thành Công!
                </h3>
                <p className="text-sm text-[#5C6E61] mt-2">
                  Cảm ơn bạn đã lựa chọn Green Escape. Chúng tôi đã nhận thông tin đặt chuyến và sẽ đồng hành cùng bạn trên hành trình phục hồi năng lượng.
                </p>
              </div>

              {/* Digital Boarding Pass Voucher */}
              <div className="bg-white rounded-xl border border-[#DFD7CA] p-5 shadow-xs text-left space-y-4">
                <div className="flex justify-between items-start border-b border-[#EAE3D6] pb-3">
                  <div>
                    <span className="text-xs text-[#8A7C6E] uppercase font-semibold">Mã Booking Xác Nhận</span>
                    <p className="font-mono text-xl font-bold text-[#1B3C2A] tracking-wider">
                      {confirmedBooking.bookingCode}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#EAF2EC] text-[#25633C]">
                    {confirmedBooking.status === 'confirmed' ? 'Đã Xác Nhận' : 'Đã Thanh Toán'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-[#526356]">
                  <div>
                    <span className="text-[#8A7C6E]">Trải nghiệm:</span>
                    <p className="font-semibold text-[#1B3C2A] text-sm mt-0.5">{confirmedBooking.experienceName}</p>
                  </div>
                  <div>
                    <span className="text-[#8A7C6E]">Ngày khởi hành:</span>
                    <p className="font-semibold text-[#1B3C2A] text-sm mt-0.5">{confirmedBooking.departureDate}</p>
                  </div>
                  <div>
                    <span className="text-[#8A7C6E]">Số lượng khách:</span>
                    <p className="font-semibold text-[#1B3C2A] text-sm mt-0.5">{confirmedBooking.guestCount} người</p>
                  </div>
                  <div>
                    <span className="text-[#8A7C6E]">Khách đặt:</span>
                    <p className="font-semibold text-[#1B3C2A] text-sm mt-0.5">{confirmedBooking.contactName}</p>
                  </div>
                </div>

                <div className="border-t border-[#EAE3D6] pt-3 flex justify-between items-center text-sm font-semibold">
                  <span className="text-[#526356]">Tổng giá trị thanh toán:</span>
                  <span className="text-[#1B3C2A] text-lg font-bold font-mono">
                    {confirmedBooking.finalTotal.toLocaleString('vi-VN')} đ
                  </span>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-lg text-xs text-[#6B5E51] space-y-1">
                  <p className="font-medium text-[#1B3C2A]">Phương thức thanh toán: {confirmedBooking.paymentMethod === 'qr_vietqr' ? 'Mã QR VietQR (VPBank)' : 'Chuyển khoản ngân hàng'}</p>
                  <p>Số tài khoản VPBank: <span className="font-mono font-semibold">188 567 8900</span> (CÔNG TY TNHH GREEN ESCAPE)</p>
                  <p>Nội dung chuyển khoản: <span className="font-mono font-semibold">{confirmedBooking.bookingCode} - {confirmedBooking.contactPhone}</span></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={closeBookingModal}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full transition-all cursor-pointer"
                >
                  HOÀN TẤT & ĐÓNG
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Error Alert */}
              {bookingError && (
                <div className="p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-lg">
                  {bookingError}
                </div>
              )}

              {/* STEP 1: CHỌN SẢN PHẨM */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 1: Chọn Sản Phẩm Trải Nghiệm</h3>
                    <p className="text-xs text-[#697B6E]">Lựa chọn hành trình retreat phù hợp với mong muốn tái tạo năng lượng của bạn.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {products.map(prod => {
                      const isSelected = selectedProductId === prod.id;
                      return (
                        <div
                          key={prod.id}
                          onClick={() => {
                            setSelectedProductId(prod.id);
                            if (prod.departures.length > 0) {
                              const openDep = prod.departures.find(d => d.status !== 'sold_out') || prod.departures[0];
                              setSelectedDate(openDep.date);
                            }
                          }}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#1B3C2A] bg-white ring-2 ring-[#1B3C2A]/20 shadow-xs'
                              : 'border-[#DFD7CA] bg-[#FAF8F5] hover:border-[#BDB09E]'
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-semibold text-sm text-[#1B3C2A]">{prod.name}</h4>
                              <span className="text-xs font-mono font-bold text-[#1B3C2A]">
                                {prod.price.toLocaleString('vi-VN')} đ
                              </span>
                            </div>
                            <p className="text-xs text-[#6E8072] mt-1 line-clamp-2">{prod.tagline}</p>
                          </div>
                          <div className="pt-3 mt-3 border-t border-[#ECE5D8] flex items-center justify-between text-xs text-[#8A7D70]">
                            <span>{prod.duration} · {prod.location}</span>
                            <span className="font-medium text-[#1B3C2A]">{isSelected ? '✓ Đang chọn' : 'Chọn'}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: CHỌN NGÀY */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 2: Chọn Ngày Khởi Hành</h3>
                    <p className="text-xs text-[#697B6E]">Hành trình đã chọn: <span className="font-semibold text-[#1B3C2A]">{currentProduct.name}</span></p>
                  </div>

                  <div className="space-y-2.5">
                    {currentProduct.departures.length === 0 ? (
                      <p className="text-xs text-[#7B6E60]">Chuyến đi này hiện đang thiết kế theo lịch linh hoạt riêng. Vui lòng chọn ngày dự kiến.</p>
                    ) : (
                      currentProduct.departures.map(dep => {
                        const isSelected = selectedDate === dep.date;
                        const seatsLeft = dep.seatsTotal - dep.seatsBooked;
                        const isSoldOut = dep.status === 'sold_out' || seatsLeft <= 0;

                        return (
                          <div
                            key={dep.id}
                            onClick={() => {
                              if (!isSoldOut) setSelectedDate(dep.date);
                            }}
                            className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                              isSoldOut
                                ? 'opacity-50 cursor-not-allowed bg-neutral-100 border-neutral-200'
                                : isSelected
                                ? 'border-[#1B3C2A] bg-white ring-2 ring-[#1B3C2A]/20 shadow-xs cursor-pointer'
                                : 'border-[#DFD7CA] bg-white hover:border-[#1B3C2A] cursor-pointer'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-[#2E5E3D]" />
                              <div>
                                <p className="text-sm font-semibold text-[#1B3C2A]">{dep.dateLabel}</p>
                                <span className="text-xs text-[#6E8072]">
                                  {isSoldOut ? 'Hết chỗ' : `Còn lại ${seatsLeft} / ${dep.seatsTotal} chỗ trống`}
                                </span>
                              </div>
                            </div>

                            <div>
                              {isSoldOut ? (
                                <span className="text-xs text-rose-700 font-semibold px-2.5 py-1 bg-rose-50 rounded">Hết chỗ</span>
                              ) : seatsLeft <= 3 ? (
                                <span className="text-xs text-amber-700 font-semibold px-2.5 py-1 bg-amber-50 rounded">Chỉ còn ít chỗ</span>
                              ) : (
                                <span className="text-xs text-[#285736] font-semibold px-2.5 py-1 bg-[#E8EFEA] rounded">Sẵn sàng</span>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: SỐ LƯỢNG KHÁCH */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 3: Chọn Số Lượng Khách</h3>
                    <p className="text-xs text-[#697B6E]">Hệ thống sẽ tự động áp dụng ưu đãi khi đi theo nhóm từ 4 người trở lên.</p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-[#DFD7CA] flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#1B3C2A]">Số lượng thành viên tham gia</p>
                      <p className="text-xs text-[#6E8072] mt-0.5">Bao gồm toàn bộ dịch vụ trọn gói theo tiêu chuẩn retreat</p>
                      {availableSeats > 0 && (
                        <p className="text-xs text-emerald-700 font-medium mt-1">Chỗ trống còn lại trong đợt: {availableSeats} khách</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setGuestCount(prev => Math.max(1, prev - 1))}
                        disabled={guestCount <= 1}
                        className="w-9 h-9 rounded-full border border-[#DFD7CA] flex items-center justify-center text-[#1B3C2A] hover:bg-[#F2ECE1] disabled:opacity-30 cursor-pointer"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-mono text-xl font-bold text-[#1B3C2A] w-8 text-center">{guestCount}</span>
                      <button
                        onClick={() => setGuestCount(prev => (availableSeats > 0 ? Math.min(availableSeats, prev + 1) : prev + 1))}
                        disabled={availableSeats > 0 && guestCount >= availableSeats}
                        className="w-9 h-9 rounded-full border border-[#DFD7CA] flex items-center justify-center text-[#1B3C2A] hover:bg-[#F2ECE1] disabled:opacity-30 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Group discount hints */}
                  <div className="p-3 bg-[#EAF2EC] rounded-xl text-xs text-[#2A593A] space-y-1">
                    <p className="font-semibold">Chính sách ưu đãi nhóm Green Escape:</p>
                    <p>• Nhóm 4–5 người: Giảm ngay 5%</p>
                    <p>• Nhóm 6–9 người: Giảm ngay 7%</p>
                    <p>• Nhóm từ 10 người trở lên: Giảm ngay 10%</p>
                  </div>
                </div>
              )}

              {/* STEP 4: THÔNG TIN KHÁCH HÀNG */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 4: Thông Tin Khách Hàng Liên Hệ</h3>
                    <p className="text-xs text-[#697B6E]">Thông tin dùng để gửi xác nhận booking, cẩm nang chuẩn bị và bảo hiểm du lịch.</p>
                  </div>

                  <div className="space-y-3.5 bg-white p-5 rounded-xl border border-[#DFD7CA]">
                    <div>
                      <label className="block text-xs font-semibold text-[#473B2F] mb-1">Họ và tên người đại diện *</label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#473B2F] mb-1">Số điện thoại liên hệ *</label>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={e => setContactPhone(e.target.value)}
                          placeholder="0912 345 678"
                          className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#473B2F] mb-1">Email nhận vé điện tử *</label>
                        <input
                          type="email"
                          value={contactEmail}
                          onChange={e => setContactEmail(e.target.value)}
                          placeholder="name@gmail.com"
                          className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#473B2F] mb-1">Yêu cầu đặc biệt (Ăn chay, dị ứng thực phẩm, phòng ở...)</label>
                      <textarea
                        rows={2}
                        value={specialRequests}
                        onChange={e => setSpecialRequests(e.target.value)}
                        placeholder="Ví dụ: Ăn chay trường, không ăn cay, dị ứng hải sản..."
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: DỊCH VỤ BỔ SUNG & QUÀ TẶNG */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 5: Chọn Dịch Vụ Bổ Sung & Quà Tặng Nông Trại</h3>
                    <p className="text-xs text-[#697B6E]">Nâng tầm chuyến đi với các phiên tham vấn 1:1, nhiếp ảnh hoặc hộp quà Escape Box độc bản.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
                    {extraServices.map(srv => {
                      const qty = selectedExtras[srv.id] || 0;
                      return (
                        <div
                          key={srv.id}
                          className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                            qty > 0
                              ? 'border-[#1B3C2A] bg-white ring-1 ring-[#1B3C2A]/20'
                              : 'border-[#DFD7CA] bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-xs font-semibold text-[#1B3C2A]">{srv.name}</h4>
                              <span className="text-xs font-mono font-bold text-[#2A5C3D]">
                                +{srv.price.toLocaleString('vi-VN')} đ
                              </span>
                            </div>
                            <p className="text-[11px] text-[#786D60] mt-1">{srv.description}</p>
                            <span className="text-[10px] text-[#9A8F82] mt-0.5 block">Đơn vị: {srv.unit}</span>
                          </div>

                          <div className="flex items-center justify-end space-x-2.5 pt-2.5 mt-2 border-t border-[#F2EDE3]">
                            <button
                              onClick={() => handleExtraQuantity(srv.id, -1)}
                              disabled={qty <= 0}
                              className="w-7 h-7 rounded-full border border-[#DDD5C5] flex items-center justify-center text-[#1B3C2A] hover:bg-[#F2EDE3] disabled:opacity-20 cursor-pointer"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono text-xs font-bold w-4 text-center">{qty}</span>
                            <button
                              onClick={() => handleExtraQuantity(srv.id, 1)}
                              className="w-7 h-7 rounded-full border border-[#DDD5C5] flex items-center justify-center text-[#1B3C2A] hover:bg-[#F2EDE3] cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: NHẬP MÃ ƯU ĐÃI & THUẬT TOÁN TỰ ĐỘNG */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 6: Nhập Mã Ưu Đãi & Hệ Thống Khuyến Mại</h3>
                    <p className="text-xs text-[#697B6E]">Green Escape tự động xác định mức chiết khấu tối ưu nhất theo quy định không cộng dồn.</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-[#DFD7CA] space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={e => setCouponInput(e.target.value.toUpperCase())}
                        placeholder="Nhập mã: LAUNCH15, EARLYBIRD, FRIEND5..."
                        className="flex-1 px-3.5 py-2 text-sm rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none uppercase font-mono"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="px-5 py-2 text-xs font-semibold text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-lg transition-colors cursor-pointer"
                      >
                        Áp Dụng
                      </button>
                    </div>

                    {/* Active Promo Status Box */}
                    <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#E7DFD2] space-y-1.5 text-xs">
                      <div className="flex items-center space-x-2 text-[#245235] font-semibold">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>Trạng thái ưu đãi hiện tại:</span>
                      </div>
                      <p className="text-[#3B4C3E] font-medium">{promoAnalysis.note}</p>
                      {promoAnalysis.discountPercent > 0 && (
                        <p className="text-emerald-700 font-mono font-bold">
                          Mức giảm áp dụng: -{promoAnalysis.discountPercent}% ({discountAmount.toLocaleString('vi-VN')} đ)
                        </p>
                      )}
                    </div>

                    <div className="text-xs text-[#7B6E60] space-y-1 border-t border-[#F2ECE1] pt-3">
                      <p className="font-semibold text-[#1B3C2A]">Các chương trình khuyến mại khả dụng:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {promotions.map(p => (
                          <div key={p.id} className="p-2 rounded bg-[#FAF8F5] border border-[#E9E3D8] text-[11px]">
                            <span className="font-mono font-bold text-[#1B3C2A]">{p.code}</span> ({p.name}) · Giảm {p.discountPercent}%
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: XÁC NHẬN VÀ THANH TOÁN */}
              {currentStep === 7 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Bước 7: Xác Nhận & Thanh Toán</h3>
                    <p className="text-xs text-[#697B6E]">Kiểm tra lại toàn bộ chi tiết chuyến đi trước khi hoàn tất đặt chỗ.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Payment methods */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-[#483B2E]">Chọn phương thức thanh toán</p>
                      
                      <div
                        onClick={() => setPaymentMethod('qr_vietqr')}
                        className={`p-3.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                          paymentMethod === 'qr_vietqr'
                            ? 'border-[#1B3C2A] bg-white ring-2 ring-[#1B3C2A]/20'
                            : 'border-[#DFD7CA] bg-white'
                        }`}
                      >
                        <QrCode className="w-5 h-5 text-[#2A5C3D]" />
                        <div>
                          <p className="text-xs font-semibold text-[#1B3C2A]">Mã QR VietQR Chuyển Khoản Nhanh</p>
                          <p className="text-[11px] text-[#7A6E61]">Quét mã qua app ngân hàng bất kỳ, xác nhận tức thì</p>
                        </div>
                      </div>

                      <div
                        onClick={() => setPaymentMethod('bank_transfer')}
                        className={`p-3.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                          paymentMethod === 'bank_transfer'
                            ? 'border-[#1B3C2A] bg-white ring-2 ring-[#1B3C2A]/20'
                            : 'border-[#DFD7CA] bg-white'
                        }`}
                      >
                        <Building className="w-5 h-5 text-[#2A5C3D]" />
                        <div>
                          <p className="text-xs font-semibold text-[#1B3C2A]">Chuyển Khoản Ngân Hàng (VPBank)</p>
                          <p className="text-[11px] text-[#7A6E61]">Số TK: 188 567 8900 - Cty TNHH Green Escape</p>
                        </div>
                      </div>

                      <div
                        onClick={() => setPaymentMethod('office')}
                        className={`p-3.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                          paymentMethod === 'office'
                            ? 'border-[#1B3C2A] bg-white ring-2 ring-[#1B3C2A]/20'
                            : 'border-[#DFD7CA] bg-white'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 text-[#2A5C3D]" />
                        <div>
                          <p className="text-xs font-semibold text-[#1B3C2A]">Thanh toán trực tiếp tại Văn Phòng</p>
                          <p className="text-[11px] text-[#7A6E61]">Số 28 Phố Tràng Thi, Hoàn Kiếm, Hà Nội</p>
                        </div>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-white p-4 rounded-xl border border-[#DFD7CA] space-y-3">
                      <p className="text-xs font-semibold text-[#483B2E]">Tóm tắt hành trình</p>
                      <div className="text-xs space-y-1.5 text-[#5C6E61]">
                        <p><span className="text-[#8A7D70]">Trải nghiệm:</span> <strong className="text-[#1B3C2A]">{currentProduct.name}</strong></p>
                        <p><span className="text-[#8A7D70]">Ngày:</span> <strong className="text-[#1B3C2A]">{selectedDate}</strong></p>
                        <p><span className="text-[#8A7D70]">Số khách:</span> <strong className="text-[#1B3C2A]">{guestCount} người</strong></p>
                        <p><span className="text-[#8A7D70]">Người liên hệ:</span> <strong className="text-[#1B3C2A]">{contactName} ({contactPhone})</strong></p>
                      </div>

                      {extrasList.length > 0 && (
                        <div className="border-t border-[#ECE5D8] pt-2 text-[11px] text-[#6E8072] space-y-1">
                          <span className="font-semibold text-[#1B3C2A]">Dịch vụ bổ sung:</span>
                          {extrasList.map(item => (
                            <div key={item!.service.id} className="flex justify-between">
                              <span>• {item!.service.name} x{item!.qty}</span>
                              <span className="font-mono">{item!.subtotal.toLocaleString('vi-VN')} đ</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* MANDATORY PRICE BREAKDOWN BAR (Required by prompt: "Luôn hiển thị bảng: Giá gốc - Giảm giá + Dịch vụ bổ sung = Tổng tiền") */}
              <div className="p-4 bg-white rounded-xl border border-[#DFD7CA] shadow-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs divide-y sm:divide-y-0 sm:divide-x divide-[#ECE5D8]">
                  <div>
                    <span className="text-[#8A7D70] block">Giá gốc ({guestCount} khách)</span>
                    <span className="font-mono font-semibold text-[#1B3C2A] text-sm">
                      {totalBasePrice.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="sm:pl-3">
                    <span className="text-[#8A7D70] block">Giảm giá ({promoAnalysis.discountPercent}%)</span>
                    <span className="font-mono font-semibold text-rose-700 text-sm">
                      - {discountAmount.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="sm:pl-3">
                    <span className="text-[#8A7D70] block">Dịch vụ bổ sung</span>
                    <span className="font-mono font-semibold text-[#3B4C3E] text-sm">
                      + {extrasTotal.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="sm:pl-3">
                    <span className="text-[#8A7D70] block font-semibold text-[#1B3C2A]">TỔNG TIỀN</span>
                    <span className="font-mono font-bold text-[#1B3C2A] text-base">
                      = {finalTotal.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!bookingSuccess && (
          <div className="px-6 py-4 bg-[#F5EFE5] border-t border-[#E5DDD0] flex items-center justify-between">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className="px-4 py-2 text-xs font-semibold text-[#5B4F43] hover:text-[#1B3C2A] disabled:opacity-30 disabled:cursor-not-allowed flex items-center space-x-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay Lại</span>
            </button>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-[#7B6E60] hidden sm:inline">
                Bước {currentStep} / 7
              </span>

              {currentStep < 7 ? (
                <button
                  onClick={handleNextStep}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full transition-all flex items-center space-x-1 cursor-pointer"
                >
                  <span>Tiếp Tục</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleConfirmBooking}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-full transition-all shadow-sm cursor-pointer"
                >
                  XÁC NHẬN VÀ ĐẶT NGAY
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
