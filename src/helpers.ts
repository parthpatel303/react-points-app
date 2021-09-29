import { RANDOM_MAX, RANDOM_MIN, NUMERATOR, DENOMINATOR } from "./constants";


const rank = (userID: any, arr: any) => {
  let result = null;
  arr.forEach((item: any, index: any) => {
    if (item.userID === userID) {
      result = index + 1;
    }
  });
  return result;
};


const setScore = (key: any) => {
  return function (objA: any, objB: any) {
    const valueN = objA[key];
    const valueM = objB[key];
    if (valueN < valueM) return 1;
    else if (valueN > valueM) return -1;
    else return 0;
  };
};

export const formatData = (arr: any) => {
  const newArr = [...arr].map((item) => {
    return {
      ...item,
      score: item.score +=
        Math.floor(Math.random() * DENOMINATOR) < NUMERATOR
          ? Math.floor(Math.random() * RANDOM_MAX + RANDOM_MIN)
          : 0
    };
  });
  newArr.sort(setScore("score"));
  return arr.map((item: any) => {
    return {
      ...item,
      ranking: rank(item.userID, newArr)
    };
  });
};
