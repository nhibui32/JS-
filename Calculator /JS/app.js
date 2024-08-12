const screen = document.getElementById("screen");

function display(value){
    screen.value += value;
}

function calculate(){
    try{
        screen.value =  eval(screen.value);
    }catch(e){
        screen.value = "Error";
    }
}

function clearScreen(){
    screen.value = "";
}