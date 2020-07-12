import React from 'react'
import Item from './Item'

class ItemList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listOfItems: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      listOfItems: this.state.listOfItems.concat(<Item/>)
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