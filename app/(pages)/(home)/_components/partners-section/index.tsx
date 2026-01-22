"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BrandRalphLauren } from "@/app/components/common/vectors/brands/brand-ralph-lauren"
import { BrandMind } from "@/app/components/common/vectors/brands/brand-mind"
import { BrandPlaystation } from "@/app/components/common/vectors/brands/brand-playstation"
import { BrandQuadrant } from "@/app/components/common/vectors/brands/brand-quadrant"
import { BrandTumi } from "@/app/components/common/vectors/brands/brand-tumi"
import { BrandHilton } from "@/app/components/common/vectors/brands/brand-hilton"
import { useGSAP } from "@gsap/react"
import { BrandGoogle } from "@/app/components/common/vectors/brands/google"

gsap.registerPlugin(ScrollTrigger)

export const PartnersSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ".partners-title > *",
      { y: 80, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".partners-title",
          start: "top 85%",
          toggleActions: "restart none restart none"
        }
      }
    )

    gsap
      .utils
      .toArray<HTMLElement>(".partners-highlight")
      .forEach((highlight) => {
        gsap.set(highlight, {
          scaleX: 0,
          transformOrigin: "left center"
        })

        gsap.timeline({
          scrollTrigger: {
            trigger: highlight.parentElement,
            start: "top 90%",
            toggleActions: "restart none restart none"
          }
        }).to(highlight, {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.out"
        }).to(highlight, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.6,
          ease: "power3.in",
          delay: 0.15
        })
    })
  }, [])

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) {
      return
    }

    const marquee = marqueeRef.current
    const content = contentRef.current

    let direction = 1
    let speed = 0.4
    let x = 0

    const contentWidth = content.offsetWidth

    gsap.set(marquee, { x: 0 })

    const tick = () => {
      x += speed * direction

      if (x <= -contentWidth) {
        x += contentWidth
      }

      if (x >= 0) {
        x -= contentWidth
      }

      gsap.set(marquee, { x })
    }

    gsap.ticker.add(tick)

    ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        direction = self.direction === 1 ? 1 : -1
      },
    })

    return () => {
      gsap.ticker.remove(tick)
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <section className="py-30 2xl:pt-20 2xl:pb-40 w-full bg-black overflow-hidden">
      <div className="px-5">
        <div className="relative h-20 md:h-41 lg:h-56 xl:h-65 2xl:h-116 overflow-hidden">
          <h2 className="partners-title flex flex-col font-sans text-[3.6em] md:text-[8em] lg:text-[10.8em] xl:text-[13.7em] 2xl:text-[20em] uppercase leading-none text-white relative z-10">
            <strong className="font-bungee text-default">Our</strong>
            <span className="absolute top-7 md:top-10 lg:top-14 2xl:top-38 font-bold">
              Partners
            </span>
          </h2>
          <span className="partners-highlight absolute inset-0 block bg-default z-10" />
        </div>
        <div className="pt-10 2xl:px-30">
          <div className="relative">
            <h3 className="font-sans text-sm font-bold uppercase tracking-tighter text-white">
              Bringing the fight
            </h3>
            <span className="partners-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative">
            <p className="mt-6 font-sans text-2xl text-white lg:max-w-lg">
              Since his F1 debut with McLaren in 2019, Lando Norris has secured partnerships with 
              <strong className="mx-1.5 font-brier font-normal text-default">
                major brands
              </strong>that sponsor him.
            </p>
            <span className="partners-highlight absolute inset-0 block bg-default z-10" />
          </div>
        </div>
        <div className="pt-14 2xl:pt-20 2xl:px-30">
          <div className="relative overflow-hidden w-full">
            <div ref={marqueeRef} className="flex w-max">
              <div
                ref={contentRef}
                className="flex items-center gap-12 md:gap-16 2xl:gap-20 pr-20 scale-50 md:scale-75 lg:scale-100"
              >
                <BrandRalphLauren width="200" height="100" fill="#fff" />
                <BrandMind width="140" height="100" fill="#fff" />
                <BrandPlaystation width="70" height="70" fill="#fff" />
                <BrandGoogle width="140" height="60" fill="#fff" />
                <BrandQuadrant width="220" height="60" fill="#fff" />
                <BrandTumi width="140" height="80" fill="#fff" />
                <BrandHilton width="140" height="100" fill="#fff" />
              </div>
              <div className="flex items-center gap-12 md:gap-16 2xl:gap-20 pr-20">
                <BrandRalphLauren width="200" height="100" fill="#fff" />
                <BrandMind width="140" height="100" fill="#fff" />
                <BrandPlaystation width="70" height="70" fill="#fff" />
                <BrandGoogle width="140" height="60" fill="#fff" />
                <BrandQuadrant width="220" height="60" fill="#fff" />
                <BrandTumi width="140" height="80" fill="#fff" />
                <BrandHilton width="140" height="100" fill="#fff" />
              </div>
            </div>
            <span className="partners-highlight absolute inset-0 block bg-default z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
