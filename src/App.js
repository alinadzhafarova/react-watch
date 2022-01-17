import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }

    componentDidMount() {
        this.setTime()
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    handleClickStart = () => {
        this.setTime()
    }
    handleClickStop = () =>{
        clearInterval(this.timerID);
    }

    setTime() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div>
                <h3 style={{ textAlign: "center"}}>
                    Время: {this.state.date.toLocaleTimeString()}.</h3>
                <button style={{position: "relative",
                    left: "50%",
                    transform:"translate(-100%, 0)",
                    color: "green",fontSize:"30px", textAlign: "center"}} onClick={this.handleClickStart}>
                    Start
                </button>
                <button style={{position: "relative",
                    left: "50%",
                    transform:"translate(-100%, 0)",
                    color: "red",fontSize:"30px", textAlign: "center"}}  onClick={this.handleClickStop}>
                    Stop
                </button>
            </div>
        );
    }
}
export default Clock;








