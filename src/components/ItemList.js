import React from 'react'
import Item from './Item'

class ItemList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listOfItems: [],
      keyTracker: 0, //value that incrememnts as items are added, not deleted
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      listOfItems: this.state.listOfItems.concat(<Item key={keyTracker}/>),
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