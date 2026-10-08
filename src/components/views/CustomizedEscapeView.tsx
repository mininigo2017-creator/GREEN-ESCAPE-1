import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Users,
  Compass,
  Home,
  Check,
  Send,
  Leaf
} from 'lucide-react';

export const CustomizedEscapeView: React.FC = () => {
  const { submitCustomInquiry } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guestsCount, setGuestsCount] = useState(4);
  const [destination, setDestination] = useState('Ba Vì, Hà Nội');
  const [startDate, setStartDate] = useState('2026-11-14');
  const [duration, setDuration] = useState('2N1Đ');
  const [budgetPerPerson, setBudgetPerPerson] = useState('4.200.000đ - 5.500.000đ / khách');
  const [accommodationType, setAccommodationType] = useState('Eco-lodge nguyên căn riêng tư');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([
    'Yoga phục hồi',
    'Thiền chuông',
    'Digital Detox',
    'Làm vườn organic'
  ]);
  const [specialRequests, setSpecialRequests] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const activitiesOptions = [
    { id: 'yoga', label: 'Yoga hơi thở & phục hồi', desc: 'HLV chuyên sâu hướng dẫn' },
    { id: 'thien', label: 'Thiền chuông Tây Tạng', desc: 'Thanh lọc tâm trí & ngủ sâu' },
    { id: 'detox', label: 'Digital Detox trọn vẹn', desc: 'Bàn giao thiết bị số' },
    { id: 'trekking', label: 'Trekking nhẹ sườn rừng', desc: 'Vận động & tắm rừng' },
    { id: 'nature', label: 'Hoạt động thiên nhiên', desc: 'Cắm trại ngắm hoàng hôn' },
    { id: 'culture', label: 'Văn hóa địa phương', desc: 'Dệt thổ cẩm, học nấu ăn' },
    { id: 'farming', label: 'Làm vườn & Thu hoạch', desc: 'Chạm tay vào đất mẹ' },
    { id: 'workshop', label: 'Workshop nến thơm / trà', desc: 'Tự làm sản phẩm mang về' }
  ];

  const toggleActivity = (label: string) => {
    setSelectedActivities(prev =>
      prev.includes(label) ? prev.filter(a => a !== label) : [...prev, label]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Email.');
      return;
    }

    submitCustomInquiry({
      fullName,
      phone,
      email,
      guestsCount,
      destination,
      startDate,
      duration,
      budgetPerPerson,
      accommodationType,
      selectedActivities,
      specialRequests
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
          Thiết Kế Độc Bản
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B3C2A]">
          Customized Escape
        </h1>
        <p className="text-sm text-[#526356] leading-relaxed">
          May đo kỳ nghỉ retreat theo đúng câu chuyện, nhịp sinh học và sở thích của riêng cặp đôi, gia đình hoặc nhóm bạn thân.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-[#DFD7CA] text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#25633C] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1B3C2A]">
              Yêu cầu của bạn đã được ghi nhận!
            </h2>
            <p className="text-sm text-[#4E6152] mt-3 max-w-lg mx-auto leading-relaxed">
              "Yêu cầu của bạn đã được ghi nhận. Đội ngũ Green Escape sẽ liên hệ với bạn trong vòng 24 giờ để trao đổi chi tiết và gửi bản dự thảo lịch trình cá nhân hóa."
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full transition-all cursor-pointer"
          >
            Gửi yêu cầu thiết kế khác
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-[#DFD7CA] shadow-sm space-y-8">
          {errorMsg && (
            <div className="p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-lg">
              {errorMsg}
            </div>
          )}

          {/* Section 1: Quy mô & Tuyến điểm */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A] border-b border-[#F2ECE1] pb-2">
              1. Thông Tin Nhóm & Tuyến Điểm
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Số lượng thành viên</label>
                <input
                  type="number"
                  min={2}
                  max={25}
                  value={guestsCount}
                  onChange={e => setGuestsCount(parseInt(e.target.value) || 2)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Điểm đến mong muốn</label>
                <select
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none bg-[#FAF8F5]"
                >
                  <option value="Ba Vì, Hà Nội">Ba Vì (Hà Nội · 1.5h)</option>
                  <option value="Mai Châu, Hòa Bình">Mai Châu (Hòa Bình · 3h)</option>
                  <option value="Ninh Bình">Ninh Bình (1.8h)</option>
                  <option value="Mộc Châu, Sơn La">Mộc Châu (Sơn La · 4h)</option>
                  <option value="Sapa / Hà Giang">Sapa / Hà Giang</option>
                  <option value="Tư vấn giúp tôi">Green Escape tư vấn giúp tôi</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Thời lượng mong muốn</label>
                <select
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none bg-[#FAF8F5]"
                >
                  <option value="2N1Đ">2 Ngày 1 Đêm (Cuối tuần)</option>
                  <option value="3N2Đ">3 Ngày 2 Đêm (Thư thả)</option>
                  <option value="Linh hoạt">Linh hoạt theo yêu cầu</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Ngày khởi hành dự kiến</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Ngân sách dự kiến / khách</label>
                <select
                  value={budgetPerPerson}
                  onChange={e => setBudgetPerPerson(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none bg-[#FAF8F5]"
                >
                  <option value="4.200.000đ - 5.500.000đ / khách">4.200.000đ – 5.500.000đ / khách</option>
                  <option value="5.500.000đ - 7.000.000đ / khách">5.500.000đ – 7.000.000đ / khách (Cao cấp)</option>
                  <option value="> 7.000.000đ / khách">&gt; 7.000.000đ / khách (Độc bản VIP)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Loại lưu trú */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A] border-b border-[#F2ECE1] pb-2">
              2. Tiêu Chuẩn Nơi Lưu Trú
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Eco-lodge nguyên căn riêng tư', desc: 'Biệt lập 100%, có sân vườn & hiên trà' },
                { title: 'Homestay sinh thái phong cách Vintage', desc: 'Mộc mạc, gần gũi với thiên nhiên' },
                { title: 'Resort nghỉ dưỡng xanh 4-5 sao', desc: 'Đầy đủ tiện ích cao cấp, hồ bơi khoáng' }
              ].map(opt => (
                <div
                  key={opt.title}
                  onClick={() => setAccommodationType(opt.title)}
                  className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    accommodationType === opt.title
                      ? 'border-[#1B3C2A] bg-[#FAF8F5] ring-2 ring-[#1B3C2A]/20'
                      : 'border-[#DFD7CA] hover:border-[#1B3C2A]'
                  }`}
                >
                  <p className="font-bold text-[#1B3C2A]">{opt.title}</p>
                  <p className="text-[11px] text-[#7A6D60] mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hoạt động trải nghiệm */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A] border-b border-[#F2ECE1] pb-2">
              3. Chọn Các Hoạt Động Muốn Trải Nghiệm
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {activitiesOptions.map(act => {
                const isSelected = selectedActivities.includes(act.label);
                return (
                  <div
                    key={act.id}
                    onClick={() => toggleActivity(act.label)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#1B3C2A] bg-[#FAF8F5] ring-1 ring-[#1B3C2A]'
                        : 'border-[#DFD7CA] hover:border-[#BDB09E]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1B3C2A]">{act.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#2A5C3D]" />}
                      </div>
                      <p className="text-[10px] text-[#7A6D60] mt-1">{act.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Thông tin liên hệ */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A] border-b border-[#F2ECE1] pb-2">
              4. Thông Tin Người Đại Diện
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Họ và tên *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Ví dụ: Đặng Ngọc Linh"
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="0989 123 456"
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#54463A] mb-1">Email nhận đề án *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block font-semibold text-[#54463A] mb-1">Yêu cầu đặc biệt khác</label>
              <textarea
                rows={3}
                value={specialRequests}
                onChange={e => setSpecialRequests(e.target.value)}
                placeholder="Ví dụ: Có người cao tuổi, có trẻ nhỏ, kỷ niệm ngày cưới, thực đơn thuần chay..."
                className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="px-8 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full shadow-md transition-all cursor-pointer"
            >
              GỬI YÊU CẦU THIẾT KẾ (PHẢN HỒI TRONG 24H)
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
