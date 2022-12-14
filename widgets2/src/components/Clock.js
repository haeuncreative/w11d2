import React, { useEffect, useState } from "react";


export const ClockToggle = props => {
    return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={props.toggleClock}
      >
        Toggle Clock
      </button>
    )
} 

export default function Clock(props) {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  }
  
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  
  const timezone = (time) => {
    time.toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
    time.replace(/[^A-Z]/g, "") // Strip out all but capitals
    time.slice(3); // Eliminate initial GMT
  }


  useEffect(() => {  
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    }

  }, [])


    return (
      <section className="clock-section">
        <h1>Clock</h1>
        <div className='clock'>
          <p>
            <span>
              Time:
            </span>
            <span>
              {hours}:{minutes}:{seconds} {timezone}
            </span>
          </p>
          <p>
            <span>
              Date: 
            </span>
            <span>
              {time.toDateString()}
            </span>
          </p>
        </div>
      </section>
    );
}

//export {Clock, ClockToggle};
// export default Clock;
// export default ClockToggle;