console.log("Successfully loaded script ...");

// Check if layer_1 is clicked
/*const toggle_layer_1 = document.getElementsByClassName("layer_1")
for(let x = 0; x<toggle_layer_1.length; x++){
    document.getElementById(toggle_layer_1[x].id).addEventListener('click', getDropdown.bind(event,toggle_layer_1[x].id), false);
}

// Dropdown of layer_1
function getDropdown(id){
    id2 = id+"-dropdown"
    document.getElementById(id2).classList.toggle("active");
    document.getElementById(id).classList.toggle("active");
}*/


// Check if sector is clicked
const toggle_sector = document.getElementsByClassName("sector")
for(let x = 0; x<toggle_sector.length; x++){
    document.getElementById(toggle_sector[x].id).addEventListener('click', toggleSector.bind(event,toggle_sector[x].id), false);
}

function toggleSector(id){
    toggleOFF("sector"); toggleOFF("switcher");
    document.getElementById(id).classList.toggle("active");
    const getContainer = document.getElementsByClassName("switcher")
    switch (id) {
        case "1":
            document.getElementById(getContainer[0].id).classList.toggle("active");
            break;

        case "2":
            document.getElementById(getContainer[1].id).classList.toggle("active");
            break;

        case "3":
            document.getElementById(getContainer[2].id).classList.toggle("active");
            break;

        case "4":
            document.getElementById(getContainer[3].id).classList.toggle("active");
            break;

        default:
            break;
    }
}

function toggleOFF(c){
    const selection = document.getElementsByClassName(c)
    for(let x = 0; x<selection.length; x++){
        if(document.getElementById(selection[x].id).classList.contains("active")){
            document.getElementById(selection[x].id).classList.remove("active");
        }
    }
}