import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './roomCard.scss';

const RoomCard = ({ title, description, capacity, availability, imageUrl }) => {
  return (
    <Card className="cardContainer">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <Col>
        <Col className="titleContainer">
          <h3 className="title" style={{ padding: 0 }}>{title}</h3>
        </Col>
        <Col className="bodyContainer">
          <p className="bodySmall">
            {description} {/* fetch room description */}
            <br />
            Capacity: {capacity} {/* fetch room description. eg. '50 testers, 300 equip.' */}
          </p>
          <p className="body">
            Availability: {availability} {/* fetch room availability */}
          </p>
          <Link to="/BookingPage" className="bookNowButton">
            Book Now
          </Link>
        </Col>
      </Col>
    </Card>
  );
};

export default RoomCard;