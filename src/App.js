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
        order: '1',
        minutes: null,
        hours: null,
        description: '',
        id: 0,
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sortList = this.sortList.bind(this)
  }
  sortList() {
    this.setState({
      listOfData: (() => {
        let newList = new Array(...this.state.listOfData)
        newList.sort(function(a,b){
          if (a.order !== b.order){
            return Number(a.order) - Number(b.order)
          }
          else {
            return Number(a.order) - Number(b.order) - 1
          }
        })
        for(let i = 0; i < newList.length; i++){
          newList[i].order = i +1
        }
        return newList
      })()
    })
  }
  handleChange(e) {
    this.setState({
      listOfData: (() => {
        let sortTest = false
        let newList = this.state.listOfData.map((x) => {
          const name = e.target.name
          const value = e.target.value
          if (x.id === Number(e.target.id)){
            switch(e.target.name){
              case 'name':
                x[name] = value
                break
              case 'order':
                if (/^[\d]?$|^[\d][\d]$/.test(value))
                  x[name] = value
                if (/^\d\d$/.test(value))
                  sortTest = true
                break
              case 'hours':
                if (/^[\d]?$|^1[\d]$|^2[0-4]$/.test(value))
                  x[name] = value
                break
              case 'minutes':
                if(/^[\d]$|^[1-5][\d]$/.test(value))
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
        if (sortTest){
          newList.sort((a,b) => {
            return Number(a.order) - Number(b.order); //currently fails to replace item it's set to replace
          })
          sortTest = false
        }
        return newList
      })()
    })
  }
  handleClick(){
    const data = Object.assign({}, this.state.dataObj)
    this.setState({
      listOfData: this.state.listOfData.concat(data),
      dataObj: (() => {
        let newObj = this.state.dataObj;
        newObj.order = (Number(newObj.order) + 1).toString()
        newObj.id += 1
        return newObj
      })()
    })
  }
  render(){
    return (
    <div>
      <TimeOverview />
      <ItemList onClick={this.handleClick} onChange={this.handleChange} sortList={this.sortList} listOfData={this.state.listOfData}/>
    </div>
    );
  }
  
}

export default App;
