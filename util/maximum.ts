export const findMaximum = (
  strings: string[],
  flag: boolean
): { item: string; value: number } => {
  const itemCounter: Record<string, number> = {};
  let maxCount = 0;
  let maxValue = "";
  strings.forEach((string) => {
    itemCounter[string] = itemCounter[string] + 1 || 1;
    if (flag) {
      if (itemCounter[string] > maxCount) {
        maxCount = itemCounter[string];
        maxValue = string;
      }
    } else {
      if (itemCounter[string] >= maxCount) {
        maxCount = itemCounter[string];
        maxValue = string;
      }
    }
  });
  return { item: maxValue, value: maxCount };
};

console.log(
  findMaximum(["a", "a", "ab", "abc", "b", "c", "b", "b", "a"], true)
);
