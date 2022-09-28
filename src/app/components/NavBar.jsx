// Libraries
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    // состояние "бургер" меню
    const [active, setActive] = useState(false);

    // динамические классы
    let navigateStyle = 'navigate';
    navigateStyle += active ? '-active' : '';
    let shadowStyle = !active ? ' nav shadow' : '';

    // Изменение состояния при нажатии
    const handleClick = () => {
        setActive((prevstate) => !prevstate);
    };

    return (
        <>
            <div className='burger' onClick={handleClick}>
                <span></span>
            </div>
            <div role='button' className='logo'>
                <p>Boltaeva</p>
            </div>

            <div className={navigateStyle}>
                <div className={`navigate-left + ${shadowStyle} rounded`}>
                    <Nav>
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
                <div className={`navigate-right + ${shadowStyle} rounded`}>
                    <Nav>
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

export default NavBar;
