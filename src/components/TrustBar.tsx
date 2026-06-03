import TrustbarCard from '@/elements/TrustbarCard'
import { CheckSquare, MapPin, House } from 'lucide-react'

const TrustBar = () => {
  
  const trustBarObject = [
    {icon: CheckSquare, label: "free inspections"},
    {icon: MapPin, label: "Columbus, oh"},
    {icon: House, label: "Roofing • Gutters • Siding"}
  ]

  return (
    <section className=' sm:flex justify-center bg-gray-100 border-b border-gray-200 hidden'>
      {
        trustBarObject.map((element) => (
          <TrustbarCard key={element.label} icon={element.icon} label={element.label} />
        ))
      }
    </section>
  )
}

export default TrustBar