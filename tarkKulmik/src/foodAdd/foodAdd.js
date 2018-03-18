import {HttpClient, json} from 'aurelia-fetch-client'

export class foodAdd {

  	addFood() {
		let client = new HttpClient();
 		let foodData = {}

		client.fetch('http://localhost:8080/food/add', {
      'method': 'POST',
      'body': json(this.foodData)
    })
			.then(response => response.json())
			.then(data => {
				console.log('Server saatis ' + data.foodName);
			});
			this.foodData = {}
			console.log("Method executed")
		}
	}
