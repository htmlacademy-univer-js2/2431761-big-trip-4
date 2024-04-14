import AbstractView from '../framework/view/abstract-view.js';

const tripPointsTemplate = '<ul class="trip-events__list"></ul>';


export default class TripPointsView extends AbstractView {
  getTemplate() {
    return tripPointsTemplate();
  }
}
