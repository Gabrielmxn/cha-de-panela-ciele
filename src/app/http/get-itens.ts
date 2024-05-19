'use client'
import { ItemsDTOS } from "../DTOS/itens";
import { api } from "../lib/axios";


export async function getItens(){
  const response = await api.get<ItemsDTOS[]>("item/search")

  return response.data
}