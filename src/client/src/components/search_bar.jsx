import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import styles from './search_bar.scss';
//import styles from '../components_light.module.css'

const SearchBar = () => {
  const [equipment, setEquipment] = useState([]);
  const [date, setDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    async function fetchEquipmentData() {
      try {
        const response = await axios.get('http://localhost:3001/equipment');
        // console.log(response.data);
        // console.log("Test",response.data.name);
        let testdata = response.data;        
        console.log(testdata);        
        
        for (var i = 0; i < testdata.length; i++) {
        var select = document.getElementById("equipment");
        var option = document.createElement("option");
        option.text = testdata[i].name;   
        option.value = testdata[i].name;
        select.add(option);
      }
       // setEquipmentList(testdata); //adds blank options to the list
   
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    }

    fetchEquipmentData();
      }, []);

      useEffect(() => {
        async function fetchuserdata() {
          try {
            const response = await axios.get('http://localhost:3001/users');
            let testdata2 = response.data;        
            console.log(testdata2);        
            
            for (var i = 0; i < testdata2.length; i++) {
            var select = document.getElementById("numberOfPeople");
            var option = document.createElement("numberOfPeople");
            option.text = testdata2[i].username;   
            option.value = testdata2[i].username;
            select.add(option);
          }
           // setEquipmentList(testdata); //adds blank options to the list
       
       
          } catch (error) {
            console.error('Error fetching equipment data:', error);
          }
        }
    
        fetchuserdata();
          }, []);   

  const handleEquipmentChange = (event) => {
    setEquipment(event.target.value);
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
    console.log('Equipment:', equipment);
    console.log('Date:', date);
    console.log('Number of People:', numberOfPeople);
  };
  
  return  (
    <Form className="container" onSubmit={handleSubmit}>
      <Row className="align-items-center mb-4 p-2">
        <Col md={4} className="d-flex flex-column">
          <Form.Group controlId="equipment" className="w-100">
            <Row className="align-items-center">
              <Col xs={6}>
                <Form.Label className="mb-0">Select Equipment:</Form.Label>
              </Col>
              <Col xs={6} className='justify-content-start'>
                <Form.Control as="select" value={equipment} onChange={handleEquipmentChange}>
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
        <Col md={3}>
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
        <Col md={2} className="d-flex justify-content-end">
          <Button className="button" type="submit">Search/Book</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBar;