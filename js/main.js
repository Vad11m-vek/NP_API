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
		"Page": "1",
		"GetFullList": "1"
	}
}
function stringifyKeyObj(keyObj) {
	return JSON.stringify(keyObj);
}
async function start(stringifyKeyObj) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: stringifyKeyObj,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const answer = await response.json();
		console.log('Успех:', answer);
	} catch (error) {
		console.error('Ошибка:', error);
	}
}
// async function post1() {
// let body = {
// 	"apiKey": "bf9184305646fc07dfee4e2c2f6826e7",
// 	"modelName": "InternetDocument",
// 	"calledMethod": "getDocumentList",
// 	"methodProperties": {
// 		"DateTimeFrom": "01.05.2020",
// 		"DateTimeTo": "23.05.2020",
// 		"Page": "1",
// 		"GetFullList": "1"
// 	}
// }
// console.log(body.apiKey);


// 	let response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
// 		method: 'POST',
// 		dataType: 'json',
// 		body: JSON.stringify(body),
// 		headers: {
// 			'Content-Type': 'application/json;charset=utf-8'
// 		},

// 	});

// 	let result = await response;
// 	console.log(result);

// }
// $.ajax({
// 	type: 'POST',
// 	dataType: 'json',
// 	url: 'https://api.novaposhta.ua/v2.0/json/',
// 	data: JSON.stringify(
// 		{
// 			"apiKey": `${key.value}`,
// 			"modelName": "InternetDocument",
// 			"calledMethod": "getDocumentList",
// 			"methodProperties": {
// 				"DateTimeFrom": "01.05.2020",
// 				"DateTimeTo": "23.05.2020",
// 				"Page": "1",
// 				"GetFullList": "1"
// 			}
// 		}
// 	),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// 	xhrFields: {
// 		withCredentials: false
// 	},
// 	success: function (texts) {
// 		console.log(texts);
// 	},
// });

// function getsFilms() {
// 	fetch('https://api.novaposhta.ua/v2.0/json/')
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		});
// }
// 'use strict'
// window.addEventListener('load',
// 	() => {
// 		pClick.addEventListener("click", getFilms)
// 		function getFilms() {
// 			errorOut.style.display = "none";
// 			let xhr = new XMLHttpRequest();
// 			xhr.onreadystatechange = () => {
// 				if (xhr.readyState == XMLHttpRequest.DONE) {
// 					let films = JSON.parse(xhr.responseText);
// 					if (films.Response == "False") {
// 						errorOut.style.display = "block";
// 					} else {
// 						let b = '',
// 							modulText = '';
// 						films.Search.forEach((film) => {
// 							// console.log(film);
// 							let wayImg;
// 							film.Poster == 'N/A' ? wayImg = 'img/film-3057394.jpg' : wayImg = film.Poster;
// 							b += `<div>
// <h2>${film.Title}</h2>
// <img src="${wayImg}" width="200px" class="img" data-id ="${film.imdbID}" >
// <h4> Type: ${film.Type}, ${film.Year}</h4>
// </div>
// `;
// 						})
// 						out.innerHTML = b;

// 					}
// 				}
// 			}
// 			xhr.open('GET', 'https://www.omdbapi.com/?apikey=d7790324&s=' + inputSearch.value + '&&tt0852731', true);
// 			xhr.send(null);
// 		}
// 		document.addEventListener('click', (event) => {
// 			let tagName = event.target.tagName.toLowerCase();
// 			let dateName = event.target.dataset.id;

// 			if (tagName == 'img') {
// 				document.querySelector('.modal').classList.remove('close');
// 				getUsers(dateName);
// 			}
// 			if (tagName == 'span') document.querySelector('.modal').classList.add('close');

// 			// let response = await fetch('https://www.omdbapi.com/?apikey=d7790324&i=' + dateName); // завершается с заголовками ответа
// 			// let result = await response.json(); // читать тело ответа в формате JSON
// 			// console.log(result);

// 		});
// 		function getUsers(dateName) {

// 			let idFilm = new XMLHttpRequest();
// 			idFilm.onreadystatechange = () => {
// 				if (idFilm.readyState == XMLHttpRequest.DONE) {
// 					let filmsId = JSON.parse(idFilm.responseText),
// 						mod = '';
// 					mod += `
// 					<div>
// 					<span class="close-modal">&#10006;</span>
// 						<h2>About ${filmsId.Title} :</h2>
// 						<div>Actors: ${filmsId.Actors}</div>
// 						<div>Country: ${filmsId.Country}</div>
// 						<div>Released: ${filmsId.Released}</div>
// 						<div>Type: ${filmsId.Type}</div>
// 						<div>Writer: ${filmsId.Writer}</div>
// 						<div>Year: ${filmsId.Year}</div>
// 					</div>
// 					`;
// 					outModal.innerHTML = mod;
// 				}
// 			}
// 			idFilm.open('GET', 'https://www.omdbapi.com/?apikey=d7790324&i=' + dateName, true);
// 			idFilm.send(null);

// 		}
// 	}, false);
