/* eslint-disable no-console */    //eslint sees this as a disabling comment.

// console.log([1, 2, 3].map(n => n+1));

// var nums = [1,2,3,4,5];

// // nums.forEach(function(item){
// // 	// item++;
// // 	var newNumber = item + 1;
// // 	console.log(newNumber);
// // });
// // console.log(nums);

// var newNumber = nums.map(function(item){
// 	return nums *2;
// });
// console.log(newNumber);
// console.log(nums);


// //WRONG - forEach does not return anything

// newNumber = nums.forEach(function(items){
// 	return item * 2;
// });
// console.log(newNumber);


//-------------------------------- Week 7 ---------------------------------------------//

// LET
// Let lets us define a variable.
// We used to use var.
// Let still follows the rules of traditional scope but it adds on rules of it's own.
// Let allows us to do block scoping.
// A block is anything inside of curly brackets.
// This can be functions, if() statements and loops etc.
// Block scoping confines the variables to within that block even though it may not necessarily be a function. 


//EXAMPLES<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

//Traditional scope-----------------------------------------------------------------------

// function myFunction() {
// 	var myName = "Peter";
// };
// console.log(myName); //Throws an error because it's outside the block and/or curly brackets.

// var person = true;
// if(person == true) {
// 	var newName = "Peter Eater";
// }
// console.log(newName); //This wil log because of it's global variable above.


// //ES6 block scope with let

// if(person = true) {
// 	let newName = "Peter Pan"; //Let confines this to a local variable. Cannot call it outside the block and/or curly brackets.
// };
// console.log(newName); //Throws an error



//LET AND FOR-LOOPS-----------------------------------------------------------------------

// for (var i = 0; i < 10; ++i) {
// 	console.log(i);
// }
// console.log("outside loop", i); //Will return 10



// //Using LET stops us from having random variables floating around in our scope

// for (let i = 0; i < 10; ++i) {
// 	console.log(i);
// }
// console.log("outside loop", i); //Will return "i is not defined, muther fucker"


//CONST------------------------------------------------------------------------------------

//Const is similar to var. It lets us define a variable.
//Const is a read only variable. 
//That means that you cannot redefine it. 
//Traditional way - Uppercase and Underscores are used to indicate a special variable that shouldn't be messed with.
//But this didn't actually stop people from using it.

//This is an example of that.
// var API_KEY = "hdsgfals444jhkdjf"; 

//Here is how Const does this.
// const API_KEY ="hdsgfals444jhkdjf";
// console.log(API_KEY);

// API_KEY = "new key";

// console.log(API_KEY);


//TEMPLATE LITERALS------------------------------------------------------------------------

// var firstName = "Peter";
// var lastName = "Norman";

// // Traditional String Concatenation
// console.log("Hi my name is " + firstName + " " + lastName + ".");


// //NEW!!! String Concatenation
// console.log(`Hi, my name is ${firstName} ${lastName}.`);


// console.log(`Hey, 
// 	whats up?`);

//Using THIS inside template literals-------------------------------------------

// var Drake = {
// 	firstName:"Nathan",
// 	lastName:"Drake",
// 	sayName:function () {
// 		// //OLD WAY
// 		// return "This character's name is " + this.firstName + " " +
// 		// 		this.lastName + ". ";

// 		//TEMPLATE LITERAL WAY
// 		return `This charcter's name is ${this.firstName} ${this.lastName}`;
// 	}
// }
// console.log(Drake.sayName());


//SHORTENED METHODS--------------------------------------------------------------

//In ES6 we don't need to use a colon (:) or the function() keyword when declaring a FUNCTION() as a METHOD or an OBJECT.

// var Drake = {
// 	firstName:"Lara",
// 	lastName:"Croft",
// 	sayName() {
// 		return `This charcter's name is ${this.firstName} ${this.lastName}.`;
// 	}
// }
// console.log(Drake.sayName());

//ARROW FUNCTIONS----------------------------------------------------------------

//Traditional function
// var add = function(a,b) {
// 	return a+b;
// }
// console.log(add(2,3));

//ES6 arrow functions
// var add = (a,b) => {
// 	return a+b;
// }
// console.log(add(2,3));

//One line functions can be shortened to literally one line. Try and notice whats missing from the syntax.
//Remove the brackets and the word return.
//This is an implicit return. JS notices the change in syntax and assumes you mean to return the second half of the function.
// var add = (a,b) => a + b;
// console.log(add(13,12));



//Traditional
// var numbers = [2,3,4,5,6,7];
// var doubled = numbers.map(function(n) {
// 	return n * 2;
// });
// console.log(doubled);

//Make the callback funtion into an arrow function
// var numbers = [2,3,4,5,6,7];
// var doubled = numbers.map((n) => n * 2); 
// console.log(doubled);


//---------------------STOP CLASS WEEK 7---------------------------//

	  //INTERMISSION//<><><><><>{=}<><><><><>//INTERMISSION//

//---------------------START CLASS WEEK 8--------------------------//

//Arrow functions and THIS
//By Default, when you have an object, for any refrences in methods inside the object, the THIS keyword will be bound to the original object

//Semi-Traditional new ES6 way of writing functions as methods
// var person = {
// 	firstName:"Peter",
// 	sayName(){
// 		console.log(`Hi, I am ${this.firstName}.`);
// 	}
// };
// person.sayName();

//Arrow function way doesn't work
// var person = {
// 	firstName:"Peter",
// 	sayName:() => {
// 		console.log(`Hi, I am ${this.firstName}.`);
// 	}
// };
// person.sayName();


//Traditionally functions referance the THIS key word in different ways depending upon how they're called. So if in an eventListener, it's a reference to the event.

// document.addEventListener("click", function(){
// 	console.log(this);
// });

//If it's declared on it's own, THIS refrences the function itself:

// var checkThis = function(){
// 	this.name = "checkThis";
// 	console.log(this);
// }
// checkThis();

//For demo go to codepen.io/Wolfsie/pen/grjBWq

// Alternate ways of using arrow functions inside of objects
// var person = {
// 	name:"Peter",
// 	hobbies:["Computers", "Singing", "Baseball"],
// 	showHobbies: function (){
// 		var _this = this;
// 		this.hobbies.forEach(function(hobby){
// 			console.log(_this.name + " likes " + hobby);
// 		});
// 	}
// }
// person.showHobbies();

//With arrow funtions, we don;t need to make a variable to hold the value of THIS. The arrow function does that for us :-)
// var person = {
// 	name:"Peter",
// 	hobbies:["Computers", "Singing", "Baseball", "Guitar", "Bass", "Keys"],
// 	showHobbies(){ //You can only do this method when inside of an object
// 		this.hobbies.forEach((hobby) => {
// 			console.log(`${this.name} likes ${hobby}`);
// 		});
// 	}
// }
// person.showHobbies();



//ARGUMENTS---------------------------------------------------------------

// var sum = function() {
// 	console.log(arguments);
// }
// sum(2,3,4,5);

//Arrow functions do not have a sense of their own arguments.
//WRONG!
// var sum = () => {
// 	console.log(arguments);
// }
// sum(2,3,4,5);//Gives error

//Arguments keyword looks like an array but is actually an object. It does not have access to all the methods a traditional array would. (Like map and for each).

// var sum = function() {
	// return arguments.map((num) => num + 1);
// }
// console.log(sum(2,3,4,5)); //Will not work. Arguments.map is not a function "error".


// var sum = function() {
// 	return Array.prototype.map .call(arguments, (num) => num+1); 
// }
// console.log(sum(2,3,4,5)); //This is correct!!



//----------------------FINAL PROJECT------------------------------------------//

//Try and use the new syntax but use old syntax if you need to.




//TODO

/*

- Make a Parent Class =====
- Make Child classes ====
- Make on our page =====
- Make buttons on our page (Can be handled in JS). ====
- Make form for our fields ====
- Make display section for our saved reviews =====
- Make functions for handleing clicks on buttons. ====
- Make functions that creates our form fields. ====
- Make a function that displays creates the review posts. (Call function to post reviews on page.) 
- Make a function to post a review and save to local storage
- Make a functions that displays any saved posts on page load.(call the function to post the review on the page as well)
- Make a function to delete posts from page and from memory.
- Make our Review catagory objects (so our list of field types and information that will be used to create our form fields)


*/

//Catgory 1, Catgeory 2, Category 3


function createButtons (category) {
	var list = document.getElementById("category-list");//use query selector with # if you want
	var listItem = document.createElement("li");
	listItem.innerHTML = category.categoryName;
	list.appendChild(listItem);
	listItem.addEventListener("click", function() {
		createFields(category);
		
	})      //Buttons on page
}

function createFields (category) {
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
}


function Review (category) {
	var publicItem = {
		categoryName: category.categoryName,
		options: {
			name: category.options && category.options.name ? category.options.name : {
				label:"Name",
				type:"text"
			},
			type: category.options && category.options.type ? category.options.type : {
				label:"Genre",
				type:"text"
			},
			review: category.options && category.options.review ? category.options.review : {
				label:"Review",
				type:"text area"
			},
			rating:category.options && category.options.rating ? category.options.rating : {
				label:"Rating",
				type:"select",
				choices:[
					"1: Hated it",
					"2: Not worth the money",
					"3: OK, but nothing special",
					"4: Pretty Good. Glad I watched it.",
					"5: Awesome, life changing experience!"
				]
			},
			again: category.options && category.options.again ? category.options.again : {
				label:"Would experience again",
				type:"radio",
				choices: [
					"Yes",
					"No"
				]
			},

		}
	};
	createButtons(publicItem);
	// console.log(publicItem);
	return publicItem; //Parent class 
}

var Drink = function(category) {//Child class
	var publicItem = Review(category);
	publicItem.options.taste = category.options && category.options.taste ? category.options.taste : {
		label:"Taste",
		type:"radio",
		choices: [
			"Sweet",
			"Bitter",
			"Bland"
		]
	}

	return publicItem;
}

var Video = function(category) { //Child class
	var publicItem = Review(category);

	publicItem.options.watched = publicItem.options.watched = category.options && category.options.watched ? category.options.watched : {

		label:"percent watched",
		type:"text"
	};
	publicItem.options.again = publicItem.options.again = category.options && category.options.again ? category.options.again : {
		label:"Would rewatch",
		type:"radio",
		choices:[
			"Yes",
			"No"
		]
	};


	return publicItem;
}

var Cocktails = Drink({//Objects used to call child class
	categoryName: "Cocktails", //Name of the category/button name
	options: { //Options represent the field to be used in our form
		type: { //Object keys will be used as the name for the field inputs
			label:"Alcohol", //Label will be used for the field label elements
			type:"select", //Type will be used inside the Classes to dtermine what HTML will be used for the field
			choices:[ //Choices will be used inside the classes to display options for fields that use them (I.E radio buttons, check boxesm select lists, etc.)
				"Gin",
				"Vodka",
				"Rum",
				"Whiskey",
				"Wine"
			]
		},
		taste: {
			label:"Taste",
			type:"select",
			choices:[
				"Sweet",
				"Sour",
				"Bitter",
				"Bland",
				"Floral",
				"Fruity"
			]
		},
		again: {
			label:"Would drink again?",
			type:"radio",
			choices: [
				"Yes",
				"No"
			]
		}
	}
});

var Movies = Video({//Objects used to call child class
	categoryName:"Movies",
	options:{
		watched:{
			label:"Percent of movie watched",
			type:"text"
		},
		rating:{
			label:"Rating",
			type:"select",
			choices:[
				"1: Hated it",
				"2: Not worth the money",
				"3: OK, but nothing special",
				"4: Pretty Good. Glad I watched it.",
				"5: Awesome, Life changing, Amazingly Touching, or made by Pixar."
			]
		},
	}
});

var Shows = {};
var Albums = {};
var Other = Review({
	categoryName:"Other"
});
















