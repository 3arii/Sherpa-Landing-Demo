function Building({ x, width, floors, windowsPerFloor, isHovered, delay = 0 }) {
  const windowCount = floors * windowsPerFloor

  return (
    <div
      className="absolute bottom-0"
      style={{
        left: `${x}%`,
        width: `${width}%`,
        height: `${floors * 12 + 8}%`,
        willChange: isHovered ? 'auto' : 'auto',
      }}
    >
      {/* Building body with apartment-style look */}
      <div className="absolute inset-0 bg-slate-700 border-x border-t border-slate-500/40" />

      {/* Windows grid - using CSS classes for better performance */}
      <div
        className="absolute inset-3 grid gap-2"
        style={{
          gridTemplateRows: `repeat(${floors}, 1fr)`,
          gridTemplateColumns: `repeat(${windowsPerFloor}, 1fr)`,
        }}
      >
        {Array.from({ length: windowCount }).map((_, index) => (
          <div
            key={index}
            className={`rounded-sm transition-colors duration-200 ${isHovered ? 'bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-slate-500/70'}`}
            style={{
              transitionDelay: isHovered ? `${delay + index * 0.015}s` : '0s',
            }}
          />
        ))}
      </div>

      {/* Flat roof for apartment building look */}
      <div className="absolute -top-2 left-0 right-0 h-2 bg-slate-600" />
    </div>
  )
}

export function Building3D({ isHovered = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Evening sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900" />

      {/* Stars - static positions for performance */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-white/20 rounded-full" style={{ left: '15%', top: '12%' }} />
        <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full" style={{ left: '25%', top: '8%' }} />
        <div className="absolute w-1 h-1 bg-white/15 rounded-full" style={{ left: '45%', top: '15%' }} />
        <div className="absolute w-0.5 h-0.5 bg-white/25 rounded-full" style={{ left: '65%', top: '5%' }} />
        <div className="absolute w-1 h-1 bg-white/20 rounded-full" style={{ left: '80%', top: '18%' }} />
        <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full" style={{ left: '92%', top: '10%' }} />
      </div>

      {/* Apartment buildings - taller but still apartment-style */}
      <Building x={2} width={20} floors={5} windowsPerFloor={4} isHovered={isHovered} delay={0.2} />
      <Building x={25} width={22} floors={6} windowsPerFloor={5} isHovered={isHovered} delay={0} />
      <Building x={50} width={18} floors={5} windowsPerFloor={4} isHovered={isHovered} delay={0.1} />
      <Building x={72} width={24} floors={6} windowsPerFloor={5} isHovered={isHovered} delay={0.05} />

      {/* Ground/street */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-800" />

      {/* Subtle fog overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/60 to-transparent" />
    </div>
  )
}
