import { useEffect, useState } from "react"

export default function App() {

const cycle = {
  red: "green",
  yellow: "red",
  green: "yellow"
}

const [light, setLight] = useState("red")

 useEffect(() => {
  const interval = setInterval(() => {
    setLight((prev) => cycle[prev])
  }, 2000)

  return() => clearInterval(interval)
 }, [])


  return (
    <div>
      <div
        style={{
          height: "180px",
          width: "50px",
          backgroundColor: "black",
          borderRadius: "10px",
          display: "inline-block",
          padding: "22px"
        }}>
        <div style={{
          height: "50px",
          width: "50px",
          backgroundColor: light === "red" ? "red" : "rgb(71, 68, 68)",
          borderRadius: "50%",
          marginBottom: "10px"
        }} />
        <div style={{
          height: "50px",
          width: "50px",
          backgroundColor: light === "yellow" ? "yellow" : "rgb(71, 68, 68)",
          borderRadius: "50%",
          marginBottom: "10px"
        }} />
        <div style={{
          height: "50px",
          width: "50px",
          backgroundColor: light === "green" ? "green" : "rgb(71, 68, 68)",
          borderRadius: "50%"
        }} />
      </div>
    </div>
  )
}