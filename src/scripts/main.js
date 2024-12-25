'use strict';

const elements = [...document.querySelectorAll('.population')];

const values = elements.map((element) => {
  const number = parseInt(element.textContent.replace(/,/g, ''), 10);

  if (isNaN(number)) {
    return;
  }

  return number;
});

const total = values.reduce((sum, value) => sum + value, 0);
const average = Math.round(total / values.length);
const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

const element1 = document.querySelector('.total-population');

element1.textContent = totalFormatted;

const element2 = document.querySelector('.average-population');

element2.textContent = averageFormatted;
