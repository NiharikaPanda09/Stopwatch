//start button click event
let startbtn = document.getElementById("start");
let p = document.getElementById("timer");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let lapbtn = document.getElementById("lap");
let lapli = document.getElementById("laps");


let startTime = null;
let elapsedTime = 0;
let Timeinterval = null;


function formatTime(time){
    // 60,000 millisec is 1 sec
    //so we do time%1000 to get leftover millisecs

    let millisecs = time%1000;
    // time/1000 gives secs or converts milli secs to
    // secs and % 60 gives number between 0-59
    let secs = Math.floor((time/1000)%60);

    // we do % 60000  as it converts milli to min as we want total minutes
    let min = Math.floor(time / 60000);

    return `${String(min).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(millisecs).padStart(3, '0')}`;

}


startbtn.addEventListener("click",()=>{
    console.log("Start button clicked");
    if(!Timeinterval){
        startTime = Date.now()- elapsedTime;
        Timeinterval = setInterval(()=>{
            elapsedTime = Date.now()-startTime;
            p.textContent = formatTime(elapsedTime)
        },10);
    }
})

stopbtn.addEventListener("click",()=>{
    clearInterval(Timeinterval);
    Timeinterval = null;
});


resetbtn.addEventListener("click",()=>{
    clearInterval(Timeinterval);
    Timeinterval = null;
    elapsedTime = 0;
    p.textContent = "00:00:00";
    lapli.innerHTML = ""


})
lapbtn.addEventListener("click",()=>{
   let listed = document.createElement("li");
   listed.textContent = formatTime(elapsedTime);
   lapli.appendChild(listed);
})