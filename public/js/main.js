$(document).ready(function(){
	$.ajax({
		url: "https://api.lyft.com/oauth/token",
		type: "POST",
		data: {
				client_id: "ydgWzNZ4qVrS",
				client_secret: "04gYKvHBfWi_HS7uuiERZqBiH9V_YWBd",
				grant_type: "client_credentials", 
				scope: "public"
			},
		success: function(response){
			console.log(response);
		}
	});
});

var LyftApi = require('lyft-api');

var defaultClient = LyftApi.ApiClient.default;
console.log("*****");
console.log(LyftApi);
console.log(defaultClient.authentications);

// Configure OAuth2 access token for authorization: Client Authentication
var clientAuthentication = defaultClient.authentications['Client Authentication'];
clientAuthentication.accessToken = "gAAAAABXvLCVr6uY651QmKu_Pj2_trgqXSPe9AVJ9lldCe3vPjzUDBHXG19FXDZoWZ7_G3U_u01K4fuw3Lj7W6ml30v7jiuH4rlEfaxdqS9UiLhn2eiTkhezLF8Y66I3cpuF4b7UhXlS25Y5xbmPb6Qz5m9dllLJQBH11bxMe4o-Qh5mtAaEUVw=";

// Configure OAuth2 access token for authorization: User Authentication
var userAuthentication = defaultClient.authentications['User Authentication'];
userAuthentication.accessToken = "gAAAAABXvLCVr6uY651QmKu_Pj2_trgqXSPe9AVJ9lldCe3vPjzUDBHXG19FXDZoWZ7_G3U_u01K4fuw3Lj7W6ml30v7jiuH4rlEfaxdqS9UiLhn2eiTkhezLF8Y66I3cpuF4b7UhXlS25Y5xbmPb6Qz5m9dllLJQBH11bxMe4o-Qh5mtAaEUVw=";

var api = new LyftApi.PublicApi()

var startLat = 1.2; // {Number} Latitude of the starting location

var startLng = 1.2; // {Number} Longitude of the starting location

var opts = { 
  'rideType': "rideType_example", // {String} ID of a ride type
  'endLat': 1.2, // {Number} Latitude of the ending location
  'endLng': 1.2 // {Number} Longitude of the ending location
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.costGet(startLat, startLng, opts, callback);