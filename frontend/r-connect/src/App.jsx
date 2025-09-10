import { useEffect } from "react";
import "./App.css";

function DrawSection() {
  return (
    <div className="draw relative w-full h-[50vh] p-6 flex justify-between">
      <div className="w-[20vw] h-[15vw] rounded-2xl shadow-lg bg-black text-white text-xl font-semibold" />
      <div className="w-[20vw] h-[15vw] rounded-2xl shadow-lg bg-black text-white text-xl font-semibold" />
    </div>
  );
}

function Generator(){
  return(<>
    <div className="h-[40vh] w-[10vw] bg-black">Generator</div>
  </>)
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
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8 drop-shadow-lg">
          Welcome!
        </h1>
        <Generator />
        <DrawSection />
      </div>
    </>
  );
}

export default App;
