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
        order: '01',
        minutes: '',
        hours: '',
        description: '',
        id: 0,
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      listOfData: (() => {
        let sortTest = false
        const name = e.target.name
        const value = e.target.value
        const id = Number(e.target.id)

        let newList = this.state.listOfData.map((x) => {   
          if (x.id === id){
            switch(name){
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
        if (sortTest){  // bug, the switched number is one below target
          const sumOrder = newList.reduce((x, y) => {
            return Number(x.order) + y
          }, 0)
          const sumLength = (newList.length / 2) * (newList.length + 1) //gauss formula
          
          if(sumOrder < sumLength){
            newList = newList.map((x) => {
              if (x.id !== id){
                if (Number(x.order) >= Number(value)){
                  x.order = (Number(x.order) + 1).toString()
                }  
              }
              return x
            })
          }
          else {
            newList = newList.map((x) => {
              if (x.id !== id){
                if (Number(x.order) >= Number(value)){
                  x.order = (Number(x.order) - 1).toString()
                }  
              }
              return x
            })
          }
          newList.sort((a,b) => {
            return Number(a.order) - Number(b.order);
          })
          for(let i = 0; i < newList.length; i++){
            if(i < 9){
              newList[i].order = "0" + (i + 1).toString()
            }
            else {
              newList[i].order = (i + 1).toString()
            }
          }
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
        if (Number(newObj.order) < 10){
          newObj.order = "0" + newObj.order
        }
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
