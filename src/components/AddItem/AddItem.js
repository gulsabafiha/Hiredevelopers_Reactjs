import React from 'react';
import './AddItem.css';

const AddItem = props => {
    console.log(props)
    const { add } = props;
    let total = 0;
    let names = [];
    for (const addItem of add) {
        total = total + addItem.charge;
        names =names+ addItem.name;
       
    }
    return (
        <div style={{
            width: '18rem', marginLeft: '20px', background: 'rgba(255,255,255,0.05)',
            borderRadius: '6px',
            overflow: 'hidden',
            zIndex: 10,
            backdropFilter: 'blur(15px)',
            borderTop: '1px solid rgb(255, 255, 255,0.2)',
            borderLeft: '1px solid rgb(255, 255, 255,0.2)',
            boxShadow: '5px 5px 30px rgba(0,0,0,0.2)',
            position: 'fixed'
        }}>
            
            <h2>Total Devlopers:   {props.add.length}</h2>
            <h4>Total Charge:  {total} </h4>
            <hr />
            <h3>List of developers: <li>{names}</li> </h3>
        </div>
    );
};

export default AddItem;