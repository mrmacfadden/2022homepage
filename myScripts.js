//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }
   
//POST-IT NOTE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
}
   
   function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
}

var show = false;
function showNote(){
    if (show == false){
        document.getElementById("note").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("note").style.opacity = 0;
        show = false;
    }
 }

//CALCULATOR (JAVASCRIPT)
var showCalc = false;
function showCalculator(){
    if (showCalc == false){
        document.getElementById("calc").style.opacity = 1;
        showCalc = true;
    }
    else if (showCalc == true){
        document.getElementById("calc").style.opacity = 0;
        showCalc = false;
    }
 }

 //TWITTER
var showTweet = false;
function showTwitter(){
    if (showTweet == false){
        document.getElementById("tweet").style.opacity = 1;
        document.getElementById("tweet").style.zIndex = 1;
        showTweet = true;
    }
 }

 function hideTweet(){
    if (showTweet == true){
        document.getElementById("tweet").style.opacity = 0;
        document.getElementById("tweet").style.zIndex = -1;
        showTweet = false;
    }
 }