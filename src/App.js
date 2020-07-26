import React from 'react';
import TimeOverview from './components/TimeOverview'
import ItemList from './components/ItemList'
import Item from './components/Item'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listOfItems: [],
      listOfData: [],
      dataObj: {
        name: '',
        order: 1,
        minutes: null,
        hours: null,
        description: '',
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    const data = (this.state.dataObj)
    this.setState({
      listOfData: this.state.listOfData.concat(data),
      dataObj: (() => {
        let newObj = this.state.dataObj;
        newObj.order += 1
        return newObj
      })(),
      listOfItems: listOfData.map((x) => <Item data={x}/>),
    })
  }
  render(){
    return (
    <div>
      <TimeOverview />
      <ItemList onClick={this.handleClick} listOfItems={this.state.listOfItems} listOfData={listOfData}/>
    </div>
    );
  }
  
}

export default App;
