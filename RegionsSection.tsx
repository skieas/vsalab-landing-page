import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Mountain, CloudSun, X } from 'lucide-react';
import { MaterialRegion } from '../types';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface RegionsSectionProps {
  isAdmin: boolean;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  regions: MaterialRegion[];
  onUpdateBadge: (val: string) => void;
  onUpdateTitle: (val: string) => void;
  onUpdateDescription: (val: string) => void;
  onUpdateCtaText: (val: string) => void;
  onUpdateRegion: (index: number, field: keyof MaterialRegion, value: string) => void;
}

export const RegionsSection: React.FC<RegionsSectionProps> = ({
  isAdmin,
  badge,
  title,
  description,
  ctaText,
  regions,
  onUpdateBadge,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateCtaText,
  onUpdateRegion,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<MaterialRegion | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % regions.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + regions.length) % regions.length);
  };

  return (
    <section id="vung-nguyen-lieu" className="py-20 lg:py-28 bg-[#F3EEE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <EditableText
              isAdmin={isAdmin}
              value={badge}
              onChange={onUpdateBadge}
              as="span"
              className="text-xs font-semibold uppercase tracking-widest text-[#9C511B]"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231A13] tracking-tight">
              <EditableText
                isAdmin={isAdmin}
                value={title}
                onChange={onUpdateTitle}
                as="span"
              />
            </h2>
            <p className="text-[#594E44] text-base leading-relaxed font-light">
              <EditableText
                isAdmin={isAdmin}
                value={description}
                onChange={onUpdateDescription}
                as="span"
                multiline
              />
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Slider navigation buttons */}
            <div className="flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#D5C9B8] bg-white hover:bg-[#EFE7DC] text-[#473B30] flex items-center justify-center transition-all shadow-sm"
                aria-label="Vùng trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#D5C9B8] bg-white hover:bg-[#EFE7DC] text-[#473B30] flex items-center justify-center transition-all shadow-sm"
                aria-label="Vùng kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href="#quy-trinh"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5C9B8] bg-white hover:bg-[#EFE7DC] text-[#473B30] text-xs sm:text-sm font-medium transition-all shadow-sm"
            >
              <EditableText
                isAdmin={isAdmin}
                value={ctaText}
                onChange={onUpdateCtaText}
                as="span"
              />
              <ArrowRight className="w-4 h-4 text-[#9C511B]" />
            </a>
          </div>
        </div>

        {/* 3 Cards Grid / Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {regions.map((region, idx) => (
            <div
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E8DEC\-C] transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <EditableImage
                  isAdmin={isAdmin}
                  src={region.image}
                  alt={region.name}
                  onUpdateImage={(val) => onUpdateRegion(idx, 'image', val)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-6 flex items-center justify-between mt-auto">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#261E17] group-hover:text-[#9C511B] transition-colors">
                    <EditableText
                      isAdmin={isAdmin}
                      value={region.name}
                      onChange={(val) => onUpdateRegion(idx, 'name', val)}
                      as="span"
                    />
                  </h3>
                  <p className="text-xs text-[#7A6E63] font-light">
                    <EditableText
                      isAdmin={isAdmin}
                      value={region.botanicals}
                      onChange={(val) => onUpdateRegion(idx, 'botanicals', val)}
                      as="span"
                    />
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#F3EFE9] group-hover:bg-[#8E4D1B] text-[#7A6E63] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Region Detail Modal */}
      {selectedRegion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedRegion(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#DDD3C4] text-[#2C241E]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedRegion.image}
                alt={selectedRegion.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedRegion(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#8E4D1B] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  Vùng thổ nhưỡng đặc hữu
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 drop-shadow">
                  {selectedRegion.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm sm:text-base text-[#594E44] leading-relaxed">
                {selectedRegion.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5DCCF]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE4D8] flex items-center justify-center text-[#8E4D1B]">
                    <Mountain className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8C7E72] block">Độ cao tự nhiên</span>
                    <span className="text-xs font-semibold text-[#2C241E]">
                      {selectedRegion.elevation || '1,200m'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE4D8] flex items-center justify-center text-[#8E4D1B]">
                    <CloudSun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8C7E72] block">Đặc điểm khí hậu</span>
                    <span className="text-xs font-semibold text-[#2C241E]">
                      {selectedRegion.climate || 'Sương mù Trường Sơn'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFEAE2] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A6E63] block">Dược liệu chủ đạo:</span>
                  <span className="text-sm font-serif font-bold text-[#8E4D1B]">
                    {selectedRegion.botanicals}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRegion(null)}
                  className="px-4 py-2 rounded-full bg-[#8E4D1B] text-white text-xs font-medium hover:bg-[#A3591A] transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
