const targetDate = '1 Jan 2021';
var day = document.getElementById('days')
var hour = document.getElementById('hours')
var min = document.getElementById('mins')
var sec = document.getElementById('secs')
function countDown() {
    const newYear = new Date(targetDate);
    const currentDate = new Date();
    const totalseconds = (newYear - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600 / 24) % 24;
    const mins = Math.round(totalseconds / 3600 / 60) % 60;
    const secs = Math.floor(totalseconds) % 60;
    
    day.innerText = days; 
    hour.innerText = hours; 
    min.innerText = mins; 
    sec.innerText = secs; 
}
countDown()

setInterval(countDown, 1000)