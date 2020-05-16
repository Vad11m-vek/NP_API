// fetch('https://api.novaposhta.ua/v2.0/json/')

// 	.then((response) => {
// 		return response.json();
// 	})

// 	.then((data) => {
// 		console.log(data);
// 	});

// let NPKey = {

// 	"apiKey": "bf9184305646fc07dfee4e2c2f6826e7",
// 	"modelName": "InternetDocument",
// 	"calledMethod": "getDocumentList",
// 	"methodProperties": {

// 		"DateTimeFrom": "01.01.2020",
// 		"DateTimeTo": "24.06.2020",
// 		"Page": "1",
// 		"GetFullList": "1"

// 	}

// }

$(function () {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.novaposhta.ua/v2.0/json/",
		"method": "POST",
		"headers": {
			"content-type": "application/json",

		},
		"processData": false,
		"data": "{\r\n\"apiKey\": \"\",\r\n \"modelName\": \"Address\",\r\n \"calledMethod\": \"searchSettlements\",\r\n \"methodProperties\": {\r\n \"CityName\": \"васильевка\",\r\n \"Limit\": 5\r\n }\r\n}"
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
});