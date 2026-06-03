import React from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import FacebookIcon from '@/elements/icons/Facebook'
import InstagramIcon from '@/elements/icons/InstagramIcon'

const Nav = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-300 mx-auto px-6 flex items-center justify-between h-18'>
        {/* Left Nav  */}
        <nav
          className='
        flex items-center gap-8 grow shrink basis-0
        justify-end pr-16
        '>
          <a href="" className=' font-medium text-[.875rem] uppercase tracking-widest text-[#ffffffb3] inline-flex items-center gap-1'
          >About</a>
          <a href="" className=' font-medium text-[.875rem] uppercase tracking-widest text-[#ffffffb3] inline-flex items-center gap-1'
          >Service</a>

        </nav>

        {/* Center Logo  */}
        <a href="" className='shrink-0 flex items-center relative z-2'>
          <Image src='/assets/images/hugobuilders_log.png' alt='' height={52} width={52} />
        </a>

        {/* Right Nav  */}
        <nav
          className='
        flex items-center gap-8 grow shrink basis-0
        flex-start pl-16
        '
        >
          <a href="" className=' font-medium text-[.875rem] uppercase tracking-widest text-[#ffffffb3] inline-flex items-center gap-1'

          >Financing</a>
          <a href="" className=' font-medium text-[.875rem] uppercase tracking-widest text-[#ffffffb3] inline-flex items-center gap-1'>contact</a>
          <div className='flex gap-1.5 ml-1'>
            <a href="" className='flex items-center justify-center size-8 rounded-full text-[#ffffff8c]'>
              <FacebookIcon />
            </a>
            <a href="" className='flex items-center justify-center size-8 rounded-full text-[#ffffff8c]'>
              <InstagramIcon />
            </a>
          </div>
          <a href="" className='bg-white text-black border-2 border-white   px-5.5 py-2.5 inline-flex items-center gap-2 uppercase rounded-sm
          tracking-[.08em]
          font-semibold text-nowrap 
          text-[.75rem]
           leading-none
           hover:border-gray-700
            hover:text-white
            transition-colors
            duration-500
          '>free inspection</a>
        </nav>

      </div>
    </header>
  )
}

export default Nav