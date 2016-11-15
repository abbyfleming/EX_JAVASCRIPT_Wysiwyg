var input = document.getElementById("input");
var output = document.getElementById("output");

function displayData(){

	for (i = 0; i < famousPeople.length; i++) {

		// Create the elements
		var div = document.createElement("ARTICLE");
		var header = document.createElement("HEADER");
		var section = document.createElement("SECTION");
		var footer = document.createElement("FOOTER");	

		// Apply classes & id's
		div.classList = "personContainer";
		div.id = "person" + i;
		section.id = "bio" + i;

		// Sort through the array 
		getinfo = famousPeople[i];

		
		// Create the structure
		header.innerHTML  = getinfo.name + ", " + getinfo.title; 
		section.innerHTML = "<img src=" + getinfo.image + ">" + getinfo.bio;
		footer.innerHTML  = getinfo.lifespan.birth + "-" + getinfo.lifespan.death;

		// Add conditions for backgrounds
		if (i % 2 === 0) {
			div.classList.add("yellow");
		} else if (i % 1 === 0) {
			div.classList.add("blue");
		}


		// Append and output
		div.appendChild(header);
		div.appendChild(section);
		div.appendChild(footer);
		output.appendChild(div);


	}

	addListeners();

}


function addListeners(){
	var personContainer = document.getElementsByClassName("personContainer");

	for (var i = 0; i < personContainer.length; i++) {
  		personContainer[i].addEventListener("click", function (){
  			highlightPerson(this);	
  			});
		}
}


function highlightPerson(personClicked) {
	personClicked.classList.toggle("border");
	input.focus();
	//updatePerson();
}


function updatePerson() {
	var writeArticle = event.target.parentElement;
	
	input.addEventListener("keyup", function(){
  	//newPerson[0].innerHTML = input.value;
  	writeArticle.innerHTML = input.value;
	});

}




window.addEventListener("load", displayData());