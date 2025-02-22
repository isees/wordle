// 根据日期生成固定角色ID
import characters from '@/data/onepiece/characters';

function seededRandom(seed: string, max: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % max;
}

const getUTCDateSeed = () => {
  const now = new Date();
  return new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  )).toISOString().slice(0, 10);
};

export const getDailyCharacterId = () => {
  const seed = getUTCDateSeed();
  return seededRandom(seed, characters.length);
};

// 获取当前谜底角色
export const useDailyCharacter = () => {
  const id = getDailyCharacterId();
  if (!characters[id]) {
    throw new Error(`Invalid character ID: ${id}`);
  }
  return characters[id];
};
