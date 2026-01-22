"use client"

interface GridProps {
  width: string
  height: string
  stroke: string
}

export const Grid = ({ width, height, stroke }: GridProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 407 411"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
