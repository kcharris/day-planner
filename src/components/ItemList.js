import React from 'react'
import Item from './Item'

class ItemList extends React.Component{

  render(){
    return (
      <div>
        <form>
          <input type="button" value="Add Item" onClick={this.props.onClick}/>
        </form>
        <ul>
          {this.props.listOfData.map((x) => <Item data={x} onChange={this.props.onChange}/>)}
        </ul>
      </div>
    )
  }
}

export default ItemList