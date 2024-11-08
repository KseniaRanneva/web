import styles from "./AsteroidCardContent.module.css";

//Определение типа для props
type AsteroidCardContentProps = {
    id: string;
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number
    };
    size: number;
    distanceMode: boolean
}

export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
    const {id, name, date, distance, size, distanceMode} = props;
    return <div className={styles.content}>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>Расстояние: {distanceMode ? `${Number(distance.kilometers).toFixed(2)} км` : `${Number(distance.lunar).toFixed(2)} расстояний до Луны`}</div>
            <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
        </div>
    </div>
}