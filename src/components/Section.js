import React from 'react';
import ImageGrid from './ImageGrid';

function Section({ id, title, titleColor = 'text-text-main', models = [], pt = '' }) {
  return (
    <div id={id} className={`box-border content-stretch flex flex-col gap-[16px] items-start ${pt} pb-0 px-0 relative shrink-0 w-full`}>
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[80px] py-0 relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
          <p className={`font-form leading-[44px] not-italic relative shrink-0 text-[32px] ${titleColor} text-nowrap whitespace-pre`}>
            {title}
          </p>
        </div>
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
          {models.map((model, index) => (
            <button key={index} type="button" className="border border-[#29292a] border-solid box-border content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[30px] shrink-0">
              <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-text-main text-nowrap">
                <p className="leading-[20px] whitespace-pre">{model}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <ImageGrid />
    </div>
  );
}

export default Section;

