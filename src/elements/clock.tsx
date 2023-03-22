import React, { useState, useEffect } from 'react';
import { convertTo25HourFormat } from './betterclock';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const betterTime = convertTo25HourFormat(formattedTime);

  return (
    <div className='clock orange-text'>
      Actual time: {formattedTime}
      <br></br>
      Better time: {betterTime}
    </div>
    );
};

export default Clock;