import React from 'react'

class Item extends React.Component {
  
  render(){
    return(
      <div>
        <input type= "text" name='name' maxLength="20" id={this.props.data.id} value={this.props.data.name} onChange={this.props.onChange}/>
        <input type= 'number' name='order' min='0' max='100' id={this.props.data.id} value={this.props.data.order} onChange={this.props.onChange}/>
        <input type= 'number' name='hours' min='0' max='23' id={this.props.data.id} value={this.props.data.hours} onChange={this.props.onChange}/>
        <input type= 'number' name='minutes' min='0' max='59' id={this.props.data.id} value={this.props.data.minutes} onChange={this.props.onChange}/>
        <input type= 'textbox' size="40" name='description' id={this.props.data.id} value={this.props.data.description} onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default Item