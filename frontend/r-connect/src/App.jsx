import { useEffect } from "react";
import "./App.css";

function DrawSection(){
  return(
  <>
  <div className="draw">
    <div className="bg-black w-[20vw] h-[15vw]"></div>
    <div className="bg-black w-[20vw] h-[15vw]"></div>
  </div>
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
      <p className="bg-amber-300">Hi </p>
      <DrawSection/>
    </>
  );
}

export default App;
