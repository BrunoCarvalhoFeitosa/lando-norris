"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { helmetsList, timelineList } from "@/app/constants"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export const TextSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  itemRefs.current = []

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el)
    }
  }

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return


    const updateScroll = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())

      const totalWidth = containerRef.current!.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollDistance = totalWidth - viewportWidth

      if (scrollDistance <= 0) return

      gsap.to(containerRef.current!, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      ScrollTrigger.refresh()
    }

    const timeout = setTimeout(updateScroll, 50)

    window.addEventListener("resize", updateScroll)

    return () => {
      clearTimeout(timeout)
      ScrollTrigger.getAll().forEach((t) => t.kill())
      window.removeEventListener("resize", updateScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex items-center xl:min-h-screen px-10"
      >
        {helmetsList.map((picture, i) => (
          <div
            key={picture.id}
            ref={addToRefs}
            className="flex-shrink-0 flex flex-col items-center"
          >
            <Image
              src={picture.image}
              width={800}
              height={800}
              alt={picture.label}
              className="lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
