import React from 'react'
import Item from './Item'

class ItemList extends React.Component{
  constructor(props){
    super(props)
    setState = {
      listOfItems: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    this.setState({
      listOfItems: listOfItems.concat([<Item/>])
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit()}>
        <input type="submit" value="Add Item"/>
      </form>
    )
  }
}

export default ItemList