import React, { useState, useEffect } from 'react';

const tabs = [
  { id: 'text-to-image', label: 'Text-To-Image' },
  { id: 'text-to-video', label: 'Text-To-Video' },
  { id: 'image-to-image', label: 'Image-To-Image' },
  { id: 'image-to-video', label: 'Image-To-Video' },
  { id: 'trendy', label: 'Trendy' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'new', label: 'New' }
];

function TabNavigation() {
  const [activeTab, setActiveTab] = useState('text-to-image');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 150; // Offset для навигации
      let activeSectionId = tabs[0].id;

      tabs.forEach(tab => {
        const element = document.getElementById(tab.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Если секция уже прошла верхнюю часть экрана (с учетом offset)
          if (rect.top <= scrollOffset) {
            activeSectionId = tab.id;
          }
        }
      });

      setActiveTab(activeSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверяем при загрузке

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-[80px] py-0 relative shrink-0 w-full">
      <div className="basis-0 border-b border-[#29292a] box-border content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`${
                  isActive
                    ? 'border-b-2 border-accent h-[36px] relative shrink-0 cursor-pointer'
                    : 'h-[36px] relative shrink-0 cursor-pointer'
                }`}
              >
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip pb-[11px] pt-[4px] px-0 relative rounded-[inherit]">
                  <div className={`flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
                    isActive ? 'text-accent' : 'text-text-placeholder'
                  }`}>
                    <p className="leading-[20px] whitespace-pre">{tab.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TabNavigation;

