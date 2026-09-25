import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface BrandStorySectionProps {
  isAdmin: boolean;
  title: string;
  quote: string;
  p1: string;
  p2: string;
  taglineRight: string;
  image: string;
  stats: { value: string; label: string }[];
  ctaText: string;
  onUpdateTitle: (val: string) => void;
  onUpdateQuote: (val: string) => void;
  onUpdateP1: (val: string) => void;
  onUpdateP2: (val: string) => void;
  onUpdateTaglineRight: (val: string) => void;
  onUpdateImage: (val: string) => void;
  onUpdateStat: (index: number, field: 'value' | 'label', val: string) => void;
  onUpdateCtaText: (val: string) => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  isAdmin,
  title,
  quote,
  p1,
  p2,
  taglineRight,
  image,
  stats,
  ctaText,
  onUpdateTitle,
  onUpdateQuote,
  onUpdateP1,
  onUpdateP2,
  onUpdateTaglineRight,
  onUpdateImage,
  onUpdateStat,
  onUpdateCtaText,
}) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#1A1410] text-[#F3EEEA] overflow-hidden">
      {/* Background imagery with dark scrim */}
      <div className="absolute inset-0 z-0 opacity-40">
        <EditableImage
          isAdmin={isAdmin}
          src={image}
          alt="Bàn tay người nông dân nâng niu dược liệu tươi"
          onUpdateImage={onUpdateImage}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15100C] via-[#15100C]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              <EditableText
                isAdmin={isAdmin}
                value={title}
                onChange={onUpdateTitle}
                as="span"
              />
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-amber-200/90 leading-relaxed max-w-2xl border-l-2 border-amber-600/60 pl-4 py-1">
              <EditableText
                isAdmin={isAdmin}
                value={quote}
                onChange={onUpdateQuote}
                as="span"
                multiline
              />
            </p>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              <p>
                <EditableText
                  isAdmin={isAdmin}
                  value={p1}
                  onChange={onUpdateP1}
                  as="span"
                  multiline
                />
              </p>
              <p>
                <EditableText
                  isAdmin={isAdmin}
                  value={p2}
                  onChange={onUpdateP2}
                  as="span"
                  multiline
                />
              </p>
            </div>

            {/* Stats Row matching Image 5 */}
            <div className="pt-8 border-t border-stone-800/80 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-100 tabular-nums">
                    <EditableText
                      isAdmin={isAdmin}
                      value={stat.value}
                      onChange={(val) => onUpdateStat(idx, 'value', val)}
                      as="span"
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-400 font-light leading-snug">
                    <EditableText
                      isAdmin={isAdmin}
                      value={stat.label}
                      onChange={(val) => onUpdateStat(idx, 'label', val)}
                      as="span"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#san-pham"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#8E4D1B] hover:bg-[#A3591A] text-white font-medium text-sm transition-all shadow-lg hover:shadow-amber-900/40 group"
              >
                <EditableText
                  isAdmin={isAdmin}
                  value={ctaText}
                  onChange={onUpdateCtaText}
                  as="span"
                />
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Cursive Calligraphy Banner */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
            <div className="p-6 rounded-3xl bg-stone-900/60 border border-amber-600/30 backdrop-blur-md max-w-xs shadow-2xl space-y-2">
              <span className="font-script text-3xl sm:text-4xl text-[#F5C26B] block drop-shadow-md">
                Tự hào Việt Nam
              </span>
              <p className="font-script text-2xl sm:text-3xl text-stone-200 block drop-shadow-md">
                những hương thơm tự nhiên
              </p>
              <div className="pt-2">
                <span className="text-[10px] tracking-widest uppercase text-amber-400 font-semibold">
                  Bảo trợ chuyên môn VSA LAB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
