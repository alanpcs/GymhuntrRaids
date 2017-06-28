// Controls inner injected javascript states
if ( typeof stateAll === 'undefined'){
	stateAll = "block";
}
stateAll == "block" ? (
	stateAll = "none",
	state3 = "none",
	state4 = "none"
) : (
	stateAll = "block",
	state3 = "block",
	state4 = "block"
);
var myJavaScript = "$('.dots').closest('.leaflet-marker-icon').css('display','" + stateAll + "');"; 
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);