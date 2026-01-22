"use client"
import { Fragment, useEffect, useId, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, useTime, useAnimationFrame } from "framer-motion"

interface HeroCursorLensProps {
  parallaxStrength?: number
  blobSize?: number
  previewCursor?: boolean
}

const NUM_AUTO_BLOBS = 25

export const HeroSection = ({
  parallaxStrength = 3,
  blobSize = 140,
  previewCursor = false
}: HeroCursorLensProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const isActive = isHovering || previewCursor
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseXRatio = useMotionValue(0)
  const mouseYRatio = useMotionValue(0)
  const smooth = { stiffness: 300, damping: 40 }
  const smoothX = useSpring(mouseXRatio, smooth)
  const smoothY = useSpring(mouseYRatio, smooth)
  const baseX = useTransform(smoothX, [-1, 1], [parallaxStrength, -parallaxStrength])
  const baseY = useTransform(smoothY, [-1, 1], [parallaxStrength, -parallaxStrength])
  const revealX = useTransform(smoothX, [-1, 1], [parallaxStrength * 2, -parallaxStrength * 2])
  const revealY = useTransform(smoothY, [-1, 1], [parallaxStrength * 2, -parallaxStrength * 2])
  const baseImage = "/images/hero/image-lando-norris.webp"
  const revealImage = "/images/hero/image-lando-norris-original-helmet.webp"

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) {
        return
      }
      const rect = containerRef.current.getBoundingClientRect()
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      setIsHovering(inside)

      if (!inside) {
        mouseXRatio.set(0)
        mouseYRatio.set(0)
        return
      }

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      mouseX.set(x)
      mouseY.set(y)
      mouseXRatio.set((x / rect.width) * 2 - 1)
      mouseYRatio.set((y / rect.height) * 2 - 1)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  const wake = (index: number) => ({
    x: useSpring(mouseX, {
      stiffness: 250 - index * 30,
      damping: 30 + index * 4
    }),
    y: useSpring(mouseY, {
      stiffness: 250 - index * 30,
      damping: 30 + index * 4
    })
  })

  const head = wake(0)
  const body1 = wake(1)
  const body2 = wake(2)
  const time = useTime()
  const wobble = blobSize * 0.35
  const satX = useTransform(time, t => head.x.get() + Math.sin(t * 0.002) * wobble)
  const satY = useTransform(time, t => head.y.get() + Math.cos(t * 0.002) * wobble)

  const autoBlobs = useRef(
    [...Array(NUM_AUTO_BLOBS)].map(() => ({
      mainX: useMotionValue(0),
      mainY: useMotionValue(0),
      satX: useMotionValue(0),
      satY: useMotionValue(0),
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      speedX: 0.0005 + Math.random() * 0.0005,
      speedY: 0.0003 + Math.random() * 0.0005,
      radius: blobSize * 0.6
    }))
  ).current

  useAnimationFrame((t) => {
    if (!containerRef.current) {
      return
    }

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    autoBlobs.forEach((b) => {
      const mainX = ((Math.sin(t * b.speedX + b.phaseX) + 1) / 2) * width
      const mainY = ((Math.cos(t * b.speedY + b.phaseY) + 1) / 2) * height
      b.mainX.set(mainX)
      b.mainY.set(mainY)

      const satRadius = blobSize * 0.35
      const satX = mainX + Math.sin(t * 0.002 + b.phaseX) * satRadius
      const satY = mainY + Math.cos(t * 0.002 + b.phaseY) * satRadius
      b.satX.set(satX)
      b.satY.set(satY)
    })
  })

  const scrollY = useMotionValue(0)
  const minInset = 50
  const maxInset = 152
  const insetTop = useTransform(scrollY, [0, 500], [maxInset, minInset])
  const insetTopStr = useTransform(insetTop, v => `${v}px 0px 0`)

  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollY])

  const maskId = useId()
  const filterId = useId()
  const imageLayer: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "contain",
    willChange: "transform"
  }

  return (
    <section className="w-full h-dvh bg-[#ddd] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full relative">
        <div ref={containerRef} className="relative w-full h-full overflow-hidden z-10">
          <svg width={0} height={0} style={{ position: "absolute" }}>
            <defs>
              <filter id={filterId}>
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
              <mask id={maskId}>
                <g filter={`url(#${filterId})`}>
                  <motion.g animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {isActive && (
                      <>
                        <motion.circle cx={satX} cy={satY} r={blobSize * 0.6} fill="white" />
                        <motion.circle cx={head.x} cy={head.y} r={blobSize * 0.8} fill="white" />
                        <motion.circle cx={body1.x} cy={body1.y} r={blobSize * 0.6} fill="white" />
                        <motion.circle cx={body2.x} cy={body2.y} r={blobSize * 0.45} fill="white" />
                      </>
                    )}
                    {autoBlobs.map((b, i) => (
                      <Fragment key={i}>
                        <motion.circle cx={b.satX} cy={b.satY} r={blobSize * 0.6} fill="white" />
                        <motion.circle cx={b.mainX} cy={b.mainY} r={blobSize * 0.8} fill="white" />
                        <motion.circle cx={b.mainX} cy={b.mainY} r={blobSize * 0.45} fill="white" />
                      </Fragment>
                    ))}
                  </motion.g>
                </g>
              </mask>
            </defs>
          </svg>
          <motion.div style={{ ...imageLayer, backgroundImage: `url(${baseImage})`, x: baseX, y: baseY }} />
          <motion.div
            className="hidden lg:block"
            style={{
              ...imageLayer,
              width: "var(--helmet-width)",
              height: "var(--helmet-height)",
              inset: "var(--helmet-inset)",
              backgroundImage: `url(${revealImage})`,
              x: revealX,
              y: revealY,
              mask: `url(#${maskId})`,
              WebkitMask: `url(#${maskId})`,
              pointerEvents: "none"
            }}
          />
        </div>
      </div>
    </section>
  )
}
