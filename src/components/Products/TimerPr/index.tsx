"use client";

interface timerProps {
  bg: string;
  border: string;
  sizeText: string;
  sizeTextMid: string;
  size: string;
}

import { useEffect, useState } from "react";

export const TimerPr: React.FC<timerProps> = ({bg, border, sizeText, sizeTextMid, size}) => {
  const [targetDate, setTargetDate] = useState<string | null>(null);

  useEffect(() => {
    const randomDays = Math.floor(Math.random() * (60 - 25 + 1)) + 25;
    
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + randomDays);
    
    setTargetDate(futureDate.toISOString());
  }, []);

  const calculateTimeLeft = () => {
    if (!targetDate) return null;

    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    if (!targetDate) return;

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-[#9CA3AF]">Carregando...</div>;
  }

  return (
    <div className={`flex gap-1 ${sizeText} text-[#4B5563] font-semibold items-center`}>
      <div className={`${bg} ${size} flex items-center justify-center rounded-md border ${border}`}>
        {timeLeft.days.toString().padStart(2, "0")}
      </div>
      <div className={`${bg} ${size} flex items-center justify-center rounded-md border ${border}`}>
        {timeLeft.hours.toString().padStart(2, "0")}
      </div>
      <div className={`${bg} ${size} flex items-center justify-center rounded-md border ${border}`}>
        {timeLeft.minutes.toString().padStart(2, "0")}
      </div>
      <p className={`${sizeTextMid} font-normal text-[#030712] mx-[5px]`}>:</p>
      <div className={`${bg} ${size} flex items-center justify-center rounded-md border ${border}`}>
        {timeLeft.seconds.toString().padStart(2, "0")}
      </div>
      <p className="ml-3 text-[#9CA3AF] text-[11px] font-normal">
        Remains until the end of the offer
      </p>
    </div>
  );
};
