
import Hero from '@/assets/hero.jpg'
import Image from 'next/image'
const HeroComponent = () => {
  return (
    <div className="w-full">
        <div className='h-[90vh] md:h-[100vh] w-full relative overflow-hidden '>
            <Image fill className='object-cover object-center' src={Hero} alt='hero'/>
            <div className=' absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <h1 className='text-5xl font-bold text-white mt-52'>New Collection</h1>
            </div>
        </div>
    </div>
  )
}

export default HeroComponent