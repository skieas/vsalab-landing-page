import React, { useState } from 'react';
import { Star, MapPin, CheckCircle2, ChevronLeft, ChevronRight, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { ProductItem } from '../types';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface ProductsSectionProps {
  isAdmin: boolean;
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  onUpdateBadge: (val: string) => void;
  onUpdateTitleMain: (val: string) => void;
  onUpdateTitleHighlight: (val: string) => void;
  onUpdateDescription: (val: string) => void;
  onUpdateProduct: (index: number, field: keyof ProductItem, value: any) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  isAdmin,
  badge,
  titleMain,
  titleHighlight,
  description,
  products,
  onSelectProduct,
  onUpdateBadge,
  onUpdateTitleMain,
  onUpdateTitleHighlight,
  onUpdateDescription,
  onUpdateProduct,
}) => {
  const [filter, setFilter] = useState<'all' | 'tay-giang' | 'duyen-hai'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <section id="san-pham" className="py-20 lg:py-28 bg-[#F6F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8DEC\-C] text-[#8E4D1B] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <EditableText
              isAdmin={isAdmin}
              value={badge}
              onChange={onUpdateBadge}
              as="span"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231A13] tracking-tight">
            <EditableText
              isAdmin={isAdmin}
              value={titleMain}
              onChange={onUpdateTitleMain}
              as="span"
            />
            <span className="italic text-[#9C511B]">
              <EditableText
                isAdmin={isAdmin}
                value={titleHighlight}
                onChange={onUpdateTitleHighlight}
                as="span"
              />
            </span>
          </h2>

          <p className="text-[#594E44] text-sm sm:text-base leading-relaxed font-light">
            <EditableText
              isAdmin={isAdmin}
              value={description}
              onChange={onUpdateDescription}
              as="span"
              multiline
            />
          </p>
        </div>

        {/* Filter Tabs & Trust Badges Row matching Image 6 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#E3D8CA]">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-[#EAE2D6] rounded-xl">
            <button
              type="button"
              onClick={() => {
                setFilter('all');
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#8E4D1B] text-white shadow-sm'
                  : 'text-[#5A4D40] hover:text-[#231A13]'
              }`}
            >
              Tất cả sản phẩm ({products.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setFilter('tay-giang');
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filter === 'tay-giang'
                  ? 'bg-[#8E4D1B] text-white shadow-sm'
                  : 'text-[#5A4D40] hover:text-[#231A13]'
              }`}
            >
              Đại ngàn Tây Giang (3)
            </button>
            <button
              type="button"
              onClick={() => {
                setFilter('duyen-hai');
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filter === 'duyen-hai'
                  ? 'bg-[#8E4D1B] text-white shadow-sm'
                  : 'text-[#5A4D40] hover:text-[#231A13]'
              }`}
            >
              Duyên Hải & Cố Đô (2)
            </button>
          </div>

          {/* Right Badges */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#736353]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 border border-[#DED3C3] rounded-lg">
              <ShieldCheck className="w-4 h-4 text-[#8E4D1B]" />
              <span>Kiểm định GC-MS độc lập</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 border border-[#DED3C3] rounded-lg">
              <Sparkles className="w-4 h-4 text-[#8E4D1B]" />
              <span>100% Tinh khiết tự nhiên</span>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={prevProduct}
            className="w-9 h-9 rounded-full bg-white border border-[#D5C9B8] hover:bg-[#EFE7DC] text-[#473B30] flex items-center justify-center transition-all shadow-sm"
            aria-label="Sản phẩm trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextProduct}
            className="w-9 h-9 rounded-full bg-white border border-[#D5C9B8] hover:bg-[#EFE7DC] text-[#473B30] flex items-center justify-center transition-all shadow-sm"
            aria-label="Sản phẩm kế tiếp"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => {
            const actualIndex = products.findIndex((p) => p.id === product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E5DACD] transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Area with Badges */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <EditableImage
                    isAdmin={isAdmin}
                    src={product.image}
                    alt={product.name}
                    onUpdateImage={(val) => onUpdateProduct(actualIndex, 'image', val)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Volume badge (top-left) */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#362B21] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {product.volume}
                  </span>

                  {/* Origin tag (top-right) */}
                  <span className="absolute top-3 right-3 bg-[#8E4D1B]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
                    {product.origin.includes('Tây Giang') ? 'Tây Giang' : product.origin}
                  </span>

                  {/* Bottom location pin */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{product.origin}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Rating & Official Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] text-[#7A6E63] ml-1">
                          ({product.reviewCount} đánh giá)
                        </span>
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F4EDE4] text-[#8E4D1B] border border-[#E5DACD]">
                        {product.badge}
                      </span>
                    </div>

                    {/* Product Title & Latin Name */}
                    <h3 className="font-serif font-bold text-xl text-[#231A13] group-hover:text-[#8E4D1B] transition-colors leading-snug">
                      <EditableText
                        isAdmin={isAdmin}
                        value={product.name}
                        onChange={(val) => onUpdateProduct(actualIndex, 'name', val)}
                        as="span"
                      />
                    </h3>
                    <p className="text-xs italic text-[#87786B] font-serif mb-3">
                      <EditableText
                        isAdmin={isAdmin}
                        value={product.latinName}
                        onChange={(val) => onUpdateProduct(actualIndex, 'latinName', val)}
                        as="span"
                      />
                    </p>

                    {/* Scent Profile Box */}
                    <div className="p-3 rounded-xl bg-[#F7F3EE] border border-[#EFE8DF] space-y-1 mb-3">
                      <span className="text-[11px] font-semibold text-[#8E4D1B] block">
                        Tầng hương:
                      </span>
                      <p className="text-xs text-[#52463B] leading-relaxed">
                        <EditableText
                          isAdmin={isAdmin}
                          value={product.scentProfile}
                          onChange={(val) => onUpdateProduct(actualIndex, 'scentProfile', val)}
                          as="span"
                        />
                      </p>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 text-xs text-[#635548]">
                      {product.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8E4D1B] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-3 border-t border-[#EDE4D8] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-[#87786B] block">Giá niêm yết:</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-serif font-bold text-[#8E4D1B] tabular-nums">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#9E9083] line-through tabular-nums">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                        Còn hàng
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2.5 rounded-xl bg-[#8E4D1B] hover:bg-[#A3591A] active:scale-[0.99] text-white text-xs sm:text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2 group/btn"
                    >
                      <Info className="w-4 h-4 text-amber-200" />
                      <span>Thông Tin Sản Phẩm</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
