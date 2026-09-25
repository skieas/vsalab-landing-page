import React, { useState } from 'react';
import { Search, X, ArrowRight, Tag, MapPin, Sparkles } from 'lucide-react';
import { WebContent, ProductItem, MaterialRegion, BlogPost } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  webContent: WebContent;
  onSelectProduct: (product: ProductItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  webContent,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedProducts = q
    ? webContent.productsSection.products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.latinName.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.scentProfile.toLowerCase().includes(q)
      )
    : [];

  const matchedRegions = q
    ? webContent.regionsSection.regions.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.botanicals.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      )
    : [];

  const matchedPosts = q
    ? webContent.blogSection.posts.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tag.toLowerCase().includes(q)
      )
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] text-[#2C241E] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#DDD3C4] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E3D9CC] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#8E4D1B] shrink-0 ml-2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm tinh dầu Cam Rừng, Tây Giang, Trầm hương, Quế..."
            className="w-full bg-transparent text-sm sm:text-base text-[#2C241E] placeholder-stone-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 ml-1"
          >
            Đóng (ESC)
          </button>
        </div>

        {/* Results Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {!query ? (
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4D1B]">
                Gợi ý tìm kiếm phổ biến
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Cam rừng Tây Giang',
                  'Trầm hương tự nhiên',
                  'Sả chanh',
                  'Quế Trà Bồng',
                  'Tràm gió Ninh Bình',
                  'Quy trình chưng cất',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-[#EFE8DF] hover:bg-[#8E4D1B] hover:text-white text-xs text-[#524538] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : matchedProducts.length === 0 &&
            matchedRegions.length === 0 &&
            matchedPosts.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <p className="font-serif text-lg text-[#594E44]">Không tìm thấy kết quả phù hợp</p>
              <p className="text-xs text-stone-500">
                Hãy thử với từ khóa khác như "cam", "trầm", "tây giang"...
              </p>
            </div>
          ) : (
            <>
              {matchedProducts.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4D1B]">
                    Sản phẩm ({matchedProducts.length})
                  </span>
                  <div className="space-y-2">
                    {matchedProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E8DEC\-C] hover:border-[#8E4D1B] cursor-pointer transition-all shadow-xs group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-serif font-bold text-sm text-[#231A13] group-hover:text-[#8E4D1B]">
                              {p.name}
                            </h4>
                            <span className="text-[11px] text-[#7A6E63]">{p.origin} • {p.volume}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8E4D1B] group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedRegions.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4D1B]">
                    Vùng nguyên liệu ({matchedRegions.length})
                  </span>
                  <div className="space-y-2">
                    {matchedRegions.map((r) => (
                      <a
                        key={r.id}
                        href="#vung-nguyen-lieu"
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E8DEC\-C] hover:border-[#8E4D1B] transition-all shadow-xs group"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#8E4D1B]" />
                          <div>
                            <h4 className="font-semibold text-xs sm:text-sm text-[#231A13]">
                              {r.name}
                            </h4>
                            <span className="text-[11px] text-[#7A6E63]">{r.botanicals}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8E4D1B]" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {matchedPosts.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4D1B]">
                    Kiến thức & Bài viết ({matchedPosts.length})
                  </span>
                  <div className="space-y-2">
                    {matchedPosts.map((post) => (
                      <a
                        key={post.id}
                        href="#tin-tuc"
                        onClick={onClose}
                        className="block p-3 rounded-2xl bg-white border border-[#E8DEC\-C] hover:border-[#8E4D1B] transition-all shadow-xs"
                      >
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#231A13] hover:text-[#8E4D1B]">
                          {post.title}
                        </h4>
                        <span className="text-[11px] text-[#7A6E63]">{post.date} • {post.tag}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
