import React, { useState, useEffect } from "react";

import "./Timer.css";

const Timer = () => {
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(0);
  let id;

  useEffect(() => {

    if(time){
    id = setInterval(() => {
      setCount(count + 1);
    }, 100);
    }

    return () => {
      clearInterval(id);
    };
  }, [count, time]);
  return (
    <div className="timer-container">
      <h1 className="timer-heading"> Timer: {count}</h1>
      <button className="timer-btn" onClick={() => setTime(!time)}>
        {time ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Timer;