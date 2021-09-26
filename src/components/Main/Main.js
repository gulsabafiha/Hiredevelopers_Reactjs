import React, { useEffect, useState } from 'react';
import AddItem from '../AddItem/AddItem';
import Developer from '../Developer/Developer';
import './Main.css';

const Main = props=> {
    const [devlopers, setDeveloper] = useState([]);
    const [add, setAdd] = useState([]);
    useEffect(() => {
        fetch('./list.json')
            .then(res => res.json())
            .then(data => setDeveloper(data))
    }, [])
    const handleAddCart = devlopers => {
        const newAdd = [...add, devlopers];
        setAdd(newAdd);
    }
    return (
        <div className='main-container'>
          
            <div className='container'>
            {
                    devlopers.map(devloper => <Developer
                        key={devloper.name}
                        devloper={devloper}
                    handleAddCart={handleAddCart}
                    ></Developer>)
            }
               
     
      </div>
           
            <div className="cart-container">
                <AddItem add={add}/>
              
           </div>
            
        </div>
    );
};

export default Main;