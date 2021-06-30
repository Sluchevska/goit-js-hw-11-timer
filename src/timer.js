

const targetTime = new Date(2021, 6, 25, 11, 11, 11).getTime()
console.log(targetTime)

timer()


import './sass/timer.scss';
function timer() {
    let intID = setInterval(function()
    {
        const currentTime = new Date().getTime();
    
        const time = targetTime - currentTime;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
                // document.getElementById('timer-1').innerHTML = days + "d " + hours + "h " + mins + "m " + secs + "s ";
            const timerBox = document.getElementById('timer-1')
            timerBox.innerHTML = `<div class="field"><span class="value" data-value="days">${days}</span><span class="label">Days</span></div>
            <div class="field"><span class="value" data-value="hours">${hours}</span><span class="label">Hours</span></div>
    
        <div class="field">
            <span class="value" data-value="mins">${mins}</span>
            <span class="label">Minutes</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="secs">${secs}</span>
            <span class="label">Seconds</span>
        </div>`  
            if (time < 0) {
                        clearInterval(intID);
                      document.getElementById('timer-1').innerHTML = "Its time NOW" 
                }
}, 1000)
}





// function getTimeComponents(time) {
// 
//     console.log(days)
// console.log(hours)
// console.log(mins)
// console.log(secs)
//     return {
//         days, hours, mins, secs
//     }
    
// }



// new CountdownTimer({
//  selector: '#timer-1',
// targetDate: new Date('Jul 17, 2019'),
// });



