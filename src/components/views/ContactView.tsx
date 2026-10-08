import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && email) {
      setSent(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
          Kết Nối Với Chúng Tôi
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B3C2A]">
          Liên Hệ Green Escape
        </h1>
        <p className="text-sm text-[#556958]">
          Đội ngũ chuyên viên tư vấn luôn sẵn sàng lắng nghe mọi băn khoăn và hỗ trợ bạn thiết kế kỳ nghỉ lý tưởng.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DFD7CA] space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#1B3C2A]">
              Thông Tin Văn Phòng
            </h3>

            <div className="space-y-4 text-xs text-[#526356]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2A5C3D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1B3C2A] block text-sm">Văn Phòng Trụ Sở Hà Nội</strong>
                  <span>Số 28 Phố Tràng Thi, Phường Hàng Trống, Quận Hoàn Kiếm, TP. Hà Nội</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2A5C3D] shrink-0" />
                <div>
                  <strong className="text-[#1B3C2A] block text-sm">Đường Dây Nóng (Hotline)</strong>
                  <span>0988 567 890 (Hỗ trợ 24/7)</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2A5C3D] shrink-0" />
                <div>
                  <strong className="text-[#1B3C2A] block text-sm">Thư Điện Tử (Email)</strong>
                  <span>contact@greenescape.vn / booking@greenescape.vn</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#2A5C3D] shrink-0" />
                <div>
                  <strong className="text-[#1B3C2A] block text-sm">Giờ Làm Việc</strong>
                  <span>Thứ 2 – Thứ 6: 08:30 – 18:00 · Thứ 7 – CN: Trực tour thực địa</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE1] space-y-2">
              <span className="text-xs font-semibold text-[#1B3C2A] block">Kênh Mạng Xã Hội:</span>
              <div className="flex items-center space-x-3 text-xs text-[#5C6E61]">
                <span className="flex items-center space-x-1">
                  <Facebook className="w-4 h-4 text-[#2A5C3D]" />
                  <span>fb.com/greenescape.vietnam</span>
                </span>
                <span>·</span>
                <span className="flex items-center space-x-1">
                  <Instagram className="w-4 h-4 text-[#2A5C3D]" />
                  <span>@greenescape.vietnam</span>
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Map card */}
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DFD7CA] space-y-3">
            <h4 className="text-xs font-bold text-[#1B3C2A] uppercase">
              Bản Đồ Tuyến Điểm Retreat Của Green Escape
            </h4>
            <div className="p-4 bg-white rounded-xl border border-[#E5DDD0] text-xs text-[#526356] space-y-2">
              <p>• <strong>Trụ sở Hà Nội:</strong> 28 Tràng Thi, Hoàn Kiếm (Điểm tập trung xuất phát)</p>
              <p>• <strong>Ba Vì Eco-Cabin:</strong> Cách Hà Nội 55km (1.5 giờ)</p>
              <p>• <strong>Mai Châu Valley Lodge:</strong> Cách Hà Nội 135km (3.0 giờ)</p>
              <p>• <strong>Ninh Bình Sanctuary:</strong> Cách Hà Nội 95km (1.8 giờ)</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#DFD7CA] shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1B3C2A]">
                Gửi Lời Nhắn Đến Green Escape
              </h3>
              <p className="text-xs text-[#6B7D6E] mt-1">
                Chúng tôi sẽ phản hồi lại bạn qua số điện thoại hoặc email trong vòng 2 giờ làm việc.
              </p>
            </div>

            {sent ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25633C] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#1B3C2A]">
                  Tin nhắn của bạn đã được gửi thành công!
                </h4>
                <p className="text-xs text-[#526356]">
                  Chuyên viên CSKH Green Escape sẽ liên hệ lại với bạn sớm nhất.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 text-xs font-semibold text-white bg-[#1B3C2A] rounded-full cursor-pointer"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Họ và tên của bạn *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#54463A] mb-1">Số điện thoại *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#54463A] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="email@vidu.com"
                      className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#54463A] mb-1">Nội dung bạn quan tâm</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Bạn muốn hỏi về lịch khởi hành, thực đơn ăn uống hay các dịch vụ bổ sung?"
                    className="w-full p-2.5 rounded-lg border border-[#D5CCC0] focus:border-[#1B3C2A] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full transition-all cursor-pointer"
                >
                  GỬI TIN NHẮN TƯ VẤN
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
