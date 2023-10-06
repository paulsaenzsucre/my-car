import styles from '../assets/styles/CarWidget.module.css'

const CarWidget3 = () => {
    return (
        <div>
            <div className={styles.widgetThirdCard}>
                <div className={styles.widgetThirdIcon}>
                    &#128196;
                </div>
                <h3 className={styles.widgetThirdTextH3}>
                    45%
                </h3>
                <h5 className={styles.widgetThirdTextH5}>
                    5L left
                </h5>
            </div>
        </div>
    )
}

export default CarWidget3;