const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
}

const countdownTimer = {
    start(){
        const targetDate = new Date('Jul 17, 2020').getTime()

        setInterval(() => {
            const nowTime = new Date().getTime()
            const distance = targetDate - nowTime 
            
            updateClockedface(distance)
        }, 1000)
    }
}

countdownTimer.start()

function updateClockedface(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));  
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days
    refs.hours.textContent = hours
    refs.mins.textContent = mins
    refs.secs.textContent = secs
}

function pad(value){
    return String(value).padStart(2, '0');
}