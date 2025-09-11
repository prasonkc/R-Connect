import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

import DrawSection from "./components/DrawSection"
import Generator from "./components/Generator"

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
