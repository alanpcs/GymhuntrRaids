// Controls inner injected javascript states
if ( typeof state4 === 'undefined'){
	state4 = "block";
}
state4 == "block" ? state4 = "none" : state4 = "block";
var myJavaScript = "$('.dots:contains(\x22....\x22)').closest('.leaflet-marker-icon').css('display','" + state4 + "');"; 
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);