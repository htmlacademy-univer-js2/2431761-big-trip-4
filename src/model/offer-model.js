import {getRandomOffer} from '../mock/offer-point-town.js';

export default class OfferModel {
  #offers = getRandomOffer();

  constructor() {
    this.#offers = getRandomOffer();
  }

  get offers() {
    return this.#offers;
  }
}
