// Libraries
import React, { useState } from 'react';

// Styles
import { Nav } from 'react-bootstrap';
import styles from './navBar.module.scss';

const NavBar = () => {
    // состояние "бургер" меню
    const [active, setActive] = useState(false);

    // динамические классы
    let navigateStyle = `${styles.navigate}`;
    navigateStyle += active ? ` ${styles.active}` : '';
    let shadowStyle = !active ? ' nav shadow' : '';

    // Изменение состояния при нажатии
    const handleClick = () => {
        setActive((prevstate) => !prevstate);
    };

    return (
        <>
            <div className={styles.burger} onClick={handleClick}>
                <span></span>
            </div>
            <div role={styles.button} className={styles.logo}>
                <p>Boltaeva</p>
            </div>

            <div className={navigateStyle}>
                <div className={`${styles.navigate_left} + ${shadowStyle} rounded`}>
                    <Nav className={styles.nav}>
                        <Nav.Item>
                            <Nav.Link>Catalog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Delivery</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className={`${styles.navigate_right} + ${shadowStyle} rounded`}>
                    <Nav className={styles.nav}>
                        <Nav.Item>
                            <Nav.Link>Contacts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <i className='bi bi-search'></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <i className='bi bi-bag'></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <i className='bi bi-person'></i>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </>
    );
};

export { NavBar };
