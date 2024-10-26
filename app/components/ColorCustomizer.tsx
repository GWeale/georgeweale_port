import React, { useState } from 'react';
import { useTheme } from 'next-themes';

export const ColorCustomizer = () => {
  const { theme } = useTheme();
  const [primaryColor, setPrimaryColor] = useState('#47a3f3');

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={primaryColor}
        onChange={(e) => handleColorChange(e.target.value)}
        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
      />
      <span className="text-sm">Customize Theme</span>
    </div>
  );
};
