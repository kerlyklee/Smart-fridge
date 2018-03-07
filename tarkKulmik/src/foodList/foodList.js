
import {
  WebAPI
} from './web-api';
import {
  inject
} from 'aurelia-framework';

@inject(WebAPI)
export class foodList {
  constructor(api) {
    this.api = api;
    this.foods = [];
  }

  created() {
    this.api.getFoodList().then(foods => this.foods = foods);
  }

  select(food) {
    this.selectedId = food.id;
    return true;
  }
}
