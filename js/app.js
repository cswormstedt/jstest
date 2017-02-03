var lunch = ["chicken", "rice", "peppers", "salsa"]

// iterator = iterator + 1 is the same as i++

for (var i = 0; i < lunch.length; i++) {
 	console.log(lunch[i])
}

for (var i = 0; i <= 20; i++) {
	if (i % 2 === 0){
		console.log(i + ' is even');
	}
	else {
		console.log(i + ' is odd');
	}
};

var bagOfBeans = 50;

//iterator = iterator - 1 i--

for (i = 100; i >= 0; i--) {
	if (i % 2 ===0){
		bagOfBeans += i;
		console.log(bagOfBeans);
	}
	else {
		console.log(i + ' this is odd')
	}
}



var meal = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];

var food = [];
var drinks = [];
var sauces = [];

for (i = 0; i < meal.length -1; i++) {
	console.log(meal[i])
	if(meal[i] === 'cheese' || meal[i] === 'pepperoni'){
		food.push(meal[i]);//push is the method

	}
	else if (meal[i] === 'beer' || meal[i] === 'wine'){
		drinks.push(meal[i]);
	}
	else {
		sauces.push(meal[i]);
	}
}


var mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]
var notANumber = [];

for (i = 0; i < mixedArray.length - 1; i++){
	if (typeof mixedArray[i] != "number"){
		notANumber.push(mixedArray[i])
	}
}


var seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}

for (prop in seinfeld){
	//console.log(prop);
	console.log(seinfeld[prop])
}


















	



