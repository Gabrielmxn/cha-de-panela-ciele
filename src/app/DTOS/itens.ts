
export interface ItemsDTOS {
  id: string
  strock: number
  chosen: number
  description: string
  name: string
  url_img: string
  important: boolean
}

export interface CreateItemDTOS {
  strock: number
  description: string
  name?: string
  imgFile: File
  important?: boolean
}