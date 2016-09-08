/*Brett Nelson*/
/*firstWebsite JS file*/

// no longer used
// var myHeading = document.querySelector('h1'); /* the querySelector function lets us reference the heading element */
// myHeading.textContent = 'Hello world!'; /* textContent is one of myHeading's properties */

/* 

JS syntax 

	Data
	 - String's are declared with single quates, e.g. $var newVariable = 'Bob';$ 
	 - Numbers? may be integers, e.g. $var myVariable = 10;$ 
	 - Booleans use lower case "true" and "false" 
	 - Arrays store elements of different types, e.g. $var myVariable = [1,'Bob','Steve',10];$ 
	      - to access an array element,  call as myVariable[0], or myVariable[1]
	 - if not one of the above, something can prbably still be stored as an object, e.g. an h1 header
	 - // can also be used for a comment

	Operators
	 - = sets value, === checks values
	 - ! or !== negate values

	Conditionals
	 - traditional if-else goes as follows
	 - $if(boolean){
			do something;
	 	} else {
			do something else;
	 	}

	Functions
	 - same as Java except declare a function by saying $function multiply(num1, num2){...}$
	 	 - This can have a return statement if needed, no type need be specified

	Events
	 - tracks whether an event has occured, such as a click


 */

// Test Functions
// no longer used
// function multiply(num1, num2){
//	return num1*num2;
//}

//multiply(4,7); //works

// Here we are telling our html class to run an anonymous function when webpage is clicked
// Notice how function() has no name, thus is only used here once
//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');

// the getAttribute and setAttribute functions do what they say, very nice
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src'); // important to check src each time function executes
    if(mySrc === 'images/firefox2.gif') {
      myImage.setAttribute ('src','images/fox.png');
    } else {
      myImage.setAttribute ('src','images/firefox2.gif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if(myName===null || myName.trim()===''){
  	return;
  }
  localStorage.setItem('name', myName); //setItem of localStorage allows us to store something in the browser, like an instance variable
  myHeading.textContent = 'Hi there ' + myName + '!';
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hi there ' + storedName + '!';
}

myButton.onclick = function(){
	setUserName();
}








