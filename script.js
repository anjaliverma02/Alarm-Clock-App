let alarmTime=null;

let sound =
new Audio(
"https://www.soundjay.com/buttons/sounds/beep-07.mp3"
);


setInterval(()=>{


let time = new Date();


let current =

time.getHours().toString().padStart(2,"0")
+ ":" +

time.getMinutes().toString().padStart(2,"0");


document.getElementById("clock").innerHTML =

time.toLocaleTimeString();



if(current===alarmTime){

sound.play();

}


},1000);



function setAlarm(){


alarmTime =
document.getElementById("alarmTime").value;


alert("Alarm Set 🔔");


}



function stopAlarm(){

sound.pause();

sound.currentTime=0;

}
