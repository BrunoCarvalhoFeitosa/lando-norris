"use client"
import gsap from "gsap"
import clsx from "clsx"
import { ScrollTrigger } from "gsap/all"
import { usePathname } from "next/navigation"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import Link from "next/link"
import { Pattern } from "../vectors/pattern"
import { Signature } from "../vectors/signature"
import { MenuLine } from "../vectors/menu-line"
import { menuList, socialMediaList } from "@/app/constants"
import { BrandRalphLauren } from "../vectors/brands/brand-ralph-lauren"
import { BrandMind } from "../vectors/brands/brand-mind"
import { BrandPlaystation } from "../vectors/brands/brand-playstation"
import { BrandQuadrant } from "../vectors/brands/brand-quadrant"
import { BrandTumi } from "../vectors/brands/brand-tumi"
import { BrandHilton } from "../vectors/brands/brand-hilton"
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

export const Footer = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useGSAP(() => {
    const footer = document.querySelector(".footer-root")

    if (!footer) {
      return
    }

    const menuBgs = gsap
      .utils
      .toArray<HTMLElement>(".menu-item .menu-bg")
      .filter(bg => {
        const link = bg.parentElement as HTMLElement
        return link?.getAttribute("href") !== "/"
      })

    gsap.set(menuBgs, { xPercent: -100 })

    const tl = gsap.timeline({ paused: true })

    menuBgs.forEach((bg, index) => {
      tl.to(
        bg,
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power2.out"
        },
        index * 0.05
      )
    })

    tl.to(menuBgs, {
      xPercent: -100,
      duration: 0.8,
      ease: "power2.in",
      delay: 0.4
    })

    ScrollTrigger.create({
      trigger: footer,
      start: "top 80%",
      toggleActions: "restart none restart none",
      animation: tl
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
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
    <div className="relative w-full p-5 pb-20 xl:pb-5 md:pt-50 xl:pt-70 bg-default footer-root">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="relative w-full rounded-lg bg-black overflow-hidden
          aspect-[1688/3480] md:aspect-[1688/2466] lg:aspect-[1688/1620] xl:aspect-[1688/1400] 2xl:aspect-[1688/896]
          [--mask-url:url(/svgs/image-bg.svg)]
          [-webkit-mask-image:var(--mask-url)]
          [mask-image:var(--mask-url)]
          [-webkit-mask-size:cover]
          [mask-size:cover]
          [-webkit-mask-repeat:no-repeat]
          [mask-repeat:no-repeat]
          [-webkit-mask-position:center]
          [mask-position:center]
        "
        >
          <div className="absolute w-full h-full">
            <div className="lg:hidden">
              <Pattern height="140dvh" stroke="#222" />
            </div>
          </div>
          <div className="absolute inset-0 -z-1 overflow-hidden">
            <div className="hidden lg:block overflow-hidden">
              <Pattern width="100dvw" stroke="#222" />
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex flex-col justify-center items-center">
            <div className="absolute -top-40 md:-top-50 lg:-top-58 flex flex-col items-center uppercase">
              <div className="-rotate-12 translate-y-6">
                <Signature width="250" height="120" color="#d2ff00" />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-sans text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-7 md:leading-14 text-white">
                  Always <span className="font-brier text-default">bringing</span>
                </h1>
                <h1 className="font-sans text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-white">
                  The <span className="font-brier text-default">fight</span>.
                </h1>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/footer/image-footer.webp"
                width={800}
                height={600}
                alt="Lando Norris"
                className="w-full h-[40dvh] md:w-190 md:h-170 object-cover drop-shadow-2xl brightness-75"
              />
            </div>
          </div>
          <div className="absolute top-[15%] md:top-[60%] md:-translate-y-[60%] left-10 md:left-[5%] xl:left-[10%] w-fit">
            <h6 className="font-sans text-xs font-semibold uppercase text-center text-white">
              Pages
            </h6>
            <ul className="mt-3 flex flex-col justify-center items-center">
              {menuList.map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    "menu-item relative overflow-hidden font-sans text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold leading-[.94] tracking-tighter uppercase text-white",
                    pathname === item.pathname && "is-active"
                  )}
                >
                  <Link
                    href={item.pathname}
                    target="_blank"
                    className={clsx(
                      "menu-link block relative",
                      pathname === item.pathname && "opacity-40 pointer-events-none"
                    )}
                  >
                    <span className="menu-text block text-white">{item.label}</span>
                    <span className="menu-text block text-default absolute left-0 top-full">{item.label}</span>
                    <span className="menu-bg absolute left-0 top-0 w-full h-full bg-default -translate-x-full z-0" />
                  </Link>
                  {pathname === item.pathname && (
                    <div className="absolute top-0 left-0 w-full h-full">
                      <MenuLine />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-[15%] md:top-[60%] md:-translate-y-[60%] right-10 md:right-[5%] xl:right-[10%] w-fit">
            <h6 className="font-sans text-xs font-semibold uppercase text-center text-white">
              Follow on
            </h6>
            <ul className="mt-3 flex flex-col justify-center items-center">
              {socialMediaList.map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    "menu-item relative overflow-hidden font-sans text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold leading-[.94] tracking-tighter uppercase text-white",
                    pathname === item.pathname && "is-active"
                  )}
                >
                  <Link
                    href={item.pathname}
                    target="_blank"
                    className="menu-link block relative">
                    <span className="menu-text block text-white">{item.label}</span>
                    <span className="menu-text block text-default absolute left-0 top-full">{item.label}</span>
                    <span className="menu-bg absolute left-0 top-0 w-full h-full bg-default -translate-x-full z-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-4 md:top-16 lg:top-auto lg:bottom-16 overflow-hidden w-full -z-1">
            <div ref={marqueeRef} className="flex w-max">
              <div
                ref={contentRef}
                className="flex items-center gap-12 md:gap-16 2xl:gap-20 pr-20 scale-50 md:scale-75 lg:scale-100"
              >
                <BrandRalphLauren width="200" height="100" fill="#d2ff00" />
                <BrandMind width="140" height="100" fill="#d2ff00" />
                <BrandPlaystation width="70" height="70" fill="#d2ff00" />
                <BrandQuadrant width="220" height="60" fill="#d2ff00" />
                <BrandTumi width="140" height="80" fill="#d2ff00" />
                <BrandHilton width="140" height="100" fill="#d2ff00" />
              </div>
              <div className="flex items-center gap-8 2xl:gap-20 pr-20">
                <BrandRalphLauren width="200" height="100" fill="#d2ff00" />
                <BrandMind width="140" height="100" fill="#d2ff00" />
                <BrandPlaystation width="70" height="70" fill="#d2ff00" />
                <BrandQuadrant width="220" height="60" fill="#d2ff00" />
                <BrandTumi width="140" height="80" fill="#d2ff00" />
                <BrandHilton width="140" height="100" fill="#d2ff00" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 md:left-5 md:translate-x-0 bottom-4 md:bottom-5 w-full md:w-fit z-999">
        <p className="font-sans text-sm text-center text-black">
          <strong>© 2026 Lando Norris</strong>. All rights reserved
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-5 md:translate-x-0 bottom-12 md:bottom-5 w-full md:w-fit z-999">
        <ul className="flex justify-center md:justify-baseline items-center gap-3">
          <li className="font-sans text-sm md:text-lg font-bold uppercase tracking-tighter cursor-pointer">
            Privacy Policy
          </li>
          <li className="font-sans text-sm md:text-lg font-bold uppercase tracking-tighter cursor-pointer">
            Terms
          </li>
        </ul>
      </div>
    </div>
  )
}
