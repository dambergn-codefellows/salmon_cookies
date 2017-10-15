'use strict';

//constructors! think of it like a specialized machine in a factory that creates new objects.
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them.
var allLocations = [];
console.log(allLocations);
//we need to define a varaiable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;

//total of total cookies
var netTotal = 0;

//constructor functions begin with an Uppercase letter
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour){
  //a function called MakeLocation will be a template for creating new objects tht represent other locations.
  //the statements in this function add properties and or methods to the objects
  //the this keyword is use instead of he object name to indicate that the property or method belongs to the object that this function creates.
  //this function has four parameters and each one sets the value of a property in the object.
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  //why is this an array?
  this.randCustByHour = [];
  console.log(this.randCustByHour);
  this.cookiesSoldByHour = [];
  this.totalCookies = [];
  console.log(this.totalCookies);
  allLocations.push(this);
  //using the "this" keyword in front of the method to show that the method belongs to the object that this function creates.
  this.calcRandCustByHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
//method for cookies sold by hours
  this.calcCookiesSoldByHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
//metohd for Calculating Total
  this.calcTotalCookies = function() {
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total: ' + sum);
  };
}
//remember to call the methods in the constructor that are now prototypes available to the new objects the constructor will MakeLocations.
// this.calcRandCustByHour();

//call the functions in a function if you want
//this contructor function creates new objects with their own unique valused used in this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour).
function makeStands(){
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTack Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
  //make one for each store.
};
makeStands();

//Time to create the table in JavaScript
//make headder row
//table needs an id in html
function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  //console.log(cookiestands);
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = '......';
  for(var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th'); //creates top table row.
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  cookiestands.appendChild(trEl);
}
makeHeaderRow();

//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th elemnet
//give the th element text content
//append child

//remember to  call makeHeaderRow();
