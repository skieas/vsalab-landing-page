import React, { useState } from 'react';
import { X, Star, ShieldCheck, MapPin, CheckCircle2, ShoppingBag, PhoneCall, Sparkles } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
  onOrderNow: (product: ProductItem, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOrderNow,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DDD3C4] text-[#2C241E] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left image */}
          <div className="md:col-span-5 relative h-72 md:h-auto bg-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold shadow-sm">
              {product.volume}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/65 backdrop-blur-md p-2.5 rounded-xl text-white text-xs flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="line-clamp-1">{product.origin}</span>
            </div>
          </div>

          {/* Right info */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#8E4D1B] bg-[#EFE7DE] px-2.5 py-0.5 rounded-full">
                  {product.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>5.0 ({product.reviewCount} đánh giá)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#231A13] leading-snug">
                {product.name}
              </h2>
              <p className="text-xs italic text-[#7A6E63] font-serif mt-0.5">
                {product.latinName}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-3.5 rounded-2xl bg-[#F0EAE1] flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#7A6E63] block">Giá chính hãng VSA LAB:</span>
                <span className="text-2xl font-serif font-bold text-[#8E4D1B] tabular-nums">
                  {formatPrice(product.price)}
                </span>
              </div>
              <span className="text-xs text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full font-medium">
                Sẵn hàng tại kho
              </span>
            </div>

            {/* Scent notes */}
            <div className="text-xs space-y-1">
              <span className="font-semibold text-[#8E4D1B] block">Tầng hương đặc trưng:</span>
              <p className="text-[#594E44] leading-relaxed bg-white p-3 rounded-xl border border-[#E8DEC\-C]">
                {product.scentProfile}
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-1.5 text-xs text-[#594E44]">
              <span className="font-semibold text-[#241A13] block">Công dụng nổi bật:</span>
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8E4D1B] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Quantity and Actions */}
            <div className="pt-3 border-t border-[#E3D9CC] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#594E44]">Số lượng:</span>
                <div className="flex items-center gap-3 bg-white border border-[#D5C9B8] rounded-xl px-3 py-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-[#8E4D1B] font-bold text-sm px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold w-4 text-center tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-[#8E4D1B] font-bold text-sm px-1"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onAddToCart(product, quantity)}
                  className="py-3 px-4 rounded-xl border border-[#8E4D1B] text-[#8E4D1B] hover:bg-[#8E4D1B] hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Thêm giỏ hàng</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOrderNow(product, quantity)}
                  className="py-3 px-4 rounded-xl bg-[#8E4D1B] hover:bg-[#A3591A] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Đặt mua ngay</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="tel:0833153388"
                  className="text-[11px] text-[#7A6E63] hover:text-[#8E4D1B] inline-flex items-center gap-1 font-medium"
                >
                  <PhoneCall className="w-3 h-3 text-[#8E4D1B]" />
                  <span>Gọi Hotline 0833-15-3388 để được Dược sĩ tư vấn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
