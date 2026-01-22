"use client"
import gsap from "gsap"
import ReactCountup from "react-countup"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { Pattern } from "@/app/components/common/vectors/pattern"
gsap.registerPlugin(ScrollTrigger)

export const CareerSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const areas = gsap.utils.toArray<HTMLElement>(".picture-area")
    const images = gsap.utils.toArray<HTMLElement>(".hover-image")

    gsap.set(images, {
      opacity: 0,
      scale: 0.9,
      xPercent: -50,
      yPercent: -50
    })

    areas.forEach((area, index) => {
      const image = images[index]

      const xTo = gsap.quickTo(image, "x", {
        duration: 0.4,
        ease: "power3"
      })

      const yTo = gsap.quickTo(image, "y", {
        duration: 0.4,
        ease: "power3"
      })

      const showImage = () => {
        gsap.to(image, {
          opacity: 1,
          scale: 1,
          duration: 0.3
        })
      }

      const hideImage = () => {
        gsap.to(image, {
          opacity: 0,
          scale: 0.9,
          duration: 0.25
        })
      }

      const moveImage = (e: MouseEvent) => {
        xTo(e.clientX)
        yTo(e.clientY)
      }

      area.addEventListener("mouseenter", showImage)
      area.addEventListener("mouseleave", hideImage)
      area.addEventListener("mousemove", moveImage)

      return () => {
        area.removeEventListener("mouseenter", showImage)
        area.removeEventListener("mouseleave", hideImage)
        area.removeEventListener("mousemove", moveImage)
      }
    })

    const hideAllImages = () => {
      gsap.to(images, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2
      })
    }

    section.addEventListener("mouseleave", hideAllImages)

    return () => {
      section.removeEventListener("mouseleave", hideAllImages)
    }
  }, [])

  useGSAP(() => {
    const highlights = gsap.utils.toArray<HTMLElement>(".animate-highlight")

    highlights.forEach((bg) => {
      gsap.set(bg, {
        scaleX: 0,
        transformOrigin: "left center"
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bg.parentElement,
          start: "top 80%",
          toggleActions: "restart none restart none",
        }
      })

      tl.to(bg, {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.out"
      })

      tl.to(bg, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.4,
        ease: "power3.in",
        delay: 0.15
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <Pattern stroke="#222" height="100%" />
      </div>
      <div className="animate-pictures relative flex overflow-hidden">
        <h2 className="translate-y-13 lg:translate-y-40 2xl:translate-y-52 font-sans text-[90vw] 2xl:text-[114em] font-bold leading-none text-white">
          4
        </h2>
        <h2 className="font-sans text-[90vw] 2xl:text-[114em] font-bold leading-none text-white">
          4
        </h2>
        <h3 className="absolute bottom-0 right-5 lg:right-10 xl:right-5 font-sans text-3xl md:text-5xl lg:text-8xl 2xl:text-[14.5em] font-bold uppercase tracking-tighter leading-none text-white">
          Podiums
        </h3>
        <div className="absolute inset-0 z-10 grid grid-cols-5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="picture-area"
              data-index={i}
            />
          ))}
        </div>
        <div className="hover-images pointer-events-none fixed inset-0 z-50">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={`/images/career/image-career-0${i + 1}.webp`}
              width={350}
              height={450}
              alt="Lando Norris"
              className="hover-image absolute opacity-0 w-35 h-35 md:w-55 md:h-50 lg:w-87.5 lg:h-112.5 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="py-20 lg:py-60 lg:pb-20 px-5 flex flex-col lg:flex-row md:gap-20">
        <div className="flex flex-col xl:w-150 2xl:w-175 gap-5 md:gap-0">
          <div className="mb-5 md:mb-0 flex md:flex-col items-center md:items-start gap-2 md:gap-0 order-2 md:order-1">
            <h3 className="relative md:px-3 w-fit overflow-hidden font-sans text-2xl md:text-7xl font-semibold uppercase tracking-tighter text-white">
              <span>
                F1 Career
              </span>
              <span className="animate-highlight absolute inset-0 block bg-default" />
            </h3>
            <h4 className="relative md:px-3 w-fit overflow-hidden font-brier text-2xl md:text-8xl font-semibold uppercase tracking-tighter text-white">
              <span>
                Since 2019
              </span>
              <span className="animate-highlight absolute inset-0 block bg-default" />
            </h4>
          </div>
          <div className="relative md:mt-10 w-full lg:w-fit order-1 md:order-2">
            <Image
              src="/images/career/image-career-01.webp"
              width={500}
              height={500}
              alt="Career"
              className="w-full lg:w-fit"
            />
            <span className="animate-highlight absolute inset-0 block bg-default" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:flex-1 justify-center gap-15 md:gap-20 lg:gap-22 self-baseline md:self-auto lg:self-baseline md:select-auto">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col gap-1">
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Formula 1
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Wins
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
            </div>
            <div className="md:-translate-x-6">
              <span className="font-sans text-[7em] md:text-[17em] lg:text-[13em] xl:text-[17em] font-bold leading-none tracking-[-.15em] text-white">
                <ReactCountup
                  start={0}
                  end={11}
                  duration={5}
                  enableScrollSpy={true}
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col gap-1">
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Pole
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Positions
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
            </div>
            <div className="md:-translate-x-6">
              <span className="font-sans text-[7em] md:text-[17em] lg:text-[13em] xl:text-[17em] font-bold leading-none tracking-[-.15em] text-white">
                <ReactCountup
                  start={0}
                  end={16}
                  duration={5}
                  enableScrollSpy={true}
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col gap-1">
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Average
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Finish
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
            </div>
            <div className="md:-translate-x-6 flex items-start gap-4 md:gap-10">
              <span className="font-sans text-[7em] md:text-[17em] lg:text-[13em] xl:text-[17em] font-bold leading-none tracking-[-.15em] text-white">
                <ReactCountup
                  start={0}
                  end={6}
                  duration={5}
                  enableScrollSpy={true}
                />
              </span>
              <span className="translate-y-6 md:translate-y-10 font-sans text-2xl md:text-5xl font-bold leading-none text-beige">
                .28
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col gap-1">
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Fastest
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
              <span className="relative w-fit font-sans text-xs md:text-base uppercase font-semibold tracking-tighter leading-none text-white">
                Laps
                <span className="animate-highlight absolute inset-0 block bg-default" />
              </span>
            </div>
            <div className="md:-translate-x-6 flex items-start gap-10">
              <span className="font-sans text-[7em] md:text-[17em] lg:text-[13em] xl:text-[17em] font-bold leading-none tracking-[-.15em] text-white">
                <ReactCountup
                  start={0}
                  end={18}
                  duration={5}
                  enableScrollSpy={true}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}