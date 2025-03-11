"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // Data no formato "YYYY-MM-DDTHH:mm:ss"
}

export const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
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

  // 🛠️ Inicializa como `null` para evitar erro de hidratação
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // 🛠️ Define o valor inicial apenas no cliente

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-white">Carregando...</div>; // Evita erro de hidratação
  }

  return (
    <div className="flex gap-4 text-[18px] font-bold text-white">
      <div className="flex gap-[3.5px] items-center opacity-100">
        {timeLeft.days} <p className="font-extralight text-[11px] opacity-75">days</p>
      </div>
      <div className="flex gap-[3.5px] items-center">
        {timeLeft.hours} <p className="font-extralight text-[11px] opacity-75">hours</p>
      </div>
      <div className="flex gap-[3.5px] items-center">
        {timeLeft.minutes} <p className="font-extralight text-[11px] opacity-75">minutes</p>
      </div>
      <div className="flex gap-[3.5px] items-center">
        {timeLeft.seconds} <p className="font-extralight   text-[11px] opacity-75">seconds</p>
      </div>
    </div>
  );
};
