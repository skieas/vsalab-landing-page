import React, { useState } from 'react';
import { Sprout, Leaf, Flame, Microscope, Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProcessStep } from '../types';
import { EditableText } from './EditableText';

interface ProcessSectionProps {
  isAdmin: boolean;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  steps: ProcessStep[];
  onUpdateBadge: (val: string) => void;
  onUpdateTitle: (val: string) => void;
  onUpdateDescription: (val: string) => void;
  onUpdateCtaText: (val: string) => void;
  onUpdateStep: (index: number, field: 'title' | 'desc', value: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  isAdmin,
  badge,
  title,
  description,
  ctaText,
  steps,
  onUpdateBadge,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateCtaText,
  onUpdateStep,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const renderIcon = (type: ProcessStep['icon']) => {
    switch (type) {
      case 'sprout':
        return <Sprout className="w-5 h-5 text-[#8E4D1B]" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-[#8E4D1B]" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-[#8E4D1B]" />;
      case 'microscope':
        return <Microscope className="w-5 h-5 text-[#8E4D1B]" />;
      case 'package':
        return <Package className="w-5 h-5 text-[#8E4D1B]" />;
    }
  };

  return (
    <section id="quy-trinh" className="relative py-20 lg:py-28 bg-[#F8F5F0] overflow-hidden">
      {/* Subtle laboratory & botanical background atmosphere */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C49A6C_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Decorative warm glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-2xl space-y-4 mb-16">
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
          <div className="pt-2">
            <a
              href="#san-pham"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8E0D5] hover:bg-[#DDD3C4] text-[#42362C] text-xs sm:text-sm font-medium transition-all shadow-sm"
            >
              <EditableText
                isAdmin={isAdmin}
                value={ctaText}
                onChange={onUpdateCtaText}
                as="span"
              />
              <ArrowRight className="w-4 h-4 text-[#8E4D1B]" />
            </a>
          </div>
        </div>

        {/* 5-Step Horizontal Timeline matching Image 4 */}
        <div className="relative mt-8">
          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[1.5px] bg-[#D8CCBD] z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center text-center cursor-pointer group transition-all p-3 rounded-2xl ${
                  activeStep === idx ? 'bg-white/80 shadow-md ring-1 ring-[#8E4D1B]/30' : 'hover:bg-white/40'
                }`}
              >
                {/* Step indicator label */}
                <span className="text-[11px] font-semibold tracking-wider text-[#8E4D1B] uppercase mb-3">
                  {step.step}
                </span>

                {/* Circular Icon with border */}
                <div
                  className={`w-14 h-14 rounded-full border-2 bg-[#F8F5F0] flex items-center justify-center transition-all duration-300 shadow-sm ${
                    activeStep === idx
                      ? 'border-[#8E4D1B] scale-110 shadow-[#8E4D1B]/20'
                      : 'border-[#D8CCBD] group-hover:border-[#8E4D1B] group-hover:scale-105'
                  }`}
                >
                  {renderIcon(step.icon)}
                </div>

                {/* Step Title */}
                <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#261E17] mt-4 leading-snug group-hover:text-[#8E4D1B] transition-colors">
                  <EditableText
                    isAdmin={isAdmin}
                    value={step.title}
                    onChange={(val) => onUpdateStep(idx, 'title', val)}
                    as="span"
                  />
                </h3>

                {/* Step description */}
                <p className="text-[11px] text-[#7A6E63] mt-2 font-light leading-relaxed max-w-[180px]">
                  <EditableText
                    isAdmin={isAdmin}
                    value={step.desc}
                    onChange={(val) => onUpdateStep(idx, 'desc', val)}
                    as="span"
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
