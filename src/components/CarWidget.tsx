import styles from '../assets/styles/CarWidget.module.css';

const CarWidget = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.icon}>
        &#128167;
        </div>
        <h3 className={styles.textH3}>
          45%
        </h3>
        <h5 className={styles.textH5}>
          5L left
        </h5>
      </div>


    </div>
  )
};
export default CarWidget;