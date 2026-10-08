import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ExperienceProduct,
  Booking,
  CustomizedInquiry,
  CorporateInquiry,
  Promotion,
  UserAccount,
  ExtraService,
  JournalArticle
} from '../types';
import {
  INITIAL_PRODUCTS,
  INITIAL_BOOKINGS,
  EXTRA_SERVICES,
  PROMOTIONS,
  DEMO_USER,
  JOURNAL_ARTICLES
} from '../data/initialData';

export type AppView =
  | 'home'
  | 'experiences'
  | 'experience-detail'
  | 'customized'
  | 'corporate'
  | 'about'
  | 'journal'
  | 'journal-detail'
  | 'contact'
  | 'account'
  | 'admin';

interface AppContextType {
  currentView: AppView;
  selectedProductSlug: string | null;
  selectedArticleSlug: string | null;
  products: ExperienceProduct[];
  bookings: Booking[];
  customInquiries: CustomizedInquiry[];
  corporateInquiries: CorporateInquiry[];
  promotions: Promotion[];
  extraServices: ExtraService[];
  journalArticles: JournalArticle[];
  user: UserAccount;
  bookingModalOpen: boolean;
  preselectedProductId: string | null;

  // Navigation
  navigateTo: (view: AppView, slug?: string) => void;
  openBookingModal: (productId?: string) => void;
  closeBookingModal: () => void;

  // Actions
  createBooking: (payload: {
    experienceId: string;
    departureDate: string;
    guestCount: number;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    specialRequests?: string;
    extraServices: { serviceId: string; quantity: number }[];
    couponCode?: string;
    paymentMethod: 'bank_transfer' | 'qr_vietqr' | 'office';
  }) => { success: boolean; booking?: Booking; error?: string };

  calculateSmartPromotion: (
    productId: string,
    departureDateStr: string,
    guestCount: number,
    customCode?: string
  ) => { promotion: Promotion | null; discountPercent: number; note: string };

  submitCustomInquiry: (data: Omit<CustomizedInquiry, 'id' | 'createdAt' | 'status'>) => void;
  submitCorporateInquiry: (data: Omit<CorporateInquiry, 'id' | 'createdAt' | 'status'>) => void;
  toggleFavorite: (productId: string) => void;

  // Admin actions
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  updateProductPrice: (productId: string, newPrice: number) => void;
  updateProductSeats: (productId: string, departureId: string, additionalSeats: number) => void;
  addDepartureDate: (productId: string, date: string, seatsTotal: number) => void;
  updatePromotionDiscount: (promoId: string, newPercent: number) => void;
  resetDemoData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'ge_products_v1',
  BOOKINGS: 'ge_bookings_v1',
  CUSTOM_INQUIRIES: 'ge_custom_inquiries_v1',
  CORP_INQUIRIES: 'ge_corp_inquiries_v1',
  PROMOTIONS: 'ge_promotions_v1',
  USER: 'ge_user_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>('ba-vi-rest-escape');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedProductId, setPreselectedProductId] = useState<string | null>(null);

  // Persistent state with defaults
  const [products, setProducts] = useState<ExperienceProduct[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [customInquiries, setCustomInquiries] = useState<CustomizedInquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_INQUIRIES);
    return saved ? JSON.parse(saved) : [
      {
        id: 'inq-custom-1',
        fullName: 'Ngô Thu Trang',
        phone: '0977 123 888',
        email: 'thutrang.ngo@gmail.com',
        guestsCount: 4,
        destination: 'Mai Châu, Hòa Bình',
        startDate: '2026-11-14',
        duration: '2N1Đ',
        budgetPerPerson: '4.500.000đ - 5.500.000đ',
        accommodationType: 'Eco-lodge nguyên căn view lúa',
        selectedActivities: ['Yoga đón bình minh', 'Dệt thổ cẩm', 'Digital Detox', 'Bữa tối nến thơm ngoài trời'],
        specialRequests: 'Kỷ niệm sinh nhật cho mẹ 55 tuổi, thực đơn thanh đạm ít dầu mỡ.',
        createdAt: '2026-10-06T15:00:00Z',
        status: 'consulting'
      }
    ];
  });

  const [corporateInquiries, setCorporateInquiries] = useState<CorporateInquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CORP_INQUIRIES);
    return saved ? JSON.parse(saved) : [
      {
        id: 'inq-corp-1',
        companyName: 'Công ty CP Công Nghệ NextWave',
        contactPerson: 'Vũ Đức Nam',
        position: 'Head of People & Culture',
        email: 'nam.vu@nextwave.tech',
        phone: '0919 888 999',
        participantCount: 35,
        targetDate: '2026-11-21',
        budgetTier: '3.500.000đ - 4.500.000đ / nhân sự',
        selectedObjectives: ['Chữa lành áp lực quý 3', 'Teambuilding gắn kết lắng nghe', 'Tắm âm thanh Sound Bath', 'Định hướng mục tiêu năm 2027'],
        specialNotes: 'Cần xuất hóa đơn GTGT, có 5 nhân sự ăn chay trường.',
        createdAt: '2026-10-07T11:20:00Z',
        status: 'quoted'
      }
    ];
  });

  const [promotions, setPromotions] = useState<Promotion[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROMOTIONS);
    return saved ? JSON.parse(saved) : PROMOTIONS;
  });

  const [user, setUser] = useState<UserAccount>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.USER);
    return saved ? JSON.parse(saved) : DEMO_USER;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_INQUIRIES, JSON.stringify(customInquiries));
  }, [customInquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CORP_INQUIRIES, JSON.stringify(corporateInquiries));
  }, [corporateInquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROMOTIONS, JSON.stringify(promotions));
  }, [promotions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }, [user]);

  const navigateTo = (view: AppView, slug?: string) => {
    setCurrentView(view);
    if (view === 'experience-detail' && slug) {
      setSelectedProductSlug(slug);
    } else if (view === 'journal-detail' && slug) {
      setSelectedArticleSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBookingModal = (productId?: string) => {
    if (productId) {
      setPreselectedProductId(productId);
    }
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  /**
   * Smart promotion calculation without illegal stacking (strictly enforces Green Escape rule:
   * "Không cho phép tự động cộng dồn các chương trình khuyến mại nếu chưa được quản trị viên cho phép.
   * Hệ thống phải tự động xác định mức ưu đãi phù hợp nhất.")
   */
  const calculateSmartPromotion = (
    _productId: string,
    departureDateStr: string,
    guestCount: number,
    customCode?: string
  ): { promotion: Promotion | null; discountPercent: number; note: string } => {
    // 1. If explicit valid coupon entered
    if (customCode && customCode.trim()) {
      const cleanCode = customCode.trim().toUpperCase();
      const matched = promotions.find(p => p.code.toUpperCase() === cleanCode);
      if (matched) {
        return {
          promotion: matched,
          discountPercent: matched.discountPercent,
          note: `Đã áp dụng mã ưu đãi ${matched.name} (-${matched.discountPercent}%)`
        };
      }
    }

    // 2. Automated rule calculation to pick the highest SINGLE promotion
    let bestPromo: Promotion | null = null;
    let highestDiscount = 0;
    let explanation = '';

    // Check Launching promotion (15%)
    const launchPromo = promotions.find(p => p.code === 'LAUNCH15');
    if (launchPromo && bookings.length < 100) {
      if (launchPromo.discountPercent > highestDiscount) {
        highestDiscount = launchPromo.discountPercent;
        bestPromo = launchPromo;
        explanation = 'Ưu đãi Khai trương Launching 15% (dành cho 100 booking đầu tiên)';
      }
    }

    // Check Early Bird (>= 21 days advance)
    if (departureDateStr) {
      try {
        const depDate = new Date(departureDateStr);
        const today = new Date('2026-10-08'); // Current system date
        const diffDays = Math.ceil((depDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
        const earlyPromo = promotions.find(p => p.type === 'early_bird');
        if (diffDays >= 21 && earlyPromo && earlyPromo.discountPercent > highestDiscount) {
          highestDiscount = earlyPromo.discountPercent;
          bestPromo = earlyPromo;
          explanation = `Ưu đãi Đặt sớm Early Bird (-${earlyPromo.discountPercent}%, đặt trước ${diffDays} ngày)`;
        }
      } catch {
        // ignore date parse issue
      }
    }

    // Check Group Size promotions
    if (guestCount >= 10) {
      const g10 = promotions.find(p => p.code === 'GROUP10');
      if (g10 && g10.discountPercent > highestDiscount) {
        highestDiscount = g10.discountPercent;
        bestPromo = g10;
        explanation = 'Ưu đãi nhóm từ 10 người trở lên (-10%)';
      }
    } else if (guestCount >= 6) {
      const g69 = promotions.find(p => p.code === 'GROUP69');
      if (g69 && g69.discountPercent > highestDiscount) {
        highestDiscount = g69.discountPercent;
        bestPromo = g69;
        explanation = 'Ưu đãi nhóm 6 – 9 người (-7%)';
      }
    } else if (guestCount >= 4) {
      const g45 = promotions.find(p => p.code === 'GROUP45');
      if (g45 && g45.discountPercent > highestDiscount) {
        highestDiscount = g45.discountPercent;
        bestPromo = g45;
        explanation = 'Ưu đãi nhóm 4 – 5 người (-5%)';
      }
    }

    if (bestPromo) {
      return {
        promotion: bestPromo,
        discountPercent: highestDiscount,
        note: `${explanation} (Chính sách không cộng dồn: Tự động chọn mức tốt nhất)`
      };
    }

    return {
      promotion: null,
      discountPercent: 0,
      note: 'Giá tiêu chuẩn'
    };
  };

  const createBooking = (payload: {
    experienceId: string;
    departureDate: string;
    guestCount: number;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    specialRequests?: string;
    extraServices: { serviceId: string; quantity: number }[];
    couponCode?: string;
    paymentMethod: 'bank_transfer' | 'qr_vietqr' | 'office';
  }): { success: boolean; booking?: Booking; error?: string } => {
    const product = products.find(p => p.id === payload.experienceId);
    if (!product) {
      return { success: false, error: 'Không tìm thấy thông tin sản phẩm trải nghiệm.' };
    }

    // Check seats availability
    const targetDeparture = product.departures.find(d => d.date === payload.departureDate);
    if (targetDeparture) {
      const availableSeats = targetDeparture.seatsTotal - targetDeparture.seatsBooked;
      if (availableSeats < payload.guestCount) {
        return {
          success: false,
          error: `Ngày này chỉ còn ${availableSeats} chỗ trống, không đủ cho đoàn ${payload.guestCount} khách.`
        };
      }
    }

    // Calculate Pricing
    const basePricePerGuest = product.price;
    const totalBasePrice = basePricePerGuest * payload.guestCount;

    // Promotion
    const promoCheck = calculateSmartPromotion(
      product.id,
      payload.departureDate,
      payload.guestCount,
      payload.couponCode
    );

    const discountAmount = Math.round((totalBasePrice * promoCheck.discountPercent) / 100);

    // Extras
    let extrasTotal = 0;
    const resolvedExtras = payload.extraServices
      .map(item => {
        const found = EXTRA_SERVICES.find(s => s.id === item.serviceId);
        if (!found || item.quantity <= 0) return null;
        const subtotal = found.price * item.quantity;
        extrasTotal += subtotal;
        return {
          serviceId: found.id,
          serviceName: found.name,
          price: found.price,
          quantity: item.quantity
        };
      })
      .filter(Boolean) as {
        serviceId: string;
        serviceName: string;
        price: number;
        quantity: number;
      }[];

    const finalTotal = totalBasePrice - discountAmount + extrasTotal;

    // Generate unique code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `GE-2026-${randomSuffix}`;

    const newBooking: Booking = {
      id: `bkg-${Date.now()}`,
      bookingCode,
      experienceId: product.id,
      experienceName: product.name,
      departureDate: payload.departureDate,
      guestCount: payload.guestCount,
      contactName: payload.contactName,
      contactPhone: payload.contactPhone,
      contactEmail: payload.contactEmail,
      specialRequests: payload.specialRequests,
      extraServices: resolvedExtras,
      basePricePerGuest,
      totalBasePrice,
      appliedPromotion: promoCheck.promotion
        ? {
            code: promoCheck.promotion.code,
            name: promoCheck.promotion.name,
            discountPercent: promoCheck.discountPercent
          }
        : undefined,
      discountAmount,
      extraServicesTotal: extrasTotal,
      finalTotal,
      status: 'confirmed',
      paymentMethod: payload.paymentMethod,
      createdAt: new Date().toISOString()
    };

    // Update product booked seats count
    setProducts(prevProducts =>
      prevProducts.map(p => {
        if (p.id !== product.id) return p;
        return {
          ...p,
          departures: p.departures.map(d => {
            if (d.date !== payload.departureDate) return d;
            const updatedBooked = d.seatsBooked + payload.guestCount;
            const updatedStatus =
              updatedBooked >= d.seatsTotal
                ? 'sold_out'
                : updatedBooked >= d.seatsTotal - 3
                ? 'few_seats'
                : 'open';
            return {
              ...d,
              seatsBooked: updatedBooked,
              status: updatedStatus
            };
          })
        };
      })
    );

    // Append to bookings
    setBookings(prev => [newBooking, ...prev]);

    // Update demo user bookings count and rewards
    setUser(prev => ({
      ...prev,
      bookingsCount: prev.bookingsCount + 1,
      rewardPoints: prev.rewardPoints + Math.round(finalTotal / 100000)
    }));

    return { success: true, booking: newBooking };
  };

  const submitCustomInquiry = (data: Omit<CustomizedInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: CustomizedInquiry = {
      ...data,
      id: `inq-custom-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setCustomInquiries(prev => [newInquiry, ...prev]);
  };

  const submitCorporateInquiry = (data: Omit<CorporateInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: CorporateInquiry = {
      ...data,
      id: `inq-corp-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setCorporateInquiries(prev => [newInquiry, ...prev]);
  };

  const toggleFavorite = (productId: string) => {
    setUser(prev => {
      const exists = prev.favoriteIds.includes(productId);
      return {
        ...prev,
        favoriteIds: exists
          ? prev.favoriteIds.filter(id => id !== productId)
          : [...prev.favoriteIds, productId]
      };
    });
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status } : b))
    );
  };

  const updateProductPrice = (productId: string, newPrice: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === productId ? { ...p, price: newPrice } : p))
    );
  };

  const updateProductSeats = (productId: string, departureId: string, additionalSeats: number) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id !== productId) return p;
        return {
          ...p,
          departures: p.departures.map(d => {
            if (d.id !== departureId) return d;
            const newTotal = Math.max(d.seatsBooked, d.seatsTotal + additionalSeats);
            return {
              ...d,
              seatsTotal: newTotal,
              status: d.seatsBooked >= newTotal ? 'sold_out' : d.seatsBooked >= newTotal - 3 ? 'few_seats' : 'open'
            };
          })
        };
      })
    );
  };

  const addDepartureDate = (productId: string, date: string, seatsTotal: number) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id !== productId) return p;
        const newDep = {
          id: `dep-${Date.now()}`,
          date,
          dateLabel: `Khởi hành: ${date}`,
          seatsTotal,
          seatsBooked: 0,
          status: 'open' as const
        };
        return {
          ...p,
          departures: [...p.departures, newDep]
        };
      })
    );
  };

  const updatePromotionDiscount = (promoId: string, newPercent: number) => {
    setPromotions(prev =>
      prev.map(p => (p.id === promoId ? { ...p, discountPercent: newPercent } : p))
    );
  };

  const resetDemoData = () => {
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
    localStorage.removeItem(STORAGE_KEYS.CUSTOM_INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.CORP_INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.PROMOTIONS);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setProducts(INITIAL_PRODUCTS);
    setBookings(INITIAL_BOOKINGS);
    setPromotions(PROMOTIONS);
    setUser(DEMO_USER);
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        selectedProductSlug,
        selectedArticleSlug,
        products,
        bookings,
        customInquiries,
        corporateInquiries,
        promotions,
        extraServices: EXTRA_SERVICES,
        journalArticles: JOURNAL_ARTICLES,
        user,
        bookingModalOpen,
        preselectedProductId,
        navigateTo,
        openBookingModal,
        closeBookingModal,
        createBooking,
        calculateSmartPromotion,
        submitCustomInquiry,
        submitCorporateInquiry,
        toggleFavorite,
        updateBookingStatus,
        updateProductPrice,
        updateProductSeats,
        addDepartureDate,
        updatePromotionDiscount,
        resetDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
