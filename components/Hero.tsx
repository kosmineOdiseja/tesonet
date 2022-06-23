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
      <div className='flex flex-wrap gap-8'>
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
        <div>
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
    </section>
  )
}

export default Hero