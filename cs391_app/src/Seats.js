import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import SeatPicker from "react-seat-picker";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const calcSeats = () => {};

export default class Seats extends Component {
  submitSeatsFinal() {
    for (let rows of this.state.rows) {
      for (let seat of rows) {
        for (let id of this.reserveOnSubmit) {
          if (seat.id === id) {
            seat.isReserved = true;
          }
        }
      }
    }

    let temp = JSON.parse(
      localStorage.getItem("Salloon " + this.state.current_saloon)
    );

    if (temp.seats) {
      temp.seats = [...temp.seats, ...this.reserveOnSubmit];
    } else {
      temp.seats = this.reserveOnSubmit;
    }

    localStorage.setItem(
      "Salloon " + this.state.current_saloon,
      JSON.stringify(temp)
    );

    this.setState({ updatedKey: Math.random() });
  }

  componentDidMount() {
    let temp = JSON.parse(
      localStorage.getItem("Salloon " + this.state.current_saloon)
    );

    if (temp.seats) {
      for (let rows of this.state.rows) {
        for (let seat of rows) {
          for (let id of temp.seats) {
            if (seat.id === id) {
              seat.isReserved = true;
            }
          }
        }
      }
    }

    this.setState({ updatedKey: Math.random() });
  }

  state = {
    current_saloon: 0,
    loading: false,
    num: 0,
    rows: [
      [
        { id: 1, number: 1, tooltip: "Click to reserve" },
        { id: 2, number: 2, tooltip: "Click to reserve" },
        { id: 3, number: 3, tooltip: "Click to reserve" },
        { id: 4, number: 4, tooltip: "Click to reserve" },
        { id: 5, number: 5, tooltip: "Click to reserve" },
        { id: 6, number: 6, tooltip: "Click to reserve" },
        { id: 7, number: 7, tooltip: "Click to reserve" },
        { id: 8, number: 8, tooltip: "Click to reserve" },
        { id: 9, number: 9, tooltip: "Click to reserve" },
        { id: 10, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 11, number: 1, tooltip: "Click to reserve" },
        { id: 12, number: 2, tooltip: "Click to reserve" },
        { id: 13, number: 3, tooltip: "Click to reserve" },
        { id: 14, number: 4, tooltip: "Click to reserve" },
        { id: 15, number: 5, tooltip: "Click to reserve" },
        { id: 16, number: 6, tooltip: "Click to reserve" },
        { id: 17, number: 7, tooltip: "Click to reserve" },
        { id: 18, number: 8, tooltip: "Click to reserve" },
        { id: 19, number: 9, tooltip: "Click to reserve" },
        { id: 20, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 21, number: 1, tooltip: "Click to reserve" },
        { id: 22, number: 2, tooltip: "Click to reserve" },
        { id: 23, number: 3, tooltip: "Click to reserve" },
        { id: 24, number: 4, tooltip: "Click to reserve" },
        { id: 25, number: 5, tooltip: "Click to reserve" },
        { id: 26, number: 6, tooltip: "Click to reserve" },
        { id: 27, number: 7, tooltip: "Click to reserve" },
        { id: 28, number: 8, tooltip: "Click to reserve" },
        { id: 29, number: 9, tooltip: "Click to reserve" },
        { id: 30, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 31, number: 1, tooltip: "Click to reserve" },
        { id: 32, number: 2, tooltip: "Click to reserve" },
        { id: 33, number: 3, tooltip: "Click to reserve" },
        { id: 34, number: 4, tooltip: "Click to reserve" },
        { id: 35, number: 5, tooltip: "Click to reserve" },
        { id: 36, number: 6, tooltip: "Click to reserve" },
        { id: 37, number: 7, tooltip: "Click to reserve" },
        { id: 38, number: 8, tooltip: "Click to reserve" },
        { id: 39, number: 9, tooltip: "Click to reserve" },
        { id: 40, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 41, number: 1, tooltip: "Click to reserve" },
        { id: 42, number: 2, tooltip: "Click to reserve" },
        { id: 43, number: 3, tooltip: "Click to reserve" },
        { id: 44, number: 4, tooltip: "Click to reserve" },
        { id: 45, number: 5, tooltip: "Click to reserve" },
        { id: 46, number: 6, tooltip: "Click to reserve" },
        { id: 47, number: 7, tooltip: "Click to reserve" },
        { id: 48, number: 8, tooltip: "Click to reserve" },
        { id: 49, number: 9, tooltip: "Click to reserve" },
        { id: 50, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 51, number: 1, tooltip: "Click to reserve" },
        { id: 52, number: 2, tooltip: "Click to reserve" },
        { id: 53, number: 3, tooltip: "Click to reserve" },
        { id: 54, number: 4, tooltip: "Click to reserve" },
        { id: 55, number: 5, tooltip: "Click to reserve" },
        { id: 56, number: 6, tooltip: "Click to reserve" },
        { id: 57, number: 7, tooltip: "Click to reserve" },
        { id: 58, number: 8, tooltip: "Click to reserve" },
        { id: 59, number: 9, tooltip: "Click to reserve" },
        { id: 60, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 61, number: 1, tooltip: "Click to reserve" },
        { id: 62, number: 2, tooltip: "Click to reserve" },
        { id: 63, number: 3, tooltip: "Click to reserve" },
        { id: 64, number: 4, tooltip: "Click to reserve" },
        { id: 65, number: 5, tooltip: "Click to reserve" },
        { id: 66, number: 6, tooltip: "Click to reserve" },
        { id: 67, number: 7, tooltip: "Click to reserve" },
        { id: 68, number: 8, tooltip: "Click to reserve" },
        { id: 69, number: 9, tooltip: "Click to reserve" },
        { id: 70, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 71, number: 1, tooltip: "Click to reserve" },
        { id: 72, number: 2, tooltip: "Click to reserve" },
        { id: 73, number: 3, tooltip: "Click to reserve" },
        { id: 74, number: 4, tooltip: "Click to reserve" },
        { id: 75, number: 5, tooltip: "Click to reserve" },
        { id: 76, number: 6, tooltip: "Click to reserve" },
        { id: 77, number: 7, tooltip: "Click to reserve" },
        { id: 78, number: 8, tooltip: "Click to reserve" },
        { id: 79, number: 9, tooltip: "Click to reserve" },
        { id: 80, number: 10, tooltip: "Click to reserve" },
      ],
      [
        { id: 81, number: 1, tooltip: "Click to reserve" },
        { id: 82, number: 2, tooltip: "Click to reserve" },
        { id: 83, number: 3, tooltip: "Click to reserve" },
        { id: 84, number: 4, tooltip: "Click to reserve" },
        { id: 85, number: 5, tooltip: "Click to reserve" },
        { id: 86, number: 6, tooltip: "Click to reserve" },
        { id: 87, number: 7, tooltip: "Click to reserve" },
        { id: 88, number: 8, tooltip: "Click to reserve" },
        { id: 89, number: 9, tooltip: "Click to reserve" },
        { id: 90, number: 10, tooltip: "Click to reserve" },
      ],
    ],
  };
  constructor(props) {
    super(props);
    //this.saloonNum = this.saloonNum.bind(this);
    //this.state.current_saloon = this.saloonNum();
    let saloon_num = new URLSearchParams(window.location.search).get("saloon");
    this.state.current_saloon = saloon_num;
    this.reserveOnSubmit = [];
    console.log(saloon_num);
  }

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 5));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 5));
        console.log("this is state.currentsalon", this.state.current_saloon);

        console.log(`Added seat ${number}, row ${row}, id ${id}`);

        const newTooltip = `tooltip for id-${id} added by callback`;
        this.reserveOnSubmit.push(id);

        addCb(row, number, id, newTooltip);
        console.log("pushing " + id);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";

        for (let elem of this.reserveOnSubmit) {
          if (elem === id) {
            this.reserveOnSubmit.splice(this.reserveOnSubmit.indexOf(elem), 1);
          }
        }

        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    console.log("render");
    const { loading, rows } = this.state;

    return (
      <div>
        {this.state.current_saloon}
        <h1>Seat Selection</h1>
        <div
          style={{
            marginTop: "100px",
            justifyContent: "center",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Container fluid>
            <Row>
              <SeatPicker
                key={this.state.updatedKey}
                addSeatCallback={this.addSeatCallbackContinousCase}
                removeSeatCallback={this.removeSeatCallback}
                rows={rows}
                maxReservableSeats={10}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{ multiline: true }}
                continuous
                selectedSeats={rows}
              />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <Button variant="primary" onClick={() => this.submitSeatsFinal()}>
                Submit
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
