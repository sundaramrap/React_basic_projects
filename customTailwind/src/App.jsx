import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="bg-green-800">
        This is Tailwind implementation with props
      </h1>
      {/* <h1 className="text-3xsl bg-purple-600 p-3 rounded-md font-italic ">
        Card with Tailwind
      </h1> */}
      <Card
        userName="Kawaiine"
        profession="Soft Engg"
        city="Patna"
        urlpic="https://images.pexels.com/photos/10585387/pexels-photo-10585387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        userName="Hirosan"
        profession="Art tech"
        city="Tokyo"
        urlpic="https://images.pexels.com/photos/12370483/pexels-photo-12370483.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />{" "}
      <Card
        userName="Hanasan"
        city="Seoul"
        urlpic="https://images.pexels.com/photos/13864346/pexels-photo-13864346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
    </div>
  );
}

export default App;
