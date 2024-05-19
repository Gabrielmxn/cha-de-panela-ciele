'use client'

import Image from "next/image";
import { Header } from "./components/header";
import { Card } from "./components/card";
import imgItems from './assets/ayr.png'
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { getItens } from "./http/get-itens";
import { ItemsDTOS } from "./DTOS/itens";

export default function Home() {
  const { data: itens, isFetching } = useQuery<ItemsDTOS[]>({
    queryKey: ['items'],
    queryFn: getItens
  })

  console.log(itens)
  return (
    <main>
      <Header />

      <div className="grid grid-cols-2 justify-center items-stretch gap-4 mt-8 lg:flex lg:flex-wrap lg:justify-center text-center p-2">
        {
          isFetching ? <span>Carregando...</span> : itens && itens.map(resp => {
            return (
              <Card
                key={resp.id}
                name={resp.name}
                description={resp.description}
                id={resp.id}
                totalItems={resp.strock}
                totalSelection={resp.chosen}
                imgItem={resp.url_img}
                important={resp.important}
              />
            )
          })
        }


      </div>
    </main>
  );
}
