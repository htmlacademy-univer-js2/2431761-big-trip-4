import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import Presenter from './presenter/route-presenter.js';
import PointsModel from './model/points-model.js';
import {RenderPosition, render} from './framework/render.js';
import {generateFilter} from './mock/filter.js';

const tripMainContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const routePresenter = new Presenter({
  container: tripEventsContainer,
  pointsModel
});

const filters = generateFilter(pointsModel.points);

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView({filters}), filterContainer);

routePresenter.init();
