const input = document.getElementById("input");

function reversed() {
    let rs = input.value.toLowerCase().replace(/\W/g, '').split('').reverse().join('');
    return rs;
};

function check(){
    let text = input.value.toLowerCase().replace(/\W/g, '');
    let reversedText = reversed();
    if(text === reversedText){
        alert("Palindrome!");
    }else{
        alert("Nope!")
    }
    input.value = "";
};
