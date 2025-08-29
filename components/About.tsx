const About = () => {
  return (
    <section
      className='bg-[url(/aboutImg.png)] bg-cover bg-no-repeat flex flex-col mx-auto items-center justify-center lg:items-end lg:justify-end'
      id='#about'
    >
      <div className='w-[320px] sm:w-[578px] rounded-[18px] mt-6  lg:m-6 border border-white/30 p-3 lg:p-6 relative bg-gradient-to-t from-white/50 to-white/5 backdrop-blur-md flex flex-col justify-center items-center lg:items-start lg:justify-start'>
        <h3 className='text-[#003223] font-quicksand text-[20px] md:text-[40px] font-semibold leading-[100%]'>
          About
        </h3>
        <div className=' max-w-[315px] sm:max-w-[513.71px] pt-6 md:pt-12'>
          <p className='text-[#003223] font-opensans text-[18px] font-semibold '>
            CRAFTING DELICIOUS MEALS TO MAKE YOUR LIFE HEALTHIER AND EASIER
          </p>
        </div>
        <div className='pt-6 md:pt-12 max-w-[315px] sm:max-w-[532px]'>
          <p className='text-[#003223] font-opensans font-normal text-lg leading-5 md:leading-8 '>
            At Healthy Bites, we believe that eating well should be simple,
            enjoyable, and inspiring. Our mission is to bring you delicious
            recipes, balanced meal plans, and practical tips that make healthy
            living part of your everyday life. Whether you are looking for quick
            breakfasts, energizing smoothies, or mindful meal plans, Healthy
            Bites is here to help you nourish your body and mind—one bite at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
