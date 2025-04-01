
import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(-100px)` }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(-150px)` }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(-80px)` }}></div>
    </div>
  );
};

export default BackgroundElements;
