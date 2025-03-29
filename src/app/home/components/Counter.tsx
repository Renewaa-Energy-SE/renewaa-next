"use client";
import { useState, useEffect, useRef } from "react";

const Counter = ({ targetCount }: { targetCount: number }) => {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const duration = 1500;
  const incrementTime = duration / targetCount;
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartCount(true);
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let currentCount = 0;
    if (startCount) {
      const counter = setInterval(() => {
        currentCount += 1;
        setCount(currentCount);
        if (currentCount === targetCount) {
          clearInterval(counter);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [startCount]);

  return (
    <div className="count-outer count-box" ref={counterRef}>
      <span className="count-text">{count}</span>
    </div>
  );
};

export default Counter;
