let buttonOpenElt = document.getElementById("open-modal");
let buttonCloseElt = document.getElementById("close-modal");
let modalElt = document.getElementById("modal");
buttonOpenElt.addEventListener("click", function (){
	modalElt.style.display = "block";
});
buttonCloseElt.addEventListener("click", function (){
	modalElt.style.display = "none";
});