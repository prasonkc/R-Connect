import { useState } from "react";

function DrawSection() {
  const [trailLeft, setTrailLeft] = useState([]);
  const [trailRight, setTrailRight] = useState([]);

  // Add new position to trail, keep last 30 points for smooth trail
  const addTrailPoint = (e, setTrail) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTrail((prev) => [...prev, { x, y, id: Date.now() }].slice(-30));
  };

  return (
    <div className="draw relative w-full h-[50vh] p-6 flex justify-between">
      {/* Left Card */}
      <div
        className="relative w-[20vw] h-[15vw] p-4 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.6)] bg-gradient-to-br from-gray-900 via-cyan-700 to-cyan-500 text-cyan-200 text-xl font-semibold flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => addTrailPoint(e, setTrailLeft)}
        onMouseLeave={() => setTrailLeft([])}
      >
        Left
        {trailLeft.map((point, i) => (
          <div
            key={point.id + i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: point.x,
              top: point.y,
              width: 6,
              height: 6,
              backgroundColor: "rgba(0,255,255,0.9)",
              boxShadow: "0 0 12px rgba(0,255,255,0.9)",
              transform: "translate(-50%, -50%)",
              opacity: (i + 1) / trailLeft.length, // older points fade
            }}
          />
        ))}
      </div>

      {/* Right Card */}
      <div
        className="relative w-[20vw] h-[15vw] p-4 rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.6)] bg-gradient-to-br from-gray-900 via-fuchsia-700 to-fuchsia-500 text-pink-200 text-xl font-semibold flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => addTrailPoint(e, setTrailRight)}
        onMouseLeave={() => setTrailRight([])}
      >
        Right
        {trailRight.map((point, i) => (
          <div
            key={point.id + i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: point.x,
              top: point.y,
              width: 6,
              height: 6,
              backgroundColor: "rgba(255,0,200,0.9)",
              boxShadow: "0 0 12px rgba(255,0,200,0.9)",
              transform: "translate(-50%, -50%)",
              opacity: (i + 1) / trailRight.length,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DrawSection;
