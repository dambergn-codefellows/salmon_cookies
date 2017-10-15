'use strict';
//debugger;
//constructors! think of it like a specialized machine in a factory that creates new objects.
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them.
var allLocations = [];
//console.log(allLocations);
//we need to define a varaiable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;

//total of total cookies
var netTotal = 0;

var firstAndPikeData = new MakeLocation('First and Pike', 23, 65, 6.3);
var seaTacAirportData = new MakeLocation('SeaTack Airport', 3, 24, 1.2);
var seattleCenterData = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capitolHillData = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alkiData = new MakeLocation('Alki', 2, 16, 4.6);

//constructor functions begin with an Uppercase letter
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  //why is this an array?
  this.randCustByHour = [];
  //console.log(this.randCustByHour);
  this.cookiesSoldByHour = [];
  this.totalCookies = [];
  //console.log(this.totalCookies);
  allLocations.push(this.name);
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    //console.log(this.randCustByHour[i]);
  }
//method for cookies sold by hours
  for(var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    //console.log(this.cookiesSoldByHour[j]);
  }
//metohd for Calculating Total
  var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    //console.log('Total: ' + sum);

  }


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

function makeFirstAndPikeRows() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = firstAndPikeData.name;
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td'); //creates top table row.
    tdEl.textContent = firstAndPikeData.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
}
makeFirstAndPikeRows();

function makeSeaTacAirportRows() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = seaTacAirportData.name;
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td'); //creates top table row.
    tdEl.textContent = seaTacAirportData.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
}
makeSeaTacAirportRows();

function makeSeattleCenterDataRows() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = seattleCenterData.name;
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td'); //creates top table row.
    tdEl.textContent = seattleCenterData.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
}
makeSeattleCenterDataRows();

function makeCapitolHillRows() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = capitolHillData.name;
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td'); //creates top table row.
    tdEl.textContent = capitolHillData.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
}
makeCapitolHillRows();

function makeAlkiRows() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = alkiData.name;
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td'); //creates top table row.
    tdEl.textContent = alkiData.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
}
makeAlkiRows();
