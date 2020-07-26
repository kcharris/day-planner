import React from 'react'

class ItemList extends React.Component{

  render(){
    return (
      <div>
        <form>
          <input type="button" value="Add Item" onClick={this.props.onClick}/>
        </form>
        <ul>
          {this.props.listOfItems}
        </ul>
      </div>
    )
  }
}

export default ItemList