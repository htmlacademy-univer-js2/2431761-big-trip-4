import dayjs from 'dayjs';
import {SENTENCES, RAND_IMG_URL, MSEC_IN_DAY, MSEC_IN_HOUR} from './const.js';

const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomImageURL = () => `${RAND_IMG_URL}${crypto.randomUUID()}`;
const getRandomSentence = () => getRandomElement(SENTENCES);
const formatStringToDate = (string) => dayjs(string).format('MMM DD');
const formatStringToTime = (string) => dayjs(string).format('HH:mm');


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getPointDuration = (dateFrom, dateTo) => {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));

  let pointDuration = 0;

  switch (true) {
    case (timeDiff > MSEC_IN_DAY):
      pointDuration = dayjs(timeDiff).format('DD[D] HH[H] mm[M]');
      break;
    case (timeDiff >= MSEC_IN_HOUR):
      pointDuration = dayjs(timeDiff).format('HH[H] mm[M]');
      break;
    case (timeDiff < MSEC_IN_HOUR):
      pointDuration = dayjs(timeDiff).format('mm[M]');
      break;
  }

  return pointDuration;
};

export {
  capitalize, getRandomElement, getRandomImageURL, getRandomSentence, formatStringToDate, formatStringToTime,
  getRandomInteger, getPointDuration
};
