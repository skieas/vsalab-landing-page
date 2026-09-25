export interface TrustItem {
  id: string;
  icon: 'droplet' | 'pin' | 'shield' | 'heart';
  title: string;
  description: string;
}

export interface MaterialRegion {
  id: string;
  name: string;
  province: string;
  botanicals: string;
  image: string;
  description: string;
  elevation?: string;
  climate?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: 'sprout' | 'leaf' | 'flame' | 'microscope' | 'package';
}

export interface ProductItem {
  id: string;
  name: string;
  latinName: string;
  volume: string;
  origin: string;
  originDetail: string;
  category: 'tay-giang' | 'duyen-hai' | 'all';
  rating: number;
  reviewCount: number;
  badge: string;
  scentProfile: string;
  highlights: string[];
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  ingredients: string;
  benefits: string[];
  usage: string[];
  storage: string;
  precautions: string;
}

export interface CoreValue {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  commitment: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
}

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export interface WebContent {
  header: {
    brandName: string;
    brandTagline: string;
    navLinks: { label: string; href: string }[];
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
    bgImage: string;
  };
  trustItems: TrustItem[];
  about: {
    badge: string;
    title: string;
    p1: string;
    ctaText: string;
    image: string;
    imageCaption: string;
  };
  regionsSection: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
    regions: MaterialRegion[];
  };
  processSection: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
    steps: ProcessStep[];
  };
  storySection: {
    title: string;
    quote: string;
    p1: string;
    p2: string;
    taglineRight: string;
    image: string;
    stats: { value: string; label: string }[];
    ctaText: string;
  };
  productsSection: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    products: ProductItem[];
  };
  featuredProduct: {
    badge: string;
    title: string;
    subtitleEnglish: string;
    researchNote: string;
    ingredients: string;
    ingredientsDetail: string;
    benefits: string;
    usage: string;
    storage: string;
    precautions: string;
    originFootnote: string;
    brandSub: string;
    illustrationImage: string;
    illustrationCaption1: string;
    illustrationCaption2: string;
    ctaButtonText: string;
    cards: {
      researchTitle: string;
      researchDesc: string;
      sustainabilityTitle: string;
      sustainabilityDesc: string;
      supportTitle: string;
      supportDesc: string;
    };
  };
  valuesSection: {
    badge: string;
    title: string;
    subtitle: string;
    values: CoreValue[];
    certTitle: string;
    certSubtitle: string;
    certifications: CertificationItem[];
    certFooterNotes: string[];
  };
  blogSection: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    recentNotice: string;
    posts: BlogPost[];
  };
  newsletter: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
  };
  footer: {
    brandName: string;
    brandSubtitle: string;
    description: string;
    badges: string[];
    ownerTitle: string;
    ownerName: string;
    ownerAddress: string;
    factoryTitle: string;
    factoryName: string;
    factoryAddress: string;
    distributorTitle: string;
    distributorName: string;
    distributorAddress: string;
    hotline: string;
    website: string;
    copyright: string;
    originSlogan: string;
  };
}
