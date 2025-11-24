import React from 'react';

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="box-border content-stretch flex h-[64px] items-center justify-between overflow-clip px-[80px] py-[12px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
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
        <div className="content-stretch flex gap-[6.667px] items-center relative rounded-[83.333px] shrink-0">
          <div className="content-stretch flex gap-[6.667px] items-center relative rounded-[83.333px] shrink-0">
            <div className="relative shrink-0 size-[40px] bg-[#6f7070] rounded-full">
              {/* Avatar placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

