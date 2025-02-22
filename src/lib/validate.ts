import { Character } from "@/types";

// 角色数据校验
export const validateCharacter = (char: Character) => {
  const requiredFields = [
    'playerId', 'playerName', 'gender',
    'status', 'bounty', 'height'
  ];

  return requiredFields.every(field =>
    char[field as keyof Character] !== undefined
  );
};