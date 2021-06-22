import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { OverlayTrigger, Tooltip, Row, Col, Dropdown, DropdownButton, Badge, Card, Button } from 'react-bootstrap';
import { MdSchedule, MdPerson, MdWhatshot } from "react-icons/md";
const Recipe = (props) => {
  var time = props.time;
  if (props.time === 0) {
    time = "N/A";
  }
  return (
    <Card className="mt-3" style={{ width: '18rem', height: '41rem' }}>
      <Card.Img src={props.image} />
      <Card.Body>
        <Row>
          <Card.Title>{props.title}</Card.Title>
        </Row>
        <Row>
          <span>
            <Badge className="subtitle">{props.dishtype}</Badge>
            <Badge className="subtitle2">{props.cuisinetype}</Badge>
          </span>
        </Row>
        <Card.Text>
          <DropdownButton className="mt-3 noimg" key="right" id="dropdown-button-drop-right" title="Ingredients" drop="right">
            {props.ingredients.map(ingredient => (
              <Dropdown.Item>{ingredient.text}</Dropdown.Item>
            ))}
          </DropdownButton>
          <Row className="mt-4">
            <Col>
              <div className="info">
                <p><MdPerson /></p>
                <h5>Yield </h5>
                <p>{props.yield.toString().substring(0, 3)}</p>
              </div>
            </Col>
            <Col>
              <div className="info">
                <p><MdWhatshot /></p>
                <h5>Calories </h5>
                <p> {props.calories.toString().substring(0, 6)}</p>
              </div>
            </Col>
            <Col>
              <div className="info">
                <p><MdSchedule /></p>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Time in minutes</Tooltip>}>
                  <span className="d-inline-block">
                    <h5>Time </h5>
                  </span>
                </OverlayTrigger>

                <p> {time}</p>
              </div>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
      <Button className="btn"><a className="tag" href={props.url}>Read More</a></Button>
    </Card>

  );
}
export default Recipe;