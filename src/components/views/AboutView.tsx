import React from 'react';
import { useApp } from '../../context/AppContext';
import { Leaf, Heart, Users, Compass, ShieldCheck, TreePine, Sparkles, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../../data/initialData';

export const AboutView: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
              Câu Chuyện Khởi Nghiệp
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B3C2A] leading-tight">
              Chúng tôi sinh ra từ một lần kiệt sức ở văn phòng.
            </h1>
            <p className="text-sm text-[#526356] leading-relaxed">
              Những nhà sáng lập Green Escape từng là những nhân viên văn phòng, những chuyên viên công nghệ và tiếp thị mải miết chạy theo các chỉ tiêu KPI tại Hà Nội. Có những ngày, chúng tôi nhìn vào màn hình máy tính hơn 12 tiếng, và chiếc điện thoại thông minh rung chuông không ngừng từ sáng sớm tới nửa đêm.
            </p>
            <p className="text-sm text-[#526356] leading-relaxed">
              Chúng tôi nhận ra: thứ mà người trẻ thế hệ hôm nay thiếu nhất không phải là tiền bạc hay phương tiện giải trí, mà là một khoảng lặng – một khoảng thời gian "đủ chậm" để không phải chứng minh bất kỳ điều gì với ai, được hít thở không khí trong lành của núi rừng và được kết nối lại với chính tâm hồn mình.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#DFD7CA] aspect-4/3">
              <img
                src={IMAGES.bavi}
                alt="Chuyện khởi nghiệp Green Escape Ba Vi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SỨ MỆNH & TẦM NHÌN */}
      <section className="bg-[#F5F0E6] py-16 border-y border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
              Kim Chỉ Nam Thương Hiệu
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B3C2A]">
              Tầm Nhìn & Sứ Mệnh Của Green Escape
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#DFD7CA] space-y-4 shadow-xs">
              <span className="text-xs font-bold text-[#2A5C3D] uppercase tracking-wider block">
                Tầm Nhìn Chiến Lược
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B3C2A]">
                Ốc đảo tinh thần & Tiên phong Healing Retreat
              </h3>
              <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
                Trở thành ốc đảo tinh thần tin cậy hàng đầu cho thế hệ trẻ và cộng đồng doanh nghiệp Việt Nam – nơi mỗi bước chân tìm về thiên nhiên là một hành trình thức tỉnh sự bình yên, đưa lối sống chậm (Slow Travel), trân trọng tự nhiên và chánh niệm trở thành nguồn năng lượng nuôi dưỡng bền bỉ trong cuộc sống hiện đại.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DFD7CA] space-y-4 shadow-xs">
              <span className="text-xs font-bold text-[#2A5C3D] uppercase tracking-wider block">
                Sứ Mệnh Doanh Nghiệp
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B3C2A]">
                Trao gửi khoảng thời gian "đủ chậm" để tái sinh
              </h3>
              <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
                Kiến tạo những khoảng không gian và thời gian "đủ chậm" để giải phóng con người khỏi áp lực công nghệ và sự kiệt sức vô hình; đưa mỗi du khách trở về với sự tự tại nguyên bản. Đồng thời, chúng tôi cam kết bảo tồn hệ sinh thái tự nhiên, tôn vinh bản sắc văn hóa và nâng cao sinh kế bền vững cho người dân bản địa bằng tình yêu thuần khiết với đất mẹ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIÁ TRỊ CỐT LÕI (Bộ 5 Giá Trị Sáng Tạo & Triết Lý N.R.E.C) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
            Hệ Giá Trị Cốt Lõi
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1B3C2A]">
            5 Giá Trị Cốt Lõi Làm Nên Bản Sắc Green Escape
          </h2>
          <p className="text-xs text-[#526356]">
            Kim chỉ nam dẫn dắt từng quyết định thiết kế hành trình, chọn lọc điểm đến và phục vụ khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
            <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">01</span>
            <h3 className="font-bold text-sm text-[#1B3C2A]">Chân Thật</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Không tô vẽ, không tâm linh hóa cực đoan. Mọi xúc chạm – giọt mưa rừng, chén trà, khung dệt thổ cẩm – đều mộc mạc và chân thành.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
            <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">02</span>
            <h3 className="font-bold text-sm text-[#1B3C2A]">Thuận Tự Nhiên</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Tôn trọng sinh thái, giảm tối đa rác nhựa, sống hài hòa theo nhịp điệu mùa vụ và vạn vật của núi rừng tự nhiên.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
            <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">03</span>
            <h3 className="font-bold text-sm text-[#1B3C2A]">Chữa Lành Từ Bên Trong</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Nghỉ ngơi không phải là trốn chạy, mà là dũng cảm lắng nghe hơi thở, thấu hiểu cơ thể và phục hồi từ cội nguồn tâm trí.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
            <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">04</span>
            <h3 className="font-bold text-sm text-[#1B3C2A]">Gắn Kết Sâu Sắc</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Tạm rời màn hình vô cảm để mở ra những ánh mắt nhìn nhau, đối thoại chân tình bên lửa ấm và tách trà thảo mộc organic.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD7CA] space-y-3">
            <span className="font-serif text-2xl font-bold text-[#2A5C3D] block">05</span>
            <h3 className="font-bold text-sm text-[#1B3C2A]">Trách Nhiệm Bản Địa</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Trao gửi sinh kế bền vững cho đồng bào nông dân và nghệ nhân địa phương, gìn giữ văn hóa truyền thống như báu vật chung.
            </p>
          </div>
        </div>

        {/* N.R.E.C Pillars Banner */}
        <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#DFD7CA] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE3D6] pb-3">
            <h3 className="font-serif text-lg font-bold text-[#1B3C2A]">
              Trụ Cột Vận Hành N.R.E.C
            </h3>
            <span className="text-xs text-[#7A6D60]">Nature · Relax · Experience · Connection</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#526356]">
            <div>
              <strong className="text-[#1B3C2A] block text-sm">Nature</strong>
              Không gian rừng cây, sông suối trong lành bao bọc lấy chuyến đi.
            </div>
            <div>
              <strong className="text-[#1B3C2A] block text-sm">Relax</strong>
              Giấc ngủ sâu, hơi thở điều hòa, giải phóng hoàn toàn căng thẳng.
            </div>
            <div>
              <strong className="text-[#1B3C2A] block text-sm">Experience</strong>
              Hoạt động sâu sắc: dệt vải, làm vườn, ngắm mưa, thưởng trà.
            </div>
            <div>
              <strong className="text-[#1B3C2A] block text-sm">Connection</strong>
              Chạm vào chính mình và kết nối chân thật với những người bạn đồng hành.
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAM KẾT DU LỊCH BỀN VỮNG (Section 14 in brief) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A3826] text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A5C3AA]">
              Du Lịch Bền Vững & Trách Nhiệm Xã Hội
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Hành Động Nhỏ Cho Một Tác Động Bền Vững Lâu Dài
            </h3>
            <p className="text-xs sm:text-sm text-[#D3E3D5] leading-relaxed">
              Chúng tôi không chỉ kinh doanh du lịch. Mỗi chuyến đi của Green Escape được thiết kế theo các nguyên tắc nghiêm ngặt về bảo tồn môi trường và sinh kế địa phương:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#D3E3D5]">
            <div className="space-y-2 border-l border-[#3E6549] pl-4">
              <strong className="text-white block text-sm">Ưu Tiên Local First</strong>
              <p>Hợp tác cùng Hợp tác xã Thảo mộc Ba Vì và làng dệt Mai Châu, đảm bảo thu nhập trực tiếp cho nông dân và nghệ nhân.</p>
            </div>

            <div className="space-y-2 border-l border-[#3E6549] pl-4">
              <strong className="text-white block text-sm">Nói Không Với Rác Nhựa</strong>
              <p>Cung cấp bình giữ nhiệt inox và túi canvas tái sử dụng, không phát sinh rác thải chai nhựa một lần.</p>
            </div>

            <div className="space-y-2 border-l border-[#3E6549] pl-4">
              <strong className="text-white block text-sm">Quy Mô Nhóm Nhỏ (8-14)</strong>
              <p>Giữ quy mô nhỏ để không gây quá tải tài nguyên thiên nhiên và giữ gìn sự yên tĩnh bản địa.</p>
            </div>

            <div className="space-y-2 border-l border-[#3E6549] pl-4">
              <strong className="text-white block text-sm">Bảo Tồn Bản Sắc</strong>
              <p>Tôn trọng phong tục tập quán đồng bào người Thái, bảo tồn kỹ thuật dệt truyền thống trước nguy cơ mai một.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CƠ CẤU NHÂN SỰ & ĐỘI NGŨ (Phần 6.1 sơ đồ tổ chức) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5A745C]">
            Đội Ngũ Đồng Hành
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1B3C2A]">
            Những Con Người Tạo Nên Green Escape
          </h2>
          <p className="text-xs text-[#526356]">
            Được đào tạo chuyên sâu về sơ cứu, an toàn ngoài trời, tâm lý học và chánh niệm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#1B3C2A] mx-auto font-serif text-xl font-bold">
              GD
            </div>
            <h4 className="font-bold text-sm text-[#1B3C2A]">Ban Giám Đốc</h4>
            <span className="text-[11px] text-[#786C5E] block">Định hướng chiến lược & Giá trị cốt lõi</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#1B3C2A] mx-auto font-serif text-xl font-bold">
              ĐH
            </div>
            <h4 className="font-bold text-sm text-[#1B3C2A]">Điều Hành & Trải Nghiệm</h4>
            <span className="text-[11px] text-[#786C5E] block">Thiết kế Itinerary & Dẫn dắt Retreat</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#1B3C2A] mx-auto font-serif text-xl font-bold">
              CS
            </div>
            <h4 className="font-bold text-sm text-[#1B3C2A]">Kinh Doanh & CSKH</h4>
            <span className="text-[11px] text-[#786C5E] block">Lắng nghe nhu cầu & Đồng hành 24/7</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DFD7CA] text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#1B3C2A] mx-auto font-serif text-xl font-bold">
              CL
            </div>
            <h4 className="font-bold text-sm text-[#1B3C2A]">Đối Tác & Chất Lượng</h4>
            <span className="text-[11px] text-[#786C5E] block">Tiêu chuẩn Green Escape Partner SOP</span>
          </div>
        </div>
      </section>
    </div>
  );
};
