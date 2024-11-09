import { AsteroidCardImage } from './asteroidCardImage/AsteroidCardImage';
import { AsteroidCardAction } from './asteroidCardAction/AsteroidCardAction';
import styles from './AsteroidCard.module.css';
import {AsteroidCardContentContainer} from "./asteroidCardContent/AsteroidCardContentContainer";
import {useContext} from "react";
import {AsteroidsContext} from "../asteroidsContext/AsteroidsContext";

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
    const { destroyment, addAsteroid, deleteAsteroid } = useContext(AsteroidsContext); //получение данных из контекста
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
                    isDangerous={isDangerous}
                />
                <AsteroidCardAction id={id} isDangerous={isDangerous} onClick={() => destroyment.find(item => item.id == props.id) ? deleteAsteroid(props) : addAsteroid(props)}/>
            </div>
        </div>
    );
};
