import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface AboutSectionProps {
  isAdmin: boolean;
  badge: string;
  title: string;
  p1: string;
  ctaText: string;
  image: string;
  imageCaption: string;
  onUpdateBadge: (val: string) => void;
  onUpdateTitle: (val: string) => void;
  onUpdateP1: (val: string) => void;
  onUpdateCtaText: (val: string) => void;
  onUpdateImage: (val: string) => void;
  onUpdateImageCaption: (val: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  isAdmin,
  badge,
  title,
  p1,
  ctaText,
  image,
  imageCaption,
  onUpdateBadge,
  onUpdateTitle,
  onUpdateP1,
  onUpdateCtaText,
  onUpdateImage,
  onUpdateImageCaption,
}) => {
  return (
    <section id="gioi-thieu" className="py-20 lg:py-28 bg-[#F8F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <EditableText
                isAdmin={isAdmin}
                value={badge}
                onChange={onUpdateBadge}
                as="span"
                className="text-xs font-semibold uppercase tracking-widest text-[#9C511B]"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231A13] tracking-tight leading-[1.2]">
              <EditableText
                isAdmin={isAdmin}
                value={title}
                onChange={onUpdateTitle}
                as="span"
              />
            </h2>

            <p className="text-[#594E44] text-base sm:text-lg leading-relaxed font-light">
              <EditableText
                isAdmin={isAdmin}
                value={p1}
                onChange={onUpdateP1}
                as="span"
                multiline
              />
            </p>

            <div className="pt-2">
              <a
                href="#vung-nguyen-lieu"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#8E4D1B] hover:bg-[#A3591A] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg group"
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

          {/* Right Image Column with Cursive Script Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-200">
              <EditableImage
                isAdmin={isAdmin}
                src={image}
                alt="Người nông dân thu hái dược liệu - Vườn Tinh Dầu"
                onUpdateImage={onUpdateImage}
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />

              {/* Gradient scrim for script typography readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Elegant Cursive Calligraphy Overlay matching Image 2 */}
              <div className="absolute bottom-6 right-6 left-6 text-right z-10 pointer-events-auto">
                <EditableText
                  isAdmin={isAdmin}
                  value={imageCaption}
                  onChange={onUpdateImageCaption}
                  as="p"
                  className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#F9E2AF] drop-shadow-md leading-relaxed tracking-wide inline-block max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
