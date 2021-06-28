

const targetTime = new Date(2021, 6, 25, 11, 11, 11).getTime()
console.log(targetTime)




function timer() {
    setInterval()
    {
        const currentTime = new Date().getTime();
    
        const time = targetTime - currentTime;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        // document.getElementById('')
}
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



