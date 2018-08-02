var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}


function timerLeft(year,month,day) {
    setInterval(function() {
        var daysLeft = document.querySelector('.timer-number--days'),
            daysText = document.querySelector('.timer-text--days'),
            hoursLeft = document.querySelector('.timer-number--hours'),
            hoursText = document.querySelector('.timer-text--hours'),
            minutesLeft = document.querySelector('.timer-number--minutes'),
            minutesText = document.querySelector('.timer-text--minutes'),
            secLeft = document.querySelector('.timer-number--seconds'),
            secText = document.querySelector('.timer-text--seconds'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year,month,day),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            daysNumber = Math.floor(sec / 86400),
            hoursNumber = Math.floor(sec / 3600),
            minutesNumber = Math.floor(secToMinutes / 60),
            secondsNumber = secToMinutes % 60;
        daysText.innerHTML = decOfNum(daysNumber, ['день', 'дня', 'дней']);
        hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']);
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']);
        secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд']);
        daysLeft.innerHTML = daysNumber;
        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secLeft.innerHTML = secondsNumber;

    },1000)
}

timerLeft(2018, 11, 20);
