import React from 'react';
import fb from '../../assets/fb.png';
import vk from '../../assets/vk.png';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Boltaeva</h3>
            <hr />
            <footer>
                <section>
                    <span>Company</span>
                    <p className='pt-5'>
                        The brand strives to create respect for its products among the audience, so
                        that the presence of the company's products is a sign of prestige.
                    </p>
                    <div className='contact-icons'>
                        <div role='button' className='ellipse'>
                            <img src={fb} alt='facebook' />
                        </div>
                        <div role='button' className='ellipse'>
                            <i class='bi bi-instagram'></i>
                        </div>
                        <div role='button' className='ellipse'>
                            <i class='bi bi-twitter'></i>
                        </div>
                        <div role='button' className='ellipse'>
                            <i class='bi bi-youtube'></i>
                        </div>
                        <div role='button' className='ellipse'>
                            <img src={vk} alt='vkontakte' />
                        </div>
                    </div>
                </section>
                <section>
                    <span>Navigation</span>
                    <ul className='nav-footer pt-5'>
                        <li>Product catalog</li>
                        <li>About company</li>
                        <li>Bonus program</li>
                        <li>Work process</li>
                        <li>Partners</li>
                        <li>Privacy Policy</li>
                    </ul>
                </section>
                <section>
                    <span>Products</span>
                    <ul className='nav-footer pt-5'>
                        <li>Care cosmetics</li>
                        <li>Eyebrow cosmetics</li>
                        <li>Decorative cosmetics</li>
                        <li>New in the collection</li>
                        <li>Box and complect</li>
                        <li>Accessories</li>
                    </ul>
                </section>
                <section>
                    <span>Contacts</span>
                    <p className='pt-5'>
                        We are open to new opportunities, so you can contact our company
                        representatives for any questions
                    </p>
                    <div className='contact-icons'>
                        <i class='bi bi-envelope'></i>
                        <p>E-mail</p>
                        <i class='bi bi-whatsapp'> </i>
                        <p>Watsapp</p>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;
