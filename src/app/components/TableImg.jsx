import React from 'react';

import img1 from '../../assets/tableImg1.png';
import img2 from '../../assets/tableImg2.png';
import img3 from '../../assets/tableImg3.png';
import img4 from '../../assets/tableImg4.png';

const TableImg = () => {
    return (
        <div className='contaier-table'>
            <img src={img1} alt='' />

            <img src={img2} alt='' />
            <img src={img1} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img1} alt='' />
            <img src={img4} alt='' />
            <img src={img1} alt='' />
        </div>
    );
};

export default TableImg;
