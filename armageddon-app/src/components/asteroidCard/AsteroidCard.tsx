import { AsteroidCardImage } from './asteroidCardImage/AsteroidCardImage';
import { AsteroidCardContent } from './asteroidCardContent/AsteroidCardContent';
import { AsteroidCardAction } from './asteroidCardAction/AsteroidCardAction';
import styles from './AsteroidCard.module.css';
import {AsteroidCardContentContainer} from "./asteroidCardContent/AsteroidCardContentContainer";

//Определение типа для props
type AsteroidCardProps = {
    id: string;
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    };
    size: number;
    isDangerous: boolean;
};

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { id, name, date, distance, size, isDangerous} = props;
    return (
        <div className={styles.card}>
            <div className={isDangerous ? styles.redCard : styles.regularCard}>
                <AsteroidCardImage />
                <AsteroidCardContentContainer
                    id={id}
                    name={name}
                    date={date}
                    distance={distance}
                    size={size}
                />
                <AsteroidCardAction isDangerous={isDangerous} />
            </div>
        </div>
    );
};
