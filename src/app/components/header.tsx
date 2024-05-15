import Image from 'next/image'
import chapeuImg from '../assets/chapeu.svg'
import bandeirasImg from '../assets/bandeiras.svg'
import balaoLeft from '../assets/balao-left.svg'
import balaoRight from '../assets/balao-right.svg'
import { Holtwood_One_SC } from 'next/font/google';
const holtwood = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"]
});
export function Header() {
  return (
    <header className='relative bg-cha-ciele-header max-h-[300px] h-full pb-8 flex flex-col justify-center items-center'>
      <Image src={bandeirasImg} alt="" width={465.5} height={146.87} />
      <div className='flex justify-center items-center flex-col -mt-20'>
        <Image src={chapeuImg} alt="" width={137.24} height={109.94} />
        <div className={`flex flex-col justify-center items-center -mt-6 text-gray-100`}>
          <h2 className={`${holtwood.className} text-2xl`}>Charraiá</h2>
          <span className='text-xs'>DE PANELA</span>
        </div>
      </div>
      <Image className='absolute left-2 -bottom-8' src={balaoRight} alt="" width={61.86} height={125.67} />
      <Image className='absolute right-2 -bottom-8' src={balaoLeft} alt="" width={61.86} height={125.67} />
    </header>
  )
}