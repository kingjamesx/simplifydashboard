import Head from "next/head";
import Image from "next/image";
import Arrow from "../public/icons/barrow.png";
import Blue from "../public/icons/blue.png";
import Green from "../public/icons/green.png";
import Red from "../public/icons/red.png";
import { table } from "../table";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplify App</title>
        <meta name="description" content="simplify stage 3 submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#F7FAFC] px-5  pb-20">
        <header className="flex flex-col md:flex-row items-center justify-between ">
          <span>
            <h1 className="text-2xl md:text-[32px] font-bold py-4">
              Welcome back,
            </h1>
            <p>Here’s what is happening with your Terminals today,</p>
          </span>
          <span className="flex items-center gap-2">
            <p>12th October, 2022</p>
            <span>
              <Image src={Arrow} alt="dropdown" />
            </span>
          </span>
        </header>
        <section className="flex gap-7 md:gap-4 items-center mt-10 flex-wrap justify-center lg:justify-start">
          <Card
            text="Top Location by Value"
            location="Ikeja - 197M"
            img={Blue}
          />
          <Card
            text="Top Location by Volume"
            location="Ajah - 5K"
            img={Green}
          />
          <Card text="Least Location by Value" location="Wuse - 2M" img={Red} />
          <Card
            text="Least Location by Volume"
            location="Ojuelegba - 200"
            img={Red}
          />
        </section>
        <section className="mt-12">
          <div className="px-4 grid grid-flow-col auto-cols-[8rem]   md:auto-cols-[16rem] font-bold overflow-auto md:overflow-hidden bg-[#EDF1FF] py-5 rounded-t">
            <p>Location</p>
            <p>Terminal ID</p>
            <p>Value</p>
            <p>Volume</p>
          </div>
          <>
            {/* {` overflow-x-scroll  px-4 grid grid-cols-4  border-t `} */}
            {table.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`px-4 py-5 grid grid-flow-col auto-cols-[8rem] md:auto-cols-[16rem] hover:bg-[#C8D2FF]     w-full overflow-x-auto   snap-mandatory snap-x scroll-pl-4 ${
                    index % 2 === 0 ? "bg-[#FCFCFC]" : "bg-white"
                  }`}
                >
                  <p>{item.location}</p>
                  <p>{item.terminal}</p>
                  <p>{item.value}</p>
                  <p>{item.volume}</p>
                </div>
              );
            })}
          </>
          <div className="flex justify-end mt-5 pb-28">
            {" "}
            <button className="font-semibold text-white p-2 px-3 bg-[#4C6FFF] rounded">
              View All
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
