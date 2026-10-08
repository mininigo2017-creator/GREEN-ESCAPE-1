import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BarChart3,
  TrendingUp,
  Users,
  Ticket,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Edit2,
  Plus,
  RefreshCw,
  Search,
  Filter,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Booking } from '../../types';

export const AdminDashboardView: React.FC = () => {
  const {
    bookings,
    products,
    promotions,
    customInquiries,
    corporateInquiries,
    updateBookingStatus,
    updateProductPrice,
    updateProductSeats,
    addDepartureDate,
    updatePromotionDiscount,
    resetDemoData
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'bookings' | 'products' | 'promotions' | 'inquiries' | 'financial'>('overview');
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Editing state for product price
  const [editingPriceProductId, setEditingPriceProductId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<number>(0);

  // New departure modal/form
  const [newDepProductId, setNewDepProductId] = useState<string>(products[0]?.id || '');
  const [newDepDate, setNewDepDate] = useState<string>('2026-11-14');
  const [newDepSeats, setNewDepSeats] = useState<number>(12);
  const [depSuccessMsg, setDepSuccessMsg] = useState('');

  // Metrics calculation
  const totalRevenue = bookings.reduce((sum, b) => b.status !== 'cancelled' ? sum + b.finalTotal : sum, 0);
  const totalBookings = bookings.length;
  const totalGuests = bookings.reduce((sum, b) => b.status !== 'cancelled' ? sum + b.guestCount : sum, 0);

  // Total available seats vs booked seats
  let allTotalSeats = 0;
  let allBookedSeats = 0;
  products.forEach(p => {
    p.departures.forEach(d => {
      allTotalSeats += d.seatsTotal;
      allBookedSeats += d.seatsBooked;
    });
  });
  const occupancyRate = allTotalSeats > 0 ? Math.round((allBookedSeats / allTotalSeats) * 100) : 0;

  // Filtered Bookings
  const filteredBookings = bookings.filter(b => {
    if (bookingFilterStatus !== 'all' && b.status !== bookingFilterStatus) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        b.bookingCode.toLowerCase().includes(q) ||
        b.contactName.toLowerCase().includes(q) ||
        b.contactPhone.toLowerCase().includes(q) ||
        b.experienceName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSavePrice = (productId: string) => {
    if (tempPrice > 0) {
      updateProductPrice(productId, tempPrice);
    }
    setEditingPriceProductId(null);
  };

  const handleAddDeparture = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDepProductId && newDepDate) {
      addDepartureDate(newDepProductId, newDepDate, newDepSeats);
      setDepSuccessMsg('✓ Đã mở thêm lịch khởi hành thành công!');
      setTimeout(() => setDepSuccessMsg(''), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E3DBD0] pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#1B3C2A] text-white">
              Green Escape Executive
            </span>
            <span className="text-xs text-[#7A6D60]">Hệ Thống Quản Trị Khởi Nghiệp</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#1B3C2A] mt-1">
            Bảng Điều Khiển Quản Trị (Admin Portal)
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={resetDemoData}
            title="Khôi phục dữ liệu ban đầu của đề án Green Escape"
            className="px-3.5 py-2 text-xs font-semibold text-[#5B4D40] bg-white border border-[#DDD5C5] hover:bg-[#F2ECE1] rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Khôi phục Dữ liệu Mẫu</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex space-x-1 bg-[#F4EFE6] p-1.5 rounded-xl text-xs font-semibold overflow-x-auto">
        {[
          { id: 'overview', label: 'Tổng Quan & KPIs' },
          { id: 'bookings', label: `Quản Lý Booking (${bookings.length})` },
          { id: 'products', label: 'Sản Phẩm & Lịch Chỗ' },
          { id: 'promotions', label: 'Chính Sách Khuyến Mại' },
          { id: 'inquiries', label: `Lead Khách B2B & Custom (${customInquiries.length + corporateInquiries.length})` },
          { id: 'financial', label: 'Báo Cáo Tài Chính & Vốn Vay' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id as typeof activeAdminTab)}
            className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeAdminTab === tab.id
                ? 'bg-[#1B3C2A] text-white shadow-xs'
                : 'text-[#635547] hover:text-[#1B3C2A]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW & KPIS */}
      {activeAdminTab === 'overview' && (
        <div className="space-y-8">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="text-xs text-[#8A7D70] font-medium flex items-center justify-between">
                <span>Tổng Doanh Thu</span>
                <DollarSign className="w-4 h-4 text-emerald-700" />
              </span>
              <p className="font-mono text-2xl font-bold text-[#1B3C2A]">
                {totalRevenue.toLocaleString('vi-VN')} đ
              </p>
              <span className="text-[11px] text-[#2A5C3D] flex items-center space-x-1">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Mục tiêu năm 1: 1.8 Tỷ VNĐ (đạt {(totalRevenue / 18000000).toFixed(1)}%)</span>
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="text-xs text-[#8A7D70] font-medium flex items-center justify-between">
                <span>Tổng Số Booking</span>
                <Ticket className="w-4 h-4 text-[#2A5C3D]" />
              </span>
              <p className="font-mono text-2xl font-bold text-[#1B3C2A]">
                {totalBookings} đơn
              </p>
              <span className="text-[11px] text-[#6E8072]">
                {bookings.filter(b => b.status === 'confirmed' || b.status === 'paid').length} đơn đã xác nhận
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="text-xs text-[#8A7D70] font-medium flex items-center justify-between">
                <span>Tổng Lượng Khách</span>
                <Users className="w-4 h-4 text-[#2A5C3D]" />
              </span>
              <p className="font-mono text-2xl font-bold text-[#1B3C2A]">
                {totalGuests} khách
              </p>
              <span className="text-[11px] text-[#6E8072]">
                Kế hoạch năm đầu: 500 – 600 khách
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="text-xs text-[#8A7D70] font-medium flex items-center justify-between">
                <span>Tỷ Lệ Lấp Đầy (Occupancy)</span>
                <TrendingUp className="w-4 h-4 text-[#2A5C3D]" />
              </span>
              <p className="font-mono text-2xl font-bold text-[#1B3C2A]">
                {occupancyRate}%
              </p>
              <span className="text-[11px] text-[#2A5C3D]">
                Đã đặt {allBookedSeats} / {allTotalSeats} chỗ khả dụng
              </span>
            </div>
          </div>

          {/* Revenue by Product & Best Sellers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
                Doanh Thu Theo Dòng Sản Phẩm
              </h3>
              <div className="space-y-3">
                {products.map(p => {
                  const productRev = bookings
                    .filter(b => b.experienceId === p.id && b.status !== 'cancelled')
                    .reduce((sum, b) => sum + b.finalTotal, 0);
                  const percentOfTotal = totalRevenue > 0 ? Math.round((productRev / totalRevenue) * 100) : 0;

                  return (
                    <div key={p.id} className="space-y-1 text-xs">
                      <div className="flex justify-between text-[#38483B]">
                        <span className="font-semibold">{p.name}</span>
                        <span className="font-mono font-bold">{productRev.toLocaleString('vi-VN')} đ ({percentOfTotal}%)</span>
                      </div>
                      <div className="w-full bg-[#EFE9DF] h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#1B3C2A] h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(4, percentOfTotal)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
                Hiệu Quả Chương Trình Khuyến Mại
              </h3>
              <div className="space-y-3 text-xs">
                {promotions.map(promo => {
                  const usedCount = bookings.filter(b => b.appliedPromotion?.code === promo.code).length;
                  return (
                    <div
                      key={promo.id}
                      className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E9E2D5] flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-bold text-[#1B3C2A]">{promo.code}</span>
                          <span className="text-[#6B5E51]">({promo.name})</span>
                        </div>
                        <span className="text-[11px] text-[#8A7D70]">{promo.condition}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-emerald-800">Giảm {promo.discountPercent}%</span>
                        <span className="text-[11px] text-[#8A7D70] block">{usedCount} lượt áp dụng</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BOOKINGS MANAGEMENT */}
      {activeAdminTab === 'bookings' && (
        <div className="space-y-5">
          {/* Controls bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#DFD7CA] flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72 text-xs">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#8A7D70]" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Tìm mã booking, tên khách, SĐT..."
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto text-xs">
              <span className="text-[#695D50] font-semibold whitespace-nowrap">Trạng thái:</span>
              <select
                value={bookingFilterStatus}
                onChange={e => setBookingFilterStatus(e.target.value)}
                className="p-2 rounded-lg border border-[#D5CCC0] bg-[#FAF8F5] focus:outline-none"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="confirmed">Đã xác nhận</option>
                <option value="paid">Đã thanh toán</option>
                <option value="completed">Đã hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
          </div>

          {/* Bookings Table */}
          <div className="bg-white rounded-2xl border border-[#DFD7CA] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#FAF8F5] text-[#55473A] border-b border-[#E7DFD2] font-semibold">
                  <tr>
                    <th className="p-4">Mã Booking</th>
                    <th className="p-4">Khách Hàng</th>
                    <th className="p-4">Hành Trình</th>
                    <th className="p-4">Ngày Đi</th>
                    <th className="p-4">Khách</th>
                    <th className="p-4">Tổng Tiền</th>
                    <th className="p-4">Trạng Thái</th>
                    <th className="p-4 text-right">Cập Nhật Trạng Thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2ECE1]">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-xs text-[#8A7D70]">
                        Không tìm thấy booking phù hợp với tìm kiếm.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map(b => (
                      <tr key={b.id} className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="p-4 font-mono font-bold text-[#1B3C2A] whitespace-nowrap">
                          {b.bookingCode}
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-[#1B3C2A]">{b.contactName}</p>
                          <p className="text-[11px] text-[#7A6D60]">{b.contactPhone}</p>
                        </td>
                        <td className="p-4 max-w-[180px] truncate" title={b.experienceName}>
                          {b.experienceName}
                        </td>
                        <td className="p-4 whitespace-nowrap font-mono">{b.departureDate}</td>
                        <td className="p-4 font-mono">{b.guestCount} người</td>
                        <td className="p-4 font-mono font-bold text-[#1B3C2A] whitespace-nowrap">
                          {b.finalTotal.toLocaleString('vi-VN')} đ
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              b.status === 'paid'
                                ? 'bg-emerald-100 text-emerald-800'
                                : b.status === 'confirmed'
                                ? 'bg-blue-100 text-blue-800'
                                : b.status === 'pending'
                                ? 'bg-amber-100 text-amber-800'
                                : b.status === 'completed'
                                ? 'bg-neutral-100 text-neutral-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {b.status === 'paid'
                              ? 'Đã Thanh Toán'
                              : b.status === 'confirmed'
                              ? 'Đã Xác Nhận'
                              : b.status === 'pending'
                              ? 'Chờ Xác Nhận'
                              : b.status === 'completed'
                              ? 'Hoàn Thành'
                              : 'Đã Hủy'}
                          </span>
                        </td>
                        <td className="p-4 text-right whitespace-nowrap">
                          <select
                            value={b.status}
                            onChange={e => updateBookingStatus(b.id, e.target.value as Booking['status'])}
                            className="p-1 rounded border border-[#D5CCC0] text-[11px] bg-white cursor-pointer"
                          >
                            <option value="pending">Chờ xác nhận</option>
                            <option value="confirmed">Đã xác nhận</option>
                            <option value="paid">Đã thanh toán</option>
                            <option value="completed">Đã hoàn thành</option>
                            <option value="cancelled">Đã hủy</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRODUCTS & SEAT SLOTS */}
      {activeAdminTab === 'products' && (
        <div className="space-y-8">
          {/* Product pricing editor */}
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Quản Lý Bảng Giá Tour Công Bố & Định Mức Suất
            </h3>

            <div className="divide-y divide-[#F0EBE1]">
              {products.map(p => (
                <div key={p.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-[#1B3C2A]">{p.name}</h4>
                    <p className="text-xs text-[#7A6D60]">{p.duration} · {p.location} · {p.groupSize}</p>
                    <span className="text-[11px] text-[#2A5C3D] mt-0.5 block">Giá vốn cơ bản: {p.baseCost.toLocaleString('vi-VN')} đ</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    {editingPriceProductId === p.id ? (
                      <div className="flex items-center space-x-2 text-xs">
                        <input
                          type="number"
                          step={50000}
                          value={tempPrice}
                          onChange={e => setTempPrice(parseInt(e.target.value) || 0)}
                          className="w-36 p-1.5 rounded border border-[#1B3C2A] font-mono font-bold"
                        />
                        <button
                          onClick={() => handleSavePrice(p.id)}
                          className="px-3 py-1.5 bg-[#1B3C2A] text-white rounded font-semibold cursor-pointer"
                        >
                          Lưu
                        </button>
                        <button
                          onClick={() => setEditingPriceProductId(null)}
                          className="px-2 py-1.5 text-[#695D50] cursor-pointer"
                        >
                          Hủy
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-base font-bold text-[#1B3C2A]">
                          {p.price.toLocaleString('vi-VN')} đ
                        </span>
                        <button
                          onClick={() => {
                            setEditingPriceProductId(p.id);
                            setTempPrice(p.price);
                          }}
                          className="p-1.5 rounded hover:bg-[#F2ECE1] text-[#695D50] hover:text-[#1B3C2A] cursor-pointer"
                          title="Sửa giá niêm yết"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add departure date section */}
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Mở Thêm Lịch Khởi Hành Cho Tour
            </h3>
            {depSuccessMsg && (
              <p className="text-xs text-emerald-800 font-semibold">{depSuccessMsg}</p>
            )}

            <form onSubmit={handleAddDeparture} className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-[#695D50] font-semibold mb-1">Chọn Tour</label>
                <select
                  value={newDepProductId}
                  onChange={e => setNewDepProductId(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] bg-[#FAF8F5]"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#695D50] font-semibold mb-1">Ngày Khởi Hành</label>
                <input
                  type="date"
                  required
                  value={newDepDate}
                  onChange={e => setNewDepDate(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0]"
                />
              </div>

              <div>
                <label className="block text-[#695D50] font-semibold mb-1">Số Chỗ Tối Đa</label>
                <input
                  type="number"
                  min={4}
                  max={40}
                  value={newDepSeats}
                  onChange={e => setNewDepSeats(parseInt(e.target.value) || 12)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0]"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#1B3C2A] text-white rounded-lg font-semibold cursor-pointer hover:bg-[#255238] transition-colors"
                >
                  + Mở Đợt Mới
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TAB 4: PROMOTIONS */}
      {activeAdminTab === 'promotions' && (
        <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-5">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Quản Trị Chiến Dịch Khuyến Mại & Tỷ Lệ Chiết Khấu
            </h3>
            <p className="text-xs text-[#7A6D60] mt-1">
              Hệ thống tự động kiểm soát không cho phép cộng dồn mã. Bạn có thể điều chỉnh % chiết khấu của từng chiến dịch.
            </p>
          </div>

          <div className="divide-y divide-[#F0EBE1]">
            {promotions.map(promo => (
              <div key={promo.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-sm text-[#1B3C2A]">{promo.code}</span>
                    <span className="font-semibold text-[#3D4F41]">({promo.name})</span>
                  </div>
                  <p className="text-[#6B5E51]">{promo.description}</p>
                  <span className="text-[11px] text-[#8A7D70]">Điều kiện: {promo.condition}</span>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-[#695D50]">Mức giảm:</span>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={promo.discountPercent}
                    onChange={e => updatePromotionDiscount(promo.id, parseInt(e.target.value) || 0)}
                    className="w-16 p-1.5 rounded border border-[#D5CCC0] text-center font-mono font-bold"
                  />
                  <span className="font-bold">%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: B2B LEADS & CUSTOM INQUIRIES */}
      {activeAdminTab === 'inquiries' && (
        <div className="space-y-8">
          {/* Corporate Requests */}
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Yêu Cầu Báo Giá Doanh Nghiệp (Corporate Wellness Leads)
            </h3>
            <div className="divide-y divide-[#F0EBE1]">
              {corporateInquiries.map(inq => (
                <div key={inq.id} className="py-4 space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-[#1B3C2A]">{inq.companyName}</h4>
                      <p className="text-[#6E8072]">
                        Người liên hệ: {inq.contactPerson} ({inq.position}) · SĐT: {inq.phone} · Email: {inq.email}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-800">
                      {inq.status === 'quoted' ? 'Đã Báo Giá' : 'Mới Tiếp Nhận'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-[11px] text-[#55473A]">
                    <span>Quy mô: <strong>{inq.participantCount} người</strong></span>
                    <span>·</span>
                    <span>Ngày dự kiến: <strong>{inq.targetDate}</strong></span>
                    <span>·</span>
                    <span>Ngân sách: <strong>{inq.budgetTier}</strong></span>
                  </div>
                  {inq.specialNotes && (
                    <p className="p-2 bg-[#FAF8F5] rounded text-[11px] text-[#7A6D60]">
                      Ghi chú: {inq.specialNotes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Requests */}
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Yêu Cầu Thiết Kế Chuyến Đi Riêng (Customized Escape)
            </h3>
            <div className="divide-y divide-[#F0EBE1]">
              {customInquiries.map(inq => (
                <div key={inq.id} className="py-4 space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-[#1B3C2A]">{inq.fullName}</h4>
                      <p className="text-[#6E8072]">SĐT: {inq.phone} · Email: {inq.email}</p>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                      {inq.status === 'consulting' ? 'Đang Tư Vấn' : 'Mới Tiếp Nhận'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-[11px] text-[#55473A]">
                    <span>Điểm đến: <strong>{inq.destination}</strong></span>
                    <span>·</span>
                    <span>Số người: <strong>{inq.guestsCount}</strong></span>
                    <span>·</span>
                    <span>Khởi hành: <strong>{inq.startDate} ({inq.duration})</strong></span>
                  </div>
                  <p className="text-[11px] text-[#526356]">
                    Hoạt động chọn: {inq.selectedActivities.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: FINANCIAL PLAN & VPBANK LOAN TRACKING */}
      {activeAdminTab === 'financial' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DFD7CA] space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
                Đề Án Khởi Nghiệp Công Ty TNHH Green Escape
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B3C2A] mt-1">
                Kế Hoạch Vốn Khởi Sự & Nghĩa Vụ Vay Ngân Hàng VPBank
              </h3>
            </div>

            {/* Capital Structure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7DFD2]">
                <span className="text-[#8A7D70]">Tổng Vốn Khởi Sự</span>
                <strong className="block text-lg font-mono text-[#1B3C2A] mt-1">250.000.000 đ</strong>
                <span className="text-[11px] text-[#6E8072]">Capex (67tr) + Opex (156.6tr) + Dự phòng</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7DFD2]">
                <span className="text-[#8A7D70]">Vốn Tự Có Sáng Lập</span>
                <strong className="block text-lg font-mono text-[#1B3C2A] mt-1">75.000.000 đ</strong>
                <span className="text-[11px] text-[#6E8072]">Tỷ lệ 30% tổng nguồn vốn</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7DFD2]">
                <span className="text-[#8A7D70]">Gia Đình & Bạn Bè Góp</span>
                <strong className="block text-lg font-mono text-[#1B3C2A] mt-1">75.000.000 đ</strong>
                <span className="text-[11px] text-[#6E8072]">Tỷ lệ 30% (50tr GĐ + 25tr Bạn bè)</span>
              </div>

              <div className="p-4 rounded-xl bg-[#EAF2EC] border border-[#C5DBCB]">
                <span className="text-[#2A593A] font-semibold">Vốn Vay VPBank SME</span>
                <strong className="block text-lg font-mono text-[#1B3C2A] mt-1">100.000.000 đ</strong>
                <span className="text-[11px] text-[#2A593A]">Lãi suất 9.84%/năm · Kỳ hạn 5 năm</span>
              </div>
            </div>

            {/* VPBank Loan Schedule Table */}
            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-base font-bold text-[#1B3C2A]">
                Lịch Trình Trả Nợ Gốc & Lãi Vay VPBank (Dư nợ giảm dần)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#FAF8F5] text-[#55473A] border-b border-[#E7DFD2]">
                    <tr>
                      <th className="p-3">Năm</th>
                      <th className="p-3 font-mono">Dư Nợ Đầu Năm</th>
                      <th className="p-3 font-mono">Gốc Phải Trả</th>
                      <th className="p-3 font-mono">Lãi Suất</th>
                      <th className="p-3 font-mono">Tiền Lãi</th>
                      <th className="p-3 font-mono font-bold">Tổng Tiền Trả</th>
                      <th className="p-3 font-mono">Dư Nợ Cuối Năm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2ECE1] font-mono">
                    <tr>
                      <td className="p-3 font-sans font-semibold">Năm 1</td>
                      <td className="p-3">100.000.000 đ</td>
                      <td className="p-3">20.000.000 đ</td>
                      <td className="p-3">9.84%</td>
                      <td className="p-3">9.840.000 đ</td>
                      <td className="p-3 font-bold text-[#1B3C2A]">29.840.000 đ</td>
                      <td className="p-3">80.000.000 đ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-semibold">Năm 2</td>
                      <td className="p-3">80.000.000 đ</td>
                      <td className="p-3">20.000.000 đ</td>
                      <td className="p-3">9.84%</td>
                      <td className="p-3">7.872.000 đ</td>
                      <td className="p-3 font-bold text-[#1B3C2A]">27.872.000 đ</td>
                      <td className="p-3">60.000.000 đ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-semibold">Năm 3</td>
                      <td className="p-3">60.000.000 đ</td>
                      <td className="p-3">20.000.000 đ</td>
                      <td className="p-3">9.84%</td>
                      <td className="p-3">5.904.000 đ</td>
                      <td className="p-3 font-bold text-[#1B3C2A]">25.904.000 đ</td>
                      <td className="p-3">40.000.000 đ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-semibold">Năm 4</td>
                      <td className="p-3">40.000.000 đ</td>
                      <td className="p-3">20.000.000 đ</td>
                      <td className="p-3">9.84%</td>
                      <td className="p-3">3.936.000 đ</td>
                      <td className="p-3 font-bold text-[#1B3C2A]">23.936.000 đ</td>
                      <td className="p-3">20.000.000 đ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-semibold">Năm 5</td>
                      <td className="p-3">20.000.000 đ</td>
                      <td className="p-3">20.000.000 đ</td>
                      <td className="p-3">9.84%</td>
                      <td className="p-3">1.968.000 đ</td>
                      <td className="p-3 font-bold text-[#1B3C2A]">21.968.000 đ</td>
                      <td className="p-3 text-emerald-800 font-bold">0 đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
