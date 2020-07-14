import React from 'react';
import TimeOverview from './components/TimeOverview'
import ItemList from './components/ItemList'

class App extends React.Component {
  constructor(props){
    super(props)
    class ItemData {
      name = ''
      order = null
      hours = 0
      minutes = 0
      description = ''
      key = 0
    }
    this.setState({
      key: 0,
      itemList: {},
    })
  }
  render(){
    return (
      <div>
        <TimeOverview />
        <ItemList />
      </div>
    );
  }
}

export default App;
