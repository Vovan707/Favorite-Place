var GeoLocation = {
  getAdress : function(obj) {
    var city = obj.getAttribute('data-city'),
      street = obj.getAttribute('data-street'),
      street_number = obj.getAttribute('data-street-number'),
      zip_code = obj.getAttribute('data-zip-code'),
      adress = city+" "+street+" "+street_number+" "+zip_code;
    return adress;
  },
  getCoordinats : function(obj) {
	var latitude = obj.getAttribute('data-latitude'),
	  longitude = obj.getAttribute('data-longitude'),
	  coordinats = latitude+","+longitude;
	return coordinats;
  }
}
function goToPage() {
	
	 window.location = "http://maps.google.com?q=getCoordinats(this)";
}
 

