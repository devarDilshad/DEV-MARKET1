import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return 'Loading';
  return (
    <section>
      <div className='max-w-[130rem] mx-auto px-10'>
        <div className='flex flex-col mt-5 lg:mt-40 px-4 pt-10'>
          <h2 className='font-poppins font-semibold text-3xl sm:text-5xl mb-10 space-x-3'>
            Watch <span className='text-primary capitalize'> { name }</span> exercise videos on 
            <i class="fa-brands fa-youtube text-red-600"></i>
          </h2>
          <div className="flex flex-col justify-start flex-wrap items-center gap-5 lg:flex-row lg:gap-20">
            {exerciseVideos?.slice(0,6).map((item,index) => (
              <a key={index} href={`https://www.youtube.com/watch?v=${ item.video.videoId }`} target='_blank' rel='noreferrer' className="flex flex-col w-[17rem] h-[14rem] mb-[5.5rem] no-underline md:w-[24rem] md:h-[23.8rem] lg:mb-0">
                <img src={ item.video.thumbnails[0].url } alt={item.video.title} />
                <div className='mt-4'>
                  <h4 className='font-poppins font-medium text-lg text-black'>
                    { item.video.title }
                  </h4>
                  <h6 className='text-gray-500 '>
                    { item.video.channelName }
                  </h6>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExerciseVideos