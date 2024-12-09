function updateClock() {
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log("hour:" + hour);
    
    console.log("minute:" + minute);
    
    console.log("sec:" + second);

    let secondAngle = second * 6; 
    let minuteAngle = minute * 6 + second * 0.1; 
    let hourAngle = (hour % 12) * 30 + minute * 0.5; 

    document.getElementById('second').style.transform = `rotate(${secondAngle}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(updateClock, 1000);


updateClock();