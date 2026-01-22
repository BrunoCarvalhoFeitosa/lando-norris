"use client"

interface TrophieSingaporeProps {
  width: string
  height: string
  stroke: string
}

export const TrophieSingapore = ({ width, height, stroke }: TrophieSingaporeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      viewBox="0 0 25 55"
      width={width}
      height={height}
    >
      <path
        d="m15.25 12.34c0 0 0-1.16 0.29-3.13 0.17-3.18-3.77-7.78-3.77-7.78 0 0 2.48 0.18 8.06 3.13 5.57 2.95 4.29 4.04 2.57 9.39-1.71 5.35-4.37 16.6-4.54 24.83-0.17 8.23 1.03 11.25 1.03 13.35 0 2.09-13.86 1.47-13.64-0.63 0.51-4.88 1.63-8.61 1.72-13.26 0.08-4.66 0.51-11.02-1.72-17.85-2.23-6.83-4.12-14.51-2.83-16.06 1.29-1.56 8.32-2.9 8.32-2.9 0 0-3.35 4.45-3.43 8.1"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m2.42 4.33c-1.38 3.18 4.03 3.25 5.57 6.2 1.54 2.95 2.14 9.16 3.26 12.96 1.11 3.8 1.2 14.59 1.03 18.16"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m14.34 41.65c-0.78-12.65 1.28-16.22 2.83-21.65 1.54-5.43 2.4-8.3 3.94-9.47 1.55-1.16 3.52-2.88-3.47-7.06"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m11 22.56l2.96-10.13c0.11-0.41 0.57-0.65 1.02-0.56l0.59 0.12c0.28 0.06 0.48 0.28 0.49 0.55l0.19 10.45"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m17.85 41.35c-4.22 0.57-6.85 0.4-11.06-0.25"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m3.14 13.15c1.09 2.4 2.4 2.54 3.26 3.54 0.85 1 0.87 2.6 0.87 2.6 0 0-1.86-0.88-3.16-2.56"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m4.79 18.98c1.09 2.41 1.87 2.4 2.72 3.4 0.86 1.01 0.77 2.59 0.77 2.59 0 0-1.06-0.42-2.35-2.1"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
      <path
        d="m6.51 25.71c0.34 0.7 0.98 1.25 1.84 2.25 0.85 1 0.77 2.59 0.77 2.59 0 0-0.97-0.39-2.27-2.07"
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth=".9"
      />
    </svg>
  )
}
