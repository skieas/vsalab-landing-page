import React, { useState } from 'react';
import { Camera, RefreshCw, Image as ImageIcon } from 'lucide-react';

interface EditableImageProps {
  isAdmin: boolean;
  src: string;
  alt: string;
  onUpdateImage: (newUrl: string) => void;
  className?: string;
  aspectRatioClass?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  isAdmin,
  src,
  alt,
  onUpdateImage,
  className = '',
  aspectRatioClass = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [urlInput, setUrlInput] = useState(src);

  const handleSave = () => {
    if (urlInput.trim()) {
      onUpdateImage(urlInput.trim());
      setHasError(false);
      setIsOpenEdit(false);
    }
  };

  return (
    <div className={`relative group ${aspectRatioClass} overflow-hidden`}>
      {hasError ? (
        <div className={`w-full h-full flex flex-col items-center justify-center bg-stone-800 text-stone-300 p-6 text-center ${className}`}>
          <ImageIcon className="w-12 h-12 text-amber-500 mb-2 opacity-80" />
          <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">{alt}</span>
          <span className="text-[11px] text-stone-400 mt-1">Vườn Tinh Dầu • VSA LAB</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
          className={`${className} transition-transform duration-700 group-hover:scale-105`}
        />
      )}

      {isAdmin && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setUrlInput(src);
              setIsOpenEdit(true);
            }}
            className="absolute top-2 right-2 z-20 bg-stone-900/85 hover:bg-amber-700 text-white p-2 rounded-full shadow-lg backdrop-blur-md transition-all border border-amber-500/40 hover:scale-110 flex items-center gap-1.5 text-xs px-3"
            title="Đổi ảnh (Admin)"
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-sans font-medium text-[11px]">Đổi ảnh</span>
          </button>

          {isOpenEdit && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenEdit(false);
              }}
            >
              <div
                className="bg-[#241E19] border border-amber-600/40 text-[#F5EFEB] p-6 rounded-2xl max-w-md w-full shadow-2xl space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2 text-amber-400">
                  <Camera className="w-5 h-5" />
                  <h3 className="font-serif text-lg font-medium">Thay đổi liên kết hình ảnh</h3>
                </div>
                <p className="text-xs text-stone-300">
                  Dán đường dẫn ảnh (URL) mới để cập nhật cho mục: <span className="text-amber-200 font-semibold">{alt}</span>
                </p>
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-stone-900/80 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-3 py-2 text-xs text-white outline-none"
                />
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpenEdit(false)}
                    className="px-4 py-1.5 text-xs text-stone-400 hover:text-white transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-1.5 text-xs bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
