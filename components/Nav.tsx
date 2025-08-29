'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';

const Nav = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const handleLinks = () => setShowNavLinks((v) => !v);
  const closeLinks = () => setShowNavLinks(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const [menuTop, setMenuTop] = useState<number>(0);

  useEffect(() => {
    const updateTop = () => {
      const rect = navRef.current?.getBoundingClientRect();

      setMenuTop((rect?.bottom ?? 0) + window.scrollY || 0);
    };
    updateTop();
    window.addEventListener('resize', updateTop);
    window.addEventListener('scroll', updateTop, { passive: true });
    return () => {
      window.removeEventListener('resize', updateTop);
      window.removeEventListener('scroll', updateTop);
    };
  }, []);

  return (
    <>
      {showNavLinks && (
        <div
          className='fixed inset-0 z-30 xl:hidden'
          onClick={closeLinks}
          aria-hidden='true'
        />
      )}

      <div
        ref={navRef}
        className='bg-[#ff6400] w-full xl:w-auto px-5 sm:px-[24px] xl:px-10 2xl:px-[30px] 2xl:w-[2000px] py-0 xl:py-[32px] rounded-sm xl:rounded-3xl fixed flex flex-row gap-6 z-60 justify-between items-center xl:justify-center xl:items-center mx-0  xl:mx-[7rem] my-0 xl:my-5 2xl:justify-between 2xl:gap-20 xl:z-60 '
      >
        <div className='flex xl:hidden'>
          <button
            onClick={handleLinks}
            aria-expanded={showNavLinks}
            aria-controls='mobile-menu'
          >
            <CiMenuBurger />
          </button>
        </div>

        <div className='hidden xl:flex flex-row gap-3 2xl:gap-8'>
          <Link
            href='/'
            className='font-semibold text-lg xl:text-[20px] 2xl:text-2xl leading-5 text-white xl:leading-8'
          >
            Home
          </Link>
          <Link
            href='/'
            className='font-semibold text-lg xl:text-[20px] 2xl:text-2xl leading-5 text-white xl:leading-8'
          >
            Recipes
          </Link>
          <Link
            href='/'
            className='font-semibold text-lg xl:text-[20px] 2xl:text-2xl leading-5 text-white xl:leading-8'
          >
            Meal plan
          </Link>
          <Link
            href='/'
            className='font-semibold text-lg xl:text-[20px] 2xl:text-2xl leading-5 text-white xl:leading-8'
          >
            Articles
          </Link>
          <Link
            href='/'
            className='font-semibold text-lg xl:text-[20px] 2xl:text-2xl leading-5 text-white xl:leading-8'
          >
            About us
          </Link>
        </div>

        <div className='relative  flex-row hidden xl:flex'>
          <div className='absolute'>
            <Image
              src='/searchIcon.png'
              width={24}
              height={24}
              alt='searchicon'
            />
          </div>
          <input
            type='text'
            placeholder='search here'
            className='border border-s-[#D9D9D9] bg-white w-[300px] sm:w-[398px] rounded-full px-6'
          />
        </div>

        <div className='mt-2 mb-2 xl:mt-0'>
          <button className='bg-black text-white px-6 py-2 rounded-sm'>
            Login
          </button>
        </div>
      </div>

      {showNavLinks && (
        <div
          id='mobile-menu'
          className='fixed left-0 right-0 z-40 xl:hidden'
          style={{ top: menuTop + 8 }} // a tiny gap below the bar
        >
          <div className='mx-5 rounded-xl bg-white shadow-lg p-4 flex flex-col gap-3'>
            <Link
              href='/'
              onClick={closeLinks}
              className='font-semibold text-lg leading-5 text-black'
            >
              Home
            </Link>
            <Link
              href='/'
              onClick={closeLinks}
              className='font-semibold text-lg leading-5 text-black'
            >
              Recipes
            </Link>
            <Link
              href='/'
              onClick={closeLinks}
              className='font-semibold text-lg leading-5 text-black'
            >
              Meal plan
            </Link>
            <Link
              href='/'
              onClick={closeLinks}
              className='font-semibold text-lg leading-5 text-black'
            >
              Articles
            </Link>
            <Link
              href='/'
              onClick={closeLinks}
              className='font-semibold text-lg leading-5 text-black'
            >
              About us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
