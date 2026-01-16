export const getMonthYear = (date) => {
  const d = new Date(date);
  return {
    month: d.getMonth(),
    year: d.getFullYear(),
  };
};