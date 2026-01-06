export default function K2Logo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* K2 Mountain - distinctive sharp peak with secondary peak */}
      <path
        d="M12 2L7 12L2 20H10L12 16L14 20H22L17 12L12 2Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M12 2L17 12L22 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2L7 12L2 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary peak */}
      <path
        d="M7 12L10 7L13 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Snow cap detail */}
      <path
        d="M10 6L12 2L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base line */}
      <path
        d="M2 20H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
