import React, { Component } from 'react';
import axios from 'axios';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date: '',
      Time: '',
      Description: ''
    };

    this.handleInputChangeDate = this.handleInputChangeDate.bind(this);
    this.handleInputChangeTime=this.handleInputChangeTime.bind(this);
    this.handleInputChangeDescr=this.handleInputChangeDescr.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }


 handleInputChangeDate(event) {
   this.setState({Date: event.target.value});
}
handleInputChangeTime(event) {
   this.setState({Time: event.target.value});
}
handleInputChangeDescr(event) {
   this.setState({Description: event.target.value});
}
handleSubmit(event)
{
   event.preventDefault();
    var data={
    Date: this.state.Date,
    Time: this.state.Time,
    Description: this.state.Description
  }




axios.post('http://localhost:8000/addnewreservation/', data);
     
  

    // fetch('http://localhost:8000/addnewreservation/', {
    //        method: 'POST',
    //        headers: {
    //                   'Accept': 'application/json',
    //                    'Content-Type': 'application/json',

    //                  },
    //        body:JSON.stringify(data)
    //   });

this.props.handleSubmit(event);

}
  render() {
    return (
      
 
   <div>
      <form onSubmit={this.handleSubmit} >
      <label>  Date:<input  name="Date"  type="date"  value={this.state.Date}  onChange={this.handleInputChangeDate} /> </label>
       <label> Time: <input name="Time" type="time" value={this.state.Time} onChange={this.handleInputChangeTime}  /> </label>
      <label> Description: <input name="Description" type="texts"  onChange={this.handleInputChangeDescr}  /> </label>
      <br/>
      <br/>
      <button type="submit" >SAVE</button>

      </form>
  </div>

    
    );
  }
}
export default MyForm;
