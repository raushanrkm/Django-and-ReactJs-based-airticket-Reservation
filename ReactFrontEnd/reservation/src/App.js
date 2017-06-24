import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './Addform';
import If from 'react-if';
import Table from './Table';
//import SearchForm from './SearchForm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';


class App extends Component {

    constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state={visible:'off'};
    this.state={tablevisible:'off'};
    this.state={ dataarray:[{Date:"default_value", Time:"default_value", Description:"default_value"}]};
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.visibleform= this.visibleform.bind(this);

     }

    componentWillMount() {
       this.setState({value:''});
       this.setState({tablevisible: 'off'});
       this.setState({visible: 'off'});
       var myArry=this.state.dataarray;
       myArry.push({Date:"Default2", Time:"Defaul2", Description:"Default2"})
       this.setState({dataarray:myArry});
   }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

handleSubmit(event) {
  
  let data=String(this.state.value);
  let url='http://localhost:8000/reservationlist/' +data;
  if(!(data===''))
        url= url+'/';
  axios.get(url)
      .then(res => { alert("Sucsss Get request");
       }).catch((err)=>{alert("Get Request Fail Error is "+err)});

       this.setState({visible: 'off'});
       this.setState({tablevisible: 'on'});
       this.setState({value: ''});
       
}


  visibleform(event) {
   this.setState({visible:'on'});
   
   }
   
  
  render() {
    return (
  <div>


  
      <div className="App">
            <div className="App-header"> <img src={logo} className="App-logo" alt="logo" /><h2>Welcome to React</h2> </div>
     </div>
  
   <br/>
         
<div className="App">



            <If condition={this.state.visible==='on'}> 
            <MyForm handleSubmit={this.handleSubmit}/>
            </If>


         <If condition={this.state.visible==='off'}> 
             <div>
                 <button id="addbutton" onClick={this.visibleform} >
                  Add New Reservation
                  </button>
             </div>
          </If>

      <br/>
      
    <div>   
           <label> Type Text:<input type="text"  onChange={this.handleChange} value={this.state.value}  /></label>
          <button onClick={this.handleSubmit} >Search</button>
    </div>

 

        < If condition={this.state.tablevisible ==='on'}> 
              <Table list={this.state.dataarray}/>
          </If>
 </div>



      </div>
    ); 
  }
}

export default App;
