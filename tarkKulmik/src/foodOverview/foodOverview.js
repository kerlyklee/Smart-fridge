import {HttpClient, json} from 'aurelia-fetch-client';
export class foodOverview {

  foodlist=[]

  activate() {

     let client = new HttpClient();
     client.fetch('http://localhost:8080/foods')
       .then(response => response.json())
       .then(foods => this.foodList = foods);
   }
 }
