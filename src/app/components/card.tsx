'use client'
import Image, { StaticImageData } from 'next/image'
import ayrImg from '../assets/ayr.png'
import imgFire from '../assets/fire.svg'
import { useState } from 'react'
import { Dropdown } from './dropdown'
import { useMutation } from '@tanstack/react-query'
import { toChooseItem } from '../http/to-choose-item'
import { queryClient } from '../lib/react-query'

interface CardProps {
  id: string
  name: string
  totalItems: number
  totalSelection: number
  description: string
  imgItem: string
  important?: boolean
}


//Fritadeira Air Fryer Pfr15pg Gourmet 4,4l Black Philco 110v
export function Card({ description, id, imgItem, totalItems, totalSelection, name, important = false }: CardProps) {
  const [dropDown, setDropDown] = useState(false)
  const { mutate } = useMutation({
    mutationFn: (id: string) => toChooseItem(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['items'],
        refetchType: 'active'
      });
    }
  })
  function handleSelectItem(idItem: string) {
    mutate(idItem)
    setDropDown(false)
  }

  const isOpacity = totalSelection === totalItems

  return (
    <div>
      <div className={`max-w-[255px] relative flex flex-col  h-full justify-between items-center px-4 py-2 shadow ${isOpacity && 'opacity-50'}`}>
        <div className='flex flex-col justify-center items-center'>
          <span>ESCOLHIDOS {totalSelection} DE {totalItems}</span>
          <Image className='w-full max-w-[128px]' src={imgItem} alt="" width={128} height={130.76} />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-base font-bold'>{description}</p>
        </div>

        <button className="px-3 py-1 bg-green-600 rounded-sm text-gray-100 mt-2 font-bold  hover:bg-green-600/90 transform duration-200 ease-in-out" disabled={isOpacity} onClick={() => setDropDown(true)}>Escolher</button>
        {important && <Image className="absolute -top-3 -right-2" src={imgFire} width={20} height={25.13} alt='' />}
      </div>
      {dropDown && <Dropdown
        handleSelectItem={() => handleSelectItem(id)}
        setDropDown={setDropDown}
        nameItem={description}
      />}

    </div>
  )
}