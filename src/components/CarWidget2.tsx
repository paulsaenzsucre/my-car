import styles from '../assets/styles/CarWidget.module.css';

const CarWidget2 = () => {
    return (
        <div>
            <div className={styles.widgetSecondCard}>
                <div className={styles.widgetSecondIcon}>
                    &#9976;
                </div>
                <h3 className={styles.widgetSecondTextH3}>
                    45%
                </h3>
                <h5 className={styles.widgetSecondTextH5}>
                    5L left
                </h5>
            </div>
        </div>
    )
}

export default CarWidget2;