module.exports = function toReadable(number) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const tensIndex = Math.floor(number / 10);
  const units = number % 10;
  const hundredsIndex = Math.floor(number / 100);
  const remainder = number % 100;
  if (number <= 19) {
    return words[number];
  }
  if (number >= 20 && number <= 99) {
    if (units === 0) {
      return `${tens[tensIndex]}`;
    }
    return `${tens[tensIndex]} ${words[units]}`;
  }
  if (number >= 100 && number < 1000) {
    if (remainder === 0) {
      return `${words[hundredsIndex]} hundred`;
    }
    return `${words[hundredsIndex]} hundred ${toReadable(remainder)}`;
  }
  return '';
};
