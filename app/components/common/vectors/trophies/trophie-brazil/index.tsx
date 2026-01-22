"use client"

interface TrophieBrazilProps {
  width: string
  height: string
  stroke: string
}

export const TrophieBrazil = ({ width, height, stroke }: TrophieBrazilProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      viewBox="0 0 50 51"
      width={width}
      height={height}
    >
      <path
        d="m25.5 49.5c12.98 0 23.5-10.52 23.5-23.5 0-12.98-10.52-23.5-23.5-23.5-12.98 0-23.5 10.52-23.5 23.5 0 12.98 10.52 23.5 23.5 23.5z"
        fill="none"
        stroke="#d2ff00"
        strokeMiterlimit={10}
      />
      <path
        d="m25.5 41.19c9.77 0 17.7-7.92 17.7-17.7 0-9.77-7.93-17.7-17.7-17.7-9.78 0-17.7 7.93-17.7 17.7 0 9.78 7.92 17.7 17.7 17.7z"
        fill="none"
        stroke="#d2ff00"
        strokeMiterlimit={10}
      />
      <path
        d="m25.5 42.04c10.68 0 19.33-8.65 19.33-19.33 0-10.68-8.65-19.34-19.33-19.34-10.68 0-19.33 8.66-19.33 19.34 0 10.68 8.65 19.33 19.33 19.33z"
        fill="none"
        stroke="#d2ff00"
        strokeMiterlimit={10}
      />
    </svg>
  )
}
