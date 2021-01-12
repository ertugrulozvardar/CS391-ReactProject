import { Form, Col, Button, Container, InputGroup, FormControl     } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class AddMovie extends Component {

  userData;

  constructor(props) {
      super(props);

      this.onChangeMovieName = this.onChangeMovieName.bind(this);
      this.onChangeMovieType = this.onChangeMovieType.bind(this);
      this.onChangeMovieSum = this.onChangeMovieSum.bind(this);

      this.onChangeMovieDate = this.onChangeMovieDate.bind(this);
      this.onChangeMovieSaloon = this.onChangeMovieSaloon.bind(this);
      this.onChangeMovieProducer = this.onChangeMovieProducer.bind(this);


      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        movieName: '',
        movieType: '',
        movieSum: '',
        movieDate: '',
        movieSaloon: '',
        movieProducer: ''

      }
  }

  // Form Events
  onChangeMovieName(e) {
      this.setState({ movieName: e.target.value })
  }

  onChangeMovieType(e) {
      this.setState({ movieType: e.target.value })
  }

  onChangeMovieSum(e) {
      this.setState({ movieSum: e.target.value })
  }


  onChangeMovieDate(e) {
    this.setState({ movieDate: e.target.value })
}


onChangeMovieSaloon(e) {
  this.setState({ movieSaloon: e.target.value })
}


onChangeMovieProducer(e) {
  this.setState({ movieProducer: e.target.value })
}



  onSubmit(e) {
      //window.alert("on submit is called.")
      e.preventDefault()
      localStorage.setItem(this.state.movieSaloon, JSON.stringify(this.state));

  }

  // React Life Cycle
  componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem(this.state.movieSaloon));
  }

  componentWillUpdate(nextProps, nextState) {
      // localStorage.setItem(this.state.movieSaloon, JSON.stringify(nextState));
      // for saving before rendering
  }


  render() {
      return (


<div>
      <h1>Add Movie Page</h1>

      <Container>

      <Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Movie Name</Form.Label>
      <Form.Control value={this.state.movieName} onChange={this.onChangeMovieName} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMovieType">
      <Form.Label>Movie Type</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." value={this.state.movieType} onChange={this.onChangeMovieType}>
        <option>Choose...</option>
        <option>Action</option>
        <option>Romance</option>
        <option>Horror</option>
        <option>Funny</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Movie Summary</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" value={this.state.movieSum} onChange={this.onChangeMovieSum}/>
  </InputGroup>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" value={this.state.movieDate} onChange={this.onChangeMovieDate}/>
    </Form.Group>

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

    <Form.Group as={Col} controlId="formGridProducer">
      <Form.Label>Producer</Form.Label>
      <Form.Control value={this.state.movieProducer} onChange={this.onChangeMovieProducer} />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Container>

    </div>

      )
  }
}

export default AddMovie;