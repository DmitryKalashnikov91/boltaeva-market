// Styles
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3>Boltaeva</h3>
            <hr />
            <footer>
                <section className={styles.company_section}>
                    <span>Company</span>
                    <p>
                        The brand strives to create respect for its products among the audience, so
                        that the presence of the company's products is a sign of prestige.
                    </p>
                    <div className={styles.contact_icons}>
                        <div role='button' className={styles.ellipse}>
                            <span>f</span>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <span className='bi bi-instagram'></span>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <span className='bi bi-twitter'></span>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <span className='bi bi-youtube'></span>
                        </div>
                        <div role='button' className={styles.ellipse}>
                            <span>vk</span>
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
                        <a href='mailto:kobe-24-8@mail.ru'>
                            <i className='bi bi-envelope'></i>
                        </a>
                        <p>E-mail</p>
                        <a href='tel:+79999152567'>
                            <i className='bi bi-whatsapp'></i>
                        </a>
                        <p>Watsapp</p>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export { Footer };
