import { useState } from "react"
import reactLogo from "./assets/react.svg"

const SECONDS = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      {/* marquee css */}
      <div className="flex overflow-hidden select-none gap-4">
        <div className="shrink-0 flex justify-around min-w-full gap-4 animate-marquee">
          <span className="text-gray-600">{SECONDS.join(" ")}</span>
        </div>
        <div className="shrink-0 flex justify-around min-w-full gap-4 animate-marquee">
          <span aria-hidden className="text-gray-600">
            {SECONDS.join(" ")}
          </span>
        </div>
      </div>
      <section className="absolute top-0 bottom-0 left-0 right-1/2 bg-black -z-10"></section>
      <section className="absolute top-0 bottom-0 left-1/2 right-0 bg-white -z-10"></section>
    </main>
  )
}

export default App
