const color = document.getElementsByClassName("color");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const random = document.getElementById("random");

red.addEventListener("click", () =>{
    document.body.style.backgroundColor = "red";
})

green.addEventListener("click", () =>{
    document.body.style.backgroundColor = "green";
})

blue.addEventListener("click", () =>{
    document.body.style.backgroundColor = "lightblue";
})

random.addEventListener("click", () =>
    {
        let rs = Math.floor(Math.random() * 3);
        if(rs === 0)
        { document.body.style.backgroundColor = "red";
        }else if(rs === 1){document.body.style.backgroundColor = "green";
        }else{
            document.body.style.backgroundColor = "lightblue";
        }
    });
