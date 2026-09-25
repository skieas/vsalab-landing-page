import React from 'react';
import { Droplet, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { TrustItem } from '../types';
import { EditableText } from './EditableText';

interface TrustBarProps {
  isAdmin: boolean;
  items: TrustItem[];
  onUpdateItem: (index: number, field: 'title' | 'description', value: string) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ isAdmin, items, onUpdateItem }) => {
  const getIcon = (type: TrustItem['icon']) => {
    switch (type) {
      case 'droplet':
        return <Droplet className="w-5 h-5 text-[#8E4D1B]" />;
      case 'pin':
        return <MapPin className="w-5 h-5 text-[#8E4D1B]" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#8E4D1B]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#8E4D1B]" />;
    }
  };

  return (
    <div className="bg-[#EFEAE2] border-y border-[#DDD3C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD3C4]/60">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 ${idx !== 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#E4DACD] flex items-center justify-center shrink-0 shadow-inner">
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col">
                <EditableText
                  isAdmin={isAdmin}
                  value={item.title}
                  onChange={(val) => onUpdateItem(idx, 'title', val)}
                  as="span"
                  className="font-semibold text-sm text-[#261E17]"
                />
                <EditableText
                  isAdmin={isAdmin}
                  value={item.description}
                  onChange={(val) => onUpdateItem(idx, 'description', val)}
                  as="span"
                  className="text-xs text-[#6F645A]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
