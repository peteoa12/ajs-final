"use strict";

//Loads saved entries on load
window.onload = function () {
	postOnLoad();
};

function postOnLoad() {
	var display = document.getElementById("display");
	display.innerHTML = "";

	for (var post in localStorage) {
		var postData = JSON.parse(localStorage[post]);
		postEntries(postData);
	}
}

//Puts fields on page
function createFields(category) {
	var form = document.getElementById("enter");
	form.innerHTML = "";

	var _loop = function _loop(fieldType) {
		var item = category.options[fieldType];
		var container = document.createElement("fieldset");
		var inputLabel = document.createElement("label");
		var inputItem = void 0;
		inputLabel.innerHTML = item.label + ": ";

		if (item.type == "text area") {
			inputItem = document.createElement("textarea");
			inputItem.setAttribute("name", item.label);
		} else if (item.type == "select") {
			inputItem = document.createElement("select");
			inputItem.setAttribute("name", item.label);

			item.choices.forEach(function (choice) {
				var option = document.createElement("option");
				option.innerHTML = choice;
				option.setAttribute("value", choice);
				inputItem.appendChild(option);
			});
		} else if (item.type == "radio") {
			inputItem = document.createElement("span");
			item.choices.forEach(function (choice) {
				var option = document.createElement("input");
				var optionLabel = document.createElement("label");
				option.setAttribute("type", item.type);
				option.setAttribute("name", item.label);
				option.setAttribute("value", choice);
				optionLabel.innerHTML = choice + " ";

				inputItem.appendChild(option);
				inputItem.appendChild(optionLabel);
			});
		} else {
			inputItem = document.createElement("input");
			inputItem.setAttribute("name", item.label);
			inputItem.setAttribute("type", item.type);
		}

		container.appendChild(inputLabel);
		container.appendChild(inputItem);
		form.appendChild(container);
	};

	for (var fieldType in category.options) {
		_loop(fieldType);
	}
	saveButton();
}

//Makes buttons for categories
function createButtons(category) {
	var list = document.getElementById("category-list");
	var listItem = document.createElement("li");
	listItem.innerHTML = category.categoryName;
	list.appendChild(listItem);
	listItem.addEventListener("click", function () {
		createFields(category);
	});
}

//Creates save button
function saveButton() {
	var form = document.getElementById("enter");
	var saveButton = document.createElement("button");
	saveButton.innerHTML = "Save";
	saveButton.setAttribute("class", "save");
	form.removeEventListener("submit", onSubmit);
	form.addEventListener("submit", onSubmit);
	form.appendChild(saveButton);
}

function onSubmit(e) {
	e.preventDefault();
	var forData = new FormData(document.querySelector("form"));
	saveData();
}

//Posts entries to new section on the page
function postEntries(entries) {
	var display = document.getElementById("display");
	var newSection = document.createElement("section");
	var header = document.createElement("h2");
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "X";
	deleteButton.setAttribute("class", "close");
	newSection.appendChild(deleteButton);
	deleteButton.addEventListener("click", function () {
		deletePost(entries.Name);
	});
	header.innerHTML = entries.Name;
	newSection.appendChild(header);

	for (var key in entries) {
		var container = document.createElement("div");
		container.innerHTML = "<h5>" + key + ":</h5> " + entries[key];
		newSection.appendChild(container);
	}
	display.appendChild(newSection);
}

//Deletes posts
function deletePost(name) {
	localStorage.removeItem(name);
	postOnLoad();
}

//Saves data to local storage
function saveData() {
	var form = document.getElementById("enter");
	var formData = new FormData(form);
	var entries = {};
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var pair = _step.value;

			entries[pair[0]] = pair[1];
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var JSONData = JSON.stringify(entries);
	localStorage.setItem(entries.Name, JSONData);
	postEntries(entries);
}

function Review(category) {
	var publicItem = {
		categoryName: category.categoryName,
		options: {
			name: category.options && category.options.name ? category.options.name : {
				label: "Name",
				type: "text"
			},
			type: category.options && category.options.type ? category.options.type : {
				label: "Type",
				type: "text"
			},
			brand: category.options && category.options.brand ? category.options.brand : {
				label: "Brand",
				type: "text"
			},
			review: category.options && category.options.review ? category.options.review : {
				label: "Review",
				type: "text area"
			},
			rating: category.options && category.options.rating ? category.options.rating : {
				label: "Rating",
				type: "select",
				choices: [" ", "1: Worthless.", "2: Not my speed.", "3: It was just...Ok.", "4: Decent. I was satisfied.", "5: I am absolutely on cloud 9!"]
			},
			again: category.options && category.options.again ? category.options.again : {
				label: "Would you recommend this to someone?",
				type: "radio",
				choices: ["Yes", "No"]
			}
		}

	};
	createButtons(publicItem);
	return publicItem;
};

var Game = function Game(category) {
	var publicItem = Review(category);

	publicItem.options.system = category.options && category.options.system ? category.options.system : {
		label: "System",
		type: "select",
		choices: [" ", "Nintendo", "Sega Genesis", "Playstation", "XBOX", "PC", "Mobile/Tablet"]
	};

	return publicItem;
};

//Child class
var Instrument = function Instrument(category) {
	var publicItem = Review(category);

	publicItem.options.color = category.options && category.options.color ? category.options.color : {
		label: "Color",
		type: "select",
		choices: [" ", "Black", "Red", "White", "Green", "Yellow", "Blue", "Natural wood", "Other"]
	};

	return publicItem;
};

//Child class
var Audio = function Audio(category) {
	var publicItem = Review(category);

	publicItem.options.genre = category.options && category.options.genre ? category.options.genre : {
		label: "Genre",
		genre: "text"
	};

	return publicItem;
};

var VideoGames = Game({
	categoryName: "Video Games",
	options: {
		type: {
			label: "Game Category",
			type: "select",
			choices: [" ", "Action/Adventure", "Arcade", "RPG", "First person shooter", "Racing", "Fantasy", "Strategy", "Sports", "Other"]
		},
		brand: {
			label: "Experience Level",
			type: "radio",
			choices: ["Novice", "Intermediate", "Advanced", "Pro"]
		}
	}
});

var Keyboards = Instrument({
	categoryName: "Keyboards",
	options: {
		brand: {
			label: "Manufacturer",
			type: "select",
			choices: [" ", "Moog", "Roland", "Korg", "Nord", "Arturia", "Oberheim", "Dave Smith"]
		},
		type: {
			label: "Voicing",
			type: "radio",
			choices: ["Polyphonic", "Monophonic", "Hybrid"]
		}
	}
});

var Guitars = Instrument({
	categoryName: "Guitars",
	options: {
		brand: {
			label: "Brand",
			type: "select",
			choices: [" ", "Gibson", "Fender", "Gretch", "Rickenbacker", "Ibanez", "Takamine", "Other"]
		},
		type: {
			label: "Acoustic/Electric",
			type: "radio",
			choices: ["Acoustic", "Electric", "Both"]
		}
	}
});

var Records = Audio({
	categoryName: "Records",
	options: {
		type: {
			label: "Artist",
			type: "text"
		},
		genre: {
			label: "Genre",
			type: "select",
			choices: [" ", "Classical", "Rock", "R & B", "Hip Hop", "Jazz", "New Wave", "Chill Wave", "Metal", "Progressive", "Instrumental"]
		},
		brand: {
			label: "Era",
			type: "select",
			choices: [" ", "Pre 20th Century", "20's", "30's", "40's", "50's", "60's", "70's", "80's", "90's", "Today"]
		}
	}
});

// localStorage.clear();