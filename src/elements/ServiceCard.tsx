import { ArrowRight } from 'lucide-react'
import { serviceSectionImages } from '../../public/assets/assets'
import Image, { StaticImageData } from 'next/image'

type ServiceCardPropTypes = {
  image: StaticImageData,
  title: string,
  description: string
}

const ServiceCard = ({image, title, description} : ServiceCardPropTypes ) => {
  return (
    <div className='overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-transform duration-1000'>
          <div className='h-60 relative overflow-hidden'>
            <Image src={image} alt='' fill className='object-cover group-hover:scale-105 transition-transform duration-1000' />
          </div>
          <div className='px-6'>
            <span className='font-extrabold text-3xl pt-5 inline-block uppercase'>{title}</span>
            <p className='text-gray-500 text-lg mt-2.5'>{description}</p>

            <div className='flex items-center gap-5 text-red-700/80 text-md my-8 leading-1.5 tracking-wide'>
              <span className=' inline-block font-bold '>Learn More
              </span>
              <ArrowRight size={20} className='group-hover:translate-x-2 transition-transform duration-500' />
            </div>

          </div>
        </div>
  )
}

export default ServiceCard