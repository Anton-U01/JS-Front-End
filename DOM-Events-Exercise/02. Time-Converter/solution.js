function attachEventsListeners() {
    let inputDays = document.getElementById('days');
    let daysButton = document.getElementById('daysBtn');

    let inputHours = document.getElementById('hours');
    let hoursButton = document.getElementById('hoursBtn');

    let inputMinutes = document.getElementById('minutes');
    let minutesButton = document.getElementById('minutesBtn');

    let inputSeconds = document.getElementById('seconds');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click',convertFromDays);
    hoursButton.addEventListener('click',convertFromHours);
    minutesButton.addEventListener('click',convertFromMinutes);
    secondsButton.addEventListener('click',convertFromSeconds);

    function convertFromDays (){
        inputHours.value = inputDays.value * 24;
        inputMinutes.value = inputHours.value * 60;
        inputSeconds.value = inputMinutes.value * 60;
    }
    function convertFromHours (){
        inputDays.value = inputHours.value / 24;
        inputMinutes.value = inputHours.value * 60;
        inputSeconds.value = inputMinutes.value * 60;
    }
    function convertFromMinutes (){
        inputHours.value = inputMinutes.value / 60;
        inputDays.value = inputHours.value / 24;
        inputSeconds.value = inputMinutes.value * 60;
    }
    function convertFromSeconds (){
        inputMinutes.value = inputSeconds.value / 60;
        inputHours.value = inputMinutes.value / 60;
        inputDays.value = inputHours.value / 24;
    }
}