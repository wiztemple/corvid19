export const formatNumbersWithCommas = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
