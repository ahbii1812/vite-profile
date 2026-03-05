export default function RadarAnimation({
  size = 280,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <div
      className={`radar-root ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer glow */}
      <div className="radar-glow" />

      {/* Base circle */}
      <div className="radar-base">
        {/* Concentric rings */}
        {rings.map((r) => (
          <div
            key={r}
            className="radar-ring"
            style={{
              width: `${r * 100}%`,
              height: `${r * 100}%`,
            }}
          />
        ))}

        {/* Crosshair lines */}
        <div className="radar-line radar-line-h" />
        <div className="radar-line radar-line-v" />

        {/* Sweep */}
        <div className="radar-sweep-wrapper">
          <div className="radar-sweep" />
        </div>

        {/* Center dot */}
        <div className="radar-center-dot" />

        {/* Blip dots */}
        <div
          className="radar-blip"
          style={{ top: "28%", left: "62%", animationDelay: "0s" }}
        />
        <div
          className="radar-blip"
          style={{ top: "55%", left: "38%", animationDelay: "0.6s" }}
        />
        <div
          className="radar-blip"
          style={{ top: "70%", left: "65%", animationDelay: "1.2s" }}
        />
        <div
          className="radar-blip"
          style={{ top: "38%", left: "24%", animationDelay: "0.9s" }}
        />
      </div>
    </div>
  );
}
