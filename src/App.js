import React from 'react';
import TimeOverview from './components/TimeOverview'
import ItemList from './components/ItemList'
import Item from './components/Item'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listOfItems: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      listOfItems: this.state.listOfItems.concat(<Item/>),
    })
  }
  render(){
    return (
    <div>
      <TimeOverview />
      <ItemList onClick={this.handleClick} listOfItems={this.state.listOfItems}/>
    </div>
    );
  }
  
}

export default App;
