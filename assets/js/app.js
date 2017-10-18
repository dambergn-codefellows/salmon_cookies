'use strict';
//debugger;
//constructors! think of it like a specialized machine in a factory that creates new objects.
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

//we need to create a place for our list of all locations to be placed when we create them.
var allLocations = [];
console.log(allLocations);
//we need to define a varaiable that will be dynamic depending on how many cookies
var totalCookiesByHour = [];
//console.log(totalCookiesByHour);
var totalCookiesByLocation = [];
//console.log(totalCookiesByLocation);
//total of total cookies
var netTotal = 0;
makeHeaderRow();
new MakeLocation('First and Pike', 23, 65, 6.3);
new MakeLocation('SeaTack Airport', 3, 24, 1.2);
new MakeLocation('Seattle Center', 11, 38, 3.7);
new MakeLocation('Capitol Hill', 20, 38, 2.3);
new MakeLocation('Alki', 2, 16, 4.6);


//constructor functions begin with an Uppercase letter
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  //console.log(this.randCustByHour);
  this.cookiesSoldByHour = [];
  //console.log(this.cookiesSoldByHour);
  this.totalCookiesByLocation = [];
  //console.log(this.totalCookiesByLocation);
  this.totalCookiesByHour = [];
  //console.log(this.totalCookiesByHour);
  allLocations.push(this.name);
  totalCookiesByLocation.push(this.totalCookiesByLocation);
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
  var sumByLocation = 0;
  for(var l = 0; l < hours.length; l++) {
    sumByLocation += (this.cookiesSoldByHour[l]);
  }
  this.totalCookiesByLocation.push(sumByLocation);
  //console.log('Total: ' + sumByLocation);
  var sumByHour = 0;
  //console.log(sumByHour);
  for(var m = 0; m < allLocations.length; m++) {
    sumByHour += (this.randCustByHour[m] + this.cookiesSoldByHour[m]);
  }
  this.totalCookiesByHour.push(sumByHour);
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = this.name;
  for(var i = 0; i <= hours.length; i++){
    var tdEl = document.createElement('td'); //creates top table row.
    tdEl.textContent = this.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = this.totalCookiesByLocation;
  cookiestands.appendChild(trEl);
}

function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  //console.log(cookiestands);
  var trEl = document.createElement('tr'); //creates table div.
  //console.log('Before trEl', trEl);
  trEl.textContent = 'Shop Location';
  for(var i = 0; i <= hours.length; i++){
    var thEl = document.createElement('th'); //creates top table row.
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl.textContent = 'Total';
  cookiestands.appendChild(trEl);
}

 function makeTotalsRows() {
   var cookiestands = document.getElementById('cookiestands');
   var trEl = document.createElement('tr'); //creates table div.
   //console.log('Before trEl', trEl);
   trEl.textContent = 'Total';
   for(var i = 0; i < hours.length; i++){
     var tdEl = document.createElement('td'); //creates top table row.
     tdEl.textContent = alkiData.cookiesSoldByHour[i];
     trEl.appendChild(tdEl);
   }
   cookiestands.appendChild(trEl);
 }
 makeTotalsRows();
