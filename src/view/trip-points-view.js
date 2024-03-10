import {createElement} from '../render.js';

function createTripPointsElement() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripPointsView {
  getTemplate() {
    return createTripPointsElement();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
