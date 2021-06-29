import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { OverlayTrigger, Tooltip, Row, Col, Dropdown, DropdownButton, Badge, Card, Button } from 'react-bootstrap';
import { MdSchedule, MdPerson, MdWhatshot} from "react-icons/md";
const RecipeList = (props) => {

  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
    {props.recipes.map(recipe => (
      <Card className="mt-3" style={{ width: '18rem', height: '43rem' }}>
      <Card.Img src={recipe.recipe.image} />
      <Card.Body>
        <Row>
          <Card.Title>{recipe.recipe.label}</Card.Title>
        </Row>
        <Row>
          <span>
            <Badge variant="secondary" className="subtitle">{recipe.recipe.dishType}</Badge>
            <Badge variant="success" className="subtitle2">{recipe.recipe.cuisineType}</Badge>
          </span>
        </Row>
        <Card.Text>
          <DropdownButton className="mt-3 noimg" key="right" id="dropdown-button-drop-right" title="Ingredients" drop="right">
            {recipe.recipe.ingredients.map(ingredient => (
              <Dropdown.Item >{ingredient.text}</Dropdown.Item>
            ))}
          </DropdownButton>
          <Row className="mt-4">
            <Col>
              <div className="info">
                <p><MdPerson /></p>
                <h5>Yield </h5>
                <p>{recipe.recipe.yield.toString().substring(0, 3)}</p>
              </div>
            </Col>
            <Col>
              <div className="info">
                <p><MdWhatshot /></p>
                <h5>Calories </h5>
                <p> {recipe.recipe.calories.toString().substring(0, 6)}</p>
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
                <p> {recipe.recipe.time}</p>
              </div>
            </Col>
          </Row>
        </Card.Text>
        <div
						onClick={() => props.handleFavouritesClick(recipe)}
            className="d-flex align-items-center justify-content-center fav-btn"
					>
            <FavouriteComponent/>
          </div>
      </Card.Body>
      <Button className="btn" target="_blank" href={recipe.recipe.url}>Read More</Button>
    </Card>
    ))}
    </>
  );
}
export default RecipeList;