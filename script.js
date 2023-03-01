// all the variables
var apples = 0;

var applesPerSecond = 0;

var applesPerClick = 1;

// costs of items
var iPhoneCost = 10;

var iPadCost = 10;

var airPodsCost = 500;

var penCost = 200;

var macCost = 10000;

var iMacCost = 1000000;

var appleStoreCost = 10000000;

var steveJobsCost = 1000000000;

// how many items you have
var iPhones = 0;

var iPads = 0;

var airPods = 0;

var pens = 0;

var macs = 0;

var iMacs = 0;

var appleStores = 0;

var steveJobs = 0;


// function that gets called when you click the apple logo
function increment() {
	apples += applesPerClick; // adds the number of apples per click to your total apples
	document.getElementById("showApples").innerText = apples; // uses DOM to change the number of apples in the HTMl

	if (apples >= 7800000000) // if it's higher than world population
	{
		document.getElementById("gameOver").innerText = "You won the game! Apple dominates the Earth!"
	}
}

// function that happens every second
setInterval(function() {
	apples += applesPerSecond; // adds the number of apples per second to your total apples
	document.getElementById("showApples").innerText = apples; // uses DOM to change the number of apples in the HTML
}, 1000) // every second (1000 milliseconds)


// different functions for each item
function buyIPhone() {

	if (apples >= iPhoneCost) // checks if you have enough apples
	{
		
		apples -= iPhoneCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		iPhones++; // increments number of that item 

		document.getElementById("iPhoneNum").innerText = iPhones;
	

		iPhoneCost *=2; // doubles price of that item 

		document.getElementById("iPhoneCost").innerText = iPhoneCost;


		applesPerSecond += 1; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	
	
	}	else { // if there enough apples
		alert("You don't have enough Apples!") 
	}
}

// different functions for each item
function buyIPad() {

	if (apples >= iPadCost) { // checks if you have enough apples
		
		apples -= iPadCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		iPads++; // increments number of that item // increments number of that item // increments number of that item // increments number of that item

		document.getElementById("iPadNum").innerText = iPads;
	

		iPadCost *=2; // doubles price of that item

		document.getElementById("iPadCost").innerText = iPadCost;


		applesPerClick += 1; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	
	} else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}

// different functions for each item
function buyPen() {

	if (apples >= penCost) // checks if you have enough apples
	{
		
		apples -= penCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		pens++; // increments number of that item // increments number of that item // increments number of that item // increments number of that item

		document.getElementById("penNum").innerText = pens;
	

		penCost *=2; // doubles price of that item

		document.getElementById("penCost").innerText = penCost;


		applesPerSecond += 100; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	} else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buyAirPods() { // different functions for each item

	if (apples >= airPodsCost) { // checks if you have enough apples
		
		apples -= airPodsCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		airPods++; // increments number of that item

		document.getElementById("airPodsNum").innerText = airPods;
	

		airPodsCost *=2; // doubles price of that item

		document.getElementById("airPodsCost").innerText = airPodsCost;


		applesPerClick += 100; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}

}


function buyMac() {

	if (apples >= macCost)
	{
		
		apples -= macCost;

		document.getElementById("showApples").innerText = apples;

		macs++; // increments number of that item

		document.getElementById("macNum").innerText = macs;
	

		macCost *=2; // doubles price of that item

		document.getElementById("macCost").innerText = macCost;


		applesPerSecond += 1000; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buyIMac() {

	if (apples >= iMacCost) {
		
		apples -= iMacCost;

		document.getElementById("showApples").innerText = apples;

		iMacs++; // increments number of that item

		document.getElementById("iMacNum").innerText = iMacs;
	

		iMacCost *=2; // doubles price of that item

		document.getElementById("iMacCost").innerText = iMacCost;


		applesPerClick += 10000; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buyAppleStore() {

	if (apples >= appleStoreCost) {
		
		apples -= appleStoreCost;

		document.getElementById("showApples").innerText = apples;

		appleStores++; // increments number of that item

		document.getElementById("appleStoreNum").innerText = appleStores;
	

		appleStoreCost *=2; // doubles price of that item

		document.getElementById("appleStoreCost").innerText = appleStoreCost;


		applesPerSecond += 100000; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buySteveJobs() {

	if (apples >= steveJobsCost) {
		
		apples -= steveJobsCost;

		document.getElementById("showApples").innerText = apples;

		steveJobs++; // increments number of that item

		document.getElementById("steveJobsNum").innerText = steveJobs;
	

		steveJobsCost *=2; // doubles price of that item

		document.getElementById("steveJobsCost").innerText = steveJobsCost;


		applesPerClick += 1000000; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}
