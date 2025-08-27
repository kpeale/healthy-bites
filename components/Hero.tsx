import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section>
        <div className='relative flex flex-col xl:flex-row  2xl:justify-between overflow-hidden  bg-white z-10'>
          <div className='relative  px-0  xl:left-[7rem] 2xl:left-[10rem]  py-[5rem]  xl:py-0 xl:top-[11rem] 2xl:top-[15rem] flex flex-col items-center justify-center xl:items-start xl:justify-start'>
            <div className='flex flex-col xl:flex-row gap-4 justify-start xl:items-center mb-6 2xl:mb-8'>
              <Image
                src='/heroImages/heroheading1.png'
                width={400}
                height={62}
                alt='Healthy Bites logo'
                className='w-[302px] sm:w-[402px] 2xl:w-[850px]'
              />
              <Image
                src='/heroImages/headingImg.png'
                width={400}
                height={62}
                alt='Healthy Bites logo'
                className='w-[302px] sm:w-[402px] 2xl:w-[850px] xl:z-30'
              />
            </div>

            {/* Subtitle */}
            <h3 className='text-[#003223] text-center xl:text-start font-semibold text-[1.5rem] xl:text-[2.5rem] 2xl:text-[3rem] tracking-0  font-quicksand max-w-[350px] sm:max-w-[400px] xl:max-w-[524px] 2xl:max-w-max mb-6 leading-[100%] 2xl:mb-10'>
              Nourish Your Body, Delight Your Taste Buds.
            </h3>

            {/* Description */}
            <div className='mb-8 max-w-[350px] sm:max-w-[400px] xl:max-w-[524px] 2xl:max-w-[1050px] '>
              <p className='text-[#003223] font-normal  text-xl font-opensans leading-8 text-center xl:text-start 2xl:text-2xl'>
                Discover thousands of delicious, easy-to-make healthy recipes
                with detailed nutrition information. Your journey to a vibrant,
                healthier you starts here.
              </p>
            </div>

            {/* CTA Button */}
            <div className='xl:flex xl:flex-col'>
              <div>
                <Link
                  href='/recipes'
                  className='inline-block  rounded-full px-8 lg:px-18 py-3 2xl:py-6  border-2 border-[#FF6400] bg-white text-[#003223] text-base 2xl:text-lg font-opensans font-semibold hover:bg-[#FF6400] hover:text-white transition-colors duration-300 shadow-xl'
                >
                  Explore recipes
                </Link>
              </div>
              <div className='hidden xl:block  xl:mt-[-1rem]'>
                <Image
                  src='/heroImages/pepper.png'
                  width={124}
                  height={124}
                  alt='pepper'
                  className=' '
                />
              </div>
            </div>

            <div className='hidden xl:block  xl:bottom-0 xl:transform 2xl:translate-x-200  xl:translate-x-100  '>
              <Image
                src='/heroImages/cabbage.png'
                width={180}
                height={196}
                alt='cabbage'
                className=' object-cover '
              />
            </div>
          </div>

          <div className='flex flex-col relative'>
            <div className='hidden xl:block  z-10'>
              <Image
                src='/heroImages/green.png'
                width={1041}
                height={1079}
                alt='green background'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='hidden xl:block xl:absolute xl:z-20 xl:top-0 xl:right-0 '>
              <Image
                src='/heroImages/vegetableSalad.png'
                width={562}
                height={562}
                alt='vegetable salad'
                className='w-full h-full object-cover '
              />
            </div>
          </div>
        </div>

        <div className='hidden xl:block xl:absolute xl:top-[0rem] xl:left-0 xl:z-20 '>
          <Image
            src='/heroImages/lettuce.png'
            width={250.72}
            height={341.85}
            alt='lettuce'
            className='w-full h-full object-cover 2xl:w-[280.72px]'
          />
        </div>

        <div className='hidden xl:block xl:absolute xl:z-30 xl:top-[1rem] xl:transform xl:translate-x-100  2xl:translate-x-200 2xl:top-[2rem]'>
          <Image
            src='/heroImages/mushroom.png'
            width={167}
            height={184}
            alt='mushroom'
            className='w-full h-full object-cover '
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
