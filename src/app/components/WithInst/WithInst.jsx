//Styles
import styles from './withInst.module.scss';

const WithInst = () => {
    return (
        <div className={styles.with_inst}>
            <section>
                <p>Boltaeva - this is a real society of girls who show love to themselves</p>
            </section>
            <section>
                <button className={styles.btn}>
                    <i className='bi bi-instagram'></i> Instagramm
                </button>
            </section>
        </div>
    );
};

export { WithInst };
