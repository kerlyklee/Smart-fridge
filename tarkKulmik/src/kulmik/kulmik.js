import {HttpClient, json} from 'aurelia-fetch-client'
export class food{

	foodData = {}
	foodList = []

	constructor() {
		this.appName = "tarkKulmik"
		this.count = 0
	}

	activate() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/users')
			.then(response => response.json())
			.then(users => this.foodList = foods);
	}

	addUser() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/users/add', {
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