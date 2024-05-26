import {getRandomTown} from '../mock/offer-point-town.js';

export default class TownModel {
  #towns = getRandomTown();

  init() {
    this.#towns = getRandomTown();
  }

  get towns() {
    return this.#towns;
  }
}
