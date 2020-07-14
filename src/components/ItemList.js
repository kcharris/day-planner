import React from 'react'
import Item from './Item'

class ItemList extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemChange = this.handleItemChange.bind(this)
  }
  handleItemChange(){ //add argument so data can be changed

  }
  handleClick(){
    this.setState({
      listOfItems: this.state.listOfItems.concat(<Item onChange={() => this.handleItemChange()}/>),
      keyTracker: (this.state.keyTracker + 1)
    })
  }
  render(){
    return (
      <div>
        <form>
          <input type="button" value="Add Item" onClick={this.handleClick}/>
        </form>
        <ul>
          {this.state.listOfItems}
        </ul>
      </div>
    )
  }
}

export default ItemList