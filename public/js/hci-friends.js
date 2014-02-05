'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".name").click(update); 
}

function update(e) {
	e.preventDefault();
    var name = $(this).text();
    var newtext = anagrammedName(name);
    var curr = $(this);
    curr.text(newtext);
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!

	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}		
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}