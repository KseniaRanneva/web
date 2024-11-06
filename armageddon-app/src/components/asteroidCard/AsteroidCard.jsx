import {AsteroidCardImage} from "./asteroidCardImage/AsteroidCardImage";
import {AsteroidCardContent} from "./asteroidCardContent/AsteroidCardContent";
import {AsteroidCardAction} from "./asteroidCardAction/AsteroidCardAction";
import styles from "./AsteroidCard.module.css";

export const AsteroidCard = (props) => {
    const {id, name, date, distance, size, isDangerous, distanceMode} = props;
    return <div className={styles.card}>
        <div className={isDangerous ? styles.redCard : styles.regularCard}>
            <AsteroidCardImage/>
            <AsteroidCardContent id={id} name={name} date={date} distance={distance} size={size} distanceMode={distanceMode}/>
            <AsteroidCardAction isDangerous={isDangerous}/>
        </div>
    </div>
}
