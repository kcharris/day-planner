import React from 'react'

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      order: null,
      hours: null,
      minutes: null,
      description: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
      }
    )
  }
  render(){
    return(
      <div>
        <input type= "text" name='name' maxLength="20" value={this.state.name} onChange={this.state.handleChange}/>
        <input type= 'number' name='order' min='0' max='100' value={this.state.order} onChange={this.state.handleChange}/>
        <input type= 'number' name='hours' min='0' max='23' value={this.state.hours} onChange={this.state.handleChange}/>
        <input type= 'number' name='minutes' min='0' max='59' value={this.state.minutes} onChange={this.state.handleChange}/>
        <input type= 'textbox' size="40" name='description' value={this.state.description} onChange={this.state.handleChange}/>
      </div>
    )
  }
}

export default Item