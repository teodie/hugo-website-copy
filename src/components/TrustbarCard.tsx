import { LucideIcon } from 'lucide-react'

type TrustCardType = {
  icon: LucideIcon,
  label: string
}

const TrustbarCard = ({icon: Icon, label} : TrustCardType) => {
  
  return (
    <div className='flex gap-2 h-16 items-center
      uppercase px-10 text-gray-500 font-bold tracking-widest text-nowrap'>
      <Icon size={20} className='text-red-500' />
      <span>{label}</span>
    </div>
  )
}

export default TrustbarCard