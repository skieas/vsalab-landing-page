import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface HeroSectionProps {
  isAdmin: boolean;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  bgImage: string;
  onUpdateBadge: (val: string) => void;
  onUpdateTitle: (val: string) => void;
  onUpdateDescription: (val: string) => void;
  onUpdateCtaText: (val: string) => void;
  onUpdateBgImage: (val: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isAdmin,
  badge,
  title,
  description,
  ctaText,
  bgImage,
  onUpdateBadge,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateCtaText,
  onUpdateBgImage,
}) => {
  return (
    <section id="trang-chu" className="relative min-h-[92vh] flex items-center justify-start overflow-hidden pt-20">
      {/* Background with subtle parallax / dark cinematic gradient */}
      <div className="absolute inset-0 z-0">
        <EditableImage
          isAdmin={isAdmin}
          src={bgImage}
          alt="Tinh hoa từ vùng đất Việt - Vườn Tinh Dầu"
          onUpdateImage={onUpdateBgImage}
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Cinematic rich contrast overlays matching Image 1 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120E]/90 via-[#17120E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120E] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl text-left space-y-6">
          {/* Top category kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-amber-500/80" />
            <EditableText
              isAdmin={isAdmin}
              value={badge}
              onChange={onUpdateBadge}
              as="span"
              className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-300 font-sans"
            />
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.12]">
            <EditableText
              isAdmin={isAdmin}
              value={title}
              onChange={onUpdateTitle}
              as="span"
            />
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed font-light max-w-xl">
            <EditableText
              isAdmin={isAdmin}
              value={description}
              onChange={onUpdateDescription}
              as="span"
              multiline
            />
          </p>

          {/* CTA Action */}
          <div className="pt-2">
            <a
              href="#gioi-thieu"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#8E4D1B] hover:bg-[#A3591A] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-amber-900/40 hover:translate-x-0.5 group"
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
      </div>
    </section>
  );
};
