import { calculateRewardPoints } from "./rewardCalculator";

test("120 gives 90 points", () => {
  expect(calculateRewardPoints(120)).toBe(90);
});

test("75 gives 25 points", () => {
  expect(calculateRewardPoints(75)).toBe(25);
});

test("50 gives 0 points", () => {
  expect(calculateRewardPoints(50)).toBe(0);
});

test("40 gives 0 points", () => {
  expect(calculateRewardPoints(40)).toBe(0);
});

test("negative gives 0", () => {
  expect(calculateRewardPoints(-10)).toBe(0);
});

test("fractional 120.75 gives 90", () => {
  expect(calculateRewardPoints(120.75)).toBe(90);
});
