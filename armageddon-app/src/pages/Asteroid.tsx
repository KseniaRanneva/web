import {useContext} from "react";
import {AsteroidsContext} from "../components/asteroidsContext/AsteroidsContext";
import {Header} from "../components/header/Header";
import {AsteroidCard} from "../components/asteroidCard/AsteroidCard";
import styles from './Asteroid.module.css';

export const Asteroid = () => {
    const { choosedAsteroid } = useContext(AsteroidsContext);
    return <div className={styles.container}>
        <Header />
        <AsteroidCard {...choosedAsteroid}></AsteroidCard>
    </div>
};