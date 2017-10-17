'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var allLocations = [];
var totalCookiesByHour = [];
var totalCookiesByLocation = [];
var netTotal = 0;
var firstAndPikeData = new MakeLocation('First and Pike', 23, 65, 6.3);
var seaTacAirportData = new MakeLocation('SeaTack Airport', 3, 24, 1.2);
var seattleCenterData = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capitolHillData = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alkiData = new MakeLocation('Alki', 2, 16, 4.6);
var stores = [firstAndPikeData, seaTacAirportData, seattleCenterData, capitolHillData, alkiData];

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  console.log(this.cookiesSoldByHour);
  this.totalCookiesByLocation = [];
  console.log(this.totalCookiesByLocation);
  this.totalCookiesByHour = [];
  console.log(this.totalCookiesByHour);
  allLocations.push(this.name);
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  }
  for(var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
  }
  var sumByLocation = 0;
  for(var l = 0; l < hours.length; l++) {
    sumByLocation += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
  }
  this.totalCookiesByLocation.push(sumByLocation);
  var sumByHour = 0;
  for(var m = 0; l < allLocations.length; m++) {
    sumByHour += (this.randCustByHour[m] + this.cookiesSoldByHour[m]);
  }
  this.totalCookiesByHour.push(sumByHour);
}

function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  trEl.textContent = '......';
  for(var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  cookiestands.appendChild(trEl);
}
makeHeaderRow();

function rows() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  trEl.textContent = stores[j].name;
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = stores[j].cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
}

for (var j = 0; j <= stores.length; j++){
  rows(j);
}
