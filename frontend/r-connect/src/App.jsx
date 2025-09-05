import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <p className="bg-amber-300">Hi </p>
    </>
  );
}

export default App;
