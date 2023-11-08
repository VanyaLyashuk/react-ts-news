import { useState } from 'react';

const Hamburger = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  return (
    <button 
      onClick={() => setIsNavOpened(!isNavOpened)}
      className="relative group">
      <div className="relative flex items-center justify-center overflow-hidden transition-all duration-200 transform ring-0">
        <div className="flex flex-col justify-between w-[32px] h-[24px] transform transition-all duration-300 origin-center overflow-hidden">
          <div 
            className={`bg-slate-900 h-[4px] w-8 transform transition-all duration-300 origin-left ${isNavOpened ? 'translate-y-8 delay-100' : ''}`}></div>
          <div className={`bg-slate-900 h-[4px] w-8 rounded transform transition-all duration-300 ${isNavOpened ? 'translate-y-8 delay-75' : ''}`}></div>
          <div className={`bg-slate-900 h-[4px] w-8 transform transition-all duration-300 origin-left ${isNavOpened ? 'translate-y-8' : ''}`}></div>

          <div className={`absolute items-center justify-between transform transition-all duration-500 top-[12px] -translate-x-10 flex w-0 ${isNavOpened ? 'translate-x-[2px] w-12' : ''}`}>
            <div className={`absolute bg-slate-900 h-[4px] w-8 transform transition-all duration-500 rotate-0 delay-300 ${isNavOpened ? 'rotate-45' : ''}`}></div>
            <div className={`absolute bg-slate-900 h-[4px] w-8 transform transition-all duration-500 -rotate-0 delay-300 ${isNavOpened ? '-rotate-45' : ''}`}></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
