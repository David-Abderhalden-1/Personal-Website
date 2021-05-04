console.log("Successfully loaded script ...");
var last = "";

// Check if layer_1 is clicked
const toggle_layer_1 = document.getElementsByClassName("layer_1")
for(let x = 0; x<toggle_layer_1.length; x++){
    document.getElementById(toggle_layer_1[x].id).addEventListener('click', getDropdown.bind(event,toggle_layer_1[x].id), false);
}

// Dropdown of layer_1
function getDropdown(id){
    id2 = id+"-dropdown"
    toogleOff(".dropdown", id2);
    toogleOff(".layer_1", id);
    document.getElementById(id2).classList.toggle("active");
    document.getElementById(id).classList.toggle("active");
    try{
        if(!document.getElementById(last).classList.contains("active")){
            toogleOff(".new", "trash");
            toogleOff(".layer_2", "trash");
        }
    }catch{Error}
    window.last = id2;
}

// Toggle others off
function toogleOff(c, i){
    const toggleList = document.querySelectorAll(c);
    for(let x = 0; x < toggleList.length; x++) {
        if(document.getElementById(toggleList[x].id).classList.contains("active")&&toggleList[x].id != i){
            document.getElementById(toggleList[x].id).classList.toggle("active")
        }
    }
}

// Check if layer_2 is clicked
const toggle_layer_2 = document.getElementsByClassName("layer_2")
for(let x = 0; x<toggle_layer_2.length; x++){
    document.getElementById(toggle_layer_2[x].id).addEventListener('click', get2Dropdown.bind(event,toggle_layer_2[x].id), false);
}

// Dropdown of layer_2
function get2Dropdown(id){
    id2 = id+"-dropdown"
    document.getElementById(id).classList.toggle("active");
    document.getElementById(id2).classList.toggle("active");
    getDropdown(window.last)
}