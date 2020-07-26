import React from 'react'

class Item extends React.Component {
  constructor(props){
    super(props)
    
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
        <input type= "text" name='name' maxLength="20" value={this.props.data.name} onChange={this.handleChange}/>
        <input type= 'number' name='order' min='0' max='100' value={this.props.data.order} onChange={this.handleChange}/>
        <input type= 'number' name='hours' min='0' max='23' value={this.props.data.hours} onChange={this.handleChange}/>
        <input type= 'number' name='minutes' min='0' max='59' value={this.props.data.minutes} onChange={this.handleChange}/>
        <input type= 'textbox' size="40" name='description' value={this.props.data.description} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Item