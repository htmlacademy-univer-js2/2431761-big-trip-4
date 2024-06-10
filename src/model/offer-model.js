import Observable from '../framework/observable.js';

export default class OfferModel extends Observable{
  #pointApiService = null;
  #offersByType = [];

  constructor(pointApiService) {
    super();
    this.#pointApiService = pointApiService;
  }

  get offersByType() {
    return this.#offersByType;
  }

  async init() {
    try {
      this.#offersByType = await this.#pointApiService.offersByType;
    } catch(err) {
      this.#offersByType = [];
    }
  }
}
