import {HttpClient, json} from 'aurelia-fetch-client';
import env from '../environment'

export class foodOverview {

  foodlist=[]

  activate() {

     let client = new HttpClient();
     client.fetch(env.backendURL +'/foods/')
       .then(response => response.json())
       .then(foods => this.foodList = foods);
   }

   

   deleteFood(foodId) {

     let client = new HttpClient();
     this.foodId = foodId;
     return fetch(env.backendURL+'/foods/delete/'+this.foodId, {
     method: 'delete'
     }).then(response =>
     response.text().then(json => {
       return json;
     })
        );

        }

    }
