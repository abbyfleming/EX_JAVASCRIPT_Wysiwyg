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
		header.innerHTML = getinfo.name + ", " + getinfo.title; 
		section.innerHTML  = getinfo.bio /*+ "<img src=" + getinfo.image + ">"*/;
		footer.innerHTML = getinfo.lifespan.birth + "-" + getinfo.lifespan.death;

		// Append and output
		div.appendChild(header);
		div.appendChild(section);
		div.appendChild(footer);
		output.appendChild(div);
	};

}

window.addEventListener("load", displayData());