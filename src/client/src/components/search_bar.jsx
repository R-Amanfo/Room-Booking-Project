import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './search_bar.scss';
//import styles from '../components_light.module.css'

const SearchBar = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [numberOfPeopleList, setNumberOfPeopleList] = useState([]);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/equipment');
        setEquipmentList(response.data);
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    };

    const fetchNumberOfPeopleData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setNumberOfPeopleList(response.data);
      } catch (error) {
        console.error('Error fetching number of people data:', error);
      }
    };

    fetchEquipmentData();
    fetchNumberOfPeopleData();
  }, []);

  const handleEquipmentChange = (event) => {
    console.log('Selected equipment:', event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    console.log('Number of people:', parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search or booking logic here
  };
  
  return  (
    <Form className="searchBarContainer" onSubmit={handleSubmit}>
      <Row className="align-items-center mb-4 p-2 pl-4 pr-4">
        <Col md={4} className="d-flex flex-column">
          <Form.Group controlId="equipment" className="w-100">
            <Row className="align-items-center">
              <Col xs={6}>
                <Form.Label className="mb-0">Select Equipment:</Form.Label>
              </Col>
              <Col xs={6} className='justify-content-start'>
                <Form.Control as="select" onChange={handleEquipmentChange}>
                  <option value="">-- Select Equipment --</option>
                  {equipmentList.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Group controlId="numberOfPeople" className="w-100">
            <Row className="align-items-center">
              <Col xs={6}>
                <Form.Label className="mb-0">Number of People:</Form.Label>
              </Col>
              <Col xs={6} className='justify-content-start'>
                <Form.Control
                  type="number"
                  value=""
                  onChange={handleNumberOfPeopleChange}
                  min={1}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col md={5} className="d-flex justify-content-end pr-4">
          <button className="button" type="submit">Search</button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBar;
