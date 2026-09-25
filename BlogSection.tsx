import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, X } from 'lucide-react';
import { BlogPost } from '../types';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';

interface BlogSectionProps {
  isAdmin: boolean;
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  recentNotice: string;
  posts: BlogPost[];
  onUpdateBadge: (val: string) => void;
  onUpdateTitleMain: (val: string) => void;
  onUpdateTitleHighlight: (val: string) => void;
  onUpdateDescription: (val: string) => void;
  onUpdateRecentNotice: (val: string) => void;
  onUpdatePost: (index: number, field: keyof BlogPost, val: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  isAdmin,
  badge,
  titleMain,
  titleHighlight,
  description,
  recentNotice,
  posts,
  onUpdateBadge,
  onUpdateTitleMain,
  onUpdateTitleHighlight,
  onUpdateDescription,
  onUpdateRecentNotice,
  onUpdatePost,
}) => {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  return (
    <section id="tin-tuc" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9C511B]">
              <BookOpen className="w-3.5 h-3.5" />
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
                value={titleMain}
                onChange={onUpdateTitleMain}
                as="span"
              />
              <span className="italic text-[#9C511B]">
                <EditableText
                  isAdmin={isAdmin}
                  value={titleHighlight}
                  onChange={onUpdateTitleHighlight}
                  as="span"
                />
              </span>
            </h2>

            <p className="text-[#594E44] text-sm sm:text-base leading-relaxed font-light">
              <EditableText
                isAdmin={isAdmin}
                value={description}
                onChange={onUpdateDescription}
                as="span"
                multiline
              />
            </p>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#8E4D1B] bg-[#EAE0D3] px-3 py-1 rounded-full">
              <EditableText
                isAdmin={isAdmin}
                value={recentNotice}
                onChange={onUpdateRecentNotice}
                as="span"
              />
            </span>
          </div>
        </div>

        {/* 3 Articles Grid matching Image 9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              onClick={() => setReadingPost(post)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E3D9CC] transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <EditableImage
                  isAdmin={isAdmin}
                  src={post.image}
                  alt={post.title}
                  onUpdateImage={(val) => onUpdatePost(idx, 'image', val)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  <EditableText
                    isAdmin={isAdmin}
                    value={post.tag}
                    onChange={(val) => onUpdatePost(idx, 'tag', val)}
                    as="span"
                  />
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#8A7C6E]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#8E4D1B]" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8E4D1B]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#231A13] group-hover:text-[#8E4D1B] transition-colors leading-snug line-clamp-2">
                    <EditableText
                      isAdmin={isAdmin}
                      value={post.title}
                      onChange={(val) => onUpdatePost(idx, 'title', val)}
                      as="span"
                    />
                  </h3>

                  <p className="text-xs text-[#635548] leading-relaxed line-clamp-3 font-light">
                    <EditableText
                      isAdmin={isAdmin}
                      value={post.excerpt}
                      onChange={(val) => onUpdatePost(idx, 'excerpt', val)}
                      as="span"
                      multiline
                    />
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE8DF] flex items-center gap-2 text-xs font-semibold text-[#8E4D1B] group-hover:text-[#A3591A]">
                  <span>Đọc bài viết đầy đủ</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {readingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setReadingPost(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DDD3C4] text-[#2C241E]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80">
              <img
                src={readingPost.image}
                alt={readingPost.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#8E4D1B] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  {readingPost.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mt-2 drop-shadow leading-snug">
                  {readingPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center gap-4 text-xs text-[#8A7C6E] pb-4 border-b border-[#E5DCCF]">
                <span>Ngày xuất bản: {readingPost.date}</span>
                <span>•</span>
                <span>Thời gian đọc: {readingPost.readTime}</span>
                <span>•</span>
                <span className="text-[#8E4D1B] font-medium">Ban Biên tập VSA LAB</span>
              </div>

              <div className="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed text-[#4A3F35] space-y-4 whitespace-pre-line font-light">
                {readingPost.content}
              </div>

              <div className="pt-6 border-t border-[#E5DCCF] flex items-center justify-between">
                <span className="text-xs text-[#8A7C6E] italic">
                  Vườn Tinh Dầu • Bảo tồn nguồn gen dược liệu bản địa Việt Nam
                </span>
                <button
                  type="button"
                  onClick={() => setReadingPost(null)}
                  className="px-5 py-2 rounded-full bg-[#8E4D1B] text-white text-xs font-medium hover:bg-[#A3591A] transition-colors"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
