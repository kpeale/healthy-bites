import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='py-5 lg:pt-10 md:px-10 lg:px-20'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <div className='flex flex-row items-center justify-center md:items-start md:justify-start gap-[5px] sm:gap-[10px] lg:gap-[40px] pb-4 md:pb-0'>
          <Image
            src='/facebook.png'
            width={35}
            height={35}
            alt='facebook'
          />
          <Image
            src='/instagram.png'
            width={35}
            height={35}
            alt='facebook'
          />
          <Image
            src='/tiktok.png'
            width={35}
            height={35}
            alt='facebook'
          />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-[5px] sm:gap-[10px] lg:tab-[40px] pb-4 md:pb-0'>
          <Link
            href='/'
            className='text-[#003223] font-quicksand font-semibold text-[18px] md:text-lg leading-5 md:leading-8'
          >
            About
          </Link>
          <Link
            href='/'
            className='text-[#003223] font-quicksand font-semibold text-[18px] md:text-lg leading-5 md:leading-8'
          >
            Meal plans
          </Link>
          <Link
            href='/'
            className='text-[#003223] font-quicksand font-semibold text-[18px] md:text-lg leading-5 md:leading-8'
          >
            Recipe
          </Link>
          <Link
            href='/'
            className='text-[#003223] font-quicksand font-semibold text-[18px] md:text-lg leading-5 md:leading-8'
          >
            Contact
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto '>
        <div className='pb-4 lg:pb-8'>
          <p className='text-[#003223] font-quicksand font-semibold text-[18px] md:text-lg leading-5 md:leading-8'>
            Subscribe to our newsletter
          </p>
        </div>

        <div className='relative'>
          <div>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Enter your email address'
              className='w-[315px] sm:w-[460px] rounded-[48px] border border-s-[#949494] py-[18px] px-3 text-sm text-[#003223] font-normal font-opensans z-10'
            />
          </div>
          <div className='absolute z-20 top-2 right-2 '>
            <button className='bg-[#FF6400] rounded-[48px] px-4 py-2.5 text-white  font-opensans text-[16px] font-semibold '>
              Submit
            </button>
          </div>
        </div>

        <div className='flex flex-row gap-4 items-center justify-center pt-4  lg:pt-8'>
          <input
            type='checkbox'
            name='check'
          />
          <p className='text-sm text-[#003223] font-normal font-opensans'>
            Yes, subscribe me to your newsletter.*
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center md:items-end md:justify-end pt-4 md:pt-0'>
        <Link
          href='/'
          className='text-[#003223] font-quicksand font-semibold text-[18px] md:text-lg leading-5 md:leading-8'
        >
          Privacy Policy | Terms of Use
        </Link>
      </div>
    </div>
  );
};
export default Footer;
