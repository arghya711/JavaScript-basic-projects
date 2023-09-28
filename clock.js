function showTime(){
    const date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var am_pm = "AM";
if(h==0){
    h=12;
}
if(h>12){
    h = h-12;
    am_pm = "PM";
}
h = (h<10)?"0"+h:h;
m = (m<10)?"0"+m:m;
s = (s<10)?"0"+s:s;
document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + am_pm;
setInterval(showTime,1000);
}
showTime();