import styles from "./AsteroidCardContent.module.css"

export const AsteroidCardContent = (props) => {
    const {id, name, date, distance, size, distanceMode} = props;
    return <div className={styles.content}>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>Расстояние: {distanceMode ? `${parseFloat(distance.kilometers).toFixed(2)} км` : `${parseFloat(distance.lunar).toFixed(2)} расстояний до Луны`}</div>
            <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
        </div>
    </div>
}