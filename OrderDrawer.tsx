import React, { useState } from 'react';
import { X, Trash2, CheckCircle, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProductItem } from '../types';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const randomCode = 'VSA-' + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(randomCode);
    setOrderSuccess(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#FAF7F2] text-[#2C241E] w-full max-w-lg h-full shadow-2xl flex flex-col border-l border-[#DDD3C4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E3D9CC] flex items-center justify-between bg-[#F4EDE4]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8E4D1B]" />
            <h3 className="font-serif font-bold text-lg text-[#231A13]">
              Giỏ hàng & Đặt hàng trực tiếp
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-stone-300/60 transition-colors text-stone-600"
            aria-label="Đóng giỏ hàng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#231A13]">
                Đặt hàng thành công!
              </h4>
              <p className="text-sm text-[#615447] leading-relaxed max-w-sm mx-auto">
                Cảm ơn quý khách <span className="font-bold text-[#231A13]">{customerName}</span>.
                Mã đơn hàng của bạn là <span className="font-bold text-[#8E4D1B]">{orderCode}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-[#EFEAE2] border border-[#DDD3C4] text-xs text-left space-y-1.5 text-[#594E44]">
                <p>• Hotline chuyên viên sẽ gọi xác nhận trong 15 phút.</p>
                <p>• Cam kết kiểm định COA và tem chống giả VSA LAB nguyên vẹn.</p>
                <p>• Miễn phí giao hàng toàn quốc và đồng kiểm khi nhận hàng.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOrderSuccess(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#8E4D1B] hover:bg-[#A3591A] text-white text-xs font-semibold shadow-md transition-all"
              >
                Tiếp tục xem sản phẩm
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-stone-400 mx-auto stroke-1" />
              <p className="font-serif text-lg text-[#5C5045]">Giỏ hàng của bạn đang trống</p>
              <p className="text-xs text-stone-500">
                Hãy lựa chọn những giọt tinh dầu nguyên chất từ rừng Tây Giang!
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-5 py-2 rounded-full bg-[#8E4D1B] text-white text-xs font-medium"
              >
                Khám phá bộ sưu tập
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E4D1B]">
                  Sản phẩm đã chọn ({cart.length})
                </span>

                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-white rounded-2xl border border-[#E8DEC\-C] shadow-xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-serif font-bold text-xs sm:text-sm text-[#231A13]">
                            {item.product.name}
                          </h5>
                          <span className="text-[11px] text-[#7A6E63]">{item.product.volume}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          aria-label="Xóa"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-[#8E4D1B] tabular-nums">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <div className="flex items-center gap-2 bg-[#F6F1EA] rounded-lg px-2 py-0.5 border border-[#E3D8CB]">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                            }
                            className="text-[#8E4D1B] text-xs font-bold px-1"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="text-[#8E4D1B] text-xs font-bold px-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmitOrder} className="space-y-4 pt-4 border-t border-[#E3D9CC]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E4D1B] block">
                  Thông tin giao hàng tận nơi
                </span>

                <div>
                  <label className="block text-xs font-medium text-[#4A3E34] mb-1">
                    Họ và tên quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-white border border-[#D5C9B8] focus:border-[#8E4D1B] focus:ring-1 focus:ring-[#8E4D1B] rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A3E34] mb-1">
                    Số điện thoại nhận hàng *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full bg-white border border-[#D5C9B8] focus:border-[#8E4D1B] focus:ring-1 focus:ring-[#8E4D1B] rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A3E34] mb-1">
                    Địa chỉ nhận hàng chi tiết *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành..."
                    className="w-full bg-white border border-[#D5C9B8] focus:border-[#8E4D1B] focus:ring-1 focus:ring-[#8E4D1B] rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A3E34] mb-1">
                    Ghi chú đơn hàng (Tùy chọn)
                  </label>
                  <input
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="Giao giờ hành chính, bọc kỹ hộp quà..."
                    className="w-full bg-white border border-[#D5C9B8] focus:border-[#8E4D1B] rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs text-[#7A6E63] mb-1">
                    <span>Tạm tính:</span>
                    <span className="font-semibold text-[#241A13] tabular-nums">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#7A6E63] mb-2">
                    <span>Phí vận chuyển toàn quốc:</span>
                    <span className="text-emerald-700 font-medium">Miễn phí</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-[#231A13] pt-2 border-t border-[#E3D9CC]">
                    <span>Tổng thanh toán:</span>
                    <span className="text-xl font-serif text-[#8E4D1B] tabular-nums">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#8E4D1B] hover:bg-[#A3591A] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
                >
                  <span>Hoàn tất đặt hàng (Thanh toán khi nhận)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
