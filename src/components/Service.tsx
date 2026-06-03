import ServiceCard from "@/elements/ServiceCard"
import { serviceSectionImages } from "../../public/assets/assets"

const Services = () => {

  const servicesObjects = [
    {
      image: serviceSectionImages.roofing,
      title: "roofing",
      description:
        "Complete roof replacement, repair, and installation using top-tier materials built to withstand Ohio's toughest weather."
    },
    {
      image: serviceSectionImages.gutters,
      title: "gutters",
      description:
        "Seamless gutter installation, repair, and gutter guard systems that protect your foundation and keep water flowing where it should."
    },
    {
      image: serviceSectionImages.siding,
      title: "siding",
      description:
        "Premium siding installation and replacement that transforms your home's exterior with lasting durability and serious curb appeal."
    }
  ]

  return (
    <section className='mt-20 max-w-300 mx-auto'>
      <div className='text-center uppercase'>
        <span className='font-bold text-[.8rem] tracking-[.15em] text-[#c8102e] mb-3 inline-block'>what we do</span>
        <h2 className='font-extrabold text-3xl text-[#1a1a1a]'>Our Services</h2>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 pb-100 mt-10 gap-8 px-8 '>
        {
          servicesObjects.map((element) => (
            <ServiceCard key={element.title} image={element.image} title={element.title} description={element.description} />
          ))
        }
      </div>

    </section>
  )
}

export default Services