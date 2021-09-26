import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';

const Developer = props => {
    const { name, charge, designation, speciality, experience, img } = props.devloper;
    const add = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div>
           
            <Card style={{
                width: '18rem', paddingLeft: '5px', background: 'rgba(255,255,255,0.05)',
                borderRadius: '6px',
                overflow: 'hidden',
                zIndex: 10,
                backdropFilter: 'blur(15px)',
                borderTop: '1px solid rgb(255, 255, 255,0.2)',
                borderLeft: '1px solid rgb(255, 255, 255,0.2)',
                boxShadow: '5px 5px 30px rgba(0,0,0,0.2)',
                position: 'relative'
            }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Name: {name}</Card.Title>
   
    <Card.Text>
      Salary: {charge}
    </Card.Text>
    <Card.Text>
     Designation: {designation}
    </Card.Text>
    <Card.Text>
     Speciality: {speciality}
    </Card.Text>
    <Card.Text>
     Experience: {experience}
    </Card.Text>
        <Button onClick={()=>props.handleAddCart(props.devloper)} className='btn'>{add}  Add to Cart</Button>
  </Card.Body>
</Card>
        </div>
    
    );
};

export default Developer;