export type Stats = {
  min?: number;
};

const calcMin = (num1: number, num2: number) => {
  return num1 < num2 ? num1 : num2;
};

const statsCalculator = (nums: number[]): Stats => {
  let min: Stats["min"];

  for (let i = 0; i < nums.length; i++) {
    min = calcMin(min ?? Infinity, nums[i]);
  }

  return {
    min,
  };
};

export default statsCalculator;
