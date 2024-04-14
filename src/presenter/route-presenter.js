import {render, replace} from '../framework/render.js';
import PointEditView from '../view/point-edit-view.js';
import TripPointsView from '../view/trip-points-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import NoPointsView from '../view/no-points-view.js';

export default class Presenter {
  #container = null;
  #pointsModel = null;
  tripPointsComponent = new TripPointsView();

  #boardPoints = [];

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#renderBoard();
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point, onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new PointEditView({
      point,
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.tripPointsComponent.element);
  }

  #renderBoard() {
    render(new SortView(), this.#container);
    render(this.tripPointsComponent, this.#container);

    this.#boardPoints.forEach((point) => this.#renderPoint(point));

    if (this.#boardPoints.length === 0) {
      render(new NoPointsView, this.tripPointsComponent.element);
    }
  }
}
