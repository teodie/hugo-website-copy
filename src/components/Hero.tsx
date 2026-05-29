import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-150 h-screen flex items-center justify-center relative overflow-hidden bg-black text-white'>
      <div className='absolute inset-0'>
        <video  
        src="/assets/videos/HugoBuildersLCC_Hero_Video.mp4"
        className='w-full h-full object-cover'
        autoPlay
        muted 
        loop
        ></video>
      </div>

      <div className='relative z-2 flex flex-col items-center text-center  gap-10 px-6 '>
        <h1 className='w-px h-px overflow-hidden'>Hugo Builders — Premium Roofing, Siding & Gutters in Columbus, Ohio</h1>

        <div className='w-[clamp(200px,26vw,320px)]'>
          <Image  src={'/assets/images/HeroIcon.png'} alt='' width={280} height={280} className='brightness-0 invert-100'/>
        </div>

        <a className='font-barlowCondensed border py-3.5 px-8 rounded-sm text-center tracking-wider font-semibold text-sm uppercase border-white/30'>
          get a free inspection
        </a>

      </div>

      <div className='absolute bottom-0 flex flex-col items-center gap-4 mb-5'>
        <span className='tracking-widest uppercase text-[.75rem]'>Scroll</span>
        <ArrowDown size={25}/>
      </div>

      <div className='absolute inset-0 bg-linear-to-t from-0% from-black/50 to-100% to-transparent' />


    </section>
  )
}

export default Hero