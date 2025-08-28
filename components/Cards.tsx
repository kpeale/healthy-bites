import React from 'react';
import Image from 'next/image';

const Cards = () => {
  return (
    <div className='grid  grid-cols-1 mt-3 xl:mt-5 pt-5 xl:pt-[5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-auto place-items-center gap-6 bg-[#F5EBE1]'>
      {/* first card */}
      <div className='bg-white w-[193px] h-[208px] rounded-tl-[96.5px] rounded-tr-[96.5px] rounded-br-[8px] rounded-bl-[8px] flex flex-col items-center justify-center gap-2'>
        <div>
          <Image
            width={70}
            height={70}
            alt='recipes'
            src='/cardImages/recipeIcon.png'
          />
        </div>

        <div className='max-w-[143px]'>
          <p className='text-[#003223] font-normal text-lg text-center leading-8 font-opensans '>
            Variety of recipes 1000+
          </p>
        </div>
      </div>
      {/* second card */}
      <div className='bg-white w-[193px]  h-[208px] rounded-tl-[96.5px] rounded-tr-[96.5px] rounded-br-[8px] rounded-bl-[8px] flex flex-col items-center justify-center gap-2'>
        <div>
          <Image
            width={70}
            height={70}
            alt='recipes'
            src='/cardImages/easyIcon.png'
          />
        </div>

        <div className='max-w-[143px]'>
          <p className='text-[#003223] font-normal text-lg text-center leading-8 font-opensans '>
            Easy to do
          </p>
        </div>
      </div>
      {/* third card */}
      <div className='bg-white w-[193px]  h-[208px] rounded-tl-[96.5px] rounded-tr-[96.5px] rounded-br-[8px] rounded-bl-[8px] flex flex-col items-center justify-center gap-2'>
        <div>
          <Image
            width={70}
            height={70}
            alt='recipes'
            src='/cardImages/communityIcon.png'
          />
        </div>

        <div className='max-w-[143px]'>
          <p className='text-[#003223] font-normal text-lg text-center leading-8 font-opensans '>
            Community
          </p>
        </div>
      </div>
      {/* fourth card */}
      <div className='bg-white w-[193px]  h-[208px] rounded-tl-[96.5px] rounded-tr-[96.5px] rounded-br-[8px] rounded-bl-[8px] flex flex-col items-center justify-center gap-2'>
        <div>
          <Image
            width={70}
            height={70}
            alt='recipes'
            src='/cardImages/filterIcon.png'
          />
        </div>

        <div className='max-w-[143px]'>
          <p className='text-[#003223] font-normal text-lg text-center leading-8 font-opensans '>
            Smart Filter
          </p>
        </div>
      </div>
      {/* fifth card */}
      <div className='bg-white w-[193px]  h-[208px] rounded-tl-[96.5px] rounded-tr-[96.5px] rounded-br-[8px] rounded-bl-[8px] flex flex-col items-center justify-center gap-2'>
        <div>
          <Image
            width={70}
            height={70}
            alt='recipes'
            src='/cardImages/nutritionIcon.png'
          />
        </div>

        <div className='max-w-[143px]'>
          <p className='text-[#003223] font-normal text-lg text-center leading-8 font-opensans '>
            Nutritional Information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards; 
