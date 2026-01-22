"use client"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { usePathname } from "next/navigation"
import { useGSAP } from "@gsap/react"
import { useMenuStore } from "@/app/store"
import { Pattern } from "../vectors/pattern"
import { MenuLine } from "../vectors/menu-line"
import { Signature } from "../vectors/signature"
import { menuList, socialMediaList } from "@/app/constants"

export const Menu = () => {
  const pathname = usePathname()
  const { open } = useMenuStore()

  useGSAP(() => {
    const menu = document.querySelector<HTMLElement>(".menu")
    const leftGallery = document.querySelector<HTMLElement>(".menu-left-gallery")
    const rightGallery = document.querySelector<HTMLElement>(".menu-right-gallery")

    if (!menu || !leftGallery || !rightGallery) {
      return
    }

    const moveAmount = 100
    const clampRange = 1
    const duration = 1.2
    const ease = "power2.out"

    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = menu.getBoundingClientRect()
      const mouseY = e.clientY - rect.top
      const normalizedY = (mouseY / rect.height - 0.5) * 2
      const clampedY = clamp(normalizedY, -clampRange, clampRange)

      gsap.to(leftGallery, {
        y: -clampedY * moveAmount,
        duration,
        ease,
        overwrite: "auto"
      })

      gsap.to(rightGallery, {
        y: clampedY * moveAmount,
        duration,
        ease,
        overwrite: "auto"
      })
    }

    menu.addEventListener("mousemove", handleMouseMove)

    menu.addEventListener("mouseleave", () => {
      gsap.to([leftGallery, rightGallery], {
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
    })

    return () => {
      menu.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useGSAP(() => {
    if (!open) {
      return
    }

    const menuBgs = gsap
      .utils
      .toArray<HTMLElement>(".menu-item .menu-bg")
      .filter(bg => {
        const link = bg.parentElement as HTMLElement
        return link?.getAttribute("href") !== "/"
      })

    const tl = gsap.timeline()

    menuBgs.forEach((bg, index) => {
      tl.fromTo(
        bg,
        { xPercent: -100 },
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.05
        },
        0
      )
    })

    tl.to(
      menuBgs,
      {
        xPercent: -100,
        duration: 0.8,
        ease: "power2.in",
        delay: 0.5
      }
    )
  }, [open])

  useGSAP(() => {
    const menuItems = gsap
      .utils
      .toArray<HTMLElement>(".menu-item .menu-link")
      .filter(link => {
        return link.getAttribute("href") !== "/"
      })

    menuItems.forEach((link) => {
      const tl = gsap.timeline({ paused: true })

      tl.to(link, {
        yPercent: -100,
        duration: 0.35,
        ease: "power2.out"
      })

      link.addEventListener("mouseenter", () => tl.play())
      link.addEventListener("mouseleave", () => tl.reverse())
    })
  }, [pathname])

  useGSAP(() => {
    if (!open) {
      return
    }

    const socialBgs = gsap.utils.toArray<HTMLElement>(".social-bg")
    const tl = gsap.timeline()

    socialBgs.forEach((bg, index) => {
      tl.fromTo(
        bg,
        { xPercent: -100 },
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.10,
        },
        0
      )
    })

    tl.to(
      socialBgs,
      {
        xPercent: -100,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.5,
      }
    )
  }, [open])

  useGSAP(() => {
    const socialItems = gsap.utils.toArray<HTMLElement>(".social-item")

    socialItems.forEach((item) => {
      const link = item.querySelector<HTMLElement>(".social-link")

      if (!link) {
        return
      }

      const tl = gsap.timeline({ paused: true })

      tl.to(link, {
        yPercent: -100,
        duration: 0.35,
        ease: "power2.out"
      })

      item.addEventListener("mouseenter", () => tl.play())
      item.addEventListener("mouseleave", () => tl.reverse())
    })
  }, [])

  return (
    <div className={clsx(
      "menu fixed top-0 left-0 md:px-10 w-full h-dvh bg-musgo transition-transform duration-700 overflow-hidden z-99",
      open ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="relative w-full h-full">
        <div className="hidden md:block absolute top-0 left-0 w-full h-full">
          <Pattern width="100%" stroke="#363b24" />
        </div>
        <div className="md:hidden absolute top-0 left-0 w-full h-full opacity-15">
          <Pattern height="100dvh" stroke="#fff" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 lg:left-5 lg:translate-x-0 -rotate-12 lg bottom-5 lg:bottom-4 z-99">
          <Signature width="300" height="120" color="#d2ff00" />
        </div>
        <div className="absolute w-full h-full flex items-center z-50">
          <div className="hidden lg:flex gap-17 lg:gap-0 xl:gap-18 w-1/2">
            <div className="menu-left-gallery flex flex-col gap-17 lg:gap-0 xl:gap-18 translate-y-40">
              <div className="group overflow-hidden cursor-zoom-in">
                <Image
                  src="/images/menu/image-menu-01.webp"
                  width={380}
                  height={250}
                  alt="Image menu"
                  className="w-105 h-112.5 object-cover transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/menu/image-menu-03.webp"
                  width={380}
                  height={250}
                  alt="Image menu"
                  className="w-105 h-112.5 object-cover grayscale-100"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-musgo opacity-70" />
              </div>
            </div>
            <div className="menu-right-gallery flex flex-col gap-17 lg:gap-0 xl:gap-18 -translate-y-25">
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/menu/image-menu-02.webp"
                  width={380}
                  height={250}
                  alt="Image menu"
                  className="w-105 h-112.5 object-cover grayscale-100"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-musgo opacity-70" />
              </div>
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/menu/image-menu-04.webp"
                  width={380}
                  height={250}
                  alt="Image menu"
                  className="w-105 h-112.5 object-cover grayscale-100"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-musgo opacity-70" />
              </div>
            </div>
          </div>
          <div className="lg:pt-50 lg:pb-8 flex flex-col justify-center xl:justify-between items-center w-full lg:w-1/2 h-full">
            <nav>
              <ul className="flex flex-col justify-center items-center">
                {menuList.map((item) => (
                  <li
                    key={item.id}
                    className={clsx(
                      "menu-item relative overflow-hidden font-sans text-5xl md:text-8xl lg:text-7xl xl:text-8xl font-bold leading-[.94] tracking-tighter uppercase",
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
            </nav>
            <div className="mt-10">
              <ul className="flex items-center gap-5">
                {socialMediaList.map((social) => (
                  <li
                    key={social.id}
                    className="social-item relative overflow-hidden font-sans text-lg uppercase font-semibold tracking-tighter"
                  >
                    <Link
                      href={social.pathname}
                      className="social-link block relative text-white"
                    >
                      <span className="block text-sm md:text-base text-white">
                        {social.label}
                      </span>
                      <span className="block text-sm md:text-base text-white absolute left-0 top-full">
                        {social.label}
                      </span>
                      <span className="social-bg absolute left-0 top-0 w-full h-full bg-default -translate-x-full z-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
