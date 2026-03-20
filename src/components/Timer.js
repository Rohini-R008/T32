import React, { useEffect, useState } from "react";

const Timer = ({ active }) => {
  const [time, setTime] = useState(600);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setTime(t => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  return <div>{time}s</div>;
};

export default Timer;