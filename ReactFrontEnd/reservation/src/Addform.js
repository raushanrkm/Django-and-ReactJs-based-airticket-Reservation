import React, { Component } from 'react';
import axios from 'axios';
//import DjangoCSRFToken from 'django-react-csrftoken';
//import ReactDOM, { findDOMNode } from 'react-dom';
//import DjangoCSRFToken from 'django-react-csrftoken';
import {  Form, FormGroup, Label, Input,Col } from 'reactstrap';


class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date: '',
      Time: '',
      Description: ''
      //djangoCSRFToken: DjangoCSRFToken.csrfToken
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



//var csrftoken= this.state.djangoCSRFToken;
axios.post('http://localhost:8000/addnewreservation/', data);
     
  

    // fetch('http://localhost:8000/addnewreservation/', {
    //        method: 'POST',
    //        headers: {
    //                   'Accept': 'application/json',
    //                    'Content-Type': 'application/json',
    //                    'X-CSRFToken' : 'csrftoken',
    //                  },
    //        body:JSON.stringify(data)
    //   });

this.props.handleSubmit(event);

}
  render() {
    return (
      
 
   
  <div> 
      
        <Form style={{backgroundColor :" gray"}} onSubmit={this.handleSubmit} ref='form'>

        <FormGroup row>
          {/*<DjangoCSRFToken />
       <input type="hidden" value="12345" name="antiCSRF"></input>
         </FormGroup>*/}


        <FormGroup row>
          <Label for="Date" sm={1}>Date</Label>
          <Col sm={5}>
          <Input type="Date" ref="Date" name="Date" onChange={this.handleInputChangeDate} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={1} onChange={this.handleInputChangeTime}>Time</Label>
        <Col sm={5}>
           <Input type="Time" ref="Time" name="Time" />
        </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Description" sm={1}>Description</Label>
        <Col sm={5}>
          <Input type="text" ref="Description" name="Description" placeholder=" Write Description"  onChange={this.handleInputChangeDescr}/>
        </Col>
        </FormGroup>

        <FormGroup row>
        <Col sm={{ size: 2, offset: 2 }} >
         <Input type="submit" name="Save" id="Description" value="Save" style={{backgroundColor: "green", color:"white"}} />
        </Col>
        </FormGroup>

        <Col sm={5}/>

       </Form>
      
      
 </div>

    
    );
  }
}
export default MyForm;
