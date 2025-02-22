import characters from '../src/data/onepiece/characters';
import { getDailyCharacterId } from '../src/lib/daily-character';

test('每日角色ID应在有效范围内', () => {
  const id = getDailyCharacterId();
  expect(id).toBeGreaterThanOrEqual(0);
  expect(id).toBeLessThan(characters.length);
});