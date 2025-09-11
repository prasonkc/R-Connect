function DrawSection() {
  const [posLeft, setPosLeft] = useState({ x: -999, y: -999 });
  const [posRight, setPosRight] = useState({ x: -999, y: -999 });

  function glowEffect(e, setPos) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div className="draw relative w-full h-[50vh] p-6 flex justify-between">
      {/* Left Card */}
      <div
        className="relative w-[20vw] h-[15vw] p-10 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.6)] bg-gradient-to-br from-gray-900 via-cyan-700 to-cyan-500 text-cyan-200 text-xl font-semibold flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => glowEffect(e, setPosLeft)}
        onMouseLeave={() => setPosLeft({ x: -999, y: -999 })}
      >
        Left
        {/* Glow inside Left Card */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full pointer-events-none blur-3xl opacity-60 bg-cyan-400 transition duration-200"
          style={{
            left: posLeft.x - 100,
            top: posLeft.y - 100,
          }}
        />
      </div>

      {/* Right Card */}
      <div
        className="relative w-[20vw] h-[15vw] p-10 rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.6)] bg-gradient-to-br from-gray-900 via-fuchsia-700 to-fuchsia-500 text-pink-200 text-xl font-semibold flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => glowEffect(e, setPosRight)}
        onMouseLeave={() => setPosRight({ x: -999, y: -999 })}
      >
        Right
        {/* Glow inside Right Card */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full pointer-events-none blur-3xl opacity-60 bg-pink-400 transition duration-200"
          style={{
            left: posRight.x - 100,
            top: posRight.y - 100,
          }}
        />
      </div>
    </div>
  );
}
