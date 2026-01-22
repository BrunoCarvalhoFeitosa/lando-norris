"use client"

interface CircuitBackgroundProps {
  width: string
  height: string
  fill: string
}

export const CircuitBackground = ({ width, height, fill }: CircuitBackgroundProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 267 256"
      fill="none"
    >
      <mask
        id="mask0_1946_74"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0 29.9613C0 24.4385 4.47715 19.9613 10 19.9613H42.7806C47.5947 19.9613 52.1529 17.7937 55.1913 14.0596L61.8291 5.90175C64.8675 2.1676 69.4257 0 74.2398 0H257C262.523 0 267 4.47715 267 10V246C267 251.523 262.523 256 257 256H10C4.47715 256 0 251.523 0 246V29.9613Z"
          fill={fill}
        />
      </mask>
      <g mask="url(#mask0_1946_74)">
        <rect x="-70.2637" y="-52.7217" width="430.947" height="463.954" fill={fill} />
      </g>
    </svg>
  )
}
