import {CITIES} from '../const.js';
import {getRandomElement, getRandomImageURL, getRandomSentence} from '../util.js';

const generateDestination = () => {
  const city = getRandomElement(CITIES);

  return {
    id: crypto.randomUUID(),
    name: city,
    description: getRandomSentence(),
    pictures: [
      {
        'src': getRandomImageURL(),
        'description': `${city}`
      }
    ]
  };
};

export {generateDestination};
