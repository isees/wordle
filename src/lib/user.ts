import { v4 as uuidv4 } from 'uuid';

const USER_ID_KEY = 'op-user-id';

export const getOrCreateUserId = (): string => {
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
};

export const clearUserId = () => {
  localStorage.removeItem(USER_ID_KEY);
}; 