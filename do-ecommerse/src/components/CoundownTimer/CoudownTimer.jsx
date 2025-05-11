import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';


const CountdownTimer = ({ targetDate }) => {
  const { box, title} = styles;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Hàm tính toán thời gian còn lại
  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / (1000 * 60)) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        Days: 0,
        Hours: 0,
        Minutes: 0,
        Seconds: 0,
      };
    }

    return timeLeft;
  }

  // useEffect để cập nhật mỗi giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Hàm format số thành 2 chữ số (01, 09, ...)
  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  // Tạo các phần tử hiển thị
  const timerComponents = [];
  
  Object.keys(timeLeft).forEach((interval) => {
    if( timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span key={interval} className={box}> 
          {formatNumber(timeLeft[interval])} <span className={title}>{interval}</span>{''}
        </span>
      )
    }
  });

  return timerComponents;
};

export default CountdownTimer;
