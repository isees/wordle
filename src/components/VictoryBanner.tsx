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
    <section className="victory-banner mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">Congratulations! 🎉</h2>

      <div className="flex items-center gap-6">
        <img
          src={`/characters/${targetCharacter.playerId}.jpg`}
          alt={targetCharacter.playerName}
          className="w-24 h-24 rounded-full object-cover border-4 border-emerald-200"
        />

        <div className="space-y-2">
          <p className="text-lg font-semibold text-emerald-700">
            {targetCharacter.playerName}
          </p>
          <p className="text-sm text-emerald-600">
            Guessed in {attempts} {attempts === 1 ? 'attempt' : 'attempts'}
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-emerald-600 mb-1">
          Next character available in
        </p>
        <div className="text-3xl font-bold text-emerald-800 font-mono">
          {formatTime(timeLeft)}
        </div>
        <p className="mt-2 text-xs text-emerald-500">
          UTC+00:00
        </p>
      </div>
    </section>
  );
};