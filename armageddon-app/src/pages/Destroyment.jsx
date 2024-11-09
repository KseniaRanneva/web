import { Header } from '../components/header/Header';
import styles from './Destroyment.module.css';
import { useContext } from 'react';
import { AsteroidsContext } from '../components/asteroidsContext/AsteroidsContext';
import {AsteroidCard} from "../components/asteroidCard/AsteroidCard";

export const Destroyment = () => {
    const { destroyment } = useContext(AsteroidsContext);

    return (
        <div className={styles.container}>
            <Header />
            {destroyment.map(item => <AsteroidCard key={item.id} {...item} />)}
        </div>
    );
};
