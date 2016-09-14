// console.log("I'm workin'!");
function createButtons (category) {
	var list = document.getElementById("category-list");//use query selector with # if you want
	var listItem = document.createElement("li");
	listItem.innerHTML = category.categoryName;
	list.appendChild(listItem);
	listItem.addEventListener("click", function() {
		createFields(category);
	})      //Buttons on page
}

function createFields(category) {
	var form = document.getElementById("enter");
	form.innerHTML = "";
	for (let fieldType in category.options) {
		// console.log(fieldType);
		let item = category.options[fieldType];
		// console.log(item);
		let container = document.createElement("fieldset");
		let inputLabel = document.createElement("label");
		let inputItem;
		inputLabel.innerHTML = item.label + ": ";

		//text, text area, select, radio
		if(item.type == "text area"){
			//text area
			inputItem = document.createElement("textarea");
			inputItem.setAttribute("name", item.label);
		}else if(item.type == "select"){
			//select
			inputItem = document.createElement("select");
			inputItem.setAttribute("name", item.label);

			item.choices.forEach(function(choice){
				let option = document.createElement("option");
				option.innerHTML = choice;
				option.setAttribute("value", choice);
				inputItem.appendChild(option);
			});
		}else if(item.type == "radio"){
			//radio
			inputItem = document.createElement("span");
			item.choices.forEach(function(choice){
				let option = document.createElement("input");
				let optionLabel = document.createElement("label");
				option.setAttribute("type", item.type);
				option.setAttribute("name", item.label);
				option.setAttribute("value", choice);
				optionLabel.innerHTML = choice + " ";


				inputItem.appendChild(option);
				inputItem.appendChild(optionLabel);
			});
			// inputItem = document.createElement("radio");
			// inputItem.setAttribute("name", item.label);
		}else{
		   //text
		   inputItem = document.createElement("input");
		   inputItem.setAttribute("name", item.label);
		   inputItem.setAttribute("type", item.type);
		}

		container.appendChild(inputLabel);
		container.appendChild(inputItem);
		form.appendChild(container);
	}//Fields on page

	function saveButton (category) {
		var displaySection = document.getElementById("display");
		if ( document.querySelector("#display button") ) {
			displaySection.removeChild( document.querySelector("#display button") );
		}
		var saveButton = document.createElement("button");
		saveButton.innerHTML = "Save";
		displaySection.appendChild(saveButton);
		saveButton.addEventListener("click", function() {
			console.log("super!");
		})    
	}
	saveButton();
}
// console.log(createFields());
//Parent class
function Review(category){
	var publicItem = {
		categoryName: category.categoryName,
		options:{
			name: category.options && category.options.name ? category.options.name : {
				label:"Name",
				type:"text"
			},
			type: category.options && category.options.type ? category.options.type : {
				label:"Genre",
				type:"text"
			},
			brand: category.options && category.options.brand ? category.options.brand : {
				label:"Brand",
				type:"text"
			},
			review: category.options && category.options.review ? category.options.review : {
				label:"Review",
				type:"text area"
			},
			rating: category.options && category.options.rating ? category.options.rating : {
				label:"Rating",
				type:"select",
				choices:[
					"1: Worthless.",
					"2: Not my speed.",
					"3: It was just...Ok.",
					"4: Decent. I was satisfied.",
					"5: I am absolutely on cloud 9!",
				]
			},
			again: category.options && category.options.again ? category.options.again : {
				label:"Would you recommend this to someone?",
				type:"radio",
				choices: [
					"Yes",
					"No"
				]
			}
		}
			
	}
	createButtons(publicItem);
	return publicItem;
};

//Child class
var Game = function(category) {
	var publicItem = Review(category);

	publicItem.options.title = category.options && category.options.title ? category.options.title: {
		label:"Game title",
		type:"text"
	}

	return publicItem;
};


//Child class
var Instrument = function(category) {
	var publicItem = Review(category);

	publicItem.options.color = category.options && category.options.color ? category.options.color: {
		label:"Color",
		type:"select",
		choices:[
			"Black",
			"Red",
			"White",
			"Green",
			"Yellow",
			"Blue",
			"Natural wood",
			"Other"
		]
	}

	return publicItem;
};

//Child class
var Audio = function(category) {
	var publicItem = Review(category);
	return publicItem;
}

var VideoGames = Game({
	categoryName:"Video Games",
	options:{
		name:{
			label:"Gaming System",
			type:"select",
			choices:[
				" ",
				"1: Nintendo",
				"2: Sega Genesis",
				"3: Sony Playstation",
				"4: XBOX",
				"5: PC",
				"6: Mobile/Tablet"
			]
		},
		type:{
			label:"Game Category",
			type:"select",
			choices:[
				" ",
				"Action/Adventure",
				"Arcade",
				"RPG",
				"First person shooter",
				"Racing",
				"Fantasy",
				"Strategy",
				"Sports",
				"Other"
			]
		},
		brand:{
			label:"Experience Level",
			type:"radio",
			choices:[
				"Novice",
				"Intermediate",
				"Advanced",
				"Pro"
			]
		}
	}
});
var Keyboards = Instrument({
	categoryName:"Keyboards",
	options:{
		brand:{
			label:"Manufacturer",
			type:"select",
			choices:[
				" ",
				"Moog",
				"Roland",
				"Korg",
				"Nord",
				"Arturia",
				"Oberheim",
				"Dave Smith"
			]
		},
		type:{
			label:"Voicing",
			type:"radio",
			choices:[
				"Polyphonic",
				"Monophonic",
				"Hybrid"
			]
		}
	}
});
var Guitars = Instrument({
	categoryName:"Guitars",
	options:{
		brand:{
			label:"Brand",
			type:"select",
			choices:[
				" ",
				"Gibson",
				"Fender",
				"Gretch",
				"Rickenbacker",
				"Ibanez",
				"Takamine",
				"Other"
			]
		},
		style:{
			label:"Acoustic/Electric",
			type:"radio",
			choices:[
				"Acoustic",
				"Electric",
				"Both"
			]
		}

	}
});
var Records = Audio({
	categoryName:"Records",
	options:{
		artist:{
			label:"Artist",
			type:"text"
		},
		genre:{
			label:"Genre",
			type:"select",
			choices:[
				"Classical",
				"Rock",
				"R & B",
				"Hip Hop",
				"Jazz",
				"New Wave",
				"Chill Wave",
				"Metal",
				"Progressive",
				"Instrumental"
			]
		},
		brand:{
			label:"Era",
			type:"select",
			choices:[
				"Pre-Century",
				"20's",
				"30's",
				"40's",
				"50's",
				"60's",
				"70's",
				"80's",
				"90's",
				"Today",
			]
		}
	}
});

// console.log(createFields());


