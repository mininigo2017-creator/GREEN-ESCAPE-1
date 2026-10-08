import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-[#142A1D] text-[#E5DFD3] pt-16 pb-12 border-t border-[#23422F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#244632]">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#F4EFE6] block">
              GREEN ESCAPE
            </span>
            <p className="text-sm text-[#B7C7B9] leading-relaxed max-w-sm">
              Không chỉ là một chuyến đi – đó là khoảng thời gian để nghỉ ngơi, kết nối và tái tạo năng lượng. Du lịch chậm, chữa lành và hòa mình vào thiên nhiên nguyên bản miền Bắc.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-[#8FA893]">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-[#7A957C]" />
                <span>Cam kết Local First</span>
              </span>
              <span>·</span>
              <span className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-[#7A957C]" />
                <span>Không rác thải nhựa</span>
              </span>
            </div>
          </div>

          {/* Column 2: Experiences */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#9CB39E]">
              Hành Trình Retreat
            </h4>
            <ul className="space-y-2 text-sm text-[#D1DDD3]">
              <li>
                <button
                  onClick={() => navigateTo('experience-detail', 'ba-vi-rest-escape')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ba Vì – Rest Escape
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('experience-detail', 'mai-chau-reconnect-escape')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mai Châu – Reconnect Escape
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('experience-detail', 'ninh-binh-explore-light')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ninh Bình – Explore Light
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('customized')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Customized Escape (Riêng tư)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('corporate')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Corporate Wellness (Doanh nghiệp)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: About & Values */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#9CB39E]">
              Về Chúng Tôi
            </h4>
            <ul className="space-y-2 text-sm text-[#D1DDD3]">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Câu chuyện thương hiệu
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Triết lý N.R.E.C
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('journal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tạp chí Slow Travel & Wellness
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('account')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Chính sách Khách hàng & Referral
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('admin')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-amber-300/80 flex items-center space-x-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admin Dashboard</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#9CB39E]">
              Văn Phòng & Hỗ Trợ
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B7C7B9]">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#7A957C] shrink-0 mt-0.5" />
                <span>Số 28 Phố Tràng Thi, Hoàn Kiếm, Hà Nội</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#7A957C] shrink-0" />
                <span>Hotline: 0988 567 890 (24/7)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#7A957C] shrink-0" />
                <span>contact@greenescape.vn</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center space-x-3 text-xs">
              <a
                href="#facebook"
                onClick={e => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-[#1F3D2A] flex items-center justify-center text-[#B7C7B9] hover:text-white hover:bg-[#2A5238] transition-colors"
                aria-label="Facebook Green Escape"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={e => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-[#1F3D2A] flex items-center justify-center text-[#B7C7B9] hover:text-white hover:bg-[#2A5238] transition-colors"
                aria-label="Instagram Green Escape"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#8FA893] ml-1">@greenescape.vietnam</span>
            </div>
          </div>
        </div>

        {/* Quiet Editorial Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B9580] space-y-3 sm:space-y-0">
          <p>© 2026 Công ty TNHH Green Escape. Bảo lưu mọi quyền.</p>
          <div className="flex items-center space-x-4">
            <span>Tiêu chuẩn ISO 14001 & ISO 9001:2015</span>
            <span>·</span>
            <span>Giấy phép lữ hành & chăm sóc sức khỏe tinh thần</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
