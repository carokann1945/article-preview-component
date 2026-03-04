import drawers from '@/assets/images/drawers.jpg';
import michelle from '@/assets/images/avatar-michelle.jpg';
import SvgIconShare from './components/svgs/Share';
import facebook from '@/assets/images/icon-facebook.svg';
import twitter from '@/assets/images/icon-twitter.svg';
import pinterest from '@/assets/images/icon-pinterest.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function App() {
  const [toggleActive, setToggleActive] = useState<boolean>(false);
  const toggleShare = () => {
    setToggleActive((prev) => !prev);
    console.log('toggle');
  };

  return (
    <main>
      <article
        className={cn(
          'relative flex flex-col md:flex-row gap-[32px] xl:gap-[40px] items-center',
          'w-[327px] md:w-[608px] xl:w-[730px] h-[538px] md:h-[346px] xl:h-[280px] rounded-[10px]',
          'bg-white shadow-lg',
        )}>
        {/* image */}
        <div
          className={cn(
            'w-[327px] md:w-[229px] xl:w-[285px] h-[200px] md:h-[346px] xl:h-[280px] overflow-hidden',
            'rounded-t-[10px] md:rounded-none md:rounded-l-[10px]',
          )}>
          <img src={drawers} alt="drawers" className="w-full h-full object-cover" />
        </div>
        {/* content */}
        <section className="flex flex-col gap-[48px] md:gap-[24px] md:w-[311px] xl:w-[365px]">
          {/* text block */}
          <div className="w-[267px] md:w-[311px] xl:w-[365px] flex flex-col gap-[24px] items-center">
            <h1 className="text-preset-1 text-grey-900">
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>
            <p className="text-preset-2-medium text-grey-500">
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
              I’ve got some simple tips to help you make any room feel complete.
            </p>
          </div>
          {/* profile */}
          <div
            className={cn(
              'flex gap-[64px] md:gap-[104px] xl:gap-[160px]',
              'w-[267px] md:w-full',
              'transition-opacity duration-150',
              toggleActive ? 'opacity-0' : 'opacity-100',
              'md:opacity-100',
            )}>
            <div className="flex gap-[16px] items-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img src={michelle} alt="michelle" />
              </div>
              <div className="w-[114px] flex flex-col">
                <p className="text-preset-2-bold text-grey-900">Michelle Appleton</p>
                <p className="text-preset-2-medium text-grey-400">28 Jun 2020</p>
              </div>
            </div>
            <div className="relative flex items-center">
              {/* md toast */}
              <div
                className={cn(
                  'hidden md:flex absolute -top-[80px] left-1/2 -translate-x-1/2',
                  'w-[248px] h-[55px] px-[36px]',
                  'justify-between items-center',
                  'bg-grey-900 rounded-[10px] shadow-lg',
                  'transition-all duration-150',
                  toggleActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
                )}>
                <p className="text-preset-3 text-grey-400">SHARE</p>
                <div className="flex gap-[16px]">
                  <img src={facebook} alt="facebook" className="cursor-pointer hover:opacity-80 transition-opacity" />
                  <img src={twitter} alt="twitter" className="cursor-pointer hover:opacity-80 transition-opacity" />
                  <img src={pinterest} alt="pinterest" className="cursor-pointer hover:opacity-80 transition-opacity" />
                </div>
                {/* 툴팁 꼬리(말풍선 아래쪽 삼각형) */}
                <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-grey-900" />
              </div>
              {/* share button */}
              {toggleActive ? (
                <div
                  className={cn(
                    'flex justify-center items-center',
                    'cursor-pointer w-[32px] h-[32px] rounded-full overflow-hidden',
                    'bg-grey-500 text-white',
                  )}
                  onClick={toggleShare}>
                  <SvgIconShare />
                </div>
              ) : (
                <div
                  className={cn(
                    'cursor-pointer w-[32px] h-[32px] rounded-full overflow-hidden',
                    'flex justify-center items-center',
                    'bg-grey-200 text-grey-500',
                  )}
                  onClick={toggleShare}>
                  <SvgIconShare />
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Toast */}
        <div
          className={cn(
            'md:hidden absolute bottom-0 left-0 flex justify-center items-center',
            'w-[327px] h-[76px]',
            'bg-grey-900 rounded-b-[10px] md:hidden',
            'transition-opacity duration-150',
            toggleActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}>
          <div className="w-[267px] flex gap-[64px] items-center">
            <div className="w-[171px] h-[20px] flex gap-[24px]">
              <p className="text-preset-3 text-grey-400">SHARE</p>
              <div className="flex gap-[16px]">
                <img src={facebook} alt="facebook" className="cursor-pointer hover:opacity-80 transition-opacity" />
                <img src={twitter} alt="twitter" className="cursor-pointer hover:opacity-80 transition-opacity" />
                <img src={pinterest} alt="pinterest" className="cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>
            <div
              className={cn(
                'flex justify-center items-center',
                'cursor-pointer w-[32px] h-[32px] rounded-full overflow-hidden',
                'bg-grey-500 text-white',
              )}
              onClick={toggleShare}>
              <SvgIconShare />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
