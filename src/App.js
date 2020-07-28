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
        id: 0,
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      listOfData: this.state.listOfData.map((x) => {
        if (x.id == e.target.id){
          x[e.target.name] = e.target.value
        }
        return x
      }),
      listOfItems: this.state.listOfData.map((x) => <Item data={x} onChange={this.handleChange}/>)
    })
  }
  handleClick(){
    const data = Object.assign({}, this.state.dataObj)
    this.setState({
      listOfData: this.state.listOfData.concat(data),
      dataObj: (() => {
        let newObj = this.state.dataObj;
        newObj.order += 1
        newObj.id += 1
        return newObj
      })(),
      listOfItems: this.state.listOfData.map((x) => <Item data={x} onChange={this.handleChange}/>),
    })
  }
  render(){
    return (
    <div>
      <TimeOverview />
      <ItemList onClick={this.handleClick} listOfItems={this.state.listOfItems} listOfData={this.state.listOfData}/>
    </div>
    );
  }
  
}

export default App;
