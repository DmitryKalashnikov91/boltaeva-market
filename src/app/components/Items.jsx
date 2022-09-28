// Libraries
import React from 'react';
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item4 from '../../assets/item4.png';
import item5 from '../../assets/item5.png';

const Items = () => {
    return (
        <div className='content'>
            <div className='items'>
                <img src={item1} alt='' />
                <img src={item2} alt='' />
                <img src={item4} alt='' />
                <img src={item5} alt='' />
                <img src={item4} alt='' />
                <img src={item5} alt='' />
                <img src={item2} alt='' />
                <img src={item1} alt='' />
            </div>
        </div>
    );
};

export default Items;
