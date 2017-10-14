'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
//metohd for Calculating Total
  calcTotalCookies: function() {
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total: ' + sum);
  },
  render: function() {
    var firstandpikeul = document.getElementById('firstandpikeul');
    var firstandpikeh3 = document.getElementById('firstandpikeh3');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    firstandpikeh3.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      firstandpikeul.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalCookies[0] + ' Cookies.';
    firstandpikeul.appendChild(total);
  }
};

//SeaTac Location Location
var seaTacAirport = {
  name: 'SeaTac Airport',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  //metohd for Calculating Total
  calcTotalCookies: function() {
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total: ' + sum);
  },
  render: function() {
    var seatacairportul = document.getElementById('seatacairportul');
    var seatacairporth3 = document.getElementById('seatacairporth3');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    seatacairporth3.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seatacairportul.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalCookies[0] + ' Cookies.';
    seatacairportul.appendChild(total);
  }
};

//Seattle Center Location
var seattleCenter = {
  name: 'Seattle Center',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  //metohd for Calculating Total
  calcTotalCookies: function() {
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total: ' + sum);
  },
  render: function() {
    var seattlecenterul = document.getElementById('seattlecenterul');
    var seattlecenterh3 = document.getElementById('seattlecenterh3');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    seattlecenterh3.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seattlecenterul.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalCookies[0] + ' Cookies.';
    seattlecenterul.appendChild(total);
  }
};

//Capitol Hill Location
var capitolHill = {
  name: 'Capitol Hill',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  //metohd for Calculating Total
  calcTotalCookies: function() {
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total: ' + sum);
  },
  render: function() {
    var capitolhillul = document.getElementById('capitolhillul');
    var capitolhillh3 = document.getElementById('capitolhillh3');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    capitolhillh3.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      capitolhillul.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalCookies[0] + ' Cookies.';
    capitolhillul.appendChild(total);
  }
};

//Alki
var alki = {
  name: 'Alki',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  //metohd for Calculating Total
  calcTotalCookies: function() {
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total: ' + sum);
  },
  render: function() {
    var alkiul = document.getElementById('alkiul');
    var alkih3 = document.getElementById('alkih3');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    alkih3.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      alkiul.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalCookies[0] + ' Cookies.';
    alkiul.appendChild(total);
  }
};

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

function showHide1() {
  var x = document.getElementById("firstandpikemap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showHide2() {
  var x = document.getElementById("seatacairmap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showHide3() {
  var x = document.getElementById("seatcentmap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showHide4() {
  var x = document.getElementById("caphilmap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showHide5() {
  var x = document.getElementById("alkimap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
