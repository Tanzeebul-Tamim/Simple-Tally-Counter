const useTallyCalc = (count: number) => {
  const singleCount = count % 5;
  const fiveCount = (count - singleCount) / 5;
  return { fiveCount, singleCount };
};

export default useTallyCalc;
