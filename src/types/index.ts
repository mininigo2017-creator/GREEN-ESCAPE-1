export interface DepartureDate {
  id: string;
  date: string; // format YYYY-MM-DD or readable "Thứ 7, 24/10/2026"
  dateLabel: string;
  seatsTotal: number;
  seatsBooked: number;
  status: 'open' | 'few_seats' | 'sold_out';
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  activityType: 'detox' | 'nature' | 'mindfulness' | 'culinary' | 'culture' | 'rest';
}

export interface DaySchedule {
  dayNumber: number;
  dayTitle: string;
  items: ItineraryItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  trip: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ExperienceProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  concept: string;
  price: number; // VNĐ
  baseCost: number; // cost basis for startup margin tracking
  duration: string; // e.g. "2N1Đ"
  durationDays: number;
  location: string;
  distanceFromHanoi: string; // e.g. "50km ~ 1.5 giờ"
  groupSize: string; // e.g. "Nhóm nhỏ 8 - 14 khách"
  maxCapacity: number;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  coreHighlights: string[];
  schedule: DaySchedule[];
  accommodation: {
    name: string;
    description: string;
    amenities: string[];
  };
  dining: {
    style: string;
    description: string;
    mealsCount: string;
  };
  transportation: string;
  included: string[];
  notIncluded: string[];
  communityContribution: string;
  faqs: FAQItem[];
  reviews: ReviewItem[];
  departures: DepartureDate[];
  category: 'rest' | 'reconnect' | 'explore' | 'custom' | 'corporate';
}

export interface ExtraService {
  id: string;
  name: string;
  category: 'experience' | 'physical';
  unit: string;
  price: number;
  description: string;
}

export interface Promotion {
  id: string;
  code: string;
  name: string;
  discountPercent: number;
  description: string;
  condition: string;
  type: 'launching' | 'early_bird' | 'group' | 'low_season' | 'referral' | 'manual';
  minDaysAdvance?: number;
  minGuests?: number;
  maxGuests?: number;
}

export interface Booking {
  id: string;
  bookingCode: string;
  experienceId: string;
  experienceName: string;
  departureDate: string;
  guestCount: number;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  specialRequests?: string;
  extraServices: {
    serviceId: string;
    serviceName: string;
    price: number;
    quantity: number;
  }[];
  basePricePerGuest: number;
  totalBasePrice: number;
  appliedPromotion?: {
    code: string;
    name: string;
    discountPercent: number;
  };
  discountAmount: number;
  extraServicesTotal: number;
  finalTotal: number;
  status: 'pending' | 'confirmed' | 'paid' | 'completed' | 'cancelled';
  paymentMethod: 'bank_transfer' | 'qr_vietqr' | 'office';
  createdAt: string;
}

export interface CustomizedInquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  guestsCount: number;
  destination: string;
  startDate: string;
  duration: string;
  budgetPerPerson: string;
  accommodationType: string;
  selectedActivities: string[];
  specialRequests?: string;
  createdAt: string;
  status: 'pending' | 'consulting' | 'approved';
}

export interface CorporateInquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;
  participantCount: number;
  targetDate: string;
  budgetTier: string;
  selectedObjectives: string[];
  specialNotes?: string;
  createdAt: string;
  status: 'pending' | 'quoted' | 'signed';
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Wellness' | 'Slow Travel' | 'Digital Detox' | 'Thiên Nhiên' | 'Văn Hóa Bản Địa';
  readTime: string;
  publishDate: string;
  coverImage: string;
  content: string[];
  author: string;
}

export interface UserAccount {
  name: string;
  email: string;
  phone: string;
  referralCode: string;
  rewardPoints: number;
  favoriteIds: string[];
  bookingsCount: number;
}
