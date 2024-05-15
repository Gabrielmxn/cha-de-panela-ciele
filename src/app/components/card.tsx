import Image from 'next/image'
import ayrImg from '../assets/ayr.png'

export function Card() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-2  border">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className='font-bold'>ESCOLHIDOS 0 DE 1</span>
        <Image className='w-full max-w-[128px]' src={ayrImg} alt="" />
        <p>Fritadeira Air Fryer Pfr15pg Gourmet 4,4l Black Philco 110v</p>
      </div>
      <button className="px-3 py-1 bg-green-600 rounded-sm text-gray-100 mt-2 font-bold">Escolher</button>
    </div>
  )
}