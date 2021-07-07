
import './sass/main.scss';

// const bodyRef = document.querySelector('body')
// bodyRef.insertAdjacentHTML("afterbegin", `<div class="timer" id="timer-1"></div>`)
// const targetTime = new Date(2021, 6, 25, 11, 11, 11).getTime()
// console.log(targetTime)

class CountdownTimer {
    constructor({ selector, targetDate}) {        
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
        };

        setInterval(() => {
            const startDate = Date.now();
            const time = this.targetDate - startDate;
            const { days, hours, mins, secs } = this.getTimeComponents(time);
            this.updateClockface(this.getTimeComponents(time));
            
        }, 1000);
    }
   getTimeComponents(time) {
    const days =  this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =  this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs =  this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }
       updateClockface({ days, hours, mins, secs }) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`; 
}
};
const timer =  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 30, 2021'),    
});



// timer()

// function timer() {
//     let intID = setInterval(function()
//     {
//         const currentTime = new Date().getTime();
    
//         const time = targetTime - currentTime;
//         const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//                 // document.getElementById('timer-1').innerHTML = days + "d " + hours + "h " + mins + "m " + secs + "s ";
//             const timerBox = document.getElementById('timer-1')
//             timerBox.innerHTML = `<div class="field">
//             <span class="value" data-value="days">${days}</span>
//             <span class="label">Days</span></div>
//             <div class="field">
//             <span class="value" data-value="hours">${hours}</span>
//             <span class="label">Hours</span></div>
    
//         <div class="field">
//             <span class="value" data-value="mins">${mins}</span>
//             <span class="label">Minutes</span>
//         </div>
    
//         <div class="field">
//             <span class="value" data-value="secs">${secs}</span>
//             <span class="label">Seconds</span>
//         </div>`  
//             if (time < 0) {
//                         clearInterval(intID);
//                       document.getElementById('timer-1').innerHTML = "Its time NOW" 
//                 }
//     }, 1000)

// }

// function pad(value) {
//         return String(value).padStart(2, '0');
// }




// // function getTimeComponents(time) {
// // 
// //     console.log(days)
// // console.log(hours)
// // console.log(mins)
// // console.log(secs)
// //     return {
// //         days, hours, mins, secs
// //     }
    
// // }



// // new CountdownTimer({
// //  selector: '#timer-1',
// // targetDate: new Date('Jul 17, 2019'),
// // });



