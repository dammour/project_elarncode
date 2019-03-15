let navOcrElt = document.getElementById("b_ocr");

let navFreecodeElt = document.getElementById("b_freecode");

let navUdemyElt = document.getElementById("b_udemy");

let navSitepointElt = document.getElementById("b_sitepoint");

let navCsstElt = document.getElementById("b_csst");

let navPluralElt = document.getElementById("b_plural");

let ocrElts = document.getElementsByClassName("ocr");
let freecodeElts = document.getElementsByClassName("freecode");
let udemyElts = document.getElementsByClassName("udemy");
let sitepointElts = document.getElementsByClassName("sitepoint");
let csstElts = document.getElementsByClassName("csst");
let pluralElts = document.getElementsByClassName("plural");


let allBlocks = document.getElementsByClassName('padd');

function toggleVisibilityBlocks(currentBlock){
    for (let i=0; i<allBlocks.length;i++){
        allBlocks[i].classList.add('hidden-block')
    }
    for (let i=0; i<currentBlock.length;i++){
        currentBlock[i].classList.remove('hidden-block')
        currentBlock[i].classList.add('visible-block')
    }
}

navOcrElt.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibilityBlocks(ocrElts);
    
});

navFreecodeElt.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibilityBlocks(freecodeElts);
    
});

navUdemyElt.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibilityBlocks(udemyElts);
    
});

navSitepointElt.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibilityBlocks(sitepointElts);
    
});

navCsstElt.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibilityBlocks(csstElts);
    
});

navPluralElt.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibilityBlocks(pluralElts);
    
});

/*
navFreecodeElt.addEventListener("click", (event) => {
    for (let i=0; i<freecodeElts.length;i++){
        freecodeElts.style.display="flex";
    }
});
*/








/*
["b_ocr", "b_freecode", "b_udemy", "b_sitepoint", "b_csst", "b_plural"].map((element) => {
    document.getElementById(element).addEventListener('click', (event) => {
        document.getElementById(`div-${element}`).classList.add('visible_cat')
    });
});
remplacer la last line par l'appel function toggle
*/