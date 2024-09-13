import { SVGProps } from "react"

export default function PickleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Pickle body */}
      <ellipse cx="50" cy="50" rx="30" ry="45" fill="#4CAF50" />

      {/* Pickle texture */}
      <circle cx="40" cy="30" r="2" fill="#45a049" />
      <circle cx="60" cy="40" r="2" fill="#45a049" />
      <circle cx="45" cy="60" r="2" fill="#45a049" />
      <circle cx="55" cy="75" r="2" fill="#45a049" />

      {/* Eyes */}
      <circle cx="40" cy="45" r="5" fill="white" />
      <circle cx="60" cy="45" r="5" fill="white" />
      <circle cx="40" cy="45" r="2" fill="black" />
      <circle cx="60" cy="45" r="2" fill="black" />

      {/* Smile */}
      <path
        d="M40 60 Q50 70 60 60"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />

      {/* Headband */}
      <path
        d="M20 35 Q50 25 80 35"
        stroke="#FF5722"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  )
}
