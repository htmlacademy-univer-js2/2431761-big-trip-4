const RAND_IMG_URL = 'https://loremflickr.com/248/152?random=';

const MSEC_IN_HOUR = 1000 * 60 * 60;
const MSEC_IN_DAY = 1000 * 60 * 60 * 24;

const POINT_COUNT = 20;

const Price = {
  MIN: 0,
  MAX: 1000
};

const Duration = {
  DAY: 5,
  HOUR: 5,
  MIN: 59,
};

const TypeOfFilter = {
  ALL: 'all',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const CITIES = [
  'Amsterdam',
  'Geneva',
  'Chamomix',
  'Paris',
  'Saint Petersburg',
  'Vienna'
];

const OFFERS = [
  'Add a child safety seat',
  'Add a place for a pet',
  'Add lunch',
  'Book a place in the recreation area',
  'Book a window seat',
  'Rent a polaroid',
  'Stay overnight',
  'Upgrade to a business class',
  'Use the translator service'
];

const TYPES = [
  { title: 'Bus', img: 'img/icons/bus.png' },
  { title: 'Check-in', img: 'img/icons/check-in.png' },
  { title: 'Drive', img: 'img/icons/drive.png' },
  { title: 'Flight', img: 'img/icons/flight.png' },
  { title: 'Restaurant', img: 'img/icons/restaurant.png' },
  { title: 'Ship', img: 'img/icons/ship.png' },
  { title: 'Sightseeing', img: 'img/icons/sightseeing.png' },
  { title: 'Taxi', img: 'img/icons/taxi.png' },
  { title: 'Train', img: 'img/icons/train.png' }
];

export {RAND_IMG_URL, MSEC_IN_HOUR, MSEC_IN_DAY, POINT_COUNT, Price, Duration, TypeOfFilter, SENTENCES, CITIES, OFFERS, TYPES};
