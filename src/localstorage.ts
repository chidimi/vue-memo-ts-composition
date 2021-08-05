import Memo from '../src/types/Memo'

const STORAGE_KEY = "memo-app";
const memoStorage = {
  fetch: () :Memo[] => {
    const memos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    memos.forEach((memo: Memo, index: number) => {
      memo.id = index + 1;
    });
    return memos;
  },
  save: (memos: Memo[]) :void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  },
};

export default memoStorage
