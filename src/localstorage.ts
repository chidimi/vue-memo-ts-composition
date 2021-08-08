import Memo from '../src/types/Memo'

const STORAGE_KEY = "memo-app";
const memoStorage = {
  fetch: () :Memo[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },
  save: (memos: Memo[]) :void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  },
};

export default memoStorage
