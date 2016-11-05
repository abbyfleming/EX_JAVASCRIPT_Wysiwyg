var output = document.getElementById("output");

function displayData(){

	for (i = 0; i < famousPeople.length; i++) {

		// Create the elements
		var div = document.createElement("ARTICLE");
		var header = document.createElement("HEADER");
		var section = document.createElement("SECTION");
		var footer = document.createElement("FOOTER");	

		// Sort through the array 
		getinfo = famousPeople[i];
		div.classList = "personContainer";
		
		div.id = "person" + i;
		header.innerHTML  = getinfo.name + ", " + getinfo.title; 
		section.innerHTML = "<img src=" + getinfo.image + ">" + getinfo.bio;
		footer.innerHTML  = getinfo.lifespan.birth + "-" + getinfo.lifespan.death;

		// Append and output
		div.appendChild(header);
		div.appendChild(section);
		div.appendChild(footer);
		output.appendChild(div);
	};

	addListeners();
}


function addBorders() {
	console.log("addBorders works!");  
}


function addListeners(){
	var personContainer = document.getElementsByClassName("personContainer");

	for (var i = 0; i < personContainer.length; i++) {
  		personContainer[i].addEventListener("click", addBorders);
 	 	console.log("Is this loop working?"); 
		}
}


window.addEventListener("load", displayData());