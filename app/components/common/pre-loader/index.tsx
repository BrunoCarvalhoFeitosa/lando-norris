"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export const PreLoader = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioUnlocked = useRef(false)

  useEffect(() => {
    const unlockAudio = () => {
      if (!audioRef.current || audioUnlocked.current) {
        return
      }

      audioRef.current.play().then(() => {
        audioRef.current!.pause()
        audioRef.current!.currentTime = 0
        audioUnlocked.current = true
      })

      window.removeEventListener("pointerdown", unlockAudio)
    }

    window.addEventListener("pointerdown", unlockAudio)

    return () => {
      window.removeEventListener("pointerdown", unlockAudio)
    }
  }, [])

  useEffect(() => {
    if (!rootRef.current || !counterRef.current) {
      return
    }

    const layers = gsap.utils.toArray<HTMLElement>(
      rootRef.current.querySelectorAll("[class^='pre-loader-layer']")
    )

    const counter = { value: 0 }
    gsap.set(layers, { xPercent: 0 })
    gsap.set(counterRef.current, { x: 0 })
    const tl = gsap.timeline({ delay: 0.5 })

    tl.to(counter, {
      value: 100,
      duration: 4,
      ease: "none",
      onUpdate: () => {
        counterRef.current!.innerText = `${Math.floor(counter.value)}%`
      },
      onComplete: () => {
        if (audioRef.current && audioUnlocked.current) {
          audioRef.current.currentTime = 0
          audioRef.current.play()
        }
      }
    })

    tl.addLabel("counterDone")

    const textDuration = 0.9

    tl.to(
      counterRef.current,
      {
        x: "110vw",
        duration: textDuration,
        ease: "power4.inOut"
      },
      "counterDone"
    )

    tl.addLabel("layersOut", `counterDone+=${textDuration}`)

    tl.to(
      layers,
      {
        xPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        stagger: 0.25
      },
      "layersOut"
    )

    tl.to(rootRef.current, {
      autoAlpha: 0,
      duration: 0.6,
      pointerEvents: "none"
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 w-full h-dvh overflow-hidden z-9999"
    >
      <audio ref={audioRef} preload="auto">
        <source src="/audio/f1.mp3" type="audio/mp3" />
      </audio>
      <div className="relative w-full h-full flex flex-col">
        <div className="pre-loader-layer-1 flex-1 bg-black" />
        <div className="pre-loader-layer-2 flex-1 bg-black" />
        <div className="pre-loader-layer-3 flex-1 bg-black" />
        <div className="pre-loader-layer-4 flex-1 bg-black" />
        <div className="pre-loader-layer-5 flex-1 bg-black" />
        <span
          ref={counterRef}
          className="absolute bottom-2 right-6 font-bungee text-[5.5em] md:text-[9em] lg:text-[11em] 2xl:text-[16em] leading-none text-white font-extrabold z-10"
        >
          0%
        </span>
      </div>
    </div>
  )
}
