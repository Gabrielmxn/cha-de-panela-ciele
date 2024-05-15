import Image from "next/image";
import { Header } from "./components/header";
import { Card } from "./components/card";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-2 justify-center items-center gap-2 mt-8 border lg:flex lg:flex-wrap lg:justify-center text-center p-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
