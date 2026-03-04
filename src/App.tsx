import drawers from '@/assets/images/drawers.jpg';
import michelle from '@/assets/images/avatar-michelle.jpg';
import SvgIconShare from './components/svgs/Share';
import facebook from '@/assets/images/icon-facebook.svg';
import twitter from '@/assets/images/icon-twitter.svg';
import pinterest from '@/assets/images/icon-pinterest.svg';
import { useState } from 'react';

function App() {
  const [toggleActive, setToggleActive] = useState<boolean>(false);
  const toggleShare = () => {
    setToggleActive((prev) => !prev);
    console.log('toggle');
  };

  return (
    <main>
      <article className="w-[327px] min-h-[538px] flex flex-col gap-[32px] items-center rounded-[10px] bg-white shadow-md overflow-hidden relative">
        {/* image */}
        <div className="w-[327px] h-[200px] overflow-hidden">
          <img src={drawers} alt="drawers" />
        </div>
        {/* content */}
        <section className="flex flex-col gap-[48px]">
          {/* text block */}
          <div className="w-[267px] flex flex-col gap-[24px] items-center">
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
            className={`w-[267px] flex gap-[64px] transition-opacity duration-150 ${toggleActive ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex gap-[16px] items-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img src={michelle} alt="michelle" />
              </div>
              <div className="w-[114px] flex flex-col">
                <p className="text-preset-2-bold text-grey-900">Michelle Appleton</p>
                <p className="text-preset-2-medium text-grey-400">28 Jun 2020</p>
              </div>
            </div>
            <div
              className="cursor-pointer w-[32px] h-[32px] bg-grey-200 rounded-full overflow-hidden flex justify-center items-center text-grey-500"
              onClick={() => toggleShare()}>
              <SvgIconShare />
            </div>
          </div>
        </section>
        {/* Toast */}
        <div
          className={`w-[327px] h-[76px] flex justify-center items-center bg-grey-900 rounded-b-[10px] absolute bottom-0 left-0 transition-opacity duration-150 ${toggleActive ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-[267px] flex gap-[64px] items-center">
            <div className="w-[171px] h-[20px] flex gap-[24px]">
              <p className="text-preset-3 text-grey-400">SHARE</p>
              <div className="flex gap-[16px]">
                <img src={facebook} alt="facebook" className="cursor-pointer" />
                <img src={twitter} alt="twitter" className="cursor-pointer" />
                <img src={pinterest} alt="pinterest" className="cursor-pointer" />
              </div>
            </div>
            <div
              className="cursor-pointer w-[32px] h-[32px] bg-grey-500 rounded-full overflow-hidden flex justify-center items-center text-white"
              onClick={() => toggleShare()}>
              <SvgIconShare />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
