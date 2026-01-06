function Building({ x, width, floors, windowsPerFloor, isHovered, delay = 0 }) {
  return (
    <div
      className="absolute bottom-0"
      style={{
        left: `${x}%`,
        width: `${width}%`,
        height: `${floors * 8 + 4}%`,
      }}
    >
      {/* Building body */}
      <div className="absolute inset-0 bg-slate-800 border-x border-t border-slate-600/30" />

      {/* Windows grid */}
      <div
        className="absolute inset-2 grid gap-1"
        style={{
          gridTemplateRows: `repeat(${floors}, 1fr)`,
          gridTemplateColumns: `repeat(${windowsPerFloor}, 1fr)`,
        }}
      >
        {Array.from({ length: floors * windowsPerFloor }).map((_, index) => {
          const row = Math.floor(index / windowsPerFloor)
          const col = index % windowsPerFloor
          const windowDelay = delay + (row * 0.02) + (col * 0.01)

          return (
            <div
              key={index}
              className="rounded-sm transition-all"
              style={{
                backgroundColor: isHovered ? 'rgba(251, 191, 36, 0.9)' : 'rgba(51, 65, 85, 0.8)',
                boxShadow: isHovered
                  ? '0 0 12px rgba(251, 191, 36, 0.7), 0 0 24px rgba(251, 191, 36, 0.4)'
                  : 'none',
                transitionDuration: '0.2s',
                transitionDelay: isHovered ? `${windowDelay}s` : '0s',
                transitionTimingFunction: 'ease-out',
              }}
            />
          )
        })}
      </div>

      {/* Roof accent */}
      <div className="absolute -top-1 left-0 right-0 h-1 bg-slate-600" />
    </div>
  )
}

export function Building3D({ isHovered = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950" />

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
            }}
          />
        ))}
      </div>

      {/* Buildings - Back row (darker, smaller) */}
      <Building x={5} width={12} floors={6} windowsPerFloor={3} isHovered={isHovered} delay={0.3} />
      <Building x={20} width={10} floors={8} windowsPerFloor={3} isHovered={isHovered} delay={0.2} />
      <Building x={70} width={14} floors={7} windowsPerFloor={4} isHovered={isHovered} delay={0.25} />
      <Building x={88} width={10} floors={5} windowsPerFloor={3} isHovered={isHovered} delay={0.35} />

      {/* Buildings - Front row (brighter, taller) */}
      <Building x={-2} width={18} floors={10} windowsPerFloor={5} isHovered={isHovered} delay={0.1} />
      <Building x={32} width={16} floors={12} windowsPerFloor={4} isHovered={isHovered} delay={0} />
      <Building x={52} width={14} floors={9} windowsPerFloor={4} isHovered={isHovered} delay={0.15} />
      <Building x={78} width={16} floors={11} windowsPerFloor={4} isHovered={isHovered} delay={0.05} />

      {/* Ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-600/50" />

      {/* Fog/atmosphere overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent" />
    </div>
  )
}
