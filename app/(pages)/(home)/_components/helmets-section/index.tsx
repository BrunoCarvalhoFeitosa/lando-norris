"use client"
import { useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { Grid } from "@/app/components/common/vectors/grid"
import { Pattern } from "@/app/components/common/vectors/pattern"
import { helmetsList } from "@/app/constants"

export const HelmetsSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section
      className="my-30 w-full bg-black overflow-hidden"
      onClick={() => setActiveId(null)}
    >
      <div>
        <Image
          src="/images/pre-loader/image-pre-loader-01.webp"
          width={3000}
          height={2000}
          alt=""
          className="w-dvw h-dvh object-cover"
          priority
        />
      </div>
      <div className="relative py-10 lg:py-40 px-5">
        <div className="hidden md:block absolute left-0 top-0 w-full h-full">
          <Pattern height="100%" stroke="#222" />
        </div>
        <div className="md:hidden absolute left-0 top-0 w-full h-full">
          <Pattern height="40%" stroke="#555" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {helmetsList.map((helmet) => {
            const isActive = activeId === helmet.id
            return (
              <div
                key={helmet.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveId(isActive ? null : helmet.id)
                }}
                className="group relative xl:even:translate-y-40 overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden z-10">
                  <div className="hidden md:block">
                    <Grid width="100%" height="100%" stroke="#222" />
                  </div>
                  <div className="md:hidden">
                    <Grid width="100%" height="100%" stroke="#555" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={helmet.image}
                    width={500}
                    height={500}
                    alt={helmet.label}
                    className="object-contain"
                  />
                </div>
                <div
                  className={clsx(
                    "absolute inset-0 transition-all duration-500 format rounded-lg overflow-hidden z-20",
                    "h-0 group-hover:h-full",
                    isActive && "h-full"
                  )}
                >
                  <Image
                    src={helmet.imageHover}
                    width={500}
                    height={500}
                    alt={helmet.label}
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-30 p-2">
                  <p className="font-sans text-sm 2xl:text-base font-bold text-white">
                    {helmet.label}
                    <strong className="ml-1 text-default">
                      {helmet.year}
                    </strong>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
