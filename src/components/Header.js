import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[16px] md:px-[80px] py-[12px] relative shrink-0 w-full">
          {/* Mobile: Hamburger menu */}
          <div className="md:hidden flex items-center z-10">
            <button 
              className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              <div className="w-4 h-[2px] bg-text-main pointer-events-none"></div>
              <div className="w-4 h-[2px] bg-text-main pointer-events-none"></div>
              <div className="w-4 h-[2px] bg-text-main pointer-events-none"></div>
            </button>
          </div>

          {/* Desktop: Logo + Navigation */}
          <div className="hidden md:flex content-stretch gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[8.23px] items-center justify-center relative shrink-0">
              <div className="h-[18px] relative shrink-0 w-[64.118px]">
                <img alt="BASE" className="block max-w-none size-full" src="/Logo.svg" />
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0">
                <p className="font-inter font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-text-main text-nowrap whitespace-pre">
                  Browse
                </p>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0">
                <p className="font-inter font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-text-placeholder text-nowrap whitespace-pre">
                  Image
                </p>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0">
                <p className="font-inter font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-text-placeholder text-nowrap whitespace-pre">
                  Video
                </p>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0">
                <p className="font-inter font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-text-placeholder text-nowrap whitespace-pre">
                  Text
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Logo (centered) */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <div className="h-[18px] relative shrink-0 w-[64.118px]">
              <img alt="BASE" className="block max-w-none size-full" src="/Logo.svg" />
            </div>
          </div>

          {/* Avatar (both mobile and desktop) */}
          <div className="content-stretch flex gap-[6.667px] items-center relative rounded-[83.333px] shrink-0">
            <div className="content-stretch flex gap-[6.667px] items-center relative rounded-[83.333px] shrink-0">
              <div className="relative shrink-0 size-[32px] md:size-[40px] bg-[#6f7070] rounded-full">
                {/* Avatar placeholder */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Sidebar menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Sidebar */}
          <div className="md:hidden fixed top-0 left-0 h-full w-[280px] bg-[#1a1a1a] z-50 flex flex-col pt-[80px] px-[24px]">
            <button 
              className="absolute top-[20px] right-[20px] text-text-main text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <button className="font-inter font-medium text-[16px] text-text-main text-left py-[16px]">
              Browse
            </button>
            <button className="font-inter font-medium text-[16px] text-text-placeholder text-left py-[16px]">
              Image
            </button>
            <button className="font-inter font-medium text-[16px] text-text-placeholder text-left py-[16px]">
              Video
            </button>
            <button className="font-inter font-medium text-[16px] text-text-placeholder text-left py-[16px]">
              Text
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Header;

