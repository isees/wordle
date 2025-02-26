import { useEffect, useState } from 'react';
import { Character } from '@/types';

interface VictoryBannerProps {
  targetCharacter: Character;
  attempts: number;
}

const getNextDailyTime = () => {
  const now = new Date();
  const next = new Date(now);
  next.setUTCDate(now.getUTCDate() + 1);
  next.setUTCHours(0, 0, 0, 0);
  return next;
};

export const VictoryBanner = ({ targetCharacter, attempts }: VictoryBannerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const nextDaily = getNextDailyTime().getTime();
      return Math.max(0, nextDaily - now);
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="victory-banner p-6 bg-white rounded-xl flex flex-col justify-center items-center">
      <h2 className="md:text-3xl text-2xl font-bold text-red-500 text-center">Congratulations! 🎉</h2>
      <div className="mt-6 text-center">
        <p className="md:text-xl text-sm text-gray-500 font-bold">
          Next character available in
        </p>
        <div className="md:text-5xl text-3xl font-bold text-gray-700 font-mono mt-2">
          {formatTime(timeLeft)}
        </div>
        <p className="mt-2 md:text-sm text-gray-500 font-bold">
          UTC+00:00
        </p>
      </div>
    </section>
  );
};