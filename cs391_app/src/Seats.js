import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import SeatPicker from 'react-seat-picker';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const submitSeats = () => {
  console.log(sessionStorage);
};

const calcSeats = () => {};

export default class Seats extends Component {
  state = {
    current_saloon: 0,
    loading: false,
    num: 0,
  };
  constructor(props) {
    super(props);
    //this.saloonNum = this.saloonNum.bind(this);
    //this.state.current_saloon = this.saloonNum();
    let saloon_num = new URLSearchParams(window.location.search).get('saloon');
    this.state.current_saloon = saloon_num;
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
          await new Promise(resolve => setTimeout(resolve, 5));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise(resolve => setTimeout(resolve, 5));
        console.log('this is state.currentsalon', this.state.current_saloon);
        let temp = '';
        switch (this.state.current_saloon) {
          case '1':
            temp = JSON.parse(localStorage.getItem('Salloon 1'));

            if (temp.seats != undefined) {
              temp.seats.push(`${id}`);
            } else {
              temp.seats = [`${id}`];
            }
            sessionStorage.setItem('Salloon 1', JSON.stringify(temp));
            break;
          case '2':
            temp = JSON.parse(localStorage.getItem('Salloon 2'));

            if (temp.seats != undefined) {
              temp.seats.push(`${id}`);
            } else {
              temp.seats = [`${id}`];
            }
            sessionStorage.setItem('Salloon 2', JSON.stringify(temp));
            break;
          case '3':
            temp = JSON.parse(localStorage.getItem('Salloon 3'));

            if (temp.seats != undefined) {
              temp.seats.push(`${id}`);
            } else {
              temp.seats = [`${id}`];
            }
            sessionStorage.setItem('Salloon 3', JSON.stringify(temp));
            break;
          case '4':
            temp = JSON.parse(localStorage.getItem('Salloon 4'));

            if (temp.seats != undefined) {
              temp.seats.push(`${id}`);
            } else {
              temp.seats = [`${id}`];
            }
            sessionStorage.setItem('Salloon 4', JSON.stringify(temp));
            break;
          case '5':
            temp = JSON.parse(localStorage.getItem('Salloon 5'));

            if (temp.seats != undefined) {
              temp.seats.push(`${id}`);
            } else {
              temp.seats = [`${id}`];
            }
            sessionStorage.setItem('Salloon 5', JSON.stringify(temp));
            break;
        }

        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
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
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, tooltip: 'Click to reserve' },
        { id: 2, number: 2, tooltip: 'Click to reserve' },
        { id: 3, number: 3, tooltip: 'Click to reserve' },
        { id: 4, number: 4, tooltip: 'Click to reserve' },
        { id: 5, number: 5, tooltip: 'Click to reserve' },
        { id: 6, number: 6, tooltip: 'Click to reserve' },
        { id: 7, number: 7, tooltip: 'Click to reserve' },
        { id: 8, number: 8, tooltip: 'Click to reserve' },
        { id: 9, number: 9, tooltip: 'Click to reserve' },
        { id: 10, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 11, number: 1, tooltip: 'Click to reserve' },
        { id: 12, number: 2, tooltip: 'Click to reserve' },
        { id: 13, number: 3, tooltip: 'Click to reserve' },
        { id: 14, number: 4, tooltip: 'Click to reserve' },
        { id: 15, number: 5, tooltip: 'Click to reserve' },
        { id: 16, number: 6, tooltip: 'Click to reserve' },
        { id: 17, number: 7, tooltip: 'Click to reserve' },
        { id: 18, number: 8, tooltip: 'Click to reserve' },
        { id: 19, number: 9, tooltip: 'Click to reserve' },
        { id: 20, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 21, number: 1, tooltip: 'Click to reserve' },
        { id: 22, number: 2, tooltip: 'Click to reserve' },
        { id: 23, number: 3, tooltip: 'Click to reserve' },
        { id: 24, number: 4, tooltip: 'Click to reserve' },
        { id: 25, number: 5, tooltip: 'Click to reserve' },
        { id: 26, number: 6, tooltip: 'Click to reserve' },
        { id: 27, number: 7, tooltip: 'Click to reserve' },
        { id: 28, number: 8, tooltip: 'Click to reserve' },
        { id: 29, number: 9, tooltip: 'Click to reserve' },
        { id: 30, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 31, number: 1, tooltip: 'Click to reserve' },
        { id: 32, number: 2, tooltip: 'Click to reserve' },
        { id: 33, number: 3, tooltip: 'Click to reserve' },
        { id: 34, number: 4, tooltip: 'Click to reserve' },
        { id: 35, number: 5, tooltip: 'Click to reserve' },
        { id: 36, number: 6, tooltip: 'Click to reserve' },
        { id: 37, number: 7, tooltip: 'Click to reserve' },
        { id: 38, number: 8, tooltip: 'Click to reserve' },
        { id: 39, number: 9, tooltip: 'Click to reserve' },
        { id: 40, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 41, number: 1, tooltip: 'Click to reserve' },
        { id: 42, number: 2, tooltip: 'Click to reserve' },
        { id: 43, number: 3, tooltip: 'Click to reserve' },
        { id: 44, number: 4, tooltip: 'Click to reserve' },
        { id: 45, number: 5, tooltip: 'Click to reserve' },
        { id: 46, number: 6, tooltip: 'Click to reserve' },
        { id: 47, number: 7, tooltip: 'Click to reserve' },
        { id: 48, number: 8, tooltip: 'Click to reserve' },
        { id: 49, number: 9, tooltip: 'Click to reserve' },
        { id: 50, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 41, number: 1, tooltip: 'Click to reserve' },
        { id: 42, number: 2, tooltip: 'Click to reserve' },
        { id: 43, number: 3, tooltip: 'Click to reserve' },
        { id: 44, number: 4, tooltip: 'Click to reserve' },
        { id: 45, number: 5, tooltip: 'Click to reserve' },
        { id: 46, number: 6, tooltip: 'Click to reserve' },
        { id: 47, number: 7, tooltip: 'Click to reserve' },
        { id: 48, number: 8, tooltip: 'Click to reserve' },
        { id: 49, number: 9, tooltip: 'Click to reserve' },
        { id: 50, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 41, number: 1, tooltip: 'Click to reserve' },
        { id: 42, number: 2, tooltip: 'Click to reserve' },
        { id: 43, number: 3, tooltip: 'Click to reserve' },
        { id: 44, number: 4, tooltip: 'Click to reserve' },
        { id: 45, number: 5, tooltip: 'Click to reserve' },
        { id: 46, number: 6, tooltip: 'Click to reserve' },
        { id: 47, number: 7, tooltip: 'Click to reserve' },
        { id: 48, number: 8, tooltip: 'Click to reserve' },
        { id: 49, number: 9, tooltip: 'Click to reserve' },
        { id: 50, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 41, number: 1, tooltip: 'Click to reserve' },
        { id: 42, number: 2, tooltip: 'Click to reserve' },
        { id: 43, number: 3, tooltip: 'Click to reserve' },
        { id: 44, number: 4, tooltip: 'Click to reserve' },
        { id: 45, number: 5, tooltip: 'Click to reserve' },
        { id: 46, number: 6, tooltip: 'Click to reserve' },
        { id: 47, number: 7, tooltip: 'Click to reserve' },
        { id: 48, number: 8, tooltip: 'Click to reserve' },
        { id: 49, number: 9, tooltip: 'Click to reserve' },
        { id: 50, number: 10, tooltip: 'Click to reserve' },
      ],
      [
        { id: 41, number: 1, tooltip: 'Click to reserve' },
        { id: 42, number: 2, tooltip: 'Click to reserve' },
        { id: 43, number: 3, tooltip: 'Click to reserve' },
        { id: 44, number: 4, tooltip: 'Click to reserve' },
        { id: 45, number: 5, tooltip: 'Click to reserve' },
        { id: 46, number: 6, tooltip: 'Click to reserve' },
        { id: 47, number: 7, tooltip: 'Click to reserve' },
        { id: 48, number: 8, tooltip: 'Click to reserve' },
        { id: 49, number: 9, tooltip: 'Click to reserve' },
        { id: 50, number: 10, tooltip: 'Click to reserve' },
      ],
    ];

    const { loading } = this.state;

    return (
      <div>
        {this.state.current_saloon}
        <h1>Seat Selection</h1>
        <div
          style={{
            marginTop: '100px',
            justifyContent: 'center',
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          <Container fluid>
            <Row>
              <SeatPicker
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
            <Row style={{ justifyContent: 'center', marginTop: '30px' }}>
              <Button variant='primary' onClick={submitSeats}>
                Submit
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
