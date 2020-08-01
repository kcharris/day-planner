import React from 'react';
import TimeOverview from './components/TimeOverview'
import ItemList from './components/ItemList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
        const name = e.target.name
        const value = e.target.value
        if (x.id === Number(e.target.id)){
          switch(e.target.name){
            case 'name':
              x[name] = value
              break
            case 'order':
              x[name] = value
              break
            case 'hours':
              x[name] = value
              break
            case 'minutes':
              x[name] = value
              break
            case 'description':
              x[name] = value
              break
            default:
          }
          
        }
        return x
      })
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
      })()
    })
  }
  render(){
    return (
    <div>
      <TimeOverview />
      <ItemList onClick={this.handleClick} onChange={this.handleChange} listOfData={this.state.listOfData}/>
    </div>
    );
  }
  
}

export default App;
