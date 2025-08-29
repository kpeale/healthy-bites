import Image from 'next/image';
const Articles = () => {
  return (
    <section
      className='  py-8 lg:py-12 px-4 sm:px-6 md:px-10 lg:px-20'
      id='#articles'
    >
      <div className='mx-auto flex flex-col gap-6'>
        <p className=' text-[#003223] font-quicksand font-semibold text-[20px] md:text-[40px] leading-[100%] '>
          Articles
        </p>
        <p className='font-opensans text-[#003223] font-normal text-[18px] leading-5 md:leading-8'>
          Make Our Kitchen Your Own
        </p>
      </div>

      <div className='flex flex-row pt-5 lg:pt-10 overflow-auto  overflow-x-auto no-scrollbar items-center justify-between mx-auto gap-8'>
        <div className='w-[350px] sm:w-[530px] bg-white rounded-[8px] p-4 flex flex-col gap-2 flex-shrink-0'>
          <div className='relative'>
            <div className='z-10'>
              <Image
                src='/articleImages/article1.png'
                width={498}
                height={420}
                alt='image'
                className='rounded-[8px] w-[320px] h-[300px] sm:w-[498px] sm:h-[420px]'
              />
            </div>

            <div className='bg-white  py-2 px-2 rounded-full flex flex-col gap-[10px] z-20 absolute top-10 right-5'>
              <Image
                src='/love.png'
                alt='views'
                width={24}
                height={24}
              />

              <Image
                src='/shareIcon.png'
                alt='comment'
                width={24}
                height={24}
              />
            </div>

            <div className='bg-white w-[160px] rounded-full flex flex-row p-[8px] justify-evenly absolute bottom-5 left-4 z-20'>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/views.png'
                  alt='views'
                  width={24}
                  height={24}
                />
                <p>23</p>
              </div>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/comment.png'
                  alt='comment'
                  width={24}
                  height={24}
                />
                <p>0</p>
              </div>
            </div>
          </div>

          <div>
            <p className='font-opensans text-sm font-normal text-[#003223] text-right'>
              July 1, 2025
            </p>
          </div>
          <div className='flex flex-col gap-5 md:gap-10'>
            <p className='font-quicksand text-lg md:text-2xl leading-5 md:leading-8 text-[#003223] font-semibold'>
              The Benefits Of Plants-Based Eating
            </p>
            <p className='text-[#003223] font-opensans font-normal text-[16px] md:text-lg  leading-5 md:leading-8'>
              In recent years, plant-based eating has become more than just a
              trend — it is a powerful shift toward healthier, more mindful...
            </p>
          </div>
        </div>

        <div className='w-[350px] sm:w-[530px] bg-white rounded-[8px] p-4 flex flex-col gap-2 flex-shrink-0'>
          <div className='relative'>
            <div className='z-10'>
              <Image
                src='/articleImages/article2.png'
                width={498}
                height={420}
                alt='image'
                className='rounded-[8px] w-[320px] h-[300px] sm:w-[498px] sm:h-[420px]'
              />
            </div>

            <div className='bg-white  py-2 px-2 rounded-full flex flex-col gap-[10px] z-20 absolute top-10 right-5'>
              <Image
                src='/love.png'
                alt='views'
                width={24}
                height={24}
              />

              <Image
                src='/shareIcon.png'
                alt='comment'
                width={24}
                height={24}
              />
            </div>

            <div className='bg-white w-[160px] rounded-full flex flex-row p-[8px] justify-evenly absolute bottom-5 left-4 z-20'>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/views.png'
                  alt='views'
                  width={24}
                  height={24}
                />
                <p>23</p>
              </div>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/comment.png'
                  alt='comment'
                  width={24}
                  height={24}
                />
                <p>0</p>
              </div>
            </div>
          </div>

          <div>
            <p className='font-opensans text-sm font-normal text-[#003223] text-right'>
              July 1, 2025
            </p>
          </div>
          <div className='flex flex-col gap-5 md:gap-10'>
            <p className='font-quicksand text-lg md:text-2xl leading-5 md:leading-8 text-[#003223] font-semibold'>
              5 Easy Breakfasts to Kickstart Your Morning
            </p>
            <p className='text-[#003223] font-opensans font-normal text-[16px] md:text-lg  leading-5 md:leading-8'>
              Discover simple, healthy breakfast ideas that take less than 15
              minutes to prepare, perfect for busy mornings.
            </p>
          </div>
        </div>

        <div className='w-[350px] sm:w-[530px] bg-white rounded-[8px] p-4 flex flex-col gap-2 flex-shrink-0'>
          <div className='relative'>
            <div className='z-10'>
              <Image
                src='/articleImages/article1.png'
                width={498}
                height={420}
                alt='image'
                className='rounded-[8px] w-[320px] h-[300px] sm:w-[498px] sm:h-[420px]'
              />
            </div>
            <div className='bg-white  py-2 px-2 rounded-full flex flex-col gap-[10px] z-20 absolute top-10 right-5'>
              <Image
                src='/love.png'
                alt='views'
                width={24}
                height={24}
              />

              <Image
                src='/shareIcon.png'
                alt='comment'
                width={24}
                height={24}
              />
            </div>

            <div className='bg-white w-[160px] rounded-full flex flex-row p-[8px] justify-evenly absolute bottom-5 left-4 z-20'>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/views.png'
                  alt='views'
                  width={24}
                  height={24}
                />
                <p>23</p>
              </div>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/comment.png'
                  alt='comment'
                  width={24}
                  height={24}
                />
                <p>0</p>
              </div>
            </div>
          </div>

          <div>
            <p className='font-opensans text-sm font-normal text-[#003223] text-right'>
              July 1, 2025
            </p>
          </div>
          <div className='flex flex-col gap-5 md:gap-10'>
            <p className='font-quicksand text-lg md:text-2xl leading-5 md:leading-8 text-[#003223] font-semibold'>
              Healthy Cooking Hacks: Save Time & Keep the Flavor
            </p>
            <p className='text-[#003223] font-opensans font-normal text-[16px] md:text-lg  leading-5 md:leading-8'>
              Learn kitchen tips that help you cook faster while preserving
              nutrients and taste in your meals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Articles;
