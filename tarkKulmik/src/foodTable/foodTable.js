import {HttpClient, json} from 'aurelia-fetch-client'

export class foodTable {
	foodData = {}

  	constructor() {
 	}
  	addUser() {
		let client = new HttpClient();



		client.fetch('http://localhost:8080/foods/add', {
			'method': "POST",
			'body': json(this.foodData)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + data.foodName);
		});

		console.log("Method executed!")
	}

}
