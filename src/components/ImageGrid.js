import React from 'react';

// Генерируем карточки с разными высотами для masonry layout
const generateCards = () => {
  const heights = [
    [174, 360, 174],
    [174, 174, 360],
    [174, 360, 111, 174],
    [174, 360, 174],
    [360, 174, 111, 174],
    [174, 111, 111, 279, 111]
  ];
  
  return heights.map((columnHeights, colIndex) => (
    <div key={colIndex} className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[255px]">
      {columnHeights.map((height, cardIndex) => (
        <div
          key={cardIndex}
          className="bg-[#d9d9d9] opacity-10 rounded-[8px] shrink-0 w-full"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  ));
};

function ImageGrid() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[720px] items-start overflow-clip px-[80px] py-0 relative shrink-0">
      {generateCards()}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e]"></div>
    </div>
  );
}

export default ImageGrid;

