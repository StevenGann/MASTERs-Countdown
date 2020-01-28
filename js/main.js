var endtime = 'August 9 2020 23:59:59 GMT-0700';

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}


function updateCountdown(days, hours, minutes, seconds) {
    document.getElementById("colD").innerHTML = days;
    document.getElementById("colH").innerHTML = pad(hours, 2);
    document.getElementById("colM").innerHTML = pad(minutes, 2);
    document.getElementById("colS").innerHTML = pad(seconds, 2);
}

function update() {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
  
    updateCountdown(days, hours, minutes, seconds);
}

update();
clearInterval();
window.setInterval(function(){
    update();
    
}, 500);
