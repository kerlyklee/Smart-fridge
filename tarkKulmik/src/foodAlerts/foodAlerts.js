import {
  HttpClient,
  json
} from 'aurelia-fetch-client';


export class foodAlerts {

  foodlistToBeExpired = []
  foodlistExpired = []

  activate() {

    let client = new HttpClient();
    client.fetch("http://localhost:8080" + '/foods/tobeexpired')
      .then(response => response.json())
      .then(foodsToBeExpired => this.foodListToBeExpired = foodsToBeExpired);

      client.fetch("http://localhost:8080" + '/foods/expired')
        .then(response => response.json())
        .then(foodsExpired => this.foodListExpired = foodsExpired);
  }
  deleteFood(foodId) {
    location.reload();
    let client = new HttpClient();
    this.foodId = foodId;
    return fetch("http://localhost:8080" + '/foods/delete/' + this.foodId, {
      method: 'delete'
    }).then(response =>
      response.text().then(json => {
        return json;
      })
    );
}
}
