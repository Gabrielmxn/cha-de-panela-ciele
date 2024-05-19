'use client'
import { api } from "../lib/axios";

export async function toChooseItem(id: string){
  const response = await api.post('item/toChoose', {
    idItem: id,
  })

  return response.data
}