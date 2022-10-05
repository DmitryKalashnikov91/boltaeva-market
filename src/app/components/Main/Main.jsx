// Styles
import { NavBar } from '../NavBar';
import styles from './main.module.scss';

// Components

const Main = () => {
    return (
        <>
            <div className={styles.bg}></div>
            <div className={styles.block}>
                <header className={styles.top}>
                    <NavBar />
                </header>

                <div className={styles.main_text}>
                    <p>Capsule Collection</p>
                </div>
            </div>
        </>
    );
};

export { Main };
