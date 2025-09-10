import { useEffect } from "react";
import "./App.css";

function DrawSection() {
  return (
    <div className="draw relative w-full h-[50vh] p-6 flex justify-between">
      <div className="w-[20vw] h-[15vw] rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.6)] bg-gradient-to-br from-gray-900 via-cyan-700 to-cyan-500 text-cyan-200 text-xl font-semibold flex items-center justify-center">
        Left
      </div>
      <div className="w-[20vw] h-[15vw] rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.6)] bg-gradient-to-br from-gray-900 via-fuchsia-700 to-fuchsia-500 text-pink-200 text-xl font-semibold flex items-center justify-center">
        Right
      </div>
    </div>
  );
}

function Generator() {
  return (
    <div className="h-[40vh] w-[10vw] rounded-xl shadow-[0_0_20px_rgba(0,255,128,0.6)] bg-gradient-to-b from-gray-900 via-emerald-700 to-emerald-500 text-emerald-200 flex items-center justify-center font-semibold">
      Generator
    </div>
  );
}

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((e) => console.log(e));
  // }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
          Welcome!
        </h1>
        <Generator />
        <DrawSection />
      </div>
    </>
  );
}

export default App;
