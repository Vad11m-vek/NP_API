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