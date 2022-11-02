"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
class CountDownTimer extends react_2.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            },
            duration: props.duration,
            timer: null
        };
        this.startTimer = this.start.bind(this);
    }
    msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        let days = Math.floor((duration / (1000 * 60 * 60 * 24)));
        days = days.toString().padStart(2, '0');
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        return {
            days,
            hours,
            minutes,
            seconds
        };
    }
    componentDidMount() {
        this.start();
    }
    start() {
        if (!this.state.timer) {
            this.setState({ startTime: Date.now() });
            this.timer = window.setInterval(() => this.run(), 10);
        }
    }
    run() {
        const diff = Date.now() - this.state.startTime;
        // If you want to count up
        // this.setState(() => ({
        //  time: this.msToTime(diff)
        // }));
        // count down
        let remaining = this.state.duration - diff;
        if (remaining < 0) {
            remaining = 0;
        }
        this.setState(() => ({
            time: this.msToTime(remaining)
        }));
        if (remaining === 0) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    render() {
        return (React.createElement(react_1.Box, { textColor: "white" },
            " ",
            this.state.time.days,
            " : ",
            this.state.time.hours,
            " : ",
            this.state.time.minutes,
            " : ",
            this.state.time.seconds,
            "s"));
    }
}
exports.default = CountDownTimer;
//# sourceMappingURL=CountDownTimer.component.js.map