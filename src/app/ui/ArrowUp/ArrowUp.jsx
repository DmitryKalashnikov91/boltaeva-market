import React, { useEffect, useState } from 'react';

import styles from './ArrowUp.module.scss';

const ArrowUp = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {scrollTop && (
                <button className={styles.ArrowUp} onClick={scrollUp}>
                    <i class='bi bi-chevron-double-up'></i>
                </button>
            )}
        </>
    );
};

export { ArrowUp };
