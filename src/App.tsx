import React, { useState, useEffect } from 'react';
import { initialWebContent } from './mockData';
import { WebContent, ProductItem, MaterialRegion, BlogPost, TrustItem, CoreValue } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { RegionsSection } from './components/RegionsSection';
import { ProcessSection } from './components/ProcessSection';
import { BrandStorySection } from './components/BrandStorySection';
import { ProductsSection } from './components/ProductsSection';
import { FeaturedProductSection } from './components/FeaturedProductSection';
import { ValuesCertSection } from './components/ValuesCertSection';
import { BlogSection } from './components/BlogSection';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';
import { AdminBar } from './components/AdminBar';
import { AdminLoginModal } from './components/AdminLoginModal';
import { ProductModal } from './components/ProductModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { SearchModal } from './components/SearchModal';

const LOCAL_STORAGE_KEY = 'vuon_tinh_dau_content_v1';

export default function App() {
  // State 1: Web Content management (Object/JSON loaded from localStorage or initial mock data)
  const [webContent, setWebContent] = useState<WebContent>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading saved content', e);
    }
    return initialWebContent;
  });

  // State 2: Admin Authentication & Mode
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // State 3: Interactive features (Cart, Modals, Search)
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Listen for ESC key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
        setIsOrderDrawerOpen(false);
        setIsSearchOpen(false);
        setIsAdminLoginOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Admin save & reset functions
  const handleSaveContent = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(webContent));
      setHasUnsavedChanges(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err) {
      console.error('Error saving content', err);
    }
  };

  const handleResetContent = () => {
    if (window.confirm('Bạn có chắc chắn muốn khôi phục lại nội dung mặc định ban đầu không?')) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setWebContent(initialWebContent);
      setHasUnsavedChanges(false);
    }
  };

  // Helper update handler for nested fields
  const updateSectionField = <T extends keyof WebContent>(
    section: T,
    field: keyof WebContent[T],
    val: any
  ) => {
    setWebContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: val,
      },
    }));
    setHasUnsavedChanges(true);
  };

  // Cart operations
  const handleAddToCart = (product: ProductItem, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setSelectedProduct(null);
    setIsOrderDrawerOpen(true);
  };

  const handleOrderNow = (product: ProductItem, quantity: number) => {
    handleAddToCart(product, quantity);
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C241E] relative selection:bg-[#B36B28] selection:text-white">
      {/* Admin Floating Bar when authenticated */}
      {isAdmin && (
        <AdminBar
          onSave={handleSaveContent}
          onReset={handleResetContent}
          onLogout={() => setIsAdmin(false)}
          hasUnsavedChanges={hasUnsavedChanges}
          saveSuccess={saveSuccess}
        />
      )}

      {/* Admin Login Dialog */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={() => {
          setIsAdmin(true);
        }}
      />

      {/* Header */}
      <Header
        isAdmin={isAdmin}
        brandName={webContent.header.brandName}
        brandTagline={webContent.header.brandTagline}
        navLinks={webContent.header.navLinks}
        cartCount={totalCartItems}
        onUpdateBrandName={(val) => updateSectionField('header', 'brandName', val)}
        onUpdateBrandTagline={(val) => updateSectionField('header', 'brandTagline', val)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
        onOpenLogin={() => setIsAdminLoginOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        isAdmin={isAdmin}
        badge={webContent.hero.badge}
        title={webContent.hero.title}
        description={webContent.hero.description}
        ctaText={webContent.hero.ctaText}
        bgImage={webContent.hero.bgImage}
        onUpdateBadge={(val) => updateSectionField('hero', 'badge', val)}
        onUpdateTitle={(val) => updateSectionField('hero', 'title', val)}
        onUpdateDescription={(val) => updateSectionField('hero', 'description', val)}
        onUpdateCtaText={(val) => updateSectionField('hero', 'ctaText', val)}
        onUpdateBgImage={(val) => updateSectionField('hero', 'bgImage', val)}
      />

      {/* Trust Indicators Bar */}
      <TrustBar
        isAdmin={isAdmin}
        items={webContent.trustItems}
        onUpdateItem={(index, field, value) => {
          setWebContent((prev) => {
            const next = [...prev.trustItems];
            next[index] = { ...next[index], [field]: value };
            return { ...prev, trustItems: next };
          });
          setHasUnsavedChanges(true);
        }}
      />

      {/* About Us Section */}
      <AboutSection
        isAdmin={isAdmin}
        badge={webContent.about.badge}
        title={webContent.about.title}
        p1={webContent.about.p1}
        ctaText={webContent.about.ctaText}
        image={webContent.about.image}
        imageCaption={webContent.about.imageCaption}
        onUpdateBadge={(val) => updateSectionField('about', 'badge', val)}
        onUpdateTitle={(val) => updateSectionField('about', 'title', val)}
        onUpdateP1={(val) => updateSectionField('about', 'p1', val)}
        onUpdateCtaText={(val) => updateSectionField('about', 'ctaText', val)}
        onUpdateImage={(val) => updateSectionField('about', 'image', val)}
        onUpdateImageCaption={(val) => updateSectionField('about', 'imageCaption', val)}
      />

      {/* Regions Section */}
      <RegionsSection
        isAdmin={isAdmin}
        badge={webContent.regionsSection.badge}
        title={webContent.regionsSection.title}
        description={webContent.regionsSection.description}
        ctaText={webContent.regionsSection.ctaText}
        regions={webContent.regionsSection.regions}
        onUpdateBadge={(val) => updateSectionField('regionsSection', 'badge', val)}
        onUpdateTitle={(val) => updateSectionField('regionsSection', 'title', val)}
        onUpdateDescription={(val) => updateSectionField('regionsSection', 'description', val)}
        onUpdateCtaText={(val) => updateSectionField('regionsSection', 'ctaText', val)}
        onUpdateRegion={(idx, field, val) => {
          setWebContent((prev) => {
            const next = [...prev.regionsSection.regions];
            next[idx] = { ...next[idx], [field]: val };
            return {
              ...prev,
              regionsSection: { ...prev.regionsSection, regions: next },
            };
          });
          setHasUnsavedChanges(true);
        }}
      />

      {/* Process Section */}
      <ProcessSection
        isAdmin={isAdmin}
        badge={webContent.processSection.badge}
        title={webContent.processSection.title}
        description={webContent.processSection.description}
        ctaText={webContent.processSection.ctaText}
        steps={webContent.processSection.steps}
        onUpdateBadge={(val) => updateSectionField('processSection', 'badge', val)}
        onUpdateTitle={(val) => updateSectionField('processSection', 'title', val)}
        onUpdateDescription={(val) => updateSectionField('processSection', 'description', val)}
        onUpdateCtaText={(val) => updateSectionField('processSection', 'ctaText', val)}
        onUpdateStep={(idx, field, val) => {
          setWebContent((prev) => {
            const next = [...prev.processSection.steps];
            next[idx] = { ...next[idx], [field]: val };
            return {
              ...prev,
              processSection: { ...prev.processSection, steps: next },
            };
          });
          setHasUnsavedChanges(true);
        }}
      />

      {/* Brand Story Section */}
      <BrandStorySection
        isAdmin={isAdmin}
        title={webContent.storySection.title}
        quote={webContent.storySection.quote}
        p1={webContent.storySection.p1}
        p2={webContent.storySection.p2}
        taglineRight={webContent.storySection.taglineRight}
        image={webContent.storySection.image}
        stats={webContent.storySection.stats}
        ctaText={webContent.storySection.ctaText}
        onUpdateTitle={(val) => updateSectionField('storySection', 'title', val)}
        onUpdateQuote={(val) => updateSectionField('storySection', 'quote', val)}
        onUpdateP1={(val) => updateSectionField('storySection', 'p1', val)}
        onUpdateP2={(val) => updateSectionField('storySection', 'p2', val)}
        onUpdateTaglineRight={(val) => updateSectionField('storySection', 'taglineRight', val)}
        onUpdateImage={(val) => updateSectionField('storySection', 'image', val)}
        onUpdateStat={(idx, field, val) => {
          setWebContent((prev) => {
            const next = [...prev.storySection.stats];
            next[idx] = { ...next[idx], [field]: val };
            return {
              ...prev,
              storySection: { ...prev.storySection, stats: next },
            };
          });
          setHasUnsavedChanges(true);
        }}
        onUpdateCtaText={(val) => updateSectionField('storySection', 'ctaText', val)}
      />

      {/* Products Collection Section */}
      <ProductsSection
        isAdmin={isAdmin}
        badge={webContent.productsSection.badge}
        titleMain={webContent.productsSection.titleMain}
        titleHighlight={webContent.productsSection.titleHighlight}
        description={webContent.productsSection.description}
        products={webContent.productsSection.products}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onUpdateBadge={(val) => updateSectionField('productsSection', 'badge', val)}
        onUpdateTitleMain={(val) => updateSectionField('productsSection', 'titleMain', val)}
        onUpdateTitleHighlight={(val) => updateSectionField('productsSection', 'titleHighlight', val)}
        onUpdateDescription={(val) => updateSectionField('productsSection', 'description', val)}
        onUpdateProduct={(idx, field, val) => {
          setWebContent((prev) => {
            const next = [...prev.productsSection.products];
            next[idx] = { ...next[idx], [field]: val };
            return {
              ...prev,
              productsSection: { ...prev.productsSection, products: next },
            };
          });
          setHasUnsavedChanges(true);
        }}
      />

      {/* Featured Product Section: Cam Rừng Tây Giang */}
      <FeaturedProductSection
        isAdmin={isAdmin}
        featured={webContent.featuredProduct}
        onOpenProductModal={() => {
          const featuredProd = webContent.productsSection.products.find(
            (p) => p.id === 'cam-rung-tay-giang'
          ) || webContent.productsSection.products[0];
          setSelectedProduct(featuredProd);
        }}
        onUpdateField={(field, val) => {
          setWebContent((prev) => ({
            ...prev,
            featuredProduct: {
              ...prev.featuredProduct,
              [field]: val,
            },
          }));
          setHasUnsavedChanges(true);
        }}
      />

      {/* Values & Certifications Section */}
      <ValuesCertSection
        isAdmin={isAdmin}
        badge={webContent.valuesSection.badge}
        title={webContent.valuesSection.title}
        subtitle={webContent.valuesSection.subtitle}
        values={webContent.valuesSection.values}
        certTitle={webContent.valuesSection.certTitle}
        certSubtitle={webContent.valuesSection.certSubtitle}
        certifications={webContent.valuesSection.certifications}
        certFooterNotes={webContent.valuesSection.certFooterNotes}
        onUpdateBadge={(val) => updateSectionField('valuesSection', 'badge', val)}
        onUpdateTitle={(val) => updateSectionField('valuesSection', 'title', val)}
        onUpdateSubtitle={(val) => updateSectionField('valuesSection', 'subtitle', val)}
        onUpdateValue={(idx, field, val) => {
          setWebContent((prev) => {
            const next = [...prev.valuesSection.values];
            next[idx] = { ...next[idx], [field]: val };
            return {
              ...prev,
              valuesSection: { ...prev.valuesSection, values: next },
            };
          });
          setHasUnsavedChanges(true);
        }}
        onUpdateCertTitle={(val) => updateSectionField('valuesSection', 'certTitle', val)}
        onUpdateCertSubtitle={(val) => updateSectionField('valuesSection', 'certSubtitle', val)}
      />

      {/* Blog & News Section */}
      <BlogSection
        isAdmin={isAdmin}
        badge={webContent.blogSection.badge}
        titleMain={webContent.blogSection.titleMain}
        titleHighlight={webContent.blogSection.titleHighlight}
        description={webContent.blogSection.description}
        recentNotice={webContent.blogSection.recentNotice}
        posts={webContent.blogSection.posts}
        onUpdateBadge={(val) => updateSectionField('blogSection', 'badge', val)}
        onUpdateTitleMain={(val) => updateSectionField('blogSection', 'titleMain', val)}
        onUpdateTitleHighlight={(val) => updateSectionField('blogSection', 'titleHighlight', val)}
        onUpdateDescription={(val) => updateSectionField('blogSection', 'description', val)}
        onUpdateRecentNotice={(val) => updateSectionField('blogSection', 'recentNotice', val)}
        onUpdatePost={(idx, field, val) => {
          setWebContent((prev) => {
            const next = [...prev.blogSection.posts];
            next[idx] = { ...next[idx], [field]: val };
            return {
              ...prev,
              blogSection: { ...prev.blogSection, posts: next },
            };
          });
          setHasUnsavedChanges(true);
        }}
      />

      {/* Newsletter & Footer */}
      <NewsletterAndFooter
        isAdmin={isAdmin}
        newsletter={webContent.newsletter}
        footer={webContent.footer}
        onOpenLoginModal={() => setIsAdminLoginOpen(true)}
        onUpdateNewsletter={(field, val) => {
          setWebContent((prev) => ({
            ...prev,
            newsletter: {
              ...prev.newsletter,
              [field]: val,
            },
          }));
          setHasUnsavedChanges(true);
        }}
        onUpdateFooter={(field, val) => {
          setWebContent((prev) => ({
            ...prev,
            footer: {
              ...prev.footer,
              [field]: val,
            },
          }));
          setHasUnsavedChanges(true);
        }}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOrderNow={handleOrderNow}
      />

      {/* Order & Cart Slide-over Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCart([])}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        webContent={webContent}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
}
