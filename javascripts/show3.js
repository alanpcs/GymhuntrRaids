// Controls inner injected javascript states
if ( typeof state3 === 'undefined'){
	state3 = "block";
}
state3 == "block" ? state3 = "none" : state3 = "block";
var myJavaScript = "$('.dots').filter(function() {return $(this).text() == '...';}).closest('.leaflet-marker-icon').css('display','" + state3 + "');"; 
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);