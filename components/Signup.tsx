const Signup = () => {
  return (
    <div
      className='relative pt-12 lg:pt-20 flex flex-col items-center justify-center gap-6 md:gap-8 py-10 tab:py-20'
      id='#signup'
    >
      <div className='absolute inset-0 bg-[url(/bgImage.png)] bg-cover bg-no-repeat '></div>

      <div className='absolute inset-0 bg-black/50'></div>

      <div className='relative z-10 flex flex-col items-center gap-6 md:gap-8'>
        <div className='flex items-center justify-center tab:max-w-[758px]'>
          <p className='text-white font-semibold text-[1.2rem] sm:text-[1.5rem] tab:[3rem] text-center leading-[1.75rem] tab:[3.5rem] tracking-[-1%]'>
            <span className='font-quicksand'>
              Love healthy food? <br />
              Save your favorites with just one
            </span>
            <span className='font-pacifico font-normal'> Click</span>
          </p>
        </div>

        <p className='font-quicksand font-semibold text-[1.5rem] tab:[3rem] text-center leading-[1.75rem] tab:[3.5rem] tracking-[-1%] text-white'>
          Sign up
        </p>
        <div>
          <button className='bg-[#99999999] rounded-[40px] border-[1.5px] p-[24px] text-white font-opensans font-semibold leading-[100%]'>
            Get started
          </button>
        </div>

        <p className='text-white font-opensans text-lg font-semibold max-w-[400px] sm:max-w-max'>
          ✨ Join 5,000+ members building healthier habits.
        </p>
      </div>
    </div>
  );
};

export default Signup;
