'use client'

import { CreateItemDTOS } from "@/app/DTOS/itens";
import { Toast } from "@/app/components/toast";
import { createItem } from "@/app/http/create-item";
import { useMutation } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { Holtwood_One_SC } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const holtwood = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"]
});

interface FormProps {
  strock: number
  description: string
  name?: string
  imgFile: File
  important?: string

}
export default function CadastrarItem() {
  const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<FormProps>()
  const [img, setImg] = useState('')

  const { mutate, isSuccess } = useMutation({
    mutationFn: (data: CreateItemDTOS) => createItem({
      ...data
    }),
    onSuccess: () => {
      reset()
      setImg('')
    }
  })
  function handleFormUpload(data: FormProps) {
    const formData = new FormData()
    formData.append('image', data.imgFile[0])
    console.log(Array.from(formData))

    console.log(data)

    mutate({
      ...data,
      important: data.important === 'destacado'
    })
  }
  function handleFormUploadS(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files)
    if (event.target.files) {
      const newImage = URL.createObjectURL(event.target.files[0])
      setImg(newImage)
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-cha-ciele-header">

      <form onSubmit={handleSubmit(handleFormUpload)} className="flex flex-col gap-3 w-full max-w-3xl bg-white p-4 rounded-sm">
        <h2 className={`font-bold text-2xl text-center`}>Cadastrar produtos</h2>
        <div className="flex flex-col justify-center items-center gap-1">
          <label htmlFor="file" className="flex justify-center items-center size-20 bg-cha-ciele-header rounded p-1">

            {img ? <Image className="w-full h-full object-contain" src={img} alt="" width={80} height={80} /> : <Plus className="text-white" size={24} />}
          </label>
          <input  {...register("imgFile")} onChange={(event) => handleFormUploadS(event)} id="file" type="file" className="w-0 h-0" />
        </div>
        {/* <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="">Nome</label>
          <input {...register("name")} className="w-full p-2 outline-none border border-transparent rounded-sm focus:border focus:border-cha-ciele-header" type="text" placeholder="Digite o nome do item" />
        </div> */}
        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="">Descrição</label>
          <input {...register("description")} className="w-full p-2 outline-none border border-transparent rounded-sm focus:border focus:border-cha-ciele-header" type="text" placeholder="Digite a descrição do item" />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="">Total de item</label>
          <input {...register("strock")} className="w-full p-2 outline-none border border-transparent rounded-sm focus:border focus:border-cha-ciele-header" type="number" placeholder="Digite o total de item" />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="destaque">Destaque</label>
          <input id="destaque" {...register('important')} value="destacado" type="checkbox" placeholder="taque" />
        </div>
        <button className="py-2 px-4 bg-green-500 text-white">Cadastar</button>
      </form>

      <div className="fixed flex justify-center items-center flex-col gap-2 top-0 right-0 bg-white">
        {isSuccess && <Toast />}
      </div>

    </div>
  )
}