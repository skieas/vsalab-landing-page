import React from 'react';
import {
  Sparkles,
  FlaskConical,
  Droplet,
  Flame,
  Sun,
  AlertTriangle,
  Info,
  BookOpen,
  Leaf,
  PhoneCall,
} from 'lucide-react';
import { ProductItem } from '../types';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface FeaturedProductSectionProps {
  isAdmin: boolean;
  featured: any;
  onOpenProductModal: () => void;
  onUpdateField: (field: string, value: string) => void;
}

export const FeaturedProductSection: React.FC<FeaturedProductSectionProps> = ({
  isAdmin,
  featured,
  onOpenProductModal,
  onUpdateField,
}) => {
  return (
    <section id="cam-rung-tay-giang" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE2D6] text-[#8E4D1B] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <EditableText
              isAdmin={isAdmin}
              value={featured.badge}
              onChange={(val) => onUpdateField('badge', val)}
              as="span"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#231A13] tracking-tight">
            <EditableText
              isAdmin={isAdmin}
              value={featured.title}
              onChange={(val) => onUpdateField('title', val)}
              as="span"
            />
          </h2>

          <p className="text-sm sm:text-base font-serif italic text-[#7C6C5E]">
            <EditableText
              isAdmin={isAdmin}
              value={featured.subtitleEnglish}
              onChange={(val) => onUpdateField('subtitleEnglish', val)}
              as="span"
            />
          </p>

          <p className="text-xs font-semibold tracking-wider uppercase text-[#9C511B]">
            <EditableText
              isAdmin={isAdmin}
              value={featured.researchNote}
              onChange={(val) => onUpdateField('researchNote', val)}
              as="span"
            />
          </p>
        </div>

        {/* Big Dual-Column Box matching Image 7 */}
        <div className="bg-[#FAF7F2] rounded-[2.5rem] border border-[#E3D9CC] shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E3D9CC]">
            {/* Left Specification Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-7">
              {/* Spec Item: Thành phần */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-[#D5C9B8] bg-[#F2EDE5] flex items-center justify-center text-[#8E4D1B] shrink-0 mt-0.5">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-[#241A13]">Thành phần</h4>
                  <p className="text-xs sm:text-sm text-[#5C5045] leading-relaxed">
                    <EditableText
                      isAdmin={isAdmin}
                      value={featured.ingredients}
                      onChange={(val) => onUpdateField('ingredients', val)}
                      as="span"
                    />{' '}
                    <span className="italic text-[#7A6E63]">
                      <EditableText
                        isAdmin={isAdmin}
                        value={featured.ingredientsDetail}
                        onChange={(val) => onUpdateField('ingredientsDetail', val)}
                        as="span"
                      />
                    </span>
                  </p>
                </div>
              </div>

              {/* Spec Item: Công dụng */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-[#D5C9B8] bg-[#F2EDE5] flex items-center justify-center text-[#8E4D1B] shrink-0 mt-0.5">
                  <Droplet className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-[#241A13]">Công dụng</h4>
                  <p className="text-xs sm:text-sm text-[#5C5045] leading-relaxed">
                    <EditableText
                      isAdmin={isAdmin}
                      value={featured.benefits}
                      onChange={(val) => onUpdateField('benefits', val)}
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Spec Item: Cách dùng */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-[#D5C9B8] bg-[#F2EDE5] flex items-center justify-center text-[#8E4D1B] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-[#241A13]">Cách dùng</h4>
                  <p className="text-xs sm:text-sm text-[#5C5045] leading-relaxed">
                    <EditableText
                      isAdmin={isAdmin}
                      value={featured.usage}
                      onChange={(val) => onUpdateField('usage', val)}
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Spec Item: Bảo quản */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-[#D5C9B8] bg-[#F2EDE5] flex items-center justify-center text-[#8E4D1B] shrink-0 mt-0.5">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-[#241A13]">Bảo quản</h4>
                  <p className="text-xs sm:text-sm text-[#5C5045] leading-relaxed">
                    <EditableText
                      isAdmin={isAdmin}
                      value={featured.storage}
                      onChange={(val) => onUpdateField('storage', val)}
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Spec Item: Lưu ý */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-[#D5C9B8] bg-[#F2EDE5] flex items-center justify-center text-[#8E4D1B] shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-[#241A13]">Lưu ý</h4>
                  <p className="text-xs sm:text-sm text-[#5C5045] leading-relaxed">
                    <EditableText
                      isAdmin={isAdmin}
                      value={featured.precautions}
                      onChange={(val) => onUpdateField('precautions', val)}
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Origin Footnote with diamond emblem */}
              <div className="pt-6 border-t border-[#EAE0D3] flex items-center justify-between">
                <div>
                  <span className="font-serif italic text-sm text-[#8E4D1B] block">
                    <EditableText
                      isAdmin={isAdmin}
                      value={featured.originFootnote}
                      onChange={(val) => onUpdateField('originFootnote', val)}
                      as="span"
                    />
                  </span>
                </div>
                <div className="w-6 h-6 rotate-45 border-2 border-[#8E4D1B]/50 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#8E4D1B]" />
                </div>
              </div>
            </div>

            {/* Right Visual & Identity Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between items-center text-center bg-[#F3EDE4]/50 relative">
              <div className="w-full space-y-4">
                {/* VSA Emblem */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-[#C5B7A6] bg-white flex items-center justify-center text-[#8E4D1B] mb-2 shadow-sm">
                    <Droplet className="w-6 h-6 fill-[#8E4D1B]/20" />
                  </div>
                  <span className="text-xs tracking-widest font-bold text-[#8E4D1B]">VSA</span>
                  <span className="text-[10px] tracking-wider uppercase text-[#7D7063]">
                    — LAB —
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#231A13] tracking-wide uppercase">
                  TINH DẦU CAM RỪNG TÂY GIANG
                </h3>
                <p className="text-xs font-serif italic text-[#7D7063]">
                  {featured.brandSub}
                </p>

                <div className="inline-block">
                  <span className="px-3.5 py-1 rounded-full bg-[#E6DCD0] text-[#8E4D1B] text-xs font-serif italic border border-[#D5C9B8]">
                    100% Pure
                  </span>
                </div>

                {/* Botanical Painting Artwork Box */}
                <div className="relative rounded-2xl overflow-hidden border border-[#D5C9B8] shadow-md my-4">
                  <EditableImage
                    isAdmin={isAdmin}
                    src={featured.illustrationImage}
                    alt="Người phụ nữ Cơ Tu thu hoạch cam rừng"
                    onUpdateImage={(val) => onUpdateField('illustrationImage', val)}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span>{featured.illustrationCaption1}</span>
                    <span>{featured.illustrationCaption2}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenProductModal}
                className="w-full py-3.5 rounded-full bg-[#8E4D1B] hover:bg-[#A3591A] active:scale-[0.99] text-white text-sm font-medium transition-all shadow-lg flex items-center justify-center gap-2 mt-6"
              >
                <Info className="w-4 h-4 text-amber-200" />
                <span>{featured.ctaButtonText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Bottom Cards matching Image 7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CC] flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#EFEAE2] flex items-center justify-center text-[#8E4D1B] shrink-0 shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-sm text-[#231A13]">
                {featured.cards.researchTitle}
              </h4>
              <p className="text-xs text-[#7A6E63] font-light mt-0.5">
                {featured.cards.researchDesc}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CC] flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#EFEAE2] flex items-center justify-center text-[#8E4D1B] shrink-0 shadow-inner">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-sm text-[#231A13]">
                {featured.cards.sustainabilityTitle}
              </h4>
              <p className="text-xs text-[#7A6E63] font-light mt-0.5">
                {featured.cards.sustainabilityDesc}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CC] flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#EFEAE2] flex items-center justify-center text-[#8E4D1B] shrink-0 shadow-inner">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-sm text-[#231A13]">
                {featured.cards.supportTitle}
              </h4>
              <p className="text-xs text-[#7A6E63] font-light mt-0.5">
                {featured.cards.supportDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
