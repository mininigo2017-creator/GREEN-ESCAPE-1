import React from 'react';
import { useApp } from '../../context/AppContext';
import { IMAGES } from '../../data/initialData';
import {
  Calendar,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Leaf,
  Coffee,
  CheckCircle,
  Star
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { navigateTo, openBookingModal, products } = useApp();

  const coreProducts = products.slice(0, 3);

  // Collect upcoming departures across all products
  const upcomingDepartures = products.flatMap(p =>
    p.departures.map(d => ({
      ...d,
      productName: p.name,
      productSlug: p.slug,
      productPrice: p.price,
      productId: p.id
    }))
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 5);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION (Full-bleed cinematic nature atmosphere) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Green Escape retreat thiên nhiên Ba Vì Mai Châu"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Measured gradient scrim to ensure 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D3DFD4] block mb-4">
            Du Lịch Trải Nghiệm & Healing Retreat Miền Bắc
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            Rời xa áp lực. <br />
            Trở về với chính mình.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#E8EFE8] font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Những chuyến retreat ngắn ngày để bạn nghỉ ngơi, kết nối và tái tạo năng lượng giữa thiên nhiên trong lành.
          </p>

          {/* Dual CTAs as requested */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('experiences')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-widest text-[#142A1D] bg-[#FAF8F5] hover:bg-[#F0EBE1] active:scale-95 transition-all rounded-full shadow-lg cursor-pointer whitespace-nowrap"
            >
              KHÁM PHÁ HÀNH TRÌNH
            </button>
            <button
              onClick={() => navigateTo('customized')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-widest text-white border border-white/60 hover:bg-white/10 active:scale-95 transition-all rounded-full backdrop-blur-xs cursor-pointer whitespace-nowrap"
            >
              THIẾT KẾ CHUYẾN ĐI RIÊNG
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-6 text-xs text-[#D3DFD4]">
            <span>Chỉ 1.5 – 3h từ Hà Nội</span>
            <span>·</span>
            <span>Digital Detox Tự Nguyện</span>
            <span>·</span>
            <span>Nhóm Nhỏ Giới Hạn</span>
          </div>
        </div>
      </section>

      {/* 2. GREEN ESCAPE LÀ GÌ? (Triết lý Disconnect - Reconnect - Recharge) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
              Về Green Escape
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3C2A] leading-tight">
              Không chỉ là một chuyến đi – đó là khoảng lặng để tái tạo.
            </h2>
            <p className="text-sm text-[#4A5D4E] leading-relaxed">
              Green Escape ra đời để mang lại một không gian và thời gian "đủ chậm", giúp người trẻ và dân văn phòng tạm rời bỏ màn hình máy tính, áp lực KPI và khói bụi đô thị. Chúng tôi không tổ chức tour du lịch đại trà chạy đua chỉ tiêu check-in.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="text-xs font-semibold tracking-wider text-[#1B3C2A] hover:text-[#2E6B47] flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Tìm hiểu thêm câu chuyện của chúng tôi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Pillars Bento Box */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E8EFE8] flex items-center justify-center text-[#234B34]">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Disconnect</h3>
              <p className="text-xs text-[#526356] leading-relaxed">
                Tạm niêm phong thiết bị số. Rời xa thông báo tin nhắn để các giác quan được thở lại cùng đất trời.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E8EFE8] flex items-center justify-center text-[#234B34]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Reconnect</h3>
              <p className="text-xs text-[#526356] leading-relaxed">
                Kết nối chân thật với người thân, bạn bè và văn hóa bản địa qua khung dệt, làm vườn và đối thoại không màn hình.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E8EFE8] flex items-center justify-center text-[#234B34]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">Recharge</h3>
              <p className="text-xs text-[#526356] leading-relaxed">
                Nạp lại năng lượng tích cực từ ẩm thực thực dưỡng địa phương, yoga hơi thở và giấc ngủ sâu giữa rừng thông.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 TẦM NHÌN, SỨ MỆNH & GIÁ TRỊ CỐT LÕI (Vision, Mission & Core Values) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
            Định Hướng Chiến Lược & Tinh Thần Thương Hiệu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3C2A]">
            Tầm Nhìn, Sứ Mệnh & Giá Trị Cốt Lõi
          </h2>
          <p className="text-sm text-[#5C6E61]">
            Kim chỉ nam định hình từng bước chân, từng chén trà và từng trải nghiệm mà Green Escape trao gửi đến bạn.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#DFD7CA] space-y-4 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] flex items-center justify-center text-[#1B3C2A]">
              <Compass className="w-6 h-6 text-[#2A5C3D]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2A5C3D] uppercase tracking-wider block">
                Tầm Nhìn Của Green Escape
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B3C2A] mt-1">
                Ốc đảo bình yên hàng đầu Việt Nam
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4E6152] leading-relaxed">
              Trở thành thương hiệu du lịch trải nghiệm nghỉ dưỡng kết hợp chữa lành (Healing Retreat) và cân bằng cuộc sống đáng tin cậy nhất tại Việt Nam. Nơi mỗi chuyến đi là một hành trình thức tỉnh sự an yên, đưa phong cách du lịch chậm (Slow Travel), trân trọng thiên nhiên và chánh niệm trở thành nguồn năng lượng nuôi dưỡng thế hệ trẻ và cộng đồng doanh nghiệp bền vững.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#DFD7CA] space-y-4 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] flex items-center justify-center text-[#1B3C2A]">
              <Leaf className="w-6 h-6 text-[#2A5C3D]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2A5C3D] uppercase tracking-wider block">
                Sứ Mệnh Của Green Escape
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B3C2A] mt-1">
                Trao gửi khoảng thời gian "đủ chậm"
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4E6152] leading-relaxed">
              Kiến tạo những khoảng không gian và thời gian "đủ chậm" để giải phóng con người khỏi áp lực công nghệ và sự kiệt sức vô hình; đưa mỗi du khách trở về với sự tự tại nguyên bản. Đồng thời, chúng tôi cam kết bảo tồn hệ sinh thái tự nhiên, tôn vinh bản sắc và nâng cao sinh kế bền vững cho người dân bản địa bằng tình yêu thuần khiết với đất mẹ.
            </p>
          </div>
        </div>

        {/* 5 Core Values Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E7DFD2] pb-3">
            <h3 className="font-serif text-xl font-bold text-[#1B3C2A]">
              5 Giá Trị Cốt Lõi Làm Nên Bản Sắc Green Escape
            </h3>
            <span className="text-xs text-[#7A6D60] hidden sm:inline">Cam kết xuyên suốt mọi hành trình</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">01</span>
              <h4 className="font-bold text-sm text-[#1B3C2A]">Chân Thật</h4>
              <p className="text-xs text-[#5C6E61] leading-relaxed">
                Không tô vẽ, không tâm linh hóa cực đoan. Mọi xúc chạm – giọt mưa rừng, chén trà, khung dệt – đều mộc mạc và chân thành.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">02</span>
              <h4 className="font-bold text-sm text-[#1B3C2A]">Thuận Tự Nhiên</h4>
              <p className="text-xs text-[#5C6E61] leading-relaxed">
                Tôn trọng sinh thái, giảm tối đa rác nhựa, sống hài hòa theo nhịp điệu mùa vụ và vạn vật của núi rừng.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">03</span>
              <h4 className="font-bold text-sm text-[#1B3C2A]">Chữa Lành Từ Bên Trong</h4>
              <p className="text-xs text-[#5C6E61] leading-relaxed">
                Nghỉ ngơi không phải là trốn chạy, mà là dũng cảm lắng nghe hơi thở, thấu hiểu cơ thể và phục hồi từ cội nguồn tâm trí.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">04</span>
              <h4 className="font-bold text-sm text-[#1B3C2A]">Gắn Kết Sâu Sắc</h4>
              <p className="text-xs text-[#5C6E61] leading-relaxed">
                Tạm rời màn hình vô cảm để mở ra những ánh mắt nhìn nhau, đối thoại chân tình bên lửa ấm và tách trà thảo mộc.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DFD7CA] space-y-2">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">05</span>
              <h4 className="font-bold text-sm text-[#1B3C2A]">Trách Nhiệm Bản Địa</h4>
              <p className="text-xs text-[#5C6E61] leading-relaxed">
                Trao gửi sinh kế bền vững cho đồng bào nông dân và nghệ nhân, gìn giữ văn hóa truyền thống như báu vật chung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VÌ SAO CHỌN GREEN ESCAPE? (4 Lợi thế cạnh tranh từ bản đề án) */}
      <section className="bg-[#F5F1E9] py-20 border-y border-[#E8E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
              Lợi Thế Khác Biệt
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3C2A]">
              Vì sao bạn nên chọn Green Escape?
            </h2>
            <p className="text-sm text-[#5C6E61]">
              Được thiết kế tỉ mỉ để giải quyết đúng những trăn trở của Gen Z và người đi làm hiện đại.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D]">01.</span>
              <h3 className="text-base font-bold text-[#1B3C2A]">Bắt trúng tâm can Gen Z & Dân văn phòng</h3>
              <p className="text-xs text-[#637567] leading-relaxed">
                Giải tỏa cảm giác kiệt sức số (digital burnout). Tắt máy, viết nhật ký và thiền nhẹ không phải dịch vụ cộng thêm, mà là lý do cốt lõi để đi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D]">02.</span>
              <h3 className="text-base font-bold text-[#1B3C2A]">Tối ưu 2N1Đ gần Hà Nội (1.5 – 3h)</h3>
              <p className="text-xs text-[#637567] leading-relaxed">
                Không cần xin sếp nghỉ phép ngày thường. Tận dụng trọn vẹn 2 ngày cuối tuần với xe Limousine đưa đón êm ái, trở về sẵn sàng cho tuần mới.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D]">03.</span>
              <h3 className="text-base font-bold text-[#1B3C2A]">Cân bằng hài hòa Tĩnh & Động</h3>
              <p className="text-xs text-[#637567] leading-relaxed">
                Không bắt ngồi thiền cả ngày gây nhàm chán, cũng không bắt trekking kiệt sức. Nhịp trải nghiệm xen kẽ giữa trà, làm vườn, đạp xe và ngắm cảnh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
              <span className="font-serif text-2xl font-bold text-[#2A5C3D]">04.</span>
              <h3 className="text-base font-bold text-[#1B3C2A]">Cam kết Local First & Bền vững</h3>
              <p className="text-xs text-[#637567] leading-relaxed">
                Đồng hành trực tiếp cùng nông dân Ba Vì và nghệ nhân Thái Mai Châu. Giảm thiểu rác nhựa và đóng góp thiết thực cho sinh kế bản địa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÁC TRẢI NGHIỆM NỔI BẬT (3 Core Retail Packages + 2 Custom/Corp) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
              Danh Mục Sản Phẩm
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3C2A] mt-2">
              Các chuyến Retreat tiêu biểu
            </h2>
          </div>
          <button
            onClick={() => navigateTo('experiences')}
            className="text-xs font-semibold tracking-wider text-[#1B3C2A] hover:text-[#2B6342] flex items-center space-x-1.5 cursor-pointer self-start md:self-auto"
          >
            <span>Xem toàn bộ 5 hành trình</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreProducts.map(prod => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-[#DFD7CA] overflow-hidden group flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                {/* Product Image */}
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
                </div>

                {/* Body Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A6D60]">
                    <span>{prod.location}</span>
                    <span>{prod.distanceFromHanoi}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1B3C2A] group-hover:text-[#2D6643] transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-[#5D6F62] leading-relaxed line-clamp-2">
                    {prod.tagline}
                  </p>

                  <ul className="pt-2 space-y-1.5 text-xs text-[#4E6152]">
                    {prod.coreHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2A5C3D] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-[#F2ECE1] flex items-center justify-between mt-4">
                <div>
                  <span className="text-[11px] text-[#8C7F72] block">Giá trọn gói / khách</span>
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
                    onClick={() => openBookingModal(prod.id)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full transition-all cursor-pointer whitespace-nowrap"
                  >
                    Đặt chỗ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LỊCH KHỞI HÀNH GẦN NHẤT (Real-time Departures with Seats) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#DFD7CA] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE5D8] pb-5">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
                Lịch Khởi Hành
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1B3C2A] mt-1">
                Các đợt retreat gần nhất tháng 10 & 11/2026
              </h2>
            </div>
            <span className="text-xs text-[#7B6E60]">
              *Nhóm nhỏ tối đa 12–14 chỗ để đảm bảo không gian tĩnh lặng
            </span>
          </div>

          <div className="divide-y divide-[#F2EDE4]">
            {upcomingDepartures.map(dep => {
              const seatsLeft = dep.seatsTotal - dep.seatsBooked;
              return (
                <div
                  key={`${dep.productId}-${dep.id}`}
                  className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors rounded-lg px-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F0ECE1] flex flex-col items-center justify-center text-[#1B3C2A] shrink-0">
                      <Calendar className="w-4 h-4 text-[#2A5C3D]" />
                      <span className="text-[10px] font-bold mt-0.5">{dep.date.split('-')[2]} Th10</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#1B3C2A]">{dep.productName}</h4>
                      <p className="text-xs text-[#7A6D60]">{dep.dateLabel}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <div className="text-left md:text-right">
                      <span className="text-xs text-[#7A6D60] block">Tình trạng chỗ</span>
                      {seatsLeft <= 0 ? (
                        <span className="text-xs font-semibold text-rose-700">Đã đủ khách</span>
                      ) : seatsLeft <= 3 ? (
                        <span className="text-xs font-semibold text-amber-700">Chỉ còn {seatsLeft} chỗ</span>
                      ) : (
                        <span className="text-xs font-semibold text-emerald-800">Còn {seatsLeft} chỗ trống</span>
                      )}
                    </div>

                    <div className="text-left md:text-right">
                      <span className="text-xs text-[#7A6D60] block">Giá trọn gói</span>
                      <span className="font-mono text-sm font-bold text-[#1B3C2A]">
                        {dep.productPrice.toLocaleString('vi-VN')} đ
                      </span>
                    </div>

                    <button
                      onClick={() => openBookingModal(dep.productId)}
                      disabled={seatsLeft <= 0}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#1B3C2A] hover:bg-[#255238] disabled:opacity-40 rounded-full transition-all cursor-pointer whitespace-nowrap"
                    >
                      {seatsLeft <= 0 ? 'Đã Kín' : 'Đăng Ký'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ĐÁNH GIÁ KHÁCH HÀNG (Review Section) */}
      <section className="bg-[#FAF8F5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
            Trải Nghiệm Thật
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1B3C2A]">
            Khách hàng nói gì về Green Escape?
          </h2>
          <p className="text-xs text-[#6B7D6E]">
            Những dòng nhật ký và cảm xúc gửi lại sau chuyến đi của người trẻ và dân văn phòng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <div className="flex text-amber-600 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-[#48594B] leading-relaxed italic">
              "Sau chuỗi ngày deadline kiệt sức ở công ty công nghệ, 2 ngày ở Ba Vì làm mình hồi sinh. Không gian vintage ngắm mưa rừng tuyệt đẹp, tách trà thảo mộc nóng ấm và quan trọng nhất là mình đã có thể ngủ một giấc không mộng mị."
            </p>
            <div className="pt-2 border-t border-[#F2ECE1] text-xs">
              <strong className="text-[#1B3C2A] block">Nguyễn Thảo Linh</strong>
              <span className="text-[#8A7D70]">Marketing Lead · Khách tour Ba Vì</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <div className="flex text-amber-600 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-[#48594B] leading-relaxed italic">
              "Chuyến đi Mai Châu cùng nhóm bạn thân 4 người. Lần đầu tiên bọn mình ngồi dệt thổ cẩm cùng các mế người Thái, thiền chuông giữa ruộng lúa xanh. Cảm giác gắn kết tự nhiên mà không cần đến điện thoại."
            </p>
            <div className="pt-2 border-t border-[#F2ECE1] text-xs">
              <strong className="text-[#1B3C2A] block">Hoàng Bích Phương</strong>
              <span className="text-[#8A7D70]">Freelance Designer · Khách tour Mai Châu</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-4">
            <div className="flex text-amber-600 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-[#48594B] leading-relaxed italic">
              "Đoàn công ty 40 người của mình đặt gói Corporate Retreat. Không ai bị ép uống bia hay chơi trò ồn ào. Thay vào đó là workshop sound bath và vòng tròn lắng nghe. Cả team thấu hiểu và gắn bó hơn hẳn."
            </p>
            <div className="pt-2 border-t border-[#F2ECE1] text-xs">
              <strong className="text-[#1B3C2A] block">Phạm Thu Trang</strong>
              <span className="text-[#8A7D70]">HR Director · TechNest Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAM KẾT DU LỊCH CÓ TRÁCH NHIỆM & BỀN VỮNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A3826] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9CBDA2]">
              Trách Nhiệm & Bền Vững
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Tôn trọng tự nhiên. Đồng hành cùng cộng đồng địa phương.
            </h2>
            <p className="text-sm text-[#D3E3D5] leading-relaxed">
              Chúng tôi áp dụng tinh thần tiêu chuẩn ISO 14001 vào từng chuyến đi. Green Escape cam kết không sử dụng chai nhựa một lần, hỗ trợ 100% kinh phí workshop cho nghệ nhân bản địa và trích lập Quỹ bảo tồn rừng phòng hộ.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs text-[#D3E3D5]">
              <div className="border-l border-[#40684C] pl-3">
                <strong className="text-white block text-sm">Local First</strong>
                Ưu tiên 100% nông sản sạch địa phương
              </div>
              <div className="border-l border-[#40684C] pl-3">
                <strong className="text-white block text-sm">0 Chai Nhựa</strong>
                Bình giữ nhiệt & nước detox tái nạp
              </div>
              <div className="border-l border-[#40684C] pl-3">
                <strong className="text-white block text-sm">Nhóm Nhỏ</strong>
                Tối đa 14 khách để bảo vệ cảnh quan
              </div>
              <div className="border-l border-[#40684C] pl-3">
                <strong className="text-white block text-sm">Quỹ Rừng</strong>
                Trích 5% giá vé trồng cây bản địa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="bg-[#F4EFE6] py-16 border-t border-[#E5DDD0] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3C2A]">
            Bạn đã sẵn sàng cho một cuối tuần trọn vẹn?
          </h2>
          <p className="text-sm text-[#5C6E61]">
            Đừng chờ đợi cho đến khi cơ thể kiệt sức. Hãy dành cho mình một khoảng lặng để tái sinh năng lượng ngay hôm nay.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 text-xs font-semibold tracking-widest text-white bg-[#1B3C2A] hover:bg-[#255238] rounded-full shadow-md transition-all cursor-pointer"
            >
              ĐẶT NGAY
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-3.5 text-xs font-semibold tracking-widest text-[#1B3C2A] border border-[#1B3C2A]/40 hover:bg-[#1B3C2A]/5 rounded-full transition-all cursor-pointer"
            >
              LIÊN HỆ TƯ VẤN 24/7
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
