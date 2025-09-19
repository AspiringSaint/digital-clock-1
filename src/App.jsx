import { useState, useEffect } from "react"

const App = () => {

  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className='clock-container'>
      <div className="clock-card">
        <h1 className="clock-time">{formattedTime}</h1>
        <p className="clock-date">{formattedDate}</p>
        <button
          className="toggle-button"
          onClick={() => setIs24Hour((prev) => !prev)}
        >
          Switch to {is24Hour ? "12h" : "24h"}
        </button>
      </div>
    </div>
  )
}

export default App