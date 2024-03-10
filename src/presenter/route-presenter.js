import {render} from '../render.js';
import {generatePoint} from '../mock/point.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import TripPointsView from '../view/trip-points-view.js';

export default class Presenter {
  tripPointsComponent = new TripPointsView();

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    render(new SortView(), this.container);
    render(this.tripPointsComponent, this.container);
    render(new PointEditView(generatePoint()), this.tripPointsComponent.getElement());

    this.points.forEach((point) => {
      const newPoint = new PointView(point);
      render(newPoint, this.eventListComponent.getElement());
    });
  }
}
