export const sortBy = (
  array: { [key: string]: any }[],
  property: string,
  by: 'name' | 'number',
) => {
  switch (by) {
    case 'name':
      return array.sort((a, b) => a[property].localeCompare(b[property]));

    default:
      return array;
  }
};
