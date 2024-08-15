import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

const box = [
  {
    id: "1",
    title: "NEW YORK",
  },
  {
    id: "2",
    title: "SAN FRANCISCO",
  },
  {
    id: "3",
    title: "SAN ANTONIO",
  },
  {
    id: "4",
    title: "NASHVILLE",
  },
  {
    id: "5",
    title: "HOUSTON",
  },
  {
    id: "6",
    title: "NEW ORLEANS",
  },
  {
    id: "7",
    title: "OAKLHOMA CITY",
  },
  {
    id: "8",
    title: "DETROIT",
  },
  {
    id: "9",
    title: "NAPOLEON",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-14 relative">
        {box.map(({ title, id }) => (
          <div
            key={id}
            className="item text-[70px] border-t border-black h-[100px] w-full relative"
          >
            {title}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
