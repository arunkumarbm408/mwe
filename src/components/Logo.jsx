import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "h-16 md:h-20", dark = false }) => {
  return (
    <div className="flex items-center select-none">
      {/* Clean 3D Logo rendering without text, scaled up */}
      <img
        src={logoImg}
        alt="MAAWORLD EXIM"
        className={`${className} object-contain transition-all duration-300`}
        style={{ maxHeight: '80px' }}
      />
    </div>
  );
};

export default Logo;
