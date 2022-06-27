import React from 'react'

const Hero = () => {

  return (
    <section className='w-full h-screen m-auto flex items-start justify-center flex-col gap-5 p-3 '>
      <h2 className='text-darker-text'> We build the digital future.</h2>
      <h1 className='text-white text-4xl'>We are <span className="text-green">Tesonet.</span></h1>
      <div className=' text-white'>
         With 1400+ experts in over 15 projects, we build global products for users to enjoy a safer and more open Internet.
      </div>
      <button className='bg-purple rounded-2xl py-1.5 px-3 text-white text-bold text-lg'>
        Learn what we do
      </button>

      <h4 className='text-white text-4xl'> 
        Tech stats
      </h4>
      <div className='flex flex-row gap-10'>
        <div className='flex flex-col w-[30vw] gap-5'>
          <div className='flex flex-col '> 
            <h1 className='text-white text-4xl'>
              12000+
            </h1>
            <div className='text-white'>
              Servers worldwide
            </div>
          </div>
          <div>
            <h1 className='text-white text-4xl'>
              80+
            </h1>
            <div className='text-white'>
              Different countries 
            </div>
          </div>
        </div>

        <div className='flex flex-col w-[30] gap-5'>
          <div className='flex flex-col '>
            <h1 className='text-white text-4xl'>
              600 <span className='text-xl'> Gbits/s</span>
            </h1>
            <div className='text-white'>
              Network traffic 
            </div>
          </div>
          <div>
          <h1 className='text-white text-4xl'>
              5 <span className='text-xl'>GB</span>
            </h1>
            <div className='text-white'>
              Working data set 
            </div>
          </div>
        </div>
      </div>
{/* video   */}
    <div className='flex content-center justify-center'>
      {/* <ReactPlayer 
        url='https://player.vimeo.com/video/434331751?dnt=1&id=434331751&autopause=0&transparent=0&autoplay=1&loop=1&muted=1&badge=0&byline=0&portrait=0&title=0&background=1'
        playing={true}
       /> */}
      {/* <video className='absolute '  */}
      {/* src='https://player.vimeo.com/video/434331751?dnt=1&id=434331751&autopause=0&transparent=0&autoplay=1&loop=1&muted=1&badge=0&byline=0&portrait=0&title=0&background=1'>  </video> */}
      {/* <video src="/Video.mp4" autoPlay loop muted playsInline  className='flex justify-center content-center]'></video> */}
      <iframe 
          src="https://player.vimeo.com/video/434331751?dnt=1&id=434331751&autopause=0&transparent=0&autoplay=1&loop=1&muted=1&badge=0&byline=0&portrait=0&title=0&background=1"
        width="560"
        height="340"
        title='Youtube video player'
        frameBorder="0"
        // allowfullscreen
       >

       </iframe>

    </div>
    </section>
  )
}
 
export default Hero