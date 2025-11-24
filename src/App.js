import React from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Section from './components/Section';

function App() {
  const defaultModels = ['Kling', 'Seedream', 'Minimax / Hailuo', 'Seedream', 'Kling', 'Minimax / Hailuo', 'Minimax / Hailuo', 'Seedream', 'Minimax / Hailuo'];
  
  return (
    <div className="bg-[#0e0e0e] min-h-screen">
      {/* Fixed header wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e] h-[100px]">
        <Header />
        <TabNavigation />
      </div>
      {/* Spacer for fixed header */}
      <div className="h-[100px]"></div>
      <div className="flex flex-col gap-8 items-start overflow-clip relative rounded-[8px] w-full pt-[32px] pb-[200px]">
        <Section 
          id="text-to-image"
          title="Text-To-Image" 
          titleColor="text-accent"
          models={defaultModels}
        />
        <Section 
          id="text-to-video"
          title="Text-To-Video" 
          titleColor="text-text-main"
          models={defaultModels}
          pt="pt-16"
        />
        <Section 
          id="image-to-image"
          title="Image-To-Image" 
          titleColor="text-text-main"
          models={defaultModels}
          pt="pt-16"
        />
        <Section 
          id="image-to-video"
          title="Image-To-Video" 
          titleColor="text-text-main"
          models={defaultModels}
          pt="pt-16"
        />
        <Section 
          id="trendy"
          title="Trendy" 
          titleColor="text-text-main"
          models={defaultModels}
          pt="pt-16"
        />
        <Section 
          id="commercial"
          title="Commercial" 
          titleColor="text-text-main"
          models={defaultModels}
          pt="pt-16"
        />
        <Section 
          id="new"
          title="New" 
          titleColor="text-text-main"
          models={defaultModels}
          pt="pt-16"
        />
      </div>
      <footer className="w-full px-[80px] py-[40px] border-t border-[#29292a]">
        <div className="flex items-center justify-center">
          <p className="text-text-placeholder text-[14px] font-inter">© 2024 BASE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

