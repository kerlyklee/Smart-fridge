import {HttpClient, json} from 'aurelia-fetch-client'

export class foodTable {
	userData = {}
	userList = []

  constructor() {
  }

  activate() {
		let client = new HttpClient();
		client.fetch('http://localhost:8080/users')
			.then(response => response.json())
			.then(users => this.userList = users);
	}
		addUser() {
		let client = new HttpClient();


		console.log("Sellega  saadan ", json(this.userData))
		client.fetch('http://localhost:8080/', {
			'method': "POST",
			'body': json(this.userData)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + JSON.stringify(data));
		});

		console.log("Method executed!")
	}
}
