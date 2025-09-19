import { useState, useEffect } from "react"
import './App.css'

const App = () => {

  // State to hold current time (updates every second)
  const [time, setTime] = useState(new Date());

  // State to control whether to use 24-hour format
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    // Set up an interval that updates the time every second.
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts.
    return () => clearInterval(timer);
  }, []);

  // Format the current time depending on 12h/24h preference.
  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour   // if is24Hour = true, use 24-hour clock
  })

  // Format the date (weekday, month, day, year)
  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className='clock-container'>
      <div className="clock-card">
        {/* Current time displayed */}
        <h1 className="clock-time">{formattedTime}</h1>

        {/* Current date displayed */}
        <p className="clock-date">{formattedDate}</p>

        {/* Button toggles between 12h and 24h */}
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