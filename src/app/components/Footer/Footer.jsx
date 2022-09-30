import React from 'react';
import styles from './footer.module.scss';
import fb from '../../../assets/fb.png';
import vk from '../../../assets/vk.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3>Boltaeva</h3>
            <hr />
            <footer>
                <section className={styles.company_section}>
                    <span>Company</span>
                    <p className='pt-5'>
                        The brand strives to create respect for its products among the audience, so
                        that the presence of the company's products is a sign of prestige.
                    </p>
                    <div className={styles.contact_icons}>
                        <div role='button' className={styles.ellipse}>
                            <img src={fb} alt='facebook' />
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <i className='bi bi-instagram'></i>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <i className='bi bi-twitter'></i>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <i className='bi bi-youtube'></i>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <img src={vk} alt='vkontakte' />
                        </div>
                    </div>
                </section>
                <section className={styles.nav_section}>
                    <span>Navigation</span>
                    <ul className={`${styles.nav_footer} pt-5`}>
                        <li>Product catalog</li>
                        <li>About company</li>
                        <li>Bonus program</li>
                        <li>Work process</li>
                        <li>Partners</li>
                        <li>Privacy Policy</li>
                    </ul>
                </section>
                <section className={styles.products_section}>
                    <span>Products</span>
                    <ul className={`${styles.nav_footer} pt-5`}>
                        <li>Care cosmetics</li>
                        <li>Eyebrow cosmetics</li>
                        <li>Decorative cosmetics</li>
                        <li>New in the collection</li>
                        <li>Box and complect</li>
                        <li>Accessories</li>
                    </ul>
                </section>
                <section className={styles.contacts_section}>
                    <span>Contacts</span>
                    <p className='pt-5'>
                        We are open to new opportunities, so you can contact our company
                        representatives for any questions
                    </p>
                    <div className={styles.contact_icons}>
                        <i className='bi bi-envelope'></i>
                        <p>E-mail</p>
                        <i className='bi bi-whatsapp'> </i>
                        <p>Watsapp</p>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export { Footer };
