import React from 'react'

class TimeOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            endTime: "",           
            timeAvailable: null,
            timeUsed: 0,
            date: new Date(Date()),
    }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value,
        })
    }
    handleSubmit(event){
        //use current time to set value of time available
        event.preventDefault();
        this.setState({
            endTime: this.state.value,
            timeAvailable: (() => {
                let d = new Date()
                d.setHours(Number(this.state.endTime.slice(0,2)) - d.getHours())
                d.setMinutes(Number(this.state.endTime.slice(3,5))- d.getMinutes())
                return d
            })(),
        })
    };
    componentDidMount(){
        setInterval(() => {
            this.setState({
                date: new Date()
            });
            if (this.state.timeAvailable != null){
                this.setState({
                    timeAvailable: (() => {
                        let d = new Date()
                        d.setHours(Number(this.state.endTime.slice(0,2)) - d.getHours())
                        d.setMinutes(Number(this.state.endTime.slice(3,5))- d.getMinutes())
                        return d
                    })(),
                });
            }   
        }, 1000);
    }

    render() {
        return (
            <ul>
                <li>
                    Current Time is {this.state.date.toTimeString().slice(0,5)}
                </li>
                <li>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            End Time:
                            <input type="time" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type='submit' value='Submit'/>
                    </form>
                </li>
                <li>
                    Time Available: {this.state.timeAvailable == null ? "00:00" : this.state.timeAvailable.toTimeString().slice(0,8)}
                </li>
                <li>
                    Time Used: {this.state.timeUsed}
                </li>
            </ul>
        );
    }
        
        //current accurate time by date and minute
        //an end time, preferably not over 24 hours
        //when end time entered lock it as a set date
        //hours/minutes available
        //time used as sum of list items min.
}

export default TimeOverview