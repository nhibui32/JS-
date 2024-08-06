const display = document.getElementById("display");
let isRunning = false;
let elapsedTime = 0;
let interval = null;

function start(){
    if(!isRunning){
        isRunning = true;
        playBtn.src="img/pause.png";
        playBtn.alt="Pause Button";
        interval = setInterval(timer,1000);
    }else{
        stop();
    }
}

function stop(){
    isRunning = false;
    playBtn.src="img/play.png";
    playBtn.alt="Play Button";
    clearInterval(interval);
}

function reset(){
    stop();
    elapsedTime = 0;
    setTime();

}

function padStart(value){
    return String(value).padStart(2,"0");
};

function timer(){
    elapsedTime++;
    setTime();
}

function setTime(){
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    display.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;

}




