import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './search_bar.scss';

const SearchBar = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [date, setDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/equipment');
        setEquipmentList(response.data);
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    };

    fetchEquipmentData();
  }, []);

  const handleEquipmentChange = (event) => {
    console.log('Selected equipment:', event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search or booking logic here
  };
  
  return  (
    <Form className="searchBarContainer" onSubmit={handleSubmit}>
      <Row className="align-items-center mb-4 p-2 pl-4 pr-4">
        <Col md={3} className="d-flex flex-column">
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
          <Form.Group controlId="date" className="w-100">
            <Row className="align-items-center">
                <Col xs={6} className='justify-content-start'> 
                  <Form.Label className="mb-0">Select Date:</Form.Label>
                </Col>
                <Col xs={6}>
                  <DatePicker className="form-control" selected={date} onChange={handleDateChange} />
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
                  value={numberOfPeople}
                  onChange={handleNumberOfPeopleChange}
                  min={1}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col md={3} className="d-flex justify-content-end pr-4">
          <button className="button" type="submit">Search</button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBar;

