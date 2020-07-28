import React from 'react'

class Item extends React.Component {
  
  render(){
    return(
      <div>
        <input type= "text" name='name' maxLength={20} id={this.props.data.id} value={this.props.data.name} onChange={this.props.onChange}/>
        <input type= 'text' name='order' maxLength={2} id={this.props.data.id} value={this.props.data.order} onChange={this.props.onChange}/>
        <input type= 'text' name='hours' maxLength={2} id={this.props.data.id} value={this.props.data.hours} onChange={this.props.onChange}/>
        <input type= 'text' name='minutes' maxLength={2} id={this.props.data.id} value={this.props.data.minutes} onChange={this.props.onChange}/>
        <input type= 'textbox' size="40" name='description' id={this.props.data.id} value={this.props.data.description} onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default Item