import styles from "./AsteroidCardImage.module.css"
import {memo} from 'react';

export const AsteroidCardImage = memo( () => {
    return <div className={styles.image}>
        <svg className={styles.asteroidImage}></svg>
    </div>
});

AsteroidCardImage.displayName = "AsteroidCardImage";