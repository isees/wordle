import { useEffect, useState } from 'react';
import { GameRecord, loadGameHistory } from '../lib/storage';
import { getCharacterById } from '@/data/onepiece/characters';

interface UserHistoryProps {
  userId: string;
}

export const UserHistory = ({ userId }: UserHistoryProps) => {
  const [history, setHistory] = useState<GameRecord[]>([]);

  useEffect(() => {
    const load = async () => {
      const records = await loadGameHistory(userId);
      setHistory(records);
    };
    load();
  }, [userId]);

  return (
    <div className="user-history-panel p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
        Play History <span className="text-sm text-gray-600">(User ID: {userId.slice(0, 8)}...)</span>
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {history.map((record, index) => {
          const lastGuess = getCharacterById(record.guessedIds[record.guessedIds.length - 1]);
          const target = getCharacterById(record.guessedIds[0]);

          return (
            <div
              key={index}
              className={`p-3 rounded ${record.result === 'win' ? 'bg-green-100' : 'bg-red-100'}`}
            >
              <div className="flex justify-between text-sm">
                <span>{new Date(record.timestamp).toLocaleDateString()}</span>
                <span className="font-medium">{record.result.toUpperCase()}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Attempts: {record.attempts} / Character: {lastGuess?.playerName || 'Unknown'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};