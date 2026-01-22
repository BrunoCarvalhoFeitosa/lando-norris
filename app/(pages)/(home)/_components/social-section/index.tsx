"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { followList } from "@/app/constants"

gsap.registerPlugin(ScrollTrigger)

export const SocialSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
          pin: ".pin-wrapper",
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })

      tl.to(".first-title", { xPercent: 70 }, 0)
        .to(".sec-title", { xPercent: 25 }, 0)

      tl.from(
        ".vd-card",
        {
          y: 120,
          opacity: 0,
          stagger: 0.12,
          ease: "power2.out"
        },
        0.15
      )
    }, sectionRef)

    return () => ctx.revert()
  })

  return (
    <section
      ref={sectionRef}
      className="relative testimonials-section min-h-[300vh] bg-black"
    >
      <div className="pin-wrapper">
        <div className="titles-wrapper">
          <h1 className="first-title font-bungee text-6xl lg:text-[10em] xl:text-[13em] tracking-tighter leading-none text-default">
            Lando
          </h1>
          <h1 className="sec-title relative xl:-top-18 font-bungee text-6xl lg:text-[10em] xl:text-[13em] tracking-tighter leading-none text-default">
            Norris
          </h1>
          <h1 className="sec-third relative xl:-top-18 font-sans text-sm font-bold uppercase tracking-tighter leading-none text-white">
            Social Media
          </h1>
        </div>
        <div className="pin-box">
          {followList.map((card, index) => (
            <div
              key={card.id}
              className={`vd-card ${card.rotation} ${card.translation ?? ""}`}
              style={{
                zIndex: index + 1
              }}
            >
              <img
                src={card.image}
                alt=""
                className="w-[280px] h-[360px] md:w-[350px] md:h-[520px] lg:w-[240px] lg:h-[360px] xl:w-[360px] xl:h-[520px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
