import React, { useState } from 'react';
import {
  Sparkles,
  Mail,
  ArrowRight,
  Droplet,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Lock,
  ArrowUp,
  Building,
  CheckCircle,
} from 'lucide-react';
import { EditableText } from './EditableText';

interface NewsletterAndFooterProps {
  isAdmin: boolean;
  newsletter: any;
  footer: any;
  onOpenLoginModal: () => void;
  onUpdateNewsletter: (field: string, val: string) => void;
  onUpdateFooter: (field: string, val: string) => void;
}

export const NewsletterAndFooter: React.FC<NewsletterAndFooterProps> = ({
  isAdmin,
  newsletter,
  footer,
  onOpenLoginModal,
  onUpdateNewsletter,
  onUpdateFooter,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] text-[#2C241E] border-t border-[#E5DACD]">
      {/* Newsletter Section matching Image 10 */}
      <div className="border-b border-[#E5DACD] py-16 lg:py-20 bg-[#F6F1EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9C511B]">
            <Sparkles className="w-3.5 h-3.5" />
            <EditableText
              isAdmin={isAdmin}
              value={newsletter.badge}
              onChange={(val) => onUpdateNewsletter('badge', val)}
              as="span"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231A13] tracking-tight">
            <EditableText
              isAdmin={isAdmin}
              value={newsletter.title}
              onChange={(val) => onUpdateNewsletter('title', val)}
              as="span"
            />
          </h2>

          <p className="text-xs sm:text-sm text-[#615447] max-w-xl mx-auto leading-relaxed font-light">
            <EditableText
              isAdmin={isAdmin}
              value={newsletter.description}
              onChange={(val) => onUpdateNewsletter('description', val)}
              as="span"
              multiline
            />
          </p>

          <form onSubmit={handleSubscribe} className="pt-4 max-w-md mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#8C7D6F] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập địa chỉ email của bạn..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#D5C9B8] focus:border-[#8E4D1B] focus:ring-1 focus:ring-[#8E4D1B] rounded-full text-xs text-[#2C241E] placeholder-[#9E9083] outline-none shadow-sm transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#8E4D1B] hover:bg-[#A3591A] text-white font-medium text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 shrink-0"
            >
              <span>{newsletter.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {subscribed && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium animate-fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Cảm ơn bạn! Chúng tôi đã ghi nhận đăng ký nhận ưu đãi.</span>
            </div>
          )}
        </div>
      </div>

      {/* Main 4-Column Footer matching Image 10 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Info & Social (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE0D3] border border-[#D5C9B8] flex items-center justify-center text-[#8E4D1B]">
                <Droplet className="w-5 h-5 fill-[#8E4D1B]/20" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#231A13]">
                  <EditableText
                    isAdmin={isAdmin}
                    value={footer.brandName}
                    onChange={(val) => onUpdateFooter('brandName', val)}
                    as="span"
                  />
                </h3>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8E4D1B] block">
                  <EditableText
                    isAdmin={isAdmin}
                    value={footer.brandSubtitle}
                    onChange={(val) => onUpdateFooter('brandSubtitle', val)}
                    as="span"
                  />
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5E5144] leading-relaxed font-light">
              <EditableText
                isAdmin={isAdmin}
                value={footer.description}
                onChange={(val) => onUpdateFooter('description', val)}
                as="span"
                multiline
              />
            </p>

            <div className="flex items-center gap-3 text-xs text-[#7A6E63]">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Pure & Natural</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8E4D1B]" />
                <span>Kiểm định VSA LAB</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8A7C6E] block mb-2">
                KÊNH KẾT NỐI
              </span>
              <div className="flex items-center gap-3 text-[#7A6E63]">
                <a
                  href="tel:0833153388"
                  className="w-8 h-8 rounded-full bg-[#EFE9DF] hover:bg-[#8E4D1B] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Hotline"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#EFE9DF] hover:bg-[#8E4D1B] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#EFE9DF] hover:bg-[#8E4D1B] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#EFE9DF] hover:bg-[#8E4D1B] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#EFE9DF] hover:bg-[#8E4D1B] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Zalo"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: LIÊN KẾT (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#8E4D1B]">LIÊN KẾT</h4>
            <ul className="space-y-2 text-xs text-[#5E5144]">
              <li>
                <a href="#trang-chu" className="hover:text-[#8E4D1B] transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#gioi-thieu" className="hover:text-[#8E4D1B] transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#vung-nguyen-lieu" className="hover:text-[#8E4D1B] transition-colors">
                  Vùng nguyên liệu
                </a>
              </li>
              <li>
                <a
                  href="#cam-rung-tay-giang"
                  className="font-semibold text-[#8E4D1B] hover:underline flex items-center gap-1"
                >
                  <span>•</span> Cam rừng Tây Giang
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#8E4D1B] transition-colors">
                  Sản phẩm tinh dầu
                </a>
              </li>
              <li>
                <a href="#quy-trinh" className="hover:text-[#8E4D1B] transition-colors">
                  Quy trình chiết xuất
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="hover:text-[#8E4D1B] transition-colors">
                  Tin tức & Kiến thức
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CHÍNH SÁCH (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#8E4D1B]">CHÍNH SÁCH</h4>
            <ul className="space-y-2 text-xs text-[#5E5144]">
              <li>
                <a href="#quy-trinh" className="hover:text-[#8E4D1B] transition-colors">
                  Tiêu chuẩn kiểm nghiệm COA
                </a>
              </li>
              <li>
                <span className="cursor-pointer hover:text-[#8E4D1B] transition-colors">
                  Giao hàng toàn quốc
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-[#8E4D1B] transition-colors">
                  Đổi trả & hoàn tiền 15 ngày
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-[#8E4D1B] transition-colors">
                  Hướng dẫn bảo quản tinh dầu
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-[#8E4D1B] transition-colors">
                  Chính sách bảo mật
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: ĐƠN VỊ SỞ HỮU & PHÂN PHỐI (Span 4) */}
          <div className="lg:col-span-4 space-y-4 text-xs text-[#5E5144]">
            <h4 className="font-bold tracking-wider uppercase text-[#8E4D1B]">
              ĐƠN VỊ SỞ HỮU & PHÂN PHỐI
            </h4>

            {/* Owner */}
            <div className="space-y-1">
              <span className="font-semibold text-[#241A13] flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#8E4D1B]" />
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.ownerTitle}
                  onChange={(val) => onUpdateFooter('ownerTitle', val)}
                  as="span"
                />
              </span>
              <p className="leading-snug">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.ownerName}
                  onChange={(val) => onUpdateFooter('ownerName', val)}
                  as="span"
                />
              </p>
              <p className="text-[11px] text-[#7A6E63]">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.ownerAddress}
                  onChange={(val) => onUpdateFooter('ownerAddress', val)}
                  as="span"
                />
              </p>
            </div>

            {/* Factory */}
            <div className="space-y-1 pt-1">
              <span className="font-semibold text-[#241A13] block">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.factoryTitle}
                  onChange={(val) => onUpdateFooter('factoryTitle', val)}
                  as="span"
                />
              </span>
              <p className="leading-snug">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.factoryName}
                  onChange={(val) => onUpdateFooter('factoryName', val)}
                  as="span"
                />
              </p>
              <p className="text-[11px] text-[#7A6E63]">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.factoryAddress}
                  onChange={(val) => onUpdateFooter('factoryAddress', val)}
                  as="span"
                />
              </p>
            </div>

            {/* Exclusive Distributor */}
            <div className="space-y-1 pt-1">
              <span className="font-semibold text-[#241A13] block">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.distributorTitle}
                  onChange={(val) => onUpdateFooter('distributorTitle', val)}
                  as="span"
                />
              </span>
              <p className="leading-snug font-medium text-[#241A13]">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.distributorName}
                  onChange={(val) => onUpdateFooter('distributorName', val)}
                  as="span"
                />
              </p>
              <p className="text-[11px] text-[#7A6E63]">
                <EditableText
                  isAdmin={isAdmin}
                  value={footer.distributorAddress}
                  onChange={(val) => onUpdateFooter('distributorAddress', val)}
                  as="span"
                />
              </p>
            </div>

            {/* Hotline & Website */}
            <div className="pt-2 border-t border-[#E8DEC\-C] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#8E4D1B]">
                <Phone className="w-3.5 h-3.5" />
                <span>
                  Hotline tư vấn & đặt hàng:{' '}
                  <EditableText
                    isAdmin={isAdmin}
                    value={footer.hotline}
                    onChange={(val) => onUpdateFooter('hotline', val)}
                    as="span"
                  />
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#7A6E63]">
                <span>Website chính thức:</span>
                <a
                  href="https://vsalab.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#8E4D1B] hover:underline flex items-center gap-0.5"
                >
                  <span>{footer.website}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with hidden Admin Lock matching Image 10 */}
        <div className="mt-14 pt-6 border-t border-[#E5DACD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6E63]">
          <div>
            <span>{footer.copyright}</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="font-serif italic text-[#8E4D1B] hidden md:inline">
              {footer.originSlogan}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Hidden / Small Admin Lock Button required by Prompt */}
            <button
              type="button"
              onClick={onOpenLoginModal}
              className="flex items-center gap-1.5 hover:text-[#8E4D1B] transition-colors py-1 px-2 rounded hover:bg-stone-200/50"
              title="Đăng nhập quản trị nội dung"
            >
              <Lock className="w-3.5 h-3.5 text-[#8E4D1B]" />
              <span className="text-[11px]">Đăng nhập Quản trị viên</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#8E4D1B] transition-colors py-1 px-2 rounded hover:bg-stone-200/50"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
