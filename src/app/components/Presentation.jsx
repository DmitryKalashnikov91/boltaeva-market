import React from 'react';
import presentImg from '../../assets/presentImg.png';

const Presentation = () => {
    return (
        <>
            <div className='present-container'>
                <img src={presentImg} alt='presentation' />

                <div className='present-content pt-5'>
                    <h2 className='title'>Boltaeva</h2>
                    <section className='about'>
                        Each Boltaeva brand product is truly unique - everything is thought out to
                        the smallest detail.
                    </section>
                    <section className='description'>
                        The brand seeks to build respect among the audience for its products, so
                        that the presence of the company's products is a sign of prestige, since the
                        focus of the business is focused on exclusive sales, but not on the mass
                        market.
                    </section>
                    <div className='signature'>
                        <section className='pt-5'>
                            Zara Boltaeva
                            <p>CEO, Founder</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Presentation;
