import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

let saloon_1_data = JSON.parse(localStorage.getItem("Salloon 1"));
let saloon_2_data = JSON.parse(localStorage.getItem("Salloon 2"));
let saloon_3_data = JSON.parse(localStorage.getItem("Salloon 3"));
let saloon_4_data = JSON.parse(localStorage.getItem("Salloon 4"));
let saloon_5_data = JSON.parse(localStorage.getItem("Salloon 5"));

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName: "",
      movieType: "",
      movieSum: "",
      movieDate: "",
      movieSaloon: "",
      movieProducer: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Movies Page</h1>

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{saloon_1_data.movieSaloon}</Card.Title>
                  <Card.Text>
                    {saloon_1_data.movieName} / {saloon_1_data.movieProducer}
                  </Card.Text>
                  <Link to="/Seats?saloon=1">
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{saloon_2_data.movieSaloon}</Card.Title>
                  <Card.Text>
                    {saloon_2_data.movieName} / {saloon_2_data.movieProducer}
                  </Card.Text>
                  <Link to="/Seats?saloon=2">
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{saloon_3_data.movieSaloon}</Card.Title>
                  <Card.Text>
                    {saloon_3_data.movieName} / {saloon_3_data.movieProducer}
                  </Card.Text>
                  <Link to="/Seats?saloon=3">
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{saloon_4_data.movieSaloon}</Card.Title>
                  <Card.Text>
                    {saloon_4_data.movieName} / {saloon_4_data.movieProducer}
                  </Card.Text>
                  <Link to="/Seats?saloon=4">
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{saloon_5_data.movieSaloon}</Card.Title>
                  <Card.Text>
                    {saloon_5_data.movieName} / {saloon_5_data.movieProducer}
                  </Card.Text>
                  <Link to="/Seats?saloon=5">
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Movies;
