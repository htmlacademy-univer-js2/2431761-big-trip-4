import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filter, isChecked) =>
  `<div class="trip-filters__filter">
    <input id="filter-${filter.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
    ${isChecked ? 'checked' : ''} ${filter.count ? '' : 'disabled'} value="${filter.name}">
    <label class="trip-filters__filter-label" for="filter-${filter.name}">${filter.name}</label>
  </div>`;

const createFiltersTemplate = (filterItems) =>
  `<form class="trip-filters" action="#" method="get">
    ${filterItems.map((filter) => createFilterItemTemplate(filter)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;

export default class FiltersView extends AbstractView {
  #filters = null;

  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
