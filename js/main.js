fetch('https://api.novaposhta.ua/v2.0/json/')

	.then((response) => {
		return response.json();
	})

	.then((data) => {
		console.log(data);
	});

let NPKey = {

	"apiKey": "bf9184305646fc07dfee4e2c2f6826e7",
	"modelName": "InternetDocument",
	"calledMethod": "getDocumentList",
	"methodProperties": {

		"DateTimeFrom": "01.01.2020",
		"DateTimeTo": "24.06.2020",
		"Page": "1",
		"GetFullList": "1"

	}

}