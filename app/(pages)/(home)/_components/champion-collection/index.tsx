"use client"
import Image from "next/image"

export const ChampionCollectionSection = () => {
  return (
    <section className="w-full h-dvh bg-black">
      <div className="h-full flex flex-col lg:flex-row">
        <div className="relative lg:px-10 flex flex-col justify-center items-center w-full h-full lg:w-1/2">
          {/* <div className="absolute top-0 left-0 w-full h-full">
            <Pattern height="100%" stroke="#000" />
          </div> */}
          <div className="relative flex flex-col">
            <span className="font-sans text-lg font-bold tracking-tighter uppercase">
              Lando Store
            </span>
            <div className="mt-4 flex flex-col">
              <h4 className="font-sans text-9xl font-bold uppercase tracking-tighter text-white">
                World
              </h4>
              <h4 className="font-sans text-9xl font-bold uppercase tracking-tighter text-white">
                Drivers
              </h4>
              <h4 className="font-bungee text-9xl font-bold uppercase tracking-tighter text-default">
                Champion
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/champion-collection/image-champion.webp"
                width={700}
                height={700}
                alt=""
              />
              <Image
                src="/images/champion-collection/image-champion-tag.webp"
                width={300}
                height={300}
                className="absolute top-0 right-0"
                alt=""
              />
              <Image
                src="/images/champion-collection/image-champion-ln.webp"
                width={300}
                height={300}
                className="absolute bottom-0 left-[60%] -translate-x-[60%]"
                alt=""
              />
            </div>
        </div>
      </div>
    </section>
  )
}