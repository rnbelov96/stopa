/* eslint-disable no-param-reassign */
export {};

const leftColor = '#46b594';
const rightColor = '#eaf5f7';

const rangeElList = document.querySelectorAll('.js-range');

const parRange = document.querySelector('.js-par-range') as HTMLInputElement;
const estRange = document.querySelector(
  '.js-est-range',
) as HTMLInputElement;
const gigRange = document.querySelector(
  '.js-gig-range',
) as HTMLInputElement;
const sellRange = document.querySelector(
  '.js-sell-range',
) as HTMLInputElement;

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let parCurrentStep = 5;
let gigCurrentStep = 5;
let estCurrentStep = 5;
let sellCurrentStep = 5;

const calcResult = () => {
  result = (Number(parRange.value) * 1000
      + Number(estRange.value) * 2000
      + Number(gigRange.value) * 1000
      + Number(sellRange.value) * 1000)
    * 0.36;
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

parRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  parCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (parCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (parCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

gigRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  gigCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (gigCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (gigCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

estRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  estCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (estCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (estCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

sellRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  sellCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (sellCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (sellCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
