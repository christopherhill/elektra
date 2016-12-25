// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
declare let googleApiClientReady: any;
declare let gapi: any;
declare let handleAPILoaded: any;


var $ = require('jquery');

var OAUTH2_CLIENT_ID = require('./../config/youtube.json').API_KEY; //'__YOUR_CLIENT_ID__';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

function init(cb: Function): void {
	const url = `//apis.google.com/js/client.js?onload=googleYouTubeAPICallback`;
	let script = document.createElement('script');
	script.src = url;
	(<any>window).googleYouTubeAPICallback = cb; 
	document.body.appendChild(script);
}

init(function() {
	alert('init');
  gapi.uth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
});

// // Upon loading, the Google APIs JS client automatically invokes this callback.
// (<any>window).googleApiClientReady = function() {
// 	console.log('hit')

// }

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth(): void {
	alert('checkauth');
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult): void {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces(): void {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}