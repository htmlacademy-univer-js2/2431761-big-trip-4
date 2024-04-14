import {OFFERS} from '../const.js';
import {getRandomElement, getRandomInteger} from '../util.js';

const generateOffer = (id) => ({
  id: id,
  title: getRandomElement(OFFERS),
  price: getRandomInteger(1, 200)
});

export {generateOffer};
