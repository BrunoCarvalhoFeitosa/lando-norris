"use client"
import gsap from "gsap"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { CircuitBackground } from "@/app/components/common/vectors/circuit-background"
import { calendarList } from "@/app/constants"
import { Formula1 } from "@/app/components/common/vectors/formula1"
import { ScrollTrigger } from "gsap/all"

export const CalendarSection = () => {
  const [activeCircuit, setActiveCircuit] = useState<string | null>(null)
  const [activeCountry, setActiveCountry] = useState<string | null>(null)
  const [activeCircuitName, setActiveCircuitName] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ".calendar-title > *",
      { y: 80, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".calendar-title",
          start: "top 85%",
          toggleActions: "restart none restart none"
        }
      }
    )

    gsap
      .utils
      .toArray<HTMLElement>(".calendar-highlight")
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

  useGSAP(() => {
    const section = sectionRef.current
    const follower = document.getElementById("circuit-follower")
    const rows = gsap.utils.toArray<HTMLElement>(".calendar-row")

    if (!section || !follower) {
      return
    }

    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      scale: 0.85,
      autoAlpha: 0
    })

    const showFollower = () => {
      gsap.to(follower, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.25,
        ease: "power3.out"
      })
    }

    const hideFollower = () => {
      gsap.to(follower, {
        autoAlpha: 0,
        scale: 0.85,
        duration: 0.2,
        ease: "power3.in"
      })
    }

    const cleanups: (() => void)[] = []

    rows.forEach((row) => {
      const onEnter = () => {
        const src = row.dataset.circuit
        const country = row.dataset.country
        const circuitName = row.dataset.circuitName

        if (src) {
          setActiveCircuit(src)
        }

        if (country) {
          setActiveCountry(country)
        }

        if (circuitName) {
          setActiveCircuitName(circuitName)
        }

        showFollower()
      }

      const onMove = (e: MouseEvent) => {
        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: "power3.out"
        })
      }

      const onLeave = () => {
        hideFollower()
      }

      row.addEventListener("mouseenter", onEnter)
      row.addEventListener("mousemove", onMove)
      row.addEventListener("mouseleave", onLeave)

      cleanups.push(() => {
        row.removeEventListener("mouseenter", onEnter)
        row.removeEventListener("mousemove", onMove)
        row.removeEventListener("mouseleave", onLeave)
      })
    })

    section.addEventListener("mouseleave", hideFollower)

    cleanups.push(() => {
      section.removeEventListener("mouseleave", hideFollower)
    })

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onLeave: hideFollower,
      onLeaveBack: hideFollower
    })

    cleanups.push(() => {
      st.kill()
    })

    return () => {
      hideFollower()
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black">
      <div className="px-5">
        <div className="relative h-20 md:h-41 lg:h-56 xl:h-65 2xl:h-116 overflow-hidden">
          <h2 className="calendar-title flex flex-col font-sans text-[3.6em] md:text-[8em] lg:text-[10.8em] xl:text-[13.7em] 2xl:text-[20em] uppercase leading-none text-white relative z-10">
            <strong className="font-bungee text-default opacity-0">
              2026
            </strong>
            <span className="absolute top-7 md:top-10 lg:top-14 2xl:top-38 font-bold opacity-0">
              Calendar
            </span>
          </h2>
          <span className="calendar-highlight absolute inset-0 block bg-default z-10" />
        </div>
        <div className="pt-10 2xl:px-30">
          <div className="relative">
            <h3 className="relative w-fit font-sans text-sm font-bold uppercase tracking-tighter text-white overflow-hidden">
              <span>Bringing the fight</span>
            </h3>
            <span className="calendar-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative">
            <p className="mt-6 font-sans text-2xl text-white lg:max-w-lg">
              Follow the official schedule and cheer for Lando Norris in this new season. All positive energy contributes to the 
              <strong className="ml-1.5 font-brier font-normal text-default">
                success of the campaign
              </strong>.
            </p>
            <span className="calendar-highlight absolute inset-0 block bg-default z-10" />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="font-sans text-sm uppercase tracking-tighter">
              <th className="pl-5 pb-9 text-left">Round</th>
              <th className="pl-5 md:pl-0 pb-9 text-left">Location</th>
              <th className="pb-9 text-left">When</th>
              <th className="pb-9 text-left">Laps</th>
              <th className="pb-9 text-center">Distance</th>
            </tr>
          </thead>
          <tbody>
            {calendarList.map((calendar) => (
              <tr
                key={calendar.id}
                className="calendar-row cursor-pointer hover:bg-default hover:text-black transition-colors uppercase"
                data-circuit={calendar.circuit}
                data-country={calendar.country}
                data-circuit-name={calendar.circuitName}
              >
                <td className="pl-5 py-5 border-t border-b border-[#222] text-xs md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold">
                  {calendar.id}
                </td>
                <td className="pl-5 md:pl-0 py-5 border-t border-b border-[#222] text-xs md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold flex gap-4">
                  {calendar.country}
                  <Image
                    src={calendar.flag}
                    width={38}
                    height={28}
                    alt={calendar.country}
                    className="hidden md:block w-9.5 h-7 rounded-md object-cover"
                  />
                </td>
                <td className="py-5 border-t border-b border-[#222] text-xs md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold">
                  {calendar.when}
                </td>
                <td className="py-5 border-t border-b border-[#222] text-xs md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold">
                  {calendar.laps}
                </td>
                <td className="py-5 border-t border-b border-[#222] text-xs md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                  {calendar.distance} <span className="text-xs">KM</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        id="circuit-follower"
        className="fixed top-0 left-0 pointer-events-none z-50 opacity-0"
      >
        <div className="relative">
          <CircuitBackground width="340" height="296" fill="#d2ff00" />
          <div className="absolute top-4 left-7 flex flex-col items-center">
            <Formula1 width="70" height="70" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            {activeCircuit && (
              <Image
                src={activeCircuit}
                alt={activeCountry ?? "Circuit"}
                width={300}
                height={220}
                className="object-contain circuit-image"
                key={activeCircuit}
              />
            )}
          </div>
          <div className="absolute bottom-2 left-7 flex flex-col">
            <span className="font-sans text-sm font-bold uppercase tracking-tighter leading-none">
              {activeCircuitName ?? ""}
            </span>
            <span className="font-bungee text-2xl font-bold uppercase tracking-tighter leading-none">
              {activeCountry ?? ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
