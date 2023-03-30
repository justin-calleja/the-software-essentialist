export type Stats = {
  max?: number;
  min?: number;
};

const calcMax = (num1: number, num2: number) => {
  return num1 > num2 ? num1 : num2;
};

const calcMin = (num1: number, num2: number) => {
  return num1 < num2 ? num1 : num2;
};

const statsCalculator = (nums: number[]): Stats => {
  let max: Stats["max"];
  let min: Stats["min"];

  for (let i = 0; i < nums.length; i++) {
    max = calcMax(max ?? -Infinity, nums[i]);
    min = calcMin(min ?? Infinity, nums[i]);
  }

  return {
    max,
    min,
  };
};

export default statsCalculator;
