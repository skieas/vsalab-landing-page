import React from 'react';
import { ShieldCheck, Save, RotateCcw, LogOut, Check } from 'lucide-react';

interface AdminBarProps {
  onSave: () => void;
  onReset: () => void;
  onLogout: () => void;
  hasUnsavedChanges: boolean;
  saveSuccess: boolean;
}

export const AdminBar: React.FC<AdminBarProps> = ({
  onSave,
  onReset,
  onLogout,
  hasUnsavedChanges,
  saveSuccess,
}) => {
  return (
    <aside
      aria-label="Thanh quản trị viên"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#1F1914]/95 text-stone-100 border border-amber-500/50 shadow-2xl rounded-full px-5 py-2.5 flex items-center gap-4 backdrop-blur-md animate-fade-in text-xs"
    >
      <div className="flex items-center gap-2 pr-3 border-r border-stone-700">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div className="flex items-center gap-1.5 font-medium text-amber-300">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-semibold tracking-wide">Chế độ Quản trị</span>
        </div>
        <span className="text-[10px] text-stone-400 hidden sm:inline">
          (Nhấp trực tiếp vào văn bản & ảnh để chỉnh sửa)
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onSave}
          className={`px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5 transition-all shadow-sm ${
            saveSuccess
              ? 'bg-emerald-600 text-white'
              : hasUnsavedChanges
              ? 'bg-amber-600 hover:bg-amber-500 text-white ring-2 ring-amber-400/50'
              : 'bg-stone-700 hover:bg-stone-600 text-stone-200'
          }`}
        >
          {saveSuccess ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
          <span>{saveSuccess ? 'Đã lưu!' : 'Lưu thay đổi'}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="px-3 py-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors flex items-center gap-1.5"
          title="Khôi phục nội dung mặc định"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
          <span className="hidden md:inline">Mặc định</span>
        </button>

        <button
          type="button"
          onClick={onLogout}
          className="px-3 py-1.5 rounded-full bg-red-950/70 hover:bg-red-900 text-red-200 border border-red-800/40 transition-colors flex items-center gap-1.5"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Thoát</span>
        </button>
      </div>
    </aside>
  );
};
