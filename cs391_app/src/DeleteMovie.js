import { Form, Col, Button, Container, InputGroup, FormControl     } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeleteMovie extends Component {


  userData;

  constructor(props) {
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeMovieSaloon = this.onChangeMovieSaloon.bind(this);
      this.state = {
        movieSaloon: ''
      }
  }

  onChangeMovieSaloon(e) {
    this.setState({ movieSaloon: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    localStorage.setItem(this.state.movieSaloon, JSON.stringify({"movieName":"Not Found","movieType":"","movieSum":"","movieDate":"","movieSaloon":this.state.movieSaloon,"movieProducer":""}));
    toast.error('Movie Successfully Deleted', {position: toast.POSITION.TOP_CENTER});
}



    render() {
      return (
        <div>
          <h1>Delete Movie Page</h1>

          <Container>

<Form onSubmit={this.onSubmit}>


<Form.Row>

<Form.Group as={Col} controlId="formGridSalloon">
<Form.Label>Salloon</Form.Label>
<Form.Control as="select" defaultValue="Choose..." value={this.state.movieSaloon} onChange={this.onChangeMovieSaloon}>
  <option>Choose...</option>
  <option>Salloon 1</option>
  <option>Salloon 2</option>
  <option>Salloon 3</option>
  <option>Salloon 4</option>
  <option>Salloon 5</option>
</Form.Control>
</Form.Group>

</Form.Row>

<Button variant="primary" type="submit">
Submit
</Button>
</Form>

</Container>





        </div>
      );
    }
    
  }
  
  export default DeleteMovie;
  