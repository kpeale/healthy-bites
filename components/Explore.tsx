import Image from 'next/image';
const Explore = () => {
  return (
    <section className=' bg-[#F5EBE1] pt-10 lg:pt-18'>
      <h2 className='text-[#003223] font-quicksand font-semibold text-[20px] lg:text-[40px] leading-[100%] text-center'>
        Explore Our Diverse Meal Options
      </h2>
      <div className='flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-0  mt-8 lg:mt-20'>
        <div>
          <Image
            src='/exploreRecipe.png'
            width={350}
            height={607}
            alt='image'
          />
        </div>
        <div>
          <Image
            src='/7day.png'
            width={350}
            height={607}
            alt='image'
          />
        </div>

        <div>
          <Image
            src='/signatureDish.png'
            width={350}
            height={607}
            alt='image'
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
