import React from 'react';

// Генерируем карточки с разными высотами для masonry layout
const generateCards = () => {
  const heights = [
    [200, 340, 180, 160],
    [160, 180, 340],
    [340, 160, 200, 120],
    [180, 340, 160],
    [160, 200, 120, 280]
  ];
  
  return heights.map((columnHeights, colIndex) => (
    <div key={colIndex} className="content-stretch flex flex-col gap-[6px] items-start relative flex-1">
      {columnHeights.map((height, cardIndex) => (
        <div
          key={cardIndex}
          className="bg-[#d9d9d9] opacity-10 rounded-[8px] shrink-0 w-full transition-all duration-300 hover:opacity-20 hover:bg-[#999999] cursor-pointer"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  ));
};

// Мобильная версия с 2 колонками
const generateMobileCards = () => {
  const heights = [
    [124, 256, 124, 256], // Левая колонка
    [124, 124, 124, 124, 256] // Правая колонка
  ];
  
  return heights.map((columnHeights, colIndex) => (
    <div key={colIndex} className="content-stretch flex flex-col gap-[6px] items-start relative flex-1">
      {columnHeights.map((height, cardIndex) => (
        <div
          key={cardIndex}
          className="bg-[#d9d9d9] opacity-[0.21] rounded-[8px] shrink-0 w-full transition-all duration-300 hover:opacity-30 hover:bg-[#999999] cursor-pointer"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  ));
};

function ImageGrid() {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:flex box-border content-stretch gap-[8px] h-[720px] items-start justify-between overflow-clip px-[80px] py-0 relative shrink-0 w-full">
        {generateCards()}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e]"></div>
      </div>
      
      {/* Mobile version */}
      <div className="md:hidden box-border content-stretch flex gap-[6px] h-[516px] items-start overflow-clip px-[16px] py-0 relative shrink-0 w-full">
        {generateMobileCards()}
        <div className="absolute bottom-0 left-0 right-0 h-[384px] pointer-events-none bg-gradient-to-b from-transparent to-[#0e0e0e]"></div>
      </div>
    </>
  );
}

export default ImageGrid;

