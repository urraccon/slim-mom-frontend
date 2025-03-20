export const dailyRateCalCalculation = (height, age, currWeight, desWeight) => {
  const BMR = 10 * currWeight + 6.25 * height - 5 * age + 5;

  if (currWeight > desWeight) {
    const result = BMR * 0.75;

    return result;
  } else {
    const result = BMR * 1.25;

    return result;
  }
};
