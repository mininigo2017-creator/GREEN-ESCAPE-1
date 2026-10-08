import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Users,
  Heart,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Send,
  Calendar,
  FileSpreadsheet
} from 'lucide-react';

export const CorporateWellnessView: React.FC = () => {
  const { submitCorporateInquiry } = useApp();

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [position, setPosition] = useState('HR Manager');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [participantCount, setParticipantCount] = useState(30);
  const [targetDate, setTargetDate] = useState('2026-11-20');
  const [budgetTier, setBudgetTier] = useState('3.500.000đ - 4.500.000đ / nhân sự');
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([
    'Chữa lành áp lực & Burnout',
    'Teambuilding gắn kết lắng nghe',
    'Sound Bath tập thể'
  ]);
  const [specialNotes, setSpecialNotes] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const objectiveOptions = [
    'Chữa lành áp lực & Burnout',
    'Teambuilding gắn kết lắng nghe',
    'Sound Bath tập thể',
    'Tọa đàm chiến lược ngoài trời',
    'Tắm rừng tăng cường đề kháng',
    'Tập huấn quản lý cân bằng cảm xúc'
  ];

  const toggleObjective = (obj: string) => {
    setSelectedObjectives(prev =>
      prev.includes(obj) ? prev.filter(o => o !== obj) : [...prev, obj]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !contactPerson.trim() || !email.trim() || !phone.trim()) {
      setFormError('Vui lòng điền đầy đủ Tên công ty, Người liên hệ, Email và Số điện thoại.');
      return;
    }

    submitCorporateInquiry({
      companyName,
      contactPerson,
      position,
      email,
      phone,
      participantCount,
      targetDate,
      budgetTier,
      selectedObjectives,
      specialNotes
    });

    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO B2B */}
      <section className="bg-[#142A1D] text-white py-20 border-b border-[#244632]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8FA893] block">
              Giải Pháp Nghỉ Dưỡng Sức Khỏe Tinh Thần Doanh Nghiệp
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Corporate Wellness Retreat
            </h1>
            <p className="text-sm sm:text-base text-[#D3E3D5] leading-relaxed">
              Tạm biệt teambuilding ồn ào và rượu bia say xỉn. Hãy mang đến cho đội ngũ của bạn một kỳ nghỉ phục hồi sức khỏe tinh thần, chữa lành hội chứng Burnout và thắt chặt tình đồng đội qua sự thấu hiểu chân thành.
            </p>
            <div className="pt-2">
              <a
                href="#quote-form"
                className="inline-block px-8 py-3.5 text-xs font-semibold tracking-wider text-[#142A1D] bg-[#FAF8F5] hover:bg-white rounded-full shadow-lg transition-all cursor-pointer"
              >
                YÊU CẦU BÁO GIÁ DOANH NGHIỆP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LỢI ÍCH CỦA CORPORATE RETREAT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
            Giá Trị Doanh Nghiệp
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1B3C2A]">
            Lợi Ích Thực Tế Cho Tổ Chức Của Bạn
          </h2>
          <p className="text-xs text-[#526356]">
            Đầu tư cho sức khỏe tinh thần nhân viên mang lại ROI vượt trội cho doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-[#DFD7CA] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#234B34]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Giải Tỏa Stress & Burnout</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Theo nghiên cứu, 65% nhân sự văn phòng cảm thấy kiệt sức sau các quý cao điểm. Retreat giúp giải phóng tắc nghẽn năng lượng, cải thiện giấc ngủ và tinh thần làm việc.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#DFD7CA] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#234B34]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Gắn Kết Chân Thành Không Ồn Ào</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Thay vì các trò chơi ganh đua áp lực, hoạt động "Vòng tròn lắng nghe" và chia sẻ bên lửa trại giúp xóa bỏ khoảng cách thứ bậc, tạo dựng niềm tin sâu sắc giữa các phòng ban.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#DFD7CA] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#234B34]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Đột Phá Sáng Tạo & Hiệu Suất</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Tâm trí tĩnh lặng giữa thiên nhiên là mảnh đất màu mỡ nhất cho những ý tưởng chiến lược mới. Không gian mở tạo cảm hứng thảo luận định hướng mục tiêu bứt phá.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CÁC GÓI QUY MÔ ĐOÀN */}
      <section className="bg-[#FAF8F5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h3 className="font-serif text-2xl font-bold text-[#1B3C2A] text-center">
          Các Gói Dịch Vụ Theo Quy Mô Doanh Nghiệp
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <span className="text-xs font-bold text-[#2A5C3D] uppercase block">Gói Khởi Điểm</span>
            <h4 className="font-serif text-xl font-bold text-[#1B3C2A]">Đoàn 15 – 30 Nhân Sự</h4>
            <p className="text-xs text-[#6B5E51]">Phù hợp cho các Startup, Ban Giám Đốc hoặc Team cốt lõi của công ty.</p>
            <ul className="space-y-2 text-xs text-[#4F6052] pt-2 border-t border-[#F0EBE1]">
              <li>• Bao trọn Eco-lodge nguyên căn biệt lập</li>
              <li>• 1 Chuyên gia Tâm lý & 1 HLV Yoga đồng hành</li>
              <li>• Thực đơn thực dưỡng organic 100%</li>
            </ul>
            <p className="text-xs font-mono font-bold text-[#1B3C2A] pt-2">Từ 3.500.000 đ / người</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-[#1B3C2A] space-y-4 shadow-sm relative">
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#1B3C2A] text-white absolute top-4 right-4">
              Phổ Biến Nhất
            </span>
            <span className="text-xs font-bold text-[#2A5C3D] uppercase block">Gói Doanh Nghiệp</span>
            <h4 className="font-serif text-xl font-bold text-[#1B3C2A]">Đoàn 30 – 60 Nhân Sự</h4>
            <p className="text-xs text-[#6B5E51]">Dành cho công ty quy mô vừa, toàn thể nhân viên chi nhánh.</p>
            <ul className="space-y-2 text-xs text-[#4F6052] pt-2 border-t border-[#F0EBE1]">
              <li>• Resort sinh thái bao trọn sườn đồi</li>
              <li>• Workshop Sound Bath tập thể & Teambuilding vô ngôn</li>
              <li>• Đêm nhạc mộc Acoustic & Lửa trại kết nối</li>
            </ul>
            <p className="text-xs font-mono font-bold text-[#1B3C2A] pt-2">Chiết khấu 7% – 10% theo hợp đồng</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <span className="text-xs font-bold text-[#2A5C3D] uppercase block">Gói Tùy Chỉnh VIP</span>
            <h4 className="font-serif text-xl font-bold text-[#1B3C2A]">Đoàn Trên 60 Nhân Sự</h4>
            <p className="text-xs text-[#6B5E51]">Tập đoàn lớn, hội nghị kết hợp nghỉ dưỡng cao cấp.</p>
            <ul className="space-y-2 text-xs text-[#4F6052] pt-2 border-t border-[#F0EBE1]">
              <li>• Thiết kế kịch bản độc quyền theo văn hóa doanh nghiệp</li>
              <li>• Hệ thống âm thanh, ánh sáng thiên nhiên chuyên nghiệp</li>
              <li>• Báo cáo khảo sát NPS và mức độ gắn kết sau chuyến đi</li>
            </ul>
            <p className="text-xs font-mono font-bold text-[#1B3C2A] pt-2">Báo giá may đo theo đề án</p>
          </div>
        </div>
      </section>

      {/* 4. FORM YÊU CẦU BÁO GIÁ */}
      <section id="quote-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#DFD7CA] shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
              Báo Giá Nhanh Chóng
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3C2A]">
              Yêu Cầu Báo Giá Corporate Retreat
            </h3>
            <p className="text-xs text-[#526356]">
              Điền thông tin sơ bộ, Green Escape sẽ gửi đề xuất kịch bản chi tiết và báo giá trong 24h làm việc.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#25633C] mx-auto" />
              <h4 className="font-serif text-xl font-bold text-[#1B3C2A]">
                Yêu cầu báo giá đã được chuyển đến phòng B2B!
              </h4>
              <p className="text-xs text-[#526356] max-w-md mx-auto">
                Chuyên viên tư vấn Corporate của Green Escape sẽ gọi điện trao đổi trực tiếp và gửi bản kế hoạch qua email của bạn trong vòng 24 giờ.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 text-xs font-semibold text-white bg-[#1B3C2A] rounded-full cursor-pointer"
              >
                Gửi yêu cầu bổ sung
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-lg">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Tên công ty / Tổ chức *</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    placeholder="Ví dụ: Công ty Cổ phần NextWave Tech"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Họ tên người liên hệ *</label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={e => setContactPerson(e.target.value)}
                    placeholder="Ví dụ: Vũ Đức Nam"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Chức vụ phụ trách</label>
                  <input
                    type="text"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                    placeholder="Ví dụ: HR Manager, CEO, C&B Lead"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Số điện thoại liên hệ *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="0919 888 999"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Email nhận báo giá *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="nam.vu@nextwave.tech"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Số lượng nhân sự dự kiến</label>
                  <input
                    type="number"
                    min={10}
                    value={participantCount}
                    onChange={e => setParticipantCount(parseInt(e.target.value) || 10)}
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>
              </div>

              {/* Objectives */}
              <div className="space-y-2 text-xs">
                <label className="block font-semibold text-[#54463A]">Mục tiêu doanh nghiệp mong muốn:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {objectiveOptions.map(obj => {
                    const isSelected = selectedObjectives.includes(obj);
                    return (
                      <div
                        key={obj}
                        onClick={() => toggleObjective(obj)}
                        className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#1B3C2A] bg-[#FAF8F5] font-semibold text-[#1B3C2A]'
                            : 'border-[#DFD7CA] text-[#695D50]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{obj}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-semibold text-[#54463A] mb-1">Yêu cầu đặc biệt (Hóa đơn GTGT, ăn chay, địa điểm ưu tiên...)</label>
                <textarea
                  rows={3}
                  value={specialNotes}
                  onChange={e => setSpecialNotes(e.target.value)}
                  placeholder="Ghi chú thêm về ngân sách, ngày dự kiến hoặc mong muốn riêng của công ty..."
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full shadow-md transition-all cursor-pointer"
                >
                  GỬI YÊU CẦU BÁO GIÁ (PHẢN HỒI TRONG 24H)
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
