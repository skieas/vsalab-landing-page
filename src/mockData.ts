import { WebContent } from './types';

export const initialWebContent: WebContent = {
  header: {
    brandName: 'Vườn Tinh Dầu',
    brandTagline: 'VSA LAB • Tinh hoa thiên nhiên',
    navLinks: [
      { label: 'Trang chủ', href: '#trang-chu' },
      { label: 'Giới thiệu', href: '#gioi-thieu' },
      { label: 'Vùng nguyên liệu', href: '#vung-nguyen-lieu' },
      { label: 'Cam rừng Tây Giang', href: '#cam-rung-tay-giang' },
      { label: 'Sản phẩm', href: '#san-pham' },
      { label: 'Quy trình', href: '#quy-trinh' },
      { label: 'Tin tức', href: '#tin-tuc' },
      { label: 'Liên hệ', href: '#lien-he' },
    ],
  },
  hero: {
    badge: 'THƯƠNG HIỆU TINH DẦU VIỆT',
    title: 'Tinh hoa từ vùng đất Việt',
    description:
      'Chúng tôi mang đến những giọt tinh dầu nguyên chất được chắt lọc từ thiên nhiên, từ những vùng nguyên liệu đặc trưng của Việt Nam – kết tinh của đất, trời và con người.',
    ctaText: 'Khám phá câu chuyện của chúng tôi',
    bgImage:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=2000&q=85',
  },
  trustItems: [
    {
      id: '1',
      icon: 'droplet',
      title: '100% nguyên chất',
      description: 'Không pha tạp',
    },
    {
      id: '2',
      icon: 'pin',
      title: 'Truy xuất nguồn gốc',
      description: 'Rõ ràng, minh bạch',
    },
    {
      id: '3',
      icon: 'shield',
      title: 'Kiểm định chất lượng',
      description: 'Theo tiêu chuẩn quốc tế',
    },
    {
      id: '4',
      icon: 'heart',
      title: 'Đồng hành cùng bạn',
      description: 'Vì một cuộc sống xanh',
    },
  ],
  about: {
    badge: 'VỀ CHÚNG TÔI • VSA LAB',
    title: 'Từ sự trân quý thiên nhiên đến giá trị bền vững',
    p1: 'Vườn Tinh Dầu được đồng hành và bảo trợ chuyên môn bởi Trung tâm Khoa học và Chuyển giao Công Nghệ Nông nghiệp VSA (Chi nhánh Ville De Faifo Việt Nam). Chúng tôi kết nối tri thức bản địa cùng công nghệ chiết xuất hiện đại tại HTX Cách Mạng Xanh (Tây Giang), bảo tồn rừng già và mang những giọt tinh dầu 100% nguyên chất đến mọi gia đình.',
    ctaText: 'Tìm hiểu thêm',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    imageCaption: 'Từ những người nông dân đến những giọt tinh dầu thượng hạng',
  },
  regionsSection: {
    badge: 'VÙNG NGUYÊN LIỆU',
    title: 'Ba vùng đất – Một sứ mệnh',
    description:
      'Chúng tôi sở hữu và hợp tác với các vùng trồng dược liệu sạch tại Việt Nam, đảm bảo nguồn nguyên liệu chất lượng, bền vững và thân thiện với môi trường.',
    ctaText: 'Khám phá các vùng nguyên liệu',
    regions: [
      {
        id: 'tay-giang',
        name: 'Tây Giang (Quảng Nam)',
        province: 'Quảng Nam',
        botanicals: 'Cam rừng, Tràm, Sả, Quế...',
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description:
          'Vùng cao nguyên ngút ngàn thuộc dãy Trường Sơn với khí hậu sương mù quanh năm, lưu giữ những cánh rừng cam cổ thụ bản địa nguyên sinh.',
        elevation: '1,200m - 1,500m',
        climate: 'Ôn đới sương mù đại ngàn',
      },
      {
        id: 'quang-ngai',
        name: 'Quảng Ngãi',
        province: 'Quảng Ngãi',
        botanicals: 'Gừng, nghệ, sả...',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        description:
          'Dải đất miền Trung trù phú với đất đỏ bazan và nắng gió nồng nàn, cho ra những củ nghệ, gừng, quế Trà Bồng đậm đà tinh dầu dược tính.',
        elevation: '300m - 600m',
        climate: 'Nắng ấm dồi dào, thổ nhưỡng bazan',
      },
      {
        id: 'ninh-binh',
        name: 'Ninh Bình',
        province: 'Ninh Bình',
        botanicals: 'Tràm gió, hồi, thảo mộc...',
        image:
          'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        description:
          'Vùng thung lũng đá vôi ngập nước thanh tịnh, nơi sản sinh ra những loài thảo mộc tràm gió thanh khiết lưu truyền hàng trăm năm.',
        elevation: '50m - 200m',
        climate: 'Khí hậu Cố Đô đặc thù karst',
      },
    ],
  },
  processSection: {
    badge: 'QUY TRÌNH SẢN XUẤT',
    title: 'Từ cây đến chai',
    description:
      'Mỗi giọt tinh dầu đều trải qua quy trình khép kín, nghiêm ngặt để giữ trọn vẹn tinh chất thiên nhiên và đảm bảo chất lượng tốt nhất.',
    ctaText: 'Xem chi tiết quy trình',
    steps: [
      {
        step: 'BƯỚC 01',
        title: 'Trồng trọt & chăm sóc',
        desc: 'Canh tác hoàn toàn tự nhiên theo hướng hữu cơ, bảo tồn đa dạng sinh học.',
        icon: 'sprout',
      },
      {
        step: 'BƯỚC 02',
        title: 'Thu hoạch & sơ chế',
        desc: 'Thu hái thủ công vào sáng sớm khi nồng độ tinh dầu trong lá và vỏ đạt đỉnh.',
        icon: 'leaf',
      },
      {
        step: 'BƯỚC 03',
        title: 'Chiết xuất hiện đại',
        desc: 'Chưng cất lôi cuốn hơi nước áp suất thấp tại HTX Cách Mạng Xanh Tây Giang.',
        icon: 'flame',
      },
      {
        step: 'BƯỚC 04',
        title: 'Kiểm nghiệm chất lượng',
        desc: 'Phân tích sắc ký khí quang phổ khối GC-MS độc lập đạt tiêu chuẩn VSA LAB.',
        icon: 'microscope',
      },
      {
        step: 'BƯỚC 05',
        title: 'Đóng chai thành phẩm',
        desc: 'Đóng chai thủy tinh màu hổ phách bảo vệ dược tính, niêm phong nắp thông minh.',
        icon: 'package',
      },
    ],
  },
  storySection: {
    title: 'Hành trình gìn giữ hương thơm bản địa',
    quote:
      '"Chúng tôi tin rằng, mỗi giọt tinh dầu là một câu chuyện về vùng đất, về những con người cần mẫn và tình yêu vô điều kiện với thiên nhiên."',
    p1: 'Khởi nguồn từ những chuyến điền dã đến vùng cao nguyên Tây Giang đại ngàn Trường Sơn, chúng tôi bắt gặp những cánh rừng cam cổ thụ bạt ngàn trong sương sớm. Nhận thấy giá trị dược liệu vô giá nhưng người dân bản địa gặp khó khăn trong đầu ra, Vườn Tinh Dầu phối hợp cùng Trung tâm VSA và HTX Cách Mạng Xanh ra đời để chuyển giao công nghệ chưng cất khép kín, nâng tầm dược liệu quê hương.',
    p2: 'Vườn Tinh Dầu không đơn thuần là đơn vị sản xuất tinh dầu thương mại, mà là cầu nối gìn giữ hệ sinh thái rừng nhiệt đới. Mỗi mẻ chưng cất là sự cam kết bền vững: không sử dụng hóa chất tổng hợp, tôn trọng nhịp sinh trưởng tự nhiên và tạo sinh kế ổn định cho bà con đồng bào thiểu số Cơ Tu.',
    taglineRight: 'Tự hào Việt Nam - những hương thơm tự nhiên',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: '100%', label: 'Chiết xuất tự nhiên bản địa' },
      { value: '500+', label: 'Hộ nông dân liên kết bền vững' },
      { value: '03', label: 'Vùng thổ nhưỡng đặc hữu' },
    ],
    ctaText: 'Khám phá hành trình của chúng tôi',
  },
  productsSection: {
    badge: 'BỘ SƯU TẬP TINH DẦU BẢN ĐỊA',
    titleMain: 'Tinh Dầu Nguyên Chất — ',
    titleHighlight: 'Chắt chiu từng giọt',
    description:
      '100% chiết xuất từ các loài dược liệu bản địa thuần chủng Việt Nam. Tiêu chuẩn kiểm nghiệm VSA LAB, hoàn toàn không cồn công nghiệp, không dầu khoáng hay phụ gia tạo mùi.',
    products: [
      {
        id: 'cam-rung-tay-giang',
        name: 'Tinh dầu Cam Rừng Tây Giang',
        latinName: 'Citrus reticulata Peel Oil',
        volume: '30ml 1.01 fl.oz',
        origin: 'Thôn Tr\'Hy, xã Hùng Sơn, Tây Giang',
        originDetail: 'Rừng nguyên sinh Tây Giang, Quảng Nam',
        category: 'tay-giang',
        rating: 5,
        reviewCount: 512,
        badge: 'CHÍNH HÃNG VSA',
        scentProfile:
          'Tươi mát rực rỡ, ngọt ấm thanh khiết của vỏ cam rừng hoang dã, vương vấn sương sớm Trường Sơn',
        highlights: [
          '100% tinh dầu vỏ cam rừng (Citrus reticulata Peel Oil)',
          'Tạo hương thơm tự nhiên, giúp thư giãn, khử mùi, thanh lọc',
        ],
        image:
          'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        price: 285000,
        originalPrice: 320000,
        inStock: true,
        ingredients: '100% tinh dầu nguyên chất ép lạnh và chưng cất từ vỏ cam rừng Tây Giang.',
        benefits: [
          'Giúp tinh thần tỉnh táo, giải tỏa căng thẳng lo âu',
          'Khử mùi ẩm mốc, xua tan không khí ngột ngạt trong phòng',
          'Kháng khuẩn nhẹ, hỗ trợ đường hô hấp khỏe mạnh',
          'Chăm sóc làn da tươi sáng khi pha loãng cùng dầu dưỡng thực vật',
        ],
        usage: [
          'Khuếch tán: 3-5 giọt vào máy xông tinh dầu',
          'Massage: Pha 2 giọt với 10ml dầu dừa hoặc dầu jojoba',
          'Tắm thư giãn: 5 giọt vào bồn nước ấm ngâm mình 15 phút',
        ],
        storage: 'Bảo quản nơi khô mát dưới 30°C, tránh ánh nắng trực tiếp, đậy kín nắp.',
        precautions: 'Không bôi trực tiếp chưa pha loãng lên vết thương hở. Tránh xa tầm tay trẻ em.',
      },
      {
        id: 'tram-huong-rung',
        name: 'Tinh dầu Trầm Hương Rừng',
        latinName: 'Aquilaria crassna',
        volume: '10ml',
        origin: 'Tây Giang, Quảng Nam',
        originDetail: 'Vùng núi cao Tây Giang',
        category: 'tay-giang',
        rating: 5,
        reviewCount: 142,
        badge: 'CHÍNH HÃNG VSA',
        scentProfile: 'Hương gỗ ấm, ngọt hậu, thơm sâu và thanh thoát',
        highlights: ['Hỗ trợ thiền định & thư giãn sâu', 'Thanh lọc không gian sống'],
        image:
          'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80',
        price: 850000,
        originalPrice: 950000,
        inStock: true,
        ingredients: '100% tinh dầu Trầm Hương tự nhiên chưng cất từ dăm gỗ trầm tuyển chọn.',
        benefits: [
          'Kích thích trực giác, hỗ trợ các buổi tập thiền, yoga',
          'Lắng dịu tâm trí sau ngày làm việc áp lực cao',
          'Tạo không gian trang nghiêm, ấm cúng và tĩnh tại',
        ],
        usage: [
          'Đốt tinh dầu hoặc dùng tẩu xông gốm: 1-2 giọt',
          'Thoa luân xa cổ tay: Pha loãng với dầu hạnh nhân',
        ],
        storage: 'Đậy nắp kín, tránh nơi ẩm mốc.',
        precautions: 'Phụ nữ mang thai 3 tháng đầu nên tham khảo ý kiến chuyên gia.',
      },
      {
        id: 'sa-chanh-tay-giang',
        name: 'Tinh dầu Sả Chanh Tây Giang',
        latinName: 'Cymbopogon citratus',
        volume: '15ml',
        origin: 'Tây Giang, Quảng Nam',
        originDetail: 'Khu vực thung lũng bản địa Tây Giang',
        category: 'tay-giang',
        rating: 5,
        reviewCount: 289,
        badge: 'CHÍNH HÃNG VSA',
        scentProfile: 'Tươi mát, thanh cay thảo mộc, nốt cam chanh rạng rỡ',
        highlights: ['Xua đuổi muỗi & côn trùng tự nhiên', 'Khử mùi phòng & thanh lọc không khí'],
        image:
          'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        price: 165000,
        originalPrice: 190000,
        inStock: true,
        ingredients: '100% tinh dầu sả chanh bản địa cất lôi cuốn hơi nước tươi mới.',
        benefits: [
          'Đuổi muỗi, ruồi và côn trùng tự nhiên an toàn tuyệt đối cho trẻ nhỏ',
          'Khử sạch mùi dầu mỡ phòng bếp, ẩm ướt phòng tắm',
          'Xông mặt thông thoáng lỗ chân lông',
        ],
        usage: [
          'Xịt phòng: Pha 10 giọt với cồn thực phẩm và nước cất',
          'Xông phòng: 4-6 giọt vào máy phun sương',
        ],
        storage: 'Bảo quản nơi thoáng mát.',
        precautions: 'Không để dính vào mắt.',
      },
      {
        id: 'que-tra-bong',
        name: 'Tinh dầu Quế Trà Bồng',
        latinName: 'Cinnamomum cassia',
        volume: '10ml',
        origin: 'Quảng Ngãi',
        originDetail: 'Đồi quế ngàn năm Trà Bồng',
        category: 'duyen-hai',
        rating: 5,
        reviewCount: 198,
        badge: 'CHÍNH HÃNG VSA',
        scentProfile: 'Nồng ấm, ngọt cay đậm đà, vương vấn phong vị thảo mộc núi rừng',
        highlights: ['Giữ ấm cơ thể vào mùa lạnh', 'Kháng khuẩn mạnh mẽ và khử khuẩn không gian'],
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        price: 210000,
        originalPrice: 240000,
        inStock: true,
        ingredients: '100% tinh dầu quế nguyên chất cất từ vỏ quế Trà Bồng già.',
        benefits: [
          'Làm ấm các cơ khớp khi pha massage',
          'Kích thích tiêu hóa và tuần hoàn máu',
          'Khử mùi xe hơi, tủ giày cực kỳ hiệu quả',
        ],
        usage: ['Treo xe ô tô', 'Xông phòng tạo cảm giác ấm cúng mùa đông'],
        storage: 'Bảo quản nơi râm mát.',
        precautions: 'Tính nhiệt cao, luôn pha loãng trước khi bôi lên da.',
      },
      {
        id: 'tram-gio-ninh-binh',
        name: 'Tinh dầu Tràm Gió Ninh Bình',
        latinName: 'Melaleuca cajuputi',
        volume: '30ml',
        origin: 'Ninh Bình',
        originDetail: 'Vùng thảo mộc ven sông Tràng An',
        category: 'duyen-hai',
        rating: 5,
        reviewCount: 356,
        badge: 'CHÍNH HÃNG VSA',
        scentProfile: 'Thơm dịu êm, thanh mát đầu mũi, the nhẹ vị tràm gió truyền thống',
        highlights: ['Bảo vệ sức khỏe bé yêu & mẹ bầu', 'Giảm ho, nghẹt mũi khi trở trời'],
        image:
          'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
        price: 245000,
        originalPrice: 280000,
        inStock: true,
        ingredients: '100% tinh dầu tràm gió chưng cất truyền thống không cồn phụ gia.',
        benefits: [
          'Thoa ngực và lòng bàn chân cho trẻ em giữ ấm',
          'Thoa lên vết muỗi đốt giảm ngứa ngáy nhanh chóng',
          'Pha nước ấm tắm cho mẹ sau sinh',
        ],
        usage: ['Nhỏ vài giọt vào chậu nước tắm bé', 'Thoa trực tiếp vào cổ áo hoặc khăn choàng'],
        storage: 'Đậy kín sau dùng.',
        precautions: 'Tránh tiếp xúc màng nhầy mắt.',
      },
    ],
  },
  featuredProduct: {
    badge: 'SẢN PHẨM CHỨNG NHẬN TIÊU CHUẨN VSA LAB',
    title: 'Tinh Dầu Cam Rừng Tây Giang',
    subtitleEnglish: 'Tay Giang Wild Orange Essential Oil • 100% Pure & Natural',
    researchNote: 'CHÍNH HÃNG NGHIÊN CỨU BỞI TRUNG TÂM KH&CG CÔNG NGHỆ NÔNG NGHIỆP VSA',
    ingredients: '100% tinh dầu vỏ cam rừng',
    ingredientsDetail: '(Citrus reticulata Peel Oil).',
    benefits: 'Tạo hương thơm tự nhiên, giúp thư giãn, khử mùi, thanh lọc không khí.',
    usage: 'Xông hương, khuếch tán, pha loãng với dầu nền để massage hoặc chăm sóc. Chỉ dùng ngoài da.',
    storage: 'Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đậy kín nắp sau khi sử dụng.',
    precautions: 'Tránh tiếp xúc trực tiếp với mắt. Để xa tầm tay trẻ em. Không được uống.',
    originFootnote: "From Vietnam's Highlands With Pure Botanicals",
    brandSub: 'Tay Giang Wild Orange Essential Oil',
    illustrationImage:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    illustrationCaption1: 'Đại ngàn Trường Sơn',
    illustrationCaption2: 'Đồng bào bản địa',
    ctaButtonText: 'Thông Tin Sản Phẩm',
    cards: {
      researchTitle: 'Nghiên cứu khoa học',
      researchDesc: 'Bởi Trung tâm KH&CG Công nghệ Nông nghiệp VSA',
      sustainabilityTitle: 'Bản địa bền vững',
      sustainabilityDesc: 'HTX Cách Mạng Xanh - Thôn Tr\'Hy, Tây Giang',
      supportTitle: 'Hỗ trợ & Đặt hàng',
      supportDesc: 'Hotline M-MADE: 0833-15-3388 (Toàn quốc)',
    },
  },
  valuesSection: {
    badge: 'GIÁ TRỊ CỐT LÕI & CAM KẾT',
    title: 'Không chỉ là sản phẩm — Đó là giá trị sống',
    subtitle:
      'Chúng tôi tin rằng vẻ đẹp và sức khỏe bền vững phải bắt nguồn từ sự hòa hợp giữa con người, thiên nhiên và quy chuẩn khoa học chuẩn mực.',
    values: [
      {
        id: 'nature',
        title: 'Thiên nhiên',
        subtitle: 'LÀ NỀN TẢNG KHỞI NGUỒN',
        badge: '100% ORGANIC',
        description:
          'Chọn lọc từ những vùng dược liệu bản địa nguyên sinh, tôn trọng chu kỳ sinh trưởng tự nhiên và không can thiệp hóa chất biến đổi gen.',
        commitment: 'Cam kết chuẩn mực VSA LAB',
      },
      {
        id: 'human',
        title: 'Con người',
        subtitle: 'LÀ TRUNG TÂM PHỤNG SỰ',
        badge: 'THƯƠNG MẠI CÔNG BẰNG',
        description:
          'Tạo sinh kế bền vững, thu nhập ổn định cho bà con nông dân và đồng bào thiểu số Cơ Tu tại các vùng nguyên liệu liên kết.',
        commitment: 'Cam kết chuẩn mực VSA LAB',
      },
      {
        id: 'quality',
        title: 'Chất lượng',
        subtitle: 'LÀ CAM KẾT TRỌN VẸN',
        badge: 'KIỂM NGHIỆM ĐỘC LẬP',
        description:
          'Mỗi giọt tinh dầu đều được kiểm nghiệm phân tích quang phổ khối GC-MS định kỳ tại phòng lab độc lập, minh bạch và an toàn tuyệt đối.',
        commitment: 'Cam kết chuẩn mực VSA LAB',
      },
    ],
    certTitle: 'Chứng nhận quốc tế & Tiêu chuẩn chất lượng',
    certSubtitle: 'Đáp ứng các tiêu chuẩn khắt khe nhất của ngành dược phẩm và mỹ phẩm thiên nhiên',
    certifications: [
      {
        id: 'iso',
        name: 'ISO 9001:2015',
        title: 'ISO 9001:2015',
        subtitle: 'Quản lý chất lượng quốc tế',
      },
      {
        id: 'gmp',
        name: 'GMP Certified',
        title: 'GMP Certified',
        subtitle: 'Thực hành sản xuất tốt',
      },
      {
        id: 'usda',
        name: 'USDA Organic',
        title: 'USDA Organic',
        subtitle: 'Tiêu chuẩn canh tác hữu cơ',
      },
      {
        id: 'quatest',
        name: 'Quatest 3',
        title: 'Quatest 3',
        subtitle: 'Kiểm nghiệm độc lập nhà nước',
      },
      {
        id: 'vietgap',
        name: 'VietGAP',
        title: 'VietGAP',
        subtitle: 'Nông nghiệp sạch Việt Nam',
      },
    ],
    certFooterNotes: [
      'COA (Certificate of Analysis) kèm theo từng đơn hàng',
      'Mã QR quét thông tin mẻ cất trên nắp chai',
      'Đổi trả miễn phí trong 15 ngày',
    ],
  },
  blogSection: {
    badge: 'GÓC CHIA SẺ & TRẢI NGHIỆM',
    titleMain: 'Tin tức & ',
    titleHighlight: 'Kiến thức',
    description:
      'Cập nhật những chia sẻ chuyên sâu về tinh dầu nguyên chất, lối sống xanh và những câu chuyện mộc mạc từ đại ngàn.',
    recentNotice: 'BÀI VIẾT MỚI CẬP NHẬT TUẦN NÀY',
    posts: [
      {
        id: 'bai-viet-1',
        tag: 'Vùng nguyên liệu',
        title: 'Câu chuyện rừng nguyên liệu Tây Giang - Hồn thiêng đại ngàn...',
        excerpt:
          'Hành trình vượt đèo tìm về vùng dược liệu Tây Giang, nơi những rặng quế cổ thụ và bụi sả rừng được đồng bào gìn giữ qua nhiều thế hệ.',
        content: `Tây Giang, một vùng đất huyền thoại nép mình bên dãy Trường Sơn hùng vĩ, là cái nôi nuôi dưỡng những loài thảo mộc trân quý. Người dân Cơ Tu nơi đây sống thuận hòa với núi rừng, xem rừng như người mẹ vĩ đại chở che. 
        Những cây cam rừng cổ thụ mọc hoang dã nơi sườn dốc cheo leo, hút lấy tinh túy của sương mai và gió núi, cho ra những quả cam vỏ mỏng dính, chứa đựng lượng tinh dầu nồng nàn không nơi nào có được.
        Khi đồng hành cùng HTX Cách Mạng Xanh, chúng tôi không chỉ tìm kiếm một loại hương thơm, mà là tìm về một cội nguồn văn hóa thu hái bền vững, giữ cho rừng Tây Giang mãi xanh ngát đại ngàn.`,
        date: '15/03/2025',
        readTime: '5 phút đọc',
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'bai-viet-2',
        tag: 'Kiến thức tinh dầu',
        title: '5 lợi ích tuyệt vời của tinh dầu nguyên chất đối với giấc ngủ & thư giãn',
        excerpt:
          'Khám phá cơ chế tác động của các phân tử hương thơm tự nhiên lên hệ thần kinh khứu giác, giúp xoa dịu lo âu và cải thiện giấc ngủ sâu.',
        content: `Khi bạn hít thở hương thơm tinh dầu tự nhiên, hàng triệu phân tử mùi hương lập tức kích hoạt thụ thể khứu giác, gửi tín hiệu trực tiếp đến hệ viền (Limbic System) - trung tâm điều khiển cảm xúc và trí nhớ của não bộ.
        1. Giảm nồng độ hormone cortisol gây căng thẳng.
        2. Kích thích sản sinh sóng não Alpha giúp tinh thần thư thái.
        3. Làm dịu nhịp thở và nhịp tim, tạo tiền đề cho giấc ngủ sâu.
        4. Thanh lọc không khí phòng ngủ, ngăn ngừa vi khuẩn gây hại.
        5. Tạo thói quen thư giãn định hình (Aromatherapy Ritual) mỗi tối.`,
        date: '10/03/2025',
        readTime: '4 phút đọc',
        image:
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'bai-viet-3',
        tag: 'Công nghệ sản xuất',
        title: 'Công nghệ chiết xuất hơi nước: Nghệ thuật lưu giữ trọn vẹn linh hồn thảo mộc',
        excerpt:
          'Tại sao công nghệ chưng cất áp suất thấp bằng hơi nước tinh khiết là chìa khóa vàng để giữ lại các hợp chất hữu cơ nhạy cảm với nhiệt.',
        content: `Trong thế giới tinh dầu, nhiệt độ và áp suất chính là ranh giới mong manh giữa một giọt tinh dầu thượng hạng và một sản phẩm bị cháy hỏng mùi hương.
        Tại HTX Cách Mạng Xanh Tây Giang, chúng tôi ứng dụng công nghệ chưng cất lôi cuốn hơi nước phân đoạn áp suất thấp. Hệ thống nồi hơi inox 304 tiêu chuẩn dược phẩm giữ cho nhiệt độ sôi của nước ở mức vừa đủ, giúp các túi tinh dầu li ti trong vỏ cam bung nở tự nhiên mà không làm biến tính các hợp chất quý như Limonene, Linalool hay Myrcene.`,
        date: '02/03/2025',
        readTime: '6 phút đọc',
        image:
          'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  newsletter: {
    badge: 'BẢN TIN HƯƠNG SẮC THIÊN NHIÊN • VSA LAB',
    title: 'Đăng ký nhận cẩm nang & ưu đãi',
    description:
      'Nhận hướng dẫn trị liệu bằng tinh dầu tự nhiên và thông báo về các mẻ chưng cất hữu cơ mới nhất từ đại ngàn Tây Giang.',
    buttonText: 'Đăng ký ngay',
  },
  footer: {
    brandName: 'Vườn Tinh Dầu',
    brandSubtitle: 'VSA LAB • TINH HOA ĐẤT VIỆT',
    description:
      'Thương hiệu tinh dầu thiên nhiên cao cấp, kết hợp tri thức thu hái bản địa vùng cao Tây Giang cùng quy chuẩn kiểm định nghiêm ngặt từ Trung tâm VSA LAB.',
    badges: ['100% Pure & Natural', 'Kiểm định VSA LAB'],
    ownerTitle: 'Đơn vị sở hữu & Chịu trách nhiệm:',
    ownerName:
      'Trung tâm Khoa học và Chuyển giao Công Nghệ Nông nghiệp VSA (Chi nhánh Công ty TNHH Ville De Faifo Việt Nam)',
    ownerAddress: '22 Nguyễn Thức Tự, P. Ngũ Hành Sơn, TP. Đà Nẵng',
    factoryTitle: 'Sản xuất tại:',
    factoryName:
      'HTX Dược liệu và Nông sản sạch Cách Mạng Xanh (Thôn Tr\'Hy, Hùng Sơn, Tây Giang)',
    factoryAddress: 'Thôn Tr\'Hy, xã Hùng Sơn, Tây Giang, Quảng Nam',
    distributorTitle: 'Phân phối độc quyền:',
    distributorName: 'Công ty TNHH M-MADE Việt Nam',
    distributorAddress: 'Số 08, Đường Trung Lương 3, P. Hòa Xuân, Q. Cẩm Lệ, TP. Đà Nẵng',
    hotline: '0833-15-3388',
    website: 'vsalab.vn',
    copyright: '© 2026 Vườn Tinh Dầu - VSA LAB (vsalab.vn). All rights reserved.',
    originSlogan: "From Vietnam's Highlands With Pure Botanicals",
  },
};
