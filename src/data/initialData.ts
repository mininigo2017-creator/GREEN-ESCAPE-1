import { ExperienceProduct, ExtraService, Promotion, Booking, JournalArticle, UserAccount } from '../types';

// Real generated high-resolution assets
export const IMAGES = {
  hero: '/src/assets/images/hero_retreat_nature_1791470349616.jpg',
  bavi: '/src/assets/images/retreat_bavi_forest_1791470365476.jpg',
  maichau: '/src/assets/images/retreat_maichau_valley_1791470378178.jpg',
  ninhbinh: '/src/assets/images/retreat_ninhbinh_river_1791470391453.jpg',
};

export const INITIAL_PRODUCTS: ExperienceProduct[] = [
  {
    id: 'prod-bavi-rest',
    slug: 'ba-vi-rest-escape',
    name: 'Ba Vì – Rest Escape',
    tagline: 'Nghe tiếng mưa rừng, thưởng trà thảo mộc & tạm rời thiết bị số',
    concept: 'Tập trung vào nghỉ ngơi, thiên nhiên và Digital Detox',
    price: 3190000,
    baseCost: 2350000,
    duration: '2N1Đ',
    durationDays: 2,
    location: 'Ba Vì, Hà Nội',
    distanceFromHanoi: '55 km · ~1.5 giờ di chuyển',
    groupSize: 'Nhóm nhỏ giới hạn 8 – 14 khách',
    maxCapacity: 14,
    category: 'rest',
    heroImage: IMAGES.bavi,
    galleryImages: [IMAGES.bavi, IMAGES.hero, IMAGES.maichau],
    overview: 'Nằm giữa sườn đồi Ba Vì xanh ngát rợp bóng thông, Rest Escape là chốn ẩn mình hoàn hảo cho những ai đang cạn kiệt năng lượng. Chuyến đi mang phong cách mộc mạc Vintage, tách biệt khỏi thông báo điện thoại, đưa bạn vào không gian tĩnh lặng để thưởng thức trà thảo mộc organic, ngắm mưa rừng rơi trên hiên gỗ và thực hành làm vườn chữa lành.',
    coreHighlights: [
      'Nghi thức Digital Detox: Tạm bàn giao thiết bị số trong sự an tâm',
      'Thưởng trà thảo dược Ba Vì, nhâm nhi mật ong rừng tinh khiết bên hiên gỗ',
      'Trải nghiệm làm vườn organic, thu hoạch rau sạch và chạm tay vào đất mẹ',
      'Buổi thiền chuông tĩnh tâm và Yoga phục hồi năng lượng giữa rừng thông',
      'Ẩm thực thực dưỡng theo mùa từ nông sản địa phương Ba Vì'
    ],
    schedule: [
      {
        dayNumber: 1,
        dayTitle: 'Ngày 1: Rời xa ồn ào – Trở về chốn tĩnh lặng',
        items: [
          {
            time: '08:00',
            title: 'Khởi hành từ Hà Nội',
            description: 'Xe Dcar Limousine chất lượng cao đón đoàn tại điểm hẹn trung tâm Hà Nội, bắt đầu hành trình trốn khói bụi thành phố.',
            activityType: 'rest'
          },
          {
            time: '09:45',
            title: 'Check-in Eco-Cabin & Nghi thức Digital Detox',
            description: 'Nhận phòng tại nhà gỗ phong cách vintage giữa đồi thông. Bàn giao thiết bị điện tử vào hộp phong ấn bình an, nhận sổ tay Journaling & Escape Box.',
            activityType: 'detox'
          },
          {
            time: '11:45',
            title: 'Bữa trưa thực dưỡng Nông trại xanh',
            description: 'Thưởng thức bữa trưa ấm cúng chế biến từ rau củ quả hữu cơ thu hoạch ngay trong vườn và gà đồi thảo mộc.',
            activityType: 'culinary'
          },
          {
            time: '14:30',
            title: 'Trải nghiệm Làm Vườn & Chạm vào Đất Mẹ',
            description: 'Cùng nông dân bản địa xới đất, gieo hạt, thu hoạch thảo mộc tươi và lắng nghe những câu chuyện về sự tuần hoàn của tự nhiên.',
            activityType: 'nature'
          },
          {
            time: '16:30',
            title: 'Trà chiều thảo mộc & Viết nhật ký dưới hiên mưa',
            description: 'Thưởng thức ấm trà hoa cúc mật ong rừng Ba Vì ấm nóng, lắng nghe thanh âm rừng thông và viết lại những suy nghĩ chân thật.',
            activityType: 'mindfulness'
          },
          {
            time: '19:00',
            title: 'Bữa tối ấm cúng bên ánh nến',
            description: 'Bàn ăn ngoài trời hoặc phòng kính nhìn ra thung lũng, trò chuyện chân thành và chia sẻ nhẹ nhàng cùng những người bạn đồng hành.',
            activityType: 'culinary'
          },
          {
            time: '20:30',
            title: 'Thiền chuông Tây Tạng & Giấc ngủ sâu',
            description: 'Phiên thả lỏng cơ thể với âm thoa chuông xoay, giúp giải phóng hoàn toàn căng thẳng tích tụ ở vùng vai gáy và tinh thần.',
            activityType: 'mindfulness'
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Ngày 2: Đón bình minh thanh khiết – Nạp lại năng lượng',
        items: [
          {
            time: '06:30',
            title: 'Yoga Hơi Thở & Đón sương mai',
            description: 'Các bài tập hít thở Pranayama và kéo giãn cơ thể nhẹ nhàng trên sàn gỗ ngoài trời giữa làn gió rừng mát lành.',
            activityType: 'mindfulness'
          },
          {
            time: '08:00',
            title: 'Bữa sáng ngũ cốc & Nước ép thanh lọc',
            description: 'Bữa sáng giàu dinh dưỡng với bánh mì men tự nhiên, mật ong hoa rừng và hoa quả theo mùa.',
            activityType: 'culinary'
          },
          {
            time: '09:30',
            title: 'Trekking nhẹ sườn rừng thông & Tắm rừng (Shinrin-yoku)',
            description: 'Tản bộ chậm rãi dưới tán thông cổ thụ, hít thở sâu phytoncide tự nhiên giúp tăng cường hệ miễn dịch và giải tỏa áp lực.',
            activityType: 'nature'
          },
          {
            time: '11:30',
            title: 'Vòng tròn chia sẻ & Nhận lại thiết bị số',
            description: 'Lắng đọng cùng nhau, chia sẻ cảm xúc sau chuyến đi và mở hộp thiết bị với một tâm thế nhẹ nhõm, làm chủ công nghệ.',
            activityType: 'detox'
          },
          {
            time: '12:30',
            title: 'Bữa trưa chia tay & Khởi hành về Hà Nội',
            description: 'Dùng bữa trưa nhẹ, tạm biệt Ba Vì. Xe đưa quý khách về lại Hà Nội khoảng 15:30 chiều.',
            activityType: 'rest'
          }
        ]
      }
    ],
    accommodation: {
      name: 'Ba Vì Pine Eco-Cabin (Nguyên căn Vintage)',
      description: 'Nhà gỗ mộc hoàn toàn tự nhiên, cửa kính lớn ôm trọn rừng thông, trang bị đệm bông tự nhiên êm ái, bồn tắm gỗ thảo mộc.',
      amenities: ['Đệm tự nhiên hữu cơ', 'Bồn tắm thảo dược', 'Sân hiên đọc sách riêng', 'Tinh dầu sả chanh', 'Thảm Yoga riêng']
    },
    dining: {
      style: 'Ẩm thực Thực dưỡng & Hữu cơ Địa phương',
      description: 'Toàn bộ nguyên liệu canh tác tại Ba Vì, không chất bảo quản, ít dầu mỡ, thơm ngon tròn vị quê nhà.',
      mealsCount: '3 bữa chính + 1 bữa sáng dưỡng sinh + 1 tiệc trà thảo mộc'
    },
    transportation: 'Xe Dcar Limousine cao cấp đưa đón 2 chiều từ trung tâm Hà Nội (đã bao gồm nước suối detox).',
    included: [
      'Xe Limousine khứ hồi Hà Nội – Ba Vì',
      '01 đêm lưu trú tại Eco-Cabin mộc mạc cao cấp',
      'Tất cả các bữa ăn theo lịch trình (thực dưỡng organic)',
      'Tiệc trà chiều mật ong hoa rừng Ba Vì',
      'Hướng dẫn viên Wellbeing & Facilitator dẫn dắt thiền, yoga',
      'Trải nghiệm làm vườn và thu hoạch nông sản',
      'Bộ sổ tay Journaling & Bút gỗ lưu niệm Green Escape',
      'Bảo hiểm du lịch trọn gói trị giá 50.000.000đ/vụ'
    ],
    notIncluded: [
      'Chi phí chi tiêu cá nhân ngoài chương trình',
      'Các gói trải nghiệm bổ sung (trị liệu 1:1, nhiếp ảnh riêng)',
      'Thuế VAT 8% (nếu yêu cầu xuất hóa đơn doanh nghiệp)'
    ],
    communityContribution: 'Trích 5% giá vé đóng góp trực tiếp vào Quỹ hỗ trợ nông dân trồng thảo mộc bản địa Ba Vì & Dự án trồng thêm cây rừng.',
    faqs: [
      {
        question: 'Tôi đi một mình có bị phụ thu phòng đơn không?',
        answer: 'Green Escape ưu tiên ghép phòng cùng giới tính thân thiện cho khách đi một mình để chia sẻ năng lượng lành tính. Nếu bạn có nhu cầu phòng riêng biệt lập 100%, phụ thu phòng đơn là 650.000đ/đêm.'
      },
      {
        question: 'Digital Detox có bắt buộc không? Nếu có công việc gấp thì sao?',
        answer: 'Chúng tôi khuyến khích ngắt kết nối trọn vẹn, nhưng không cực đoan. Hướng dẫn viên có điện thoại trực khẩn cấp 24/7 để gia đình hoặc đối tác có thể liên hệ khi có việc quan trọng.'
      },
      {
        question: 'Tôi chưa từng tập Yoga hay Thiền bao giờ có tham gia được không?',
        answer: 'Hoàn toàn phù hợp! Các bài tập của Green Escape được thiết kế dành riêng cho người mới bắt đầu, tập trung vào hơi thở tự nhiên và thư giãn cơ thể chứ không đòi hỏi kỹ thuật cao.'
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Nguyễn Thảo Linh',
        role: 'Marketing Lead, 27 tuổi',
        rating: 5,
        trip: 'Ba Vì – Rest Escape',
        date: '28/09/2026',
        comment: 'Sau 6 tháng chạy deadline kiệt sức, 2 ngày ở Ba Vì giống như một phép màu. Được tắt điện thoại, nằm nghe tiếng mưa rơi trên mái tôn và uống ngụm trà mật ong ấm, mình mới nhận ra bản thân đã bỏ quên chính mình quá lâu.'
      },
      {
        id: 'rev-2',
        author: 'Trần Minh Quân',
        role: 'Software Engineer, 29 tuổi',
        rating: 5,
        trip: 'Ba Vì – Rest Escape',
        date: '15/09/2026',
        comment: 'Concept chữa lành rất văn minh, không hề bị mê tín hay ép buộc. Đồ ăn organic cực ngon, phòng sạch sẽ mộc mạc. Về đến Hà Nội tinh thần nhẹ bẫng, ngủ sâu giấc hơn hẳn.'
      }
    ],
    departures: [
      { id: 'dep-bv-1', date: '2026-10-17', dateLabel: 'Thứ 7, 17/10/2026', seatsTotal: 12, seatsBooked: 10, status: 'few_seats' },
      { id: 'dep-bv-2', date: '2026-10-24', dateLabel: 'Thứ 7, 24/10/2026', seatsTotal: 12, seatsBooked: 6, status: 'open' },
      { id: 'dep-bv-3', date: '2026-10-31', dateLabel: 'Thứ 7, 31/10/2026', seatsTotal: 12, seatsBooked: 4, status: 'open' },
      { id: 'dep-bv-4', date: '2026-11-07', dateLabel: 'Thứ 7, 07/11/2026', seatsTotal: 12, seatsBooked: 2, status: 'open' }
    ]
  },
  {
    id: 'prod-maichau-reconnect',
    slug: 'mai-chau-reconnect-escape',
    name: 'Mai Châu – Reconnect Escape',
    tagline: 'Dệt thổ cẩm cùng nghệ nhân Thái, đạp xe thung lũng & thiền chuông giữa đồng xanh',
    concept: 'Tập trung vào kết nối với bạn bè, gia đình, thiên nhiên và văn hóa địa phương',
    price: 3550000,
    baseCost: 2600000,
    duration: '2N1Đ',
    durationDays: 2,
    location: 'Mai Châu, Hòa Bình',
    distanceFromHanoi: '135 km · ~3.0 giờ di chuyển',
    groupSize: 'Nhóm nhỏ giới hạn 8 – 14 khách',
    maxCapacity: 14,
    category: 'reconnect',
    heroImage: IMAGES.maichau,
    galleryImages: [IMAGES.maichau, IMAGES.hero, IMAGES.ninhbinh],
    overview: 'Thung lũng Mai Châu bình yên đón bạn với những nếp nhà sàn bảng lảng khói lam chiều và cánh đồng lúa xanh mướt. Reconnect Escape là hành trình để gắn kết: gắn kết giữa người với người sau thời gian dài bị chia cắt bởi màn hình điện thoại, và kết nối với chiều sâu văn hóa của đồng bào người Thái qua từng sợi chỉ thổ cẩm truyền thống.',
    coreHighlights: [
      'Ngồi bên khung cửi dệt thổ cẩm thủ công cùng nghệ nhân người Thái bản địa',
      'Đạp xe thong dong qua những rặng tre, triền ruộng bậc thang ngát hương lúa',
      'Thiền chuông xoay Tây Tạng giữa khoảng không lộng gió thung lũng',
      'Thưởng thức mâm cơm lá chuối truyền thống với cá suối nướng, xôi nếp nương',
      'Trò chuyện bên lửa trại ấm cúng và thưởng trà búp tuyết san'
    ],
    schedule: [
      {
        dayNumber: 1,
        dayTitle: 'Ngày 1: Vượt đèo Thung Khe – Hòa nhịp cùng bản làng Mai Châu',
        items: [
          {
            time: '07:30',
            title: 'Khởi hành qua đèo Thung Khe mây phủ',
            description: 'Đoàn đón khách tại Hà Nội, dừng chân ngắm biển mây hùng vĩ tại đỉnh đèo Đá Trắng trước khi xuống thung lũng.',
            activityType: 'nature'
          },
          {
            time: '11:30',
            title: 'Đến Mai Châu Lodge & Bữa cơm thân mật',
            description: 'Thưởng thức mâm cơm người Thái với cơm lam nếp nương dẻo thơm, rau rừng xào tỏi và gà đồi hấp mắc khén.',
            activityType: 'culinary'
          },
          {
            time: '14:00',
            title: 'Workshop Dệt Thổ Cẩm cùng Nghệ Nhân Thái',
            description: 'Lắng nghe câu chuyện dệt sợi, tự tay ngồi vào khung dệt gỗ cổ truyền và hoàn thiện một mảnh vải thổ cẩm mang dấu ấn của riêng bạn.',
            activityType: 'culture'
          },
          {
            time: '16:30',
            title: 'Đạp xe xuyên thung lũng & Ngắm hoàng hôn',
            description: 'Đạp xe theo lối mòn qua Bản Lác, Pom Coọng, hít thở hương cỏ ngọt ngào và ngắm mặt trời lặn sau rặng núi đá vôi.',
            activityType: 'nature'
          },
          {
            time: '19:30',
            title: 'Bữa tối ngoài trời & Tiếng sáo Mông bên lửa ấm',
            description: 'Khoảng thời gian ấm cúng để sẻ chia, thưởng thức rượu cần Mai Châu êm dịu và kết nối tình cảm bạn bè, người thân.',
            activityType: 'culinary'
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Ngày 2: Thiền sớm giữa thung lũng – Mang bình yên trở về',
        items: [
          {
            time: '06:00',
            title: 'Thiền Chuông & Hít thở giữa ruộng lúa',
            description: 'Đón những tia nắng đầu tiên chiếu rọi thung lũng với thanh âm chuông xoay thanh lọc tâm trí.',
            activityType: 'mindfulness'
          },
          {
            time: '08:00',
            title: 'Bữa sáng ấm nóng & Thưởng trà Shan Tuyết',
            description: 'Bát phở củ mài thơm lừng và ấm trà Shan Tuyết cổ thụ ngọt hậu.',
            activityType: 'culinary'
          },
          {
            time: '09:30',
            title: 'Dạo chơi phiên chợ bản địa & Chọn nông sản sạch',
            description: 'Gặp gỡ những người dân hiền hậu, mua nông sản sạch và các món quà thủ công mang về tặng người thân.',
            activityType: 'culture'
          },
          {
            time: '12:00',
            title: 'Bữa trưa nhẹ & Khởi hành về Hà Nội',
            description: 'Xe Dcar Limousine đưa đoàn trở về Hà Nội, đến nơi khoảng 16:30 chiều.',
            activityType: 'rest'
          }
        ]
      }
    ],
    accommodation: {
      name: 'Mai Châu Valley Eco-Lodge (Nhà sàn sinh thái cao cấp)',
      description: 'Nhà sàn gỗ lát ngói truyền thống nhưng tiện nghi chuẩn resort 4 sao, ban công rộng nhìn thẳng ra cánh đồng lúa xanh ngút ngàn.',
      amenities: ['Ban công ngắm lúa 180 độ', 'Máy sưởi ấm mùa đông', 'Đồ vệ sinh sinh học hữu cơ', 'Trà Shan Tuyết miễn phí']
    },
    dining: {
      style: 'Ẩm thực Tây Bắc đặc sắc & Lành sạch',
      description: 'Nguyên liệu từ suối Mai Châu và đồi nương tự nhiên, phối hợp hài hòa các loại gia vị mắc khén, hạt dổi.',
      mealsCount: '3 bữa chính đặc sản + 1 bữa sáng ấm nóng + 1 tiệc trà'
    },
    transportation: 'Xe Dcar Limousine êm ái đưa đón 2 chiều tận nơi từ Hà Nội.',
    included: [
      'Xe Limousine khứ hồi Hà Nội – Mai Châu',
      '01 đêm tại Eco-Lodge nhà sàn cao cấp nhìn ra thung lũng',
      'Toàn bộ các bữa ăn đặc sản Tây Bắc theo lịch trình',
      'Workshop dệt thổ cẩm trọn gói cùng nghệ nhân bản địa',
      'Xe đạp dạo chơi thung lũng miễn phí',
      'Khóa thiền chuông năng lượng buổi sáng',
      'Khăn thổ cẩm quà tặng thủ công Green Escape',
      'Bảo hiểm du lịch giá trị 50.000.000đ/người'
    ],
    notIncluded: ['Đồ uống có cồn ngoài tiêu chuẩn', 'Chi phí cá nhân', 'Thuế VAT 8%'],
    communityContribution: '100% chi phí workshop dệt và hướng dẫn bản địa được chuyển thẳng đến Quỹ phụ nữ dệt thổ cẩm Mai Châu.',
    faqs: [
      {
        question: 'Chuyến đi có phù hợp cho người lớn tuổi hoặc trẻ em không?',
        answer: 'Rất phù hợp! Mai Châu có địa hình thung lũng bằng phẳng, không leo dốc gập ghềnh, không khí cực kỳ thoáng đãng và trong lành.'
      },
      {
        question: 'Trang phục dệt thổ cẩm và đạp xe cần chuẩn bị ra sao?',
        answer: 'Bạn chỉ cần mang quần áo chất liệu linen hoặc cotton thoáng mát, giày thể thao đế mềm. Green Escape chuẩn bị sẵn nón lá và mũ vải cho bạn.'
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Hoàng Bích Phương',
        role: 'Designer tự do, 26 tuổi',
        rating: 5,
        trip: 'Mai Châu – Reconnect Escape',
        date: '02/10/2026',
        comment: 'Khoảnh khắc ngồi dệt thổ cẩm cùng mế người Thái, nghe mế kể về từng hoa văn gia đình, mình thấy lòng ấm áp lạ lùng. Mai Châu của Green Escape không phải là tour xô bồ mua bán, mà là một nơi để tìm lại cội nguồn bình yên.'
      }
    ],
    departures: [
      { id: 'dep-mc-1', date: '2026-10-18', dateLabel: 'Chủ Nhật, 18/10/2026', seatsTotal: 12, seatsBooked: 11, status: 'few_seats' },
      { id: 'dep-mc-2', date: '2026-10-25', dateLabel: 'Chủ Nhật, 25/10/2026', seatsTotal: 12, seatsBooked: 7, status: 'open' },
      { id: 'dep-mc-3', date: '2026-11-01', dateLabel: 'Chủ Nhật, 01/11/2026', seatsTotal: 12, seatsBooked: 5, status: 'open' }
    ]
  },
  {
    id: 'prod-ninhbinh-explore',
    slug: 'ninh-binh-explore-light',
    name: 'Ninh Bình – Explore Light',
    tagline: 'Đạp xe ven đầm sen di sản, trekking nhẹ sườn núi & thiền hoàng hôn',
    concept: 'Tập trung vào khám phá nhẹ nhàng, thiên nhiên và văn hóa di sản',
    price: 3550000,
    baseCost: 2600000,
    duration: '2N1Đ',
    durationDays: 2,
    location: 'Ninh Bình',
    distanceFromHanoi: '95 km · ~1.8 giờ di chuyển',
    groupSize: 'Nhóm nhỏ giới hạn 8 – 14 khách',
    maxCapacity: 14,
    category: 'explore',
    heroImage: IMAGES.ninhbinh,
    galleryImages: [IMAGES.ninhbinh, IMAGES.hero, IMAGES.bavi],
    overview: 'Ninh Bình không chỉ có những thắng cảnh nổi tiếng mà còn ẩn chứa những cung đường làng quê tĩnh mịch uốn lượn dưới chân vách núi đá vôi triệu năm. Explore Light mang đến trải nghiệm vận động nhẹ nhàng: đạp xe ven đầm sen thơm mát, chèo thuyền nan trên dòng sông êm ả không có tiếng động cơ và thực hành chánh niệm khi hoàng hôn buông xuống.',
    coreHighlights: [
      'Đạp xe thong dong trên con đường làng rợp bóng mát ven dòng sông sen',
      'Thuyền nan truyền thống len lỏi qua thung nước hoang sơ vắng bóng khách du lịch',
      'Trekking nhẹ sườn núi đá vôi ngắm toàn cảnh đồng bằng Cố Đô',
      'Khóa Yoga kéo giãn và hít thở đón hoàng hôn rực rỡ',
      'Thưởng thức mâm cơm Cố Đô thanh đạm cùng các món canh dưỡng sinh cổ truyền'
    ],
    schedule: [
      {
        dayNumber: 1,
        dayTitle: 'Ngày 1: Về miền Cố Đô non nước – Khám phá dòng chảy xanh',
        items: [
          {
            time: '08:00',
            title: 'Khởi hành từ Hà Nội theo cao tốc',
            description: 'Di chuyển êm ái trên xe Limousine sang trọng về vùng đất địa linh nhân kiệt Ninh Bình.',
            activityType: 'rest'
          },
          {
            time: '10:00',
            title: 'Check-in Hidden Charm Eco-Boutique',
            description: 'Nghỉ chân tại khu lưu trú xanh với vườn sen bao quanh, thưởng thức nước đậu biếc hoa nhài chào mừng.',
            activityType: 'nature'
          },
          {
            time: '11:45',
            title: 'Bữa trưa ẩm thực Cố Đô',
            description: 'Thực đơn thanh nhẹ kết hợp rau rừng dầm tương bần, nấm hương xào hạt sen và canh cua đồng thanh mát.',
            activityType: 'culinary'
          },
          {
            time: '14:30',
            title: 'Thuyền nan êm trôi trên vùng nước hoang sơ',
            description: 'Trải nghiệm chèo thuyền nan mộc mạc không tiếng động cơ qua những vòm hang đá mát rượi, ngắm chim trời bay về tổ.',
            activityType: 'nature'
          },
          {
            time: '17:00',
            title: 'Yoga Hoàng Hôn bên sườn núi đá',
            description: 'Thực hiện chuỗi bài chào mặt trời (Sun Salutation) trên bãi cỏ ven hồ khi ánh hoàng hôn nhuộm vàng vách núi.',
            activityType: 'mindfulness'
          },
          {
            time: '19:30',
            title: 'Tiệc nướng BBQ thảo mộc sân vườn',
            description: 'Không gian ấm cúng, thưởng thức các món nướng ướp mật ong rừng cùng trà sen Tây Hồ ủ lạnh.',
            activityType: 'culinary'
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Ngày 2: Đạp xe sớm mai – Chạm vào bình minh di sản',
        items: [
          {
            time: '06:30',
            title: 'Đạp xe bình minh ngắm đầm sen & sương sớm',
            description: 'Băng qua những cánh đồng lúa đang thì con gái, hít căng lồng ngực không khí trong lành của làng quê Bắc Bộ.',
            activityType: 'nature'
          },
          {
            time: '08:30',
            title: 'Bữa sáng & Trò chuyện cùng người chèo đò bản địa',
            description: 'Lắng nghe những ký ức ngàn năm của vùng đất Cố Đô từ người dân bản xứ mộc mạc.',
            activityType: 'culture'
          },
          {
            time: '10:00',
            title: 'Trekking nhẹ sườn núi cổ tích',
            description: 'Vận động vừa phải trên những bậc đá rợp bóng cây cổ thụ, chạm đỉnh đài quan sát ngắm trọn vùng vịnh trên cạn.',
            activityType: 'nature'
          },
          {
            time: '12:30',
            title: 'Bữa trưa & Chuẩn bị hành lý về Hà Nội',
            description: 'Nạp năng lượng bữa trưa cuối cùng, xe đưa đoàn về tới Hà Nội khoảng 15:30 chiều.',
            activityType: 'rest'
          }
        ]
      }
    ],
    accommodation: {
      name: 'Ninh Bình Sanctuary Eco-Resort',
      description: 'Không gian kiến trúc đất nung mộc mạc ẩn hiện giữa hồ sen, cách biệt với khu du lịch thương mại ồn ào.',
      amenities: ['Hồ bơi nước khoáng tự nhiên', 'Xe đạp địa hình miễn phí', 'Ban công nhìn ra núi đá', 'Áo choàng cotton mềm']
    },
    dining: {
      style: 'Ẩm thực di sản Cố Đô dưỡng sinh',
      description: 'Chế biến từ sen tươi, hạt sen, rau rừng và nấm thảo mộc thanh sạch.',
      mealsCount: '3 bữa chính + 1 bữa sáng + 1 tiệc trà hoa sen'
    },
    transportation: 'Xe Dcar Limousine chất lượng cao đưa đón tận nơi 2 chiều.',
    included: [
      'Xe Limousine khứ hồi Hà Nội – Ninh Bình',
      '01 đêm tại Sanctuary Eco-Resort view núi đá',
      'Toàn bộ bữa ăn thực dưỡng theo lịch trình',
      'Thuyền nan truyền thống khám phá đầm sinh thái',
      'Xe đạp dạo làng quê và trang thiết bị trekking nhẹ',
      'Hướng dẫn viên Wellbeing đồng hành suốt tuyến',
      'Bảo hiểm du lịch mức 50.000.000đ/vụ'
    ],
    notIncluded: ['Chi tiêu cá nhân', 'Thuế VAT 8%'],
    communityContribution: 'Hỗ trợ việc làm cho các bác chèo đò lớn tuổi và trích 5% lợi nhuận vào Quỹ bảo vệ chim nước ngập mặn.',
    faqs: [
      {
        question: 'Trekking sườn núi có khó không?',
        answer: 'Trekking ở mức độ dễ (Light grade), bậc đá thoai thoải rợp bóng râm, trẻ em từ 7 tuổi và người lớn tuổi đều có thể đi thong thả theo nhịp riêng.'
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Đặng Tuấn Anh',
        role: 'Kiến trúc sư, 31 tuổi',
        rating: 5,
        trip: 'Ninh Bình – Explore Light',
        date: '20/09/2026',
        comment: 'Một Ninh Bình rất khác so với những tour đông đúc thông thường. Đi thuyền trên đầm nước vắng lặng, chỉ nghe thấy tiếng chim và tiếng nước khỏa vào mái chèo, cảm giác thật sự được chữa lành.'
      }
    ],
    departures: [
      { id: 'dep-nb-1', date: '2026-10-17', dateLabel: 'Thứ 7, 17/10/2026', seatsTotal: 12, seatsBooked: 8, status: 'open' },
      { id: 'dep-nb-2', date: '2026-10-24', dateLabel: 'Thứ 7, 24/10/2026', seatsTotal: 12, seatsBooked: 11, status: 'few_seats' },
      { id: 'dep-nb-3', date: '2026-10-31', dateLabel: 'Thứ 7, 31/10/2026', seatsTotal: 12, seatsBooked: 3, status: 'open' }
    ]
  },
  {
    id: 'prod-customized',
    slug: 'customized-escape',
    name: 'Customized Escape – Thiết Kế Riêng',
    tagline: 'Chuyến đi độc bản được may đo theo nhịp thở và câu chuyện của riêng bạn',
    concept: 'Thiết kế riêng cho cặp đôi, gia đình và nhóm bạn kín đáo',
    price: 4200000,
    baseCost: 3100000,
    duration: 'Linh hoạt (2N1Đ / 3N2Đ)',
    durationDays: 2,
    location: 'Ba Vì, Mai Châu, Ninh Bình, Sapa, Hà Giang',
    distanceFromHanoi: 'Tùy chọn theo tuyến điểm',
    groupSize: 'Nhóm riêng từ 2 – 10 khách',
    maxCapacity: 10,
    category: 'custom',
    heroImage: IMAGES.hero,
    galleryImages: [IMAGES.hero, IMAGES.bavi, IMAGES.maichau, IMAGES.ninhbinh],
    overview: 'Dành cho những tâm hồn cần sự riêng tư tuyệt đối. Đội ngũ chuyên gia trải nghiệm của Green Escape sẽ lắng nghe từng mong muốn về thời gian, sở thích ẩm thực, mức độ vận động và các hoạt động chữa lành để thiết kế một hành trình độc bản chỉ dành riêng cho bạn và những người thân yêu.',
    coreHighlights: [
      'Lịch trình hoàn toàn linh hoạt theo nhịp sinh học và sở thích cá nhân',
      'Lựa chọn homestay/eco-lodge nguyên căn riêng tư 100%',
      'Tự do mix & match: Yoga cá nhân, thiền chuông, dệt vải, làm vườn, nấu ăn thực dưỡng',
      'Hướng dẫn viên và Facilitator phục vụ riêng biệt, tận tâm và tinh tế',
      'Bữa tối thân mật lãng mạn dưới ánh nến và tinh dầu tự nhiên'
    ],
    schedule: [
      {
        dayNumber: 1,
        dayTitle: 'Ngày 1: Thiết kế theo yêu cầu cá nhân hóa',
        items: [
          {
            time: 'Linh hoạt',
            title: 'Đón tại nhà bằng xe riêng Limousine',
            description: 'Khởi hành theo khung giờ thuận tiện nhất cho gia đình hoặc nhóm bạn của bạn.',
            activityType: 'rest'
          },
          {
            time: 'Chiều',
            title: 'Trải nghiệm theo chủ đề chọn lọc',
            description: 'Tùy chọn: Phiên trị liệu tâm lý 1:1, lớp yoga chuyên sâu, cắm trại lều chuông hoặc workshop gốm mộc.',
            activityType: 'mindfulness'
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Ngày 2: Tự do khám phá & Phục hồi sâu',
        items: [
          {
            time: 'Sáng',
            title: 'Thưởng thức thiên nhiên không vội vã',
            description: 'Thức dậy không cần báo thức, nhâm nhi cà phê ủ lạnh hoặc trà thảo mộc giữa khung cảnh riêng biệt.',
            activityType: 'nature'
          }
        ]
      }
    ],
    accommodation: {
      name: 'Eco-Villa hoặc Homestay Nguyên Căn Độc Bản',
      description: 'Biệt thự sinh thái hoặc căn nhà gỗ biệt lập hoàn toàn, sân vườn rộng và không gian riêng tư tối đa.',
      amenities: ['Không gian biệt lập 100%', 'Bếp mở hữu cơ', 'Sân tập Yoga riêng', 'Quản gia tận tâm']
    },
    dining: {
      style: 'Thiết kế thực đơn riêng theo yêu cầu y tế / chay / keto',
      description: 'Đầu bếp riêng phục vụ theo sở thích dinh dưỡng của nhóm.',
      mealsCount: 'Toàn bộ bữa ăn cao cấp được thiết kế riêng'
    },
    transportation: 'Xe riêng Limousine đón trả tận nhà.',
    included: [
      'Xe riêng Limousine khứ hồi đón tận nơi',
      'Lưu trú nguyên căn biệt lập cao cấp',
      'Toàn bộ bữa ăn theo thực đơn thiết kế riêng',
      'Facilitator và Chuyên gia đồng hành riêng biệt',
      'Bộ quà tặng Escape Box cao cấp cho từng thành viên',
      'Bảo hiểm du lịch cao cấp mức 100.000.000đ/người'
    ],
    notIncluded: ['Chi tiêu cá nhân ngoài thỏa thuận'],
    communityContribution: 'Đóng góp 5% giá trị hợp đồng vào dự án trồng rừng bảo tồn tại địa phương bạn ghé thăm.',
    faqs: [
      {
        question: 'Quy trình tư vấn Customized Escape mất bao lâu?',
        answer: 'Sau khi bạn gửi form yêu cầu, chuyên viên Green Escape sẽ gọi điện tư vấn trong vòng 24 giờ và gửi bản dự thảo lịch trình chi tiết trong vòng 48 giờ.'
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Vũ Thanh Hằng',
        role: 'Gia đình 4 người, Hà Nội',
        rating: 5,
        trip: 'Customized Escape – Ba Vì',
        date: '10/09/2026',
        comment: 'Chuyến đi kỷ niệm ngày cưới của vợ chồng mình cùng 2 con nhỏ. Đội ngũ Green Escape chuẩn bị cực kỳ chu đáo từ thực đơn riêng cho bé đến buổi tối lãng mạn cho bố mẹ. Bọn trẻ lần đầu biết nhặt trứng gà và tưới rau!'
      }
    ],
    departures: [
      { id: 'dep-cus-1', date: '2026-10-15', dateLabel: 'Linh hoạt mọi ngày trong tuần', seatsTotal: 10, seatsBooked: 2, status: 'open' }
    ]
  },
  {
    id: 'prod-corporate',
    slug: 'corporate-wellness-retreat',
    name: 'Corporate Wellness Retreat – Doanh Nghiệp',
    tagline: 'Chữa lành burnout, gắn kết cảm xúc & tái tạo sức sáng tạo cho đội ngũ',
    concept: 'Dành cho doanh nghiệp: Thay thế teambuilding ồn ào bằng retreat gắn kết sâu sắc',
    price: 3500000,
    baseCost: 2500000,
    duration: '2N1Đ hoặc 3N2Đ tùy chỉnh',
    durationDays: 2,
    location: 'Ba Vì / Mai Châu / Ninh Bình / Mộc Châu',
    distanceFromHanoi: '1.5 – 3.5 giờ di chuyển',
    groupSize: 'Đoàn từ 15 – 80 nhân sự',
    maxCapacity: 80,
    category: 'corporate',
    heroImage: IMAGES.hero,
    galleryImages: [IMAGES.hero, IMAGES.bavi, IMAGES.maichau],
    overview: 'Tạm biệt những chuyến du lịch công ty ồn ào với những trò chơi chạy nhảy ép buộc và tiệc rượu say xỉn mệt mỏi. Corporate Wellness Retreat của Green Escape mang đến làn gió mới: một kỳ nghỉ dưỡng giúp nhân sự giải tỏa áp lực, chữa lành hội chứng Burnout công sở, gắn kết đồng đội qua hoạt động lắng nghe chân thành và nạp đầy năng lượng cho mục tiêu tăng trưởng của công ty.',
    coreHighlights: [
      'Thay thế game phạt ồn ào bằng workshop kết nối cảm xúc & Vòng tròn lắng nghe',
      'Phiên Sound Bath (Tắm âm thanh chuông xoay) tập thể giải tỏa stress công việc',
      'Trekking nhẹ xuyên rừng kích thích tư duy sáng tạo và tinh thần vượt ngưỡng',
      'Không gian họp chiến lược tĩnh lặng giữa thiên nhiên xanh ngát',
      'Báo cáo đo lường chỉ số hài lòng và năng lượng của đội ngũ sau chuyến đi'
    ],
    schedule: [
      {
        dayNumber: 1,
        dayTitle: 'Ngày 1: Reset năng lượng – Gắn kết từ sự thấu hiểu',
        items: [
          {
            time: '08:00',
            title: 'Xe đón đoàn tại trụ sở công ty',
            description: 'Đoàn di chuyển bằng xe cao cấp, mở đầu chuyến đi bằng nhạc acoustic nhẹ nhàng thư thái.',
            activityType: 'rest'
          },
          {
            time: '10:00',
            title: 'Check-in & Workshop Khai Phóng Năng Lượng',
            description: 'Phiên chia sẻ ngắn giúp mọi người trút bỏ danh xưng công việc, quay về làm một cá nhân chân thật giữa thiên nhiên.',
            activityType: 'mindfulness'
          },
          {
            time: '14:30',
            title: 'Teambuilding Chữa Lành: Thử Thách Vô Ngôn & Rừng Xanh',
            description: 'Các hoạt động phối hợp đồng đội trong im lặng để cảm nhận sự tin tưởng, đồng hành và tôn trọng lẫn nhau.',
            activityType: 'nature'
          },
          {
            time: '19:00',
            title: 'Gala Dinner Thân Mật & Đêm Nhạc Mộc',
            description: 'Bữa tối ấm cúng không cồn cưỡng ép, trò chuyện chân tình bên lửa ấm và tiếng ghi-ta mộc mạc.',
            activityType: 'culinary'
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Ngày 2: Định hình tầm nhìn – Trở về với tinh thần sảng khoái',
        items: [
          {
            time: '06:30',
            title: 'Yoga Hơi Thở & Tắm Rừng Đồng Đội',
            description: 'Nạp trọn oxy tươi mát đầu ngày, tăng cường sức bền và giải phóng tắc nghẽn cơ thể văn phòng.',
            activityType: 'mindfulness'
          },
          {
            time: '09:00',
            title: 'Tọa đàm Tầm Nhìn & Kế Hoạch Bứt Phá',
            description: 'Buổi thảo luận cởi mở ngoài trời, khơi nguồn sáng tạo cho những giải pháp đột phá mới.',
            activityType: 'culture'
          },
          {
            time: '13:30',
            title: 'Khởi hành về lại văn phòng',
            description: 'Đoàn về tới Hà Nội khoảng 16:00, sẵn sàng cho tuần làm việc mới với năng lượng tràn đầy.',
            activityType: 'rest'
          }
        ]
      }
    ],
    accommodation: {
      name: 'Resort Sinh Thái Nguyên Khu Riêng Biệt',
      description: 'Bao trọn khuôn viên biệt lập, phòng ốc tiêu chuẩn 4-5 sao gần gũi thiên nhiên, có hội trường mở thoáng đãng.',
      amenities: ['Hội trường thiên nhiên', 'Sân cỏ rộng teambuilding', 'Hồ bơi khoáng nóng', 'Hệ thống âm thanh acoustic']
    },
    dining: {
      style: 'Ẩm thực dinh dưỡng bồi bổ sức khỏe',
      description: 'Mâm cơm cân bằng dinh dưỡng, nhiều rau xanh, hạn chế dầu mỡ, đồ uống thảo mộc giải độc gan.',
      mealsCount: '3 bữa chính + 1 bữa sáng + 2 tiệc trà teabreak thảo dược'
    },
    transportation: 'Xe du lịch cao cấp Universe / Limousine đời mới đưa đón riêng.',
    included: [
      'Xe chất lượng cao đưa đón tận nơi theo yêu cầu doanh nghiệp',
      'Bao trọn khu lưu trú sinh thái tiện nghi',
      'Toàn bộ bữa ăn và teabreak thảo mộc',
      'Đội ngũ Chuyên gia Tâm lý, HLV Yoga & Facilitator chuyên nghiệp',
      'Kịch bản teambuilding chữa lành và đạo cụ chuyên dụng',
      'Quà tặng Escape Kit cho toàn bộ nhân viên',
      'Bảo hiểm du lịch doanh nghiệp 50.000.000đ/người',
      'Báo cáo đánh giá NPS và mức độ gắn kết đội ngũ sau tour'
    ],
    notIncluded: ['Thuế VAT 8%', 'Các dịch vụ phát sinh ngoài hợp đồng'],
    communityContribution: 'Doanh nghiệp cùng Green Escape trao tặng 50 cây xanh cho quỹ rừng phòng hộ bản địa mang tên công ty.',
    faqs: [
      {
        question: 'Chính sách xuất hóa đơn VAT và hợp đồng doanh nghiệp như thế nào?',
        answer: 'Green Escape cung cấp đầy đủ hợp đồng kinh tế, biên bản nghiệm thu và hóa đơn giá trị gia tăng điện tử hợp lệ theo quy định pháp luật.'
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Phạm Thu Trang',
        role: 'HR Director, Công ty Công Nghệ TechNest (45 người)',
        rating: 5,
        trip: 'Corporate Wellness Retreat – Ba Vì',
        date: '18/09/2026',
        comment: 'Đây là lần đầu tiên công ty mình tổ chức một chuyến đi mà 100% nhân viên đều khen ngợi. Mọi người không bị ép uống rượu, không phải chơi trò lố lăng mà được thực sự nghỉ ngơi, nói chuyện thật lòng với nhau. Sau chuyến đi, hiệu suất làm việc của team tăng rõ rệt!'
      }
    ],
    departures: [
      { id: 'dep-corp-1', date: '2026-10-20', dateLabel: 'Tổ chức linh hoạt theo lịch doanh nghiệp', seatsTotal: 50, seatsBooked: 0, status: 'open' }
    ]
  }
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: 'extra-detox-pass',
    name: 'Gói Digital Detox Day Pass',
    category: 'experience',
    unit: 'Khách / Ngày',
    price: 1250000,
    description: 'Tắt thiết bị điện tử, đọc sách, viết nhật ký, thưởng trà chiều & thiền nhẹ trong ngày (dành cho khách đi kèm hoặc bổ sung).'
  },
  {
    id: 'extra-therapy-1on1',
    name: 'Tham Vấn Tâm Lý / Healing 1:1',
    category: 'experience',
    unit: 'Suất (60 phút)',
    price: 1500000,
    description: 'Phiên tham vấn riêng biệt với Chuyên gia Tâm lý / Facilitator giàu kinh nghiệm để gỡ rối cảm xúc và burnout.'
  },
  {
    id: 'extra-private-yoga',
    name: 'Lớp Yoga / Thiền Định Cá Nhân',
    category: 'experience',
    unit: 'Buổi (90 phút)',
    price: 800000,
    description: 'Giáo viên hướng dẫn kèm riêng 1:1 ngoài khung giờ chung, điều chỉnh kỹ thuật thở và thả lỏng chuyên sâu.'
  },
  {
    id: 'extra-brocade-weaving',
    name: 'Trải Nghiệm Dệt Thổ Cẩm Chuyên Sâu',
    category: 'experience',
    unit: 'Lượt / Khách',
    price: 350000,
    description: 'Nghệ nhân Mai Châu kèm riêng dệt mảnh vải thủ công thổ cẩm hoàn chỉnh mang về làm kỷ niệm độc bản.'
  },
  {
    id: 'extra-organic-farming',
    name: 'Trải Nghiệm Làm Vườn & Thu Hoạch',
    category: 'experience',
    unit: 'Lượt / Khách',
    price: 250000,
    description: 'Thu hoạch giỏ nông sản organic tươi ngon tại nông trại Ba Vì kèm phần quà rau củ mang về nhà.'
  },
  {
    id: 'extra-photography',
    name: 'Gói Nhiếp Ảnh Kỷ Niệm Cảm Xúc',
    category: 'experience',
    unit: 'Gói / Tour',
    price: 2000000,
    description: 'Nhiếp ảnh gia chuyên nghiệp bắt trọn các khoảnh khắc tự nhiên, mộc mạc, không diễn xuất trong suốt chuyến đi (trả 50+ ảnh blend màu).'
  },
  {
    id: 'gift-detox-kit',
    name: 'Bộ Quà Tặng Detox & Journaling Kit',
    category: 'physical',
    unit: 'Bộ quà tặng',
    price: 450000,
    description: 'Sổ tay bìa da tái chế cao cấp, bút gỗ mộc, trà thảo mộc organic và lọ tinh dầu thiên nhiên nguyên chất.'
  },
  {
    id: 'gift-honey-tea',
    name: 'Set Trà Thảo Mộc & Mật Ong Rừng Ba Vì',
    category: 'physical',
    unit: 'Hộp quà cao cấp',
    price: 380000,
    description: '1 hũ mật ong rừng Ba Vì nguyên chất (300ml) và 2 hộp trà thảo mộc thanh lọc cơ thể từ nông dân bản địa.'
  },
  {
    id: 'gift-brocade-scarf',
    name: 'Khăn Thổ Cẩm Thủ Công Bản Địa Mai Châu',
    category: 'physical',
    unit: 'Chiếc',
    price: 280000,
    description: 'Khăn choàng dệt tay 100% sợi tự nhiên bởi nghệ nhân người Thái tại Mai Châu.'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-launch',
    code: 'LAUNCH15',
    name: 'Launching Promotion',
    discountPercent: 15,
    description: 'Giảm 15% chào mừng thương hiệu Green Escape (áp dụng trong 2 tháng đầu, tối đa 100 suất).',
    condition: 'Áp dụng cho 100 booking đầu tiên sau khai trương',
    type: 'launching'
  },
  {
    id: 'promo-early',
    code: 'EARLYBIRD',
    name: 'Early Bird Promotion',
    discountPercent: 10,
    description: 'Giảm 10% khi đặt chuyến trước ngày khởi hành ít nhất 21 ngày.',
    condition: 'Đặt trước ≥ 21 ngày so với ngày khởi hành',
    type: 'early_bird',
    minDaysAdvance: 21
  },
  {
    id: 'promo-grp-45',
    code: 'GROUP45',
    name: 'Ưu đãi Nhóm 4 – 5 Người',
    discountPercent: 5,
    description: 'Giảm 5% cho nhóm bạn hoặc gia đình từ 4 đến 5 thành viên.',
    condition: 'Số lượng khách từ 4 đến 5 người',
    type: 'group',
    minGuests: 4,
    maxGuests: 5
  },
  {
    id: 'promo-grp-69',
    code: 'GROUP69',
    name: 'Ưu đãi Nhóm 6 – 9 Người',
    discountPercent: 7,
    description: 'Giảm 7% cho nhóm bạn bè, đồng nghiệp từ 6 đến 9 người.',
    condition: 'Số lượng khách từ 6 đến 9 người',
    type: 'group',
    minGuests: 6,
    maxGuests: 9
  },
  {
    id: 'promo-grp-10',
    code: 'GROUP10',
    name: 'Ưu đãi Nhóm từ 10 Người',
    discountPercent: 10,
    description: 'Giảm 10% cho hội nhóm, câu lạc bộ hoặc nhóm bạn từ 10 người trở lên.',
    condition: 'Số lượng khách ≥ 10 người',
    type: 'group',
    minGuests: 10
  },
  {
    id: 'promo-lowseason',
    code: 'LOWSEASON',
    name: 'Ưu đãi Mùa Thấp Điểm',
    discountPercent: 10,
    description: 'Giảm 10% kích cầu các tuần thấp điểm trong tháng.',
    condition: 'Áp dụng cho các chuyến đi vào ngày giữa tuần hoặc tháng thấp điểm',
    type: 'low_season'
  },
  {
    id: 'promo-referral',
    code: 'FRIEND5',
    name: 'Referral Giới Thiệu Bạn Bè',
    discountPercent: 5,
    description: 'Giảm 5% khi được giới thiệu bởi cựu khách hàng của Green Escape.',
    condition: 'Nhập mã giới thiệu từ bạn bè',
    type: 'referral'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'bkg-101',
    bookingCode: 'GE-2026-8942',
    experienceId: 'prod-bavi-rest',
    experienceName: 'Ba Vì – Rest Escape',
    departureDate: '2026-10-17',
    guestCount: 2,
    contactName: 'Lê Minh Anh',
    contactPhone: '0912 345 678',
    contactEmail: 'minhanh.le@gmail.com',
    specialRequests: 'Chế độ ăn chay nhẹ, cần phòng yên tĩnh nhất có thể.',
    extraServices: [
      { serviceId: 'gift-honey-tea', serviceName: 'Set Trà Thảo Mộc & Mật Ong Rừng Ba Vì', price: 380000, quantity: 1 }
    ],
    basePricePerGuest: 3190000,
    totalBasePrice: 6380000,
    appliedPromotion: {
      code: 'LAUNCH15',
      name: 'Launching Promotion',
      discountPercent: 15
    },
    discountAmount: 957000,
    extraServicesTotal: 380000,
    finalTotal: 5803000,
    status: 'paid',
    paymentMethod: 'qr_vietqr',
    createdAt: '2026-10-04T10:30:00Z'
  },
  {
    id: 'bkg-102',
    bookingCode: 'GE-2026-8943',
    experienceId: 'prod-maichau-reconnect',
    experienceName: 'Mai Châu – Reconnect Escape',
    departureDate: '2026-10-18',
    guestCount: 5,
    contactName: 'Nguyễn Hải Đăng',
    contactPhone: '0988 765 432',
    contactEmail: 'haidang.ng@gmail.com',
    specialRequests: 'Đoàn có 1 bạn bị dị ứng đậu phộng.',
    extraServices: [
      { serviceId: 'extra-brocade-weaving', serviceName: 'Trải Nghiệm Dệt Thổ Cẩm Chuyên Sâu', price: 350000, quantity: 2 }
    ],
    basePricePerGuest: 3550000,
    totalBasePrice: 17750000,
    appliedPromotion: {
      code: 'GROUP45',
      name: 'Ưu đãi Nhóm 4 – 5 Người',
      discountPercent: 5
    },
    discountAmount: 887500,
    extraServicesTotal: 700000,
    finalTotal: 17562500,
    status: 'confirmed',
    paymentMethod: 'bank_transfer',
    createdAt: '2026-10-05T14:15:00Z'
  },
  {
    id: 'bkg-103',
    bookingCode: 'GE-2026-8944',
    experienceId: 'prod-ninhbinh-explore',
    experienceName: 'Ninh Bình – Explore Light',
    departureDate: '2026-10-24',
    guestCount: 2,
    contactName: 'Trần Quỳnh Nga',
    contactPhone: '0904 123 987',
    contactEmail: 'quynhnga.tran@gmail.com',
    specialRequests: 'Chuẩn bị thảm yoga sạch riêng cho 2 bạn nữ.',
    extraServices: [
      { serviceId: 'extra-photography', serviceName: 'Gói Nhiếp Ảnh Kỷ Niệm Cảm Xúc', price: 2000000, quantity: 1 }
    ],
    basePricePerGuest: 3550000,
    totalBasePrice: 7100000,
    appliedPromotion: {
      code: 'EARLYBIRD',
      name: 'Early Bird Promotion',
      discountPercent: 10
    },
    discountAmount: 710000,
    extraServicesTotal: 2000000,
    finalTotal: 8390000,
    status: 'paid',
    paymentMethod: 'qr_vietqr',
    createdAt: '2026-10-06T09:00:00Z'
  },
  {
    id: 'bkg-104',
    bookingCode: 'GE-2026-8945',
    experienceId: 'prod-bavi-rest',
    experienceName: 'Ba Vì – Rest Escape',
    departureDate: '2026-10-24',
    guestCount: 1,
    contactName: 'Hoàng Minh Quân',
    contactPhone: '0936 555 777',
    contactEmail: 'quan.hm@gmail.com',
    specialRequests: 'Ghép phòng cùng bạn nam đi một mình.',
    extraServices: [],
    basePricePerGuest: 3190000,
    totalBasePrice: 3190000,
    appliedPromotion: {
      code: 'LAUNCH15',
      name: 'Launching Promotion',
      discountPercent: 15
    },
    discountAmount: 478500,
    extraServicesTotal: 0,
    finalTotal: 2711500,
    status: 'pending',
    paymentMethod: 'bank_transfer',
    createdAt: '2026-10-07T16:20:00Z'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'post-1',
    slug: 'nghe-thuat-ngat-ket-noi-digital-detox',
    title: 'Nghệ thuật ngắt kết nối (Digital Detox): Khi màn hình tắt, cuộc đời thật sự bật sáng',
    excerpt: 'Chúng ta đang chạm vào màn hình hơn 2.600 lần mỗi ngày. Làm sao để học cách tạm rời xa thế giới ảo mà không cảm thấy lo âu hay lạc lõng?',
    category: 'Digital Detox',
    readTime: '6 phút đọc',
    publishDate: '02/10/2026',
    author: 'Tuấn Khang · Retreat Facilitator',
    coverImage: IMAGES.bavi,
    content: [
      'Có một nghịch lý kỳ lạ của thời đại số: chúng ta kết nối với hàng nghìn người trên mạng xã hội mỗi giây, nhưng lại cảm thấy cô đơn và xa cách với chính mình hơn bao giờ hết. Mỗi thông báo rung lên là một liều dopamine ngắn hạn kích thích não bộ, kéo theo một chuỗi căng thẳng tiềm ẩn.',
      'Tại Green Escape, chúng tôi không xem Digital Detox là sự trừng phạt hay sự cấm đoán cực đoan. Đó đơn giản là một "khoảng nghỉ hít thở". Khi bạn đồng ý niêm phong chiếc smartphone vào hộp mộc mạc và bước ra hiên nhà gỗ ngắm mưa rừng Ba Vì, các giác quan từng bị tê liệt sẽ dần thức tỉnh.',
      'Bạn sẽ bắt đầu nghe lại tiếng giọt gianh rơi trên tàu lá chuối, ngửi thấy mùi đất ẩm ngai ngái sau cơn mưa, và nhận ra tách trà thảo mộc nóng trên tay có vị ngọt sâu đến thế nào. Cuộc sống đích thực luôn nằm ở ngay trước mắt bạn, không phải phía sau mặt kính 6 inch.'
    ]
  },
  {
    id: 'post-2',
    slug: 'slow-travel-vi-sao-genz-va-van-phong-tim-khoang-lang',
    title: 'Slow Travel: Vì sao người trẻ Hà Nội đang chán những chuyến đi "check-in lấy thành tích"?',
    excerpt: 'Du lịch không còn là cuộc đua ghé thật nhiều điểm check-in trong 48 giờ. Thế hệ mới đang chọn du lịch chậm để chữa lành và phục hồi tâm trí.',
    category: 'Slow Travel',
    readTime: '5 phút đọc',
    publishDate: '26/09/2026',
    author: 'Minh Thảo · Content Curator',
    coverImage: IMAGES.maichau,
    content: [
      'Nhiều người trở về sau một kỳ nghỉ cuối tuần với cơ thể rã rời hơn cả trước khi đi. Họ phải dậy từ 5 giờ sáng, chạy đua qua 8 điểm tham quan, chen lấn xếp hàng chụp ảnh và liên tục đăng tải ảnh lên mạng xã hội.',
      'Khái niệm Slow Travel (Du lịch Chậm) ra đời như một phản ứng tự nhiên trước cơn lốc kiệt sức. Thay vì "đi nhiều nơi trong ít thời gian", Slow Travel chọn "ở một nơi đủ sâu, trải nghiệm đủ chậm".',
      'Đó là một buổi chiều thong thả đạp xe qua cánh đồng Mai Châu, dừng lại trò chuyện cùng một người mẹ Thái đang phơi lúa, hay buổi sáng ngồi thiền chuông giữa ruộng ngô. Khi không còn áp lực phải chứng minh điều gì với mạng xã hội, bạn mới thực sự tận hưởng từng bước chân.'
    ]
  },
  {
    id: 'post-3',
    slug: 'hoi-tho-cua-ban-thai-mai-chau-tho-cam',
    title: 'Hơi thở của bản Thái Mai Châu: Khi từng đường thoi dệt nên sự an yên',
    excerpt: 'Nghề dệt thổ cẩm truyền thống không chỉ tạo ra những tấm vải rực rỡ, mà còn là một liệu pháp thiền định đưa tâm trí về trạng thái tĩnh tại.',
    category: 'Văn Hóa Bản Địa',
    readTime: '7 phút đọc',
    publishDate: '19/09/2026',
    author: 'Hà My · Partner & Culture Specialist',
    coverImage: IMAGES.maichau,
    content: [
      'Ngồi bên khung cửi gỗ cổ xưa của mế tại Bản Lác, tiếng thoi đưa "lách cách, lách cách" đều đặn tựa như một điệu nhạc ru tâm hồn. Người phụ nữ Thái dệt vải không hề vội vàng. Mỗi hoa văn là một biểu tượng của núi rừng, dòng suối, hoa ban và tình yêu gia đình.',
      'Các du khách tham gia hành trình Reconnect Escape ban đầu thường lúng túng khi luồn sợi chỉ. Nhưng chỉ sau 15 phút, khi họ tập trung hoàn toàn vào từng đường dệt, những tiếng ồn trong đầu bỗng nhiên im bặt. Đó chính là chánh niệm trong lao động thủ công – một giá trị trị liệu vô giá mà phố thị không thể có.'
    ]
  },
  {
    id: 'post-4',
    slug: 'cam-nang-chuan-bi-chuyen-retreat-dau-tien',
    title: 'Cẩm nang chuẩn bị cho chuyến Retreat đầu tiên: Mang gì và buông gì?',
    excerpt: 'Một danh sách hành lý tinh gọn và một tâm thế cởi mở là tất cả những gì bạn cần cho chuyến đi 2N1Đ phục hồi năng lượng.',
    category: 'Wellness',
    readTime: '4 phút đọc',
    publishDate: '12/09/2026',
    author: 'Green Escape Editorial',
    coverImage: IMAGES.ninhbinh,
    content: [
      'Khác với một chuyến du lịch thông thường, chuẩn bị cho một chuyến retreat không cần vali cồng kềnh hay những bộ cánh cầu kỳ. Hãy mang theo quần áo từ chất liệu tự nhiên như linen, cotton mềm, một đôi giày đi bộ êm chân và một tâm thế sẵn sàng đón nhận sự tĩnh lặng.',
      'Quan trọng hơn hành lý vật lý là những thứ bạn nên để lại sau lưng: những email công việc chưa khẩn cấp, nỗi lo về danh sách việc cần làm, và thói quen phán xét bản thân. Hãy cho phép mình được nghỉ ngơi một cách trọn vẹn và không cảm thấy tội lỗi.'
    ]
  }
];

export const DEMO_USER: UserAccount = {
  name: 'Đặng Ngọc Linh',
  email: 'ngoclinh.dang@gmail.com',
  phone: '0989 123 456',
  referralCode: 'LINH-ESCAPE-88',
  rewardPoints: 350,
  favoriteIds: ['prod-bavi-rest', 'prod-maichau-reconnect'],
  bookingsCount: 2
};
