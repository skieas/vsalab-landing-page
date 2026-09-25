import React from 'react';
import { Leaf, Users, Award, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import { CoreValue, CertificationItem } from '../types';
import { EditableText } from './EditableText';

interface ValuesCertSectionProps {
  isAdmin: boolean;
  badge: string;
  title: string;
  subtitle: string;
  values: CoreValue[];
  certTitle: string;
  certSubtitle: string;
  certifications: CertificationItem[];
  certFooterNotes: string[];
  onUpdateBadge: (val: string) => void;
  onUpdateTitle: (val: string) => void;
  onUpdateSubtitle: (val: string) => void;
  onUpdateValue: (index: number, field: keyof CoreValue, val: string) => void;
  onUpdateCertTitle: (val: string) => void;
  onUpdateCertSubtitle: (val: string) => void;
}

export const ValuesCertSection: React.FC<ValuesCertSectionProps> = ({
  isAdmin,
  badge,
  title,
  subtitle,
  values,
  certTitle,
  certSubtitle,
  certifications,
  certFooterNotes,
  onUpdateBadge,
  onUpdateTitle,
  onUpdateSubtitle,
  onUpdateValue,
  onUpdateCertTitle,
  onUpdateCertSubtitle,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'nature':
        return <Leaf className="w-5 h-5 text-[#8E4D1B]" />;
      case 'human':
        return <Users className="w-5 h-5 text-[#8E4D1B]" />;
      case 'quality':
      default:
        return <Award className="w-5 h-5 text-[#8E4D1B]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F3EFE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6DCD0] text-[#8E4D1B] text-xs font-semibold tracking-wider uppercase">
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
              value={title}
              onChange={onUpdateTitle}
              as="span"
            />
          </h2>

          <p className="text-[#594E44] text-sm sm:text-base leading-relaxed font-light">
            <EditableText
              isAdmin={isAdmin}
              value={subtitle}
              onChange={onUpdateSubtitle}
              as="span"
              multiline
            />
          </p>
        </div>

        {/* 3 Core Value Cards matching Image 8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((val, idx) => (
            <div
              key={val.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-[#E3D8CB] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6F2EC] flex items-center justify-center shadow-inner">
                    {getIcon(val.id)}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#EFE8DF] text-[#8E4D1B]">
                    <EditableText
                      isAdmin={isAdmin}
                      value={val.badge}
                      onChange={(v) => onUpdateValue(idx, 'badge', v)}
                      as="span"
                    />
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#231A13]">
                    <EditableText
                      isAdmin={isAdmin}
                      value={val.title}
                      onChange={(v) => onUpdateValue(idx, 'title', v)}
                      as="span"
                    />
                  </h3>
                  <span className="text-[11px] font-semibold tracking-wider text-[#9C511B] uppercase block mt-1">
                    <EditableText
                      isAdmin={isAdmin}
                      value={val.subtitle}
                      onChange={(v) => onUpdateValue(idx, 'subtitle', v)}
                      as="span"
                    />
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C5045] leading-relaxed font-light">
                  <EditableText
                    isAdmin={isAdmin}
                    value={val.description}
                    onChange={(v) => onUpdateValue(idx, 'description', v)}
                    as="span"
                    multiline
                  />
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EDE4D8] flex items-center gap-2 text-xs text-[#8E4D1B] font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <EditableText
                    isAdmin={isAdmin}
                    value={val.commitment}
                    onChange={(v) => onUpdateValue(idx, 'commitment', v)}
                    as="span"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* International Certifications Box matching Image 8 */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E3D9CC] shadow-sm text-center">
          <div className="max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#231A13]">
              <EditableText
                isAdmin={isAdmin}
                value={certTitle}
                onChange={onUpdateCertTitle}
                as="span"
              />
            </h3>
            <p className="text-xs sm:text-sm text-[#7A6E63] font-light">
              <EditableText
                isAdmin={isAdmin}
                value={certSubtitle}
                onChange={onUpdateCertSubtitle}
                as="span"
              />
            </p>
          </div>

          {/* 5 Certification Badges in a Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-white border border-[#E3D8CB] hover:border-[#8E4D1B] transition-colors flex flex-col items-center justify-center space-y-2 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-full bg-[#F4EDE4] flex items-center justify-center text-[#8E4D1B] group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#231A13]">{cert.title}</h4>
                <p className="text-[10px] text-[#8A7C6E] leading-tight text-center">{cert.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Footer note line */}
          <div className="pt-6 border-t border-[#EBE1D5] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#7A6E63]">
            {certFooterNotes.map((note, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{note}</span>
                {idx !== certFooterNotes.length - 1 && (
                  <span className="text-stone-300 hidden sm:inline">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
