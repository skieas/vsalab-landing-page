import React, { useState, useEffect } from 'react';

interface EditableTextProps {
  isAdmin: boolean;
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  isAdmin,
  value,
  onChange,
  className = '',
  as = 'span',
  multiline = false,
}) => {
  const [currentVal, setCurrentVal] = useState(value);

  useEffect(() => {
    setCurrentVal(value);
  }, [value]);

  if (!isAdmin) {
    const Tag = as;
    return <Tag className={className}>{value}</Tag>;
  }

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText.trim();
    if (text !== value) {
      setCurrentVal(text);
      onChange(text);
    }
  };

  const Tag = as;

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      title="Nhấp để chỉnh sửa nội dung (Admin)"
      className={`${className} outline-none cursor-text transition-all duration-150 rounded px-1 -mx-1 hover:bg-amber-500/10 focus:bg-amber-500/15 focus:ring-1 focus:ring-amber-600/50 border border-dashed border-amber-600/40 relative group`}
    >
      {currentVal}
    </Tag>
  );
};
