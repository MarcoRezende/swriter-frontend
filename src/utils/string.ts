/**
 * @param times number
 * @param word string
 * @param delimiter string
 * @returns array containing the string and array with leveled paths
 */
export const repeat = (
  times: number,
  word: string,
  delimiter = '.',
): [string, string[]] => {
  const leveled = Array.from({ length: times }).reduce(
    (levels: string[], _, index) => {
      if (!index) {
        levels.push(word);
      } else {
        levels.push(`${levels[index - 1]}${delimiter}${word}`);
      }

      return levels;
    },
    [],
  );

  return [leveled[leveled.length - 1], leveled];
};
