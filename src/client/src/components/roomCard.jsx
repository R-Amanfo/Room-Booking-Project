import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './/roomCard.scss';


const RoomCard = ({ title, description, capacity, availability, imageUrl }) => {

return  (
      <Card className="cardContainer">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <Col>
            <Col className="titleContainer">
                <h3 className="title m-0" style={{padding:0}}>{title}</h3>
            </Col>
            <Col className="bodyContainer">
                <p className="bodySmall">
                    {description} {/*fetch room description*/}
                    <br />
                    Capacity: {capacity} {/*fetch room description. eg. '50 testers, 300 equip.'*/}
                </p>
                <p className="body"> 
                    Room availability: {availability} people {/*fetch room availability data. eg. '25 testers, 3 hours'*/}
                </p>
            </Col>
        </Col>
        <Col className="buttonContainer">
          <button className="button" type="submit">Book Room</button>
        </Col>
      </Card>
  )
}

export default RoomCard;