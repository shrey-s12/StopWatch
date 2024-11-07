let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let milisec = document.getElementById('milisec');
let container = document.querySelector('.container');
pause.disabled = true;

reset.addEventListener('click', () => {
    min.innerHTML = '00';
    sec.innerHTML = '00';
    milisec.innerHTML = '00';
});

let currTime;
start.addEventListener('click', () => {
    currTime = setInterval(() => {
        if (parseInt(milisec.innerHTML) < 9) {
            milisec.innerHTML = `0${parseInt(milisec.innerHTML) + 1}`;
        }
        else {
            milisec.innerHTML = parseInt(milisec.innerHTML) + 1;
        }
        if (milisec.innerHTML == 100) {
            if (parseInt(sec.innerHTML) < 9) {
                sec.innerHTML = `0${parseInt(sec.innerHTML) + 1}`;
            }
            else {
                sec.innerHTML = parseInt(sec.innerHTML) + 1;
            }

            milisec.innerHTML = "00";
        }
        if (sec.innerHTML == 60) {
            if (parseInt(min.innerHTML) < 9) {
                min.innerHTML = `0${parseInt(min.innerHTML) + 1}`;
            }
            else {
                min.innerHTML = parseInt(min.innerHTML) + 1;
            }
            sec.innerHTML = "00";
        }
    }, 10);
    start.disabled = true;
    pause.disabled = false;
});

pause.addEventListener('click', () => {
    clearInterval(currTime);
    start.disabled = false;
    pause.disabled = true;
});
