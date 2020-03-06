"use strict";

class View {
    constructor(model, clock) {
        this.model = model;
        this.clock = clock;
        this.hoursElement = this.clock.querySelector('.hour');
        this.minutesElement = this.clock.querySelector('.min');
        this.secondsElement = this.clock.querySelector('.sec');
    }

    set Model(model) {
        this.model = model;
    }

    update() {
        let hours = this.model.hours;
        let minutes = this.model.minutes;
        let seconds = this.model.seconds;

        if (hours < 10) {
            hours = '0' + hours;
        }
        this.hoursElement.innerHTML = hours;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        this.minutesElement.innerHTML = minutes;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        this.secondsElement.innerHTML = seconds;
    }
}
