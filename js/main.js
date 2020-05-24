save.addEventListener('click', event => {
	let key = document.querySelector('#key');
	keyObj.apiKey = key.value;
	start(stringifyKeyObj(keyObj));
})
const url = 'https://api.novaposhta.ua/v2.0/json/';
const keyObj = {
	"apiKey": `${key.value}`,
	"modelName": "InternetDocument",
	"calledMethod": "getDocumentList",
	"methodProperties": {
		"DateTimeFrom": "01.05.2020",
		"DateTimeTo": "23.05.2020",
		// "Page": "1",
		"GetFullList": "1"
	}
}
//stringify
function stringifyKeyObj(keyObj) {
	return JSON.stringify(keyObj);
}
function consoleOut() {
	console.log('Успех:', answer);
	let lengthArray = answer.data.length;
	for (let i = 0; i > lengthArray; i++) {
		console.log('Обьект', answer.data[i]);
	}
}
// get all numbers
async function start(stringifyKeyObj) {

	const response = await fetch(url, {
		method: 'POST',
		body: stringifyKeyObj,
		headers: {
			'Content-Type': 'application/json'
		}
	});
	let answerObj = {}
	const answer = await response.json();
	// console.log('Успех:', answer);
	for (let i in answer.data) {
		console.log('ЕН', answer.data[i].IntDocNumber);
	}
}