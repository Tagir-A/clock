import { useLayoutEffect, useState } from "react"

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

const SEC_OFFSET = 23 //1380
const MIN_OFFSET = 19 //1160
const HOUR_OFFSET = 11 //39600
const MIN_ONE_WIDTH = 60
const HOUR_ONE_WIDTH = 3600
const HOUR_ADJUSTMENT = 2000
const HOURS = [
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
]

function App() {
  const [count, setCount] = useState(0)
  const [secDelay, setSecDelay] = useState(0)
  const [minDelay, setMinDelay] = useState(0)
  const [hourDelay, setHourDelay] = useState(0)

  useLayoutEffect(() => {
    const now = new Date()
    const nowSeconds = now.getSeconds()
    const secWithOffset = Math.abs(nowSeconds - SEC_OFFSET + 60)
    const nowMin = now.getMinutes()
    const minWithOffset = Math.abs(nowMin - MIN_OFFSET + 60)
    const nowHours = now.getHours()
    const hourWithOffset = Math.abs(nowHours - HOUR_OFFSET + 24)
    setSecDelay(secWithOffset)
    setMinDelay(minWithOffset * MIN_ONE_WIDTH + nowSeconds / 2)
    setHourDelay(
      hourWithOffset * HOUR_ONE_WIDTH - HOUR_ADJUSTMENT + nowMin * 60
    )
  }, [])

  return (
    <main>
      {/* marquee seconds */}
      <div className="flex overflow-hidden select-none gap-4 text-3xl">
        <div
          style={{
            animationDelay: `-${secDelay}s`,
          }}
          className="shrink-0 flex justify-around min-w-full gap-0.5 animate-marquee"
        >
          <span className="text-gray-600">{SECONDS.join(" ")}</span>
        </div>
        <div
          style={{
            animationDelay: `-${secDelay}s`,
          }}
          className="shrink-0 flex justify-around min-w-full gap-0.5 animate-marquee"
        >
          <span aria-hidden className="text-gray-600">
            {SECONDS.join(" ")}
          </span>
        </div>
      </div>

      {/* marquee minutes */}
      <div className="flex overflow-hidden select-none gap-4 text-4xl">
        <div
          style={{
            animationDelay: `-${minDelay}s`,
          }}
          className={`shrink-0 flex justify-around min-w-full gap-0.5 animate-marqueeMin `}
        >
          <span className="text-gray-600">{SECONDS.join(" ")}</span>
        </div>
        <div
          style={{
            animationDelay: `-${minDelay}s`,
          }}
          className={`shrink-0 flex justify-around min-w-full gap-0.5 animate-marqueeMin `}
        >
          <span aria-hidden className="text-gray-600">
            {SECONDS.join(" ")}
          </span>
        </div>
      </div>

      {/* marquee hours */}
      <div className="flex overflow-hidden select-none gap-4 text-6xl">
        <div
          style={{
            animationDelay: `-${hourDelay}s`,
          }}
          className="shrink-0 flex justify-around min-w-full gap-4 animate-marqueeHour"
        >
          <span className="text-gray-600">{HOURS.join(" ")}</span>
        </div>
        <div
          style={{
            animationDelay: `-${hourDelay}s`,
          }}
          className="shrink-0 flex justify-around min-w-full gap-4 animate-marqueeHour"
        >
          <span aria-hidden className="text-gray-600">
            {HOURS.join(" ")}
          </span>
        </div>
      </div>
      <section className="absolute top-0 bottom-0 left-0 right-1/2 bg-black -z-10"></section>
      <section className="absolute top-0 bottom-0 left-1/2 right-0 bg-white -z-10"></section>
    </main>
  )
}

export default App
