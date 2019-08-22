import React, { useState, useEffect } from 'react';

const CountDown = ({ minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [time, setTime] = useState({
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (paused || over) return;
    if (time.minutes == 0 && time.seconds == 0) {
      setOver(true);
    }
    else if (time.seconds == 0) {
      setTime({
        minutes: time.minutes - 1,
        seconds: 59
      })
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
    }
  };

  const reset = () => {
    console.log(minutes);
    setTime({
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <>
      <p>{`${time.minutes.toString().padStart(2, '0')} : ${time.seconds.toString().padStart(2, '0')}`}</p>
      <p>{over ? "Time's up!" : 'Timer Running'}</p>
      {!over && <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>}
      <button onClick={() => reset()}>Restart</button>
    </>
  )
}

export default CountDown;