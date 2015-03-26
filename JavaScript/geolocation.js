var GeoLocation = {
  getAdress: function(atr) {
    var city = document.getElementById(atr).getAttribute('data-city'),
      street = document.getElementById(atr).getAttribute('data-street'),
	  streetNumber = document.getElementById(atr).getAttribute('data-street-number'),
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
  goToUrl: function(atr) {
	  var d = document.getElementById(atr); 
    if (d.hasAttribute("data-city")) {
      window.open("http://maps.google.com?q=" + GeoLocation.getAdress(atr))
    } else {
      window.open("http://maps.google.com?q=" + GeoLocation.getCoordinats(atr))
    }
  }
}
