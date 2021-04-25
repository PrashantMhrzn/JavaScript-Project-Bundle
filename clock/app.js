setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if(hour > 12) {
        hour = hour-12;
        am_pm = "PM";
    }
    if(hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
    document.querySelector('.card-body').innerHTML = currentTime;

}

showTime();