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
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    /* this needs to take a key to find the specific
    ItemData instance within itemList, and then use the
    name to access the target data to change...*/
    this.setState({
      [e.target.name]: e.target.value
      }
    )
  }
  render(){
    return (
      <div>
        <TimeOverview itemList={itemList} key={key}/>
        <ItemList itemList={itemList} key={key} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
