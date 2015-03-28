var GeoLocation = {
    getCoordinates: function(atr) {
    var id = document.getElementById(atr);
    if (id.hasAttribute("data-latitude")||id.hasAttribute("data-longitude")) {
        latitude = document.getElementById(atr).getAttribute('data-latitude'),
        longitude = document.getElementById(atr).getAttribute('data-longitude'),
        coordinats = latitude + "," + longitude;
    return coordinats;
    } else {
      var city = document.getElementById(atr).getAttribute('data-city'),
        street = document.getElementById(atr).getAttribute('data-street'),
        streetNumber = document.getElementById(atr).getAttribute('data-street-number'),
        zipCode = document.getElementById(atr).getAttribute('data-zip-code'),
        adress = city + " " + street + " " + streetNumber + " " + zipCode
      return adress
    }
  }
}
var Maps = {
  createURL : function(atr){
	  url = "http://maps.google.com?q=" + GeoLocation.getCoordinates(atr)
	  return url;
  },
  goToUrl: function(atr) {
    window.open(Maps.createURL(atr));
  }
}
