import { CreateItemDTOS } from "../DTOS/itens";
import { api } from "../lib/axios";


export async function createItem({strock, description, name, imgFile, important = false}: CreateItemDTOS){
  console.log(strock)

  const imageUpload = await api.post('item/upload', imgFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  const response = await api.post('item/create', {
    strock,
    description,
    name,
    url_img: imageUpload.data.url,
    important
  })

  return response.data
}