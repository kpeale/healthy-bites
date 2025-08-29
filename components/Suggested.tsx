import React from 'react';
import Image from 'next/image';

const Suggested = () => {
  return (
    <div className=' pt-10 lg:pt-20'>
      <h3 className='text-[#003223] font-semibold text-[20px] lg:text-[40px] leading-[100%] text-center font-quicksand'>
        Suggested for you
      </h3>
      <div className='pt-10 lg:pt-20 flex flex-col lg:flex-row justify-center items-center 2xl:justify-evenly gap-6 '>
        <div className=' w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px] bg-white flex flex-col'>
          <p className='text-[#003223] max-w-[300px] sm:max-w-[370px] font-semibold text-lg lg:text-2xl leading-4 sm:leading-6 p-[13px]'>
            Pumpkin Oatmeal with Almond Milk
          </p>
          <div>
            <Image
              src='/suggestImages/pumpkinMeal.png'
              width={402}
              height={390}
              alt='pumpkin meal'
              className='w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px]'
            />
          </div>
        </div>

        <div className=' w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px] bg-white flex flex-col'>
          <p className='text-[#003223] max-w-[300px] sm:max-w-[370px] font-semibold text-lg lg:text-2xl leading-4 sm:leading-6 p-[13px]'>
            Avocado Toast with Poached Egg
          </p>
          <div>
            <Image
              src='/suggestImages/avocadoMeal.png'
              width={402}
              height={390}
              alt='pumpkin meal'
              className='w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px]'
            />
          </div>
        </div>

        <div className=' w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px] bg-white flex flex-col'>
          <p className='text-[#003223] max-w-[300px] sm:max-w-[370px] font-semibold text-lg lg:text-2xl leading-4 sm:leading-6 p-[13px]'>
            Mediterranean Chickpea Bowl
          </p>
          <div>
            <Image
              src='/suggestImages/chickenpeaMeal.png'
              width={402}
              height={390}
              alt='pumpkin meal'
              className='w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px]'
            />
          </div>
        </div>
      </div>

      <div className='pt-10 lg:pt-20 flex flex-col lg:flex-row justify-center items-center 2xl:justify-evenly gap-6 mt-2'>
        <div className=' w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px] bg-white flex flex-col'>
          <p className='text-[#003223] max-w-[300px] sm:max-w-[370px] font-semibold text-lg lg:text-2xl leading-4 sm:leading-6 p-[13px]'>
            Sweet Potato & Black Bean Tacos
          </p>
          <div>
            <Image
              src='/suggestImages/sweetPotato.png'
              width={402}
              height={390}
              alt='pumpkin meal'
              className='w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px]'
            />
          </div>
        </div>

        <div className=' w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px] bg-white flex flex-col'>
          <p className='text-[#003223] max-w-[300px] sm:max-w-[370px] font-semibold text-lg lg:text-2xl leading-4 sm:leading-6 p-[13px]'>
            Energy Balls with Dates & Almonds
          </p>
          <div>
            <Image
              src='/suggestImages/dateBalls.png'
              width={402}
              height={390}
              alt='pumpkin meal'
              className='w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px]'
            />
          </div>
        </div>

        <div className=' w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px] bg-white flex flex-col'>
          <p className='text-[#003223] max-w-[300px] sm:max-w-[370px] font-semibold text-lg lg:text-2xl leading-4 sm:leading-6 p-[13px]'>
            Stuffed Bell Peppers with Quinoa & Black Beans
          </p>
          <div>
            <Image
              src='/suggestImages/bellPepper.png'
              width={402}
              height={390}
              alt='pumpkin meal'
              className='w-[302px] sm:w-[402px] lg:w-[302px] xl:w-[402px]'
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <button className='bg-[#FF6400] rounded-full mt-6 lg:mt-12 px-[20px] py-[8px] text-white font-semibold text-lg font-opensans leading-[100%] '>
          See all recipes
        </button>
      </div>
    </div>
  );
};

export default Suggested;
