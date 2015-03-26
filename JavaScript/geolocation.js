var GeoLocation = {
  getAdress: function(atr) {
    var city = document.getElementById(atr).getAttribute('data-city'),
      street = document.getElementById(atr).getAttribute('data-street'),
	  streetNumber = document.getElementById(atr).getAttribute('data-street'),
	  zipCode = document.getElementById(atr).getAttribute('data-zip-code'),
      adress = city + " " + street+" "+streetNumber+" "+zipCode
    return adress
  },
  getCoordinats: function(atr) {
    latitude = document.getElementById(atr).getAttribute('data-latitude'),
      longitude = document.getElementById(atr).getAttribute('data-longitude'),
      coordinats = latitude + "," + longitude;
    return coordinats;
  }
}

GoToPage = {
  goToUrl: function(atr, id) {
    if (id === "adress") {
      window.open("http://maps.google.com?q=" + GeoLocation.getAdress(atr))
    } else {
      window.open("http://maps.google.com?q=" + GeoLocation.getCoordinats(atr))
    }
  }
}