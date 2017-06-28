// Sets initial states
if ( typeof stateAll === 'undefined'){
	var stateAll = "block";
}
if ( typeof state4 === 'undefined'){
	var state4 = "block";
}
if ( typeof state3 === 'undefined'){
	var state3 = "block";
}

function allGyms() {
	var icons = document.querySelectorAll('#show3 > .gold, #show4 > .gold, #all-gyms > .gold');
	// Controls icons states
	if (stateAll == "block"){
		for (i = 0; i<icons.length; i++){
		    icons[i].classList.add("silver");
		}
	}
	else{
		for (i = 0; i<icons.length; i++){
		    icons[i].classList.remove("silver");
		}
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
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
		chrome.tabs.executeScript(tabs[0].id, {file: "javascripts/hide.js"});
	});
}
function show3() {
	// Controls icons states
	if (state3 == "block"){
		var icons = document.querySelectorAll('#show3 > .gold, #all-gyms > .gold');
		for (i = 0; i<icons.length; i++){
		    icons[i].classList.add("silver");
		}
	}
	else{
		var icons = document.querySelectorAll('#show3 > .gold');
		for (i = 0; i<icons.length; i++){
		    icons[i].classList.remove("silver");
		}
	}
	state3 == "block" ? state3 = "none" : state3 = "block";
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "javascripts/show3.js"});
	});
}
function show4() {
	// Controls icons states
	if (state4 == "block"){
		var icons = document.querySelectorAll('#show4 > .gold, #all-gyms > .gold');
		for (i = 0; i<icons.length; i++){
		    icons[i].classList.add("silver");
		}
	}
	else{
		var icons = document.querySelectorAll('#show4 > .gold');
		for (i = 0; i<icons.length; i++){
		    icons[i].classList.remove("silver");
		}
	}
	state4 == "block" ? state4 = "none" : state4 = "block";
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "javascripts/show4.js"});
	});
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('all-gyms').addEventListener('click', allGyms);
	document.getElementById('show3').addEventListener('click', show3);
	document.getElementById('show4').addEventListener('click', show4);
});