

export function getLocation() {
	

	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
		  console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
		});
	  }
	  else{
		console.log("kys");
	  }
}
