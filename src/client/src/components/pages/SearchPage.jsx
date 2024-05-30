import React from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchPage.scss';
import SearchBar from "../search_bar";
//import RoomSearch from "../roomSearchTest";
import RoomCard from "../roomCard";
import { Link } from "react-router-dom";

const SearchPage = () => {
    return (
    <div>
        <SearchBar />
        <CardGroup className="cardsContainer">
            <Row className='row-cols-1 row-cols-md-3 g-5'>
            <Col className="m-0">
                <Card>
                    <RoomCard 
                    title='Room 01' 
                    description='Large windows room on the second floor'
                    imageUrl='https://th.bing.com/th/id/OIP.OCR8ppIzFYdqoH5LIjZZqwHaE9?rs=1&pid=ImgDetMain' 
                    capacity='100'
                    availability='25'
                    />
                </Card>
            </Col>
            <Col className="m-0">
                <Card>
                    <RoomCard 
                    title = 'Room 02' 
                    description = 'Red-door room on the North wing'
                    imageUrl = 'https://www.awstructures.com.au/wp-content/uploads/2018/03/Steel-shelving-storage-for-small-items-in-warehouse.jpg' 
                    capacity = '75'
                    availability = '10' 
                    />
                </Card>
            </Col>
            <Col className="m-0">
                <Card>
                    <RoomCard 
                    title = 'Room 03' 
                    description = 'Tiled-floor room on the ground floor' 
                    imageUrl = 'https://midlandshelvingracking.co.uk/wp-content/uploads/2022/03/shutterstock_793873726-scaled-e1673005768490.jpg' 
                    capacity = '150'
                    availability = '47'
                    />
                </Card>
            </Col>
            </Row>
        </CardGroup>
      </div>
    )
  }



export default SearchPage;


