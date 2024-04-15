import {TypeOfFilter} from './const.js';
import {isPointInFuture, isPointInPast, isPointInPresent} from './util.js';

const filter = {
  [TypeOfFilter.ALL]: (points = []) => points,
  [TypeOfFilter.PRESENT]: (points = []) => points.filter((point) => isPointInPresent(point)),
  [TypeOfFilter.PAST]: (points = []) => points.filter((point) => isPointInPast(point)),
  [TypeOfFilter.FUTURE]: (points = []) => points.filter((point) => isPointInFuture(point))
};

export {filter};
