
import React from 'react';
import Form from 'react-bootstrap-form';

const attributes = [
    { type: "Text", name: "searchkey", required: false, label: "Type Text" }
];




class SearchForm extends React.Component {
    constructor(props)
    {        super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
{
    alert(event);
}

  render() {
    return <Form action= "http://localhost:8000/reservationlist/" className="form" attributes={attributes} />
  }
}

export default SearchForm;