"use client"
import { useEffect, useState } from "react"

const TARGET_DATE = new Date("2026-03-06T05:00:00Z")

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = TARGET_DATE.getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const pad = (value: number) => String(value).padStart(2, "0")

  return (
    <section className="py-20 w-full bg-black">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="flex font-sans font-bold text-white text-3xl md:text-4xl tracking-tight">
            <Time value={timeLeft.days} label="D" />
            <Time value={timeLeft.hours} label="H" />
            <Time value={timeLeft.minutes} label="M" />
            <Time value={timeLeft.seconds} label="S" />
          </div>
        </div>
        <h3 className="relative w-fit font-sans text-sm font-bold uppercase tracking-tighter text-white overflow-hidden">
          <span>Bringing the fight</span>
        </h3>
      </div>
    </section>
  )
}

const Time = ({ value, label }: { value: number; label: string }) => {
  const padded = String(value).padStart(2, "0")

  return (
    <span className="flex items-baseline">
      <span>
        {padded}
      </span>
      <span className="ml-0.5 mr-2 text-[#1c1c1c]">
        {label}
      </span>
    </span>
  )
}
