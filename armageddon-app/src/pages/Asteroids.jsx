import {Header} from "../components/header/Header";
import {useState} from "react";
import styles from "./Asteroids.module.css";
import {AsteroidCard, DangerAsteroidCard} from "../components/asteroidCard/AsteroidCard";

export const Asteroids = () => {
    const [asteroids] = useState(generateAsteroids());  //хук для хранения внутреннего состояния компонента
    const [onlyDangerous, setOnlyDangerous] = useState(false);  //признак "опасных" астероидов
    const [distanceMode, setDistanceMode] = useState(true);    //тип единиц для отображения расстояния (true - км)

    return <div className={styles.container}>
        <Header/>
        <div className={styles.displaySettings}>
            <div className={styles.showDangerousOnly}>
                <input type={"checkbox"} value={onlyDangerous} onChange={() => setOnlyDangerous(!onlyDangerous)}></input>
                Показать только опасные
            </div>
            <div className={styles.distanceMode}>
                Расстояние
                {" "}
                <button className={styles.distanceChooser} style={{fontWeight: distanceMode ? 'bold' : 'normal'}} onClick={() => setDistanceMode(true)}>в километрах</button>
                {", "}
                <button className={styles.distanceChooser} style={{fontWeight: distanceMode ? 'normal' : 'bold'}} onClick={() => setDistanceMode(false)}>в дистанциях до Луны</button>
            </div>
        </div>
        {
            //фильтр "опасных"
            onlyDangerous
                ? asteroids.filter((item) => item.isDangerous).map((item) => <AsteroidCard {...item} distanceMode={distanceMode}/>)
                : asteroids.map((item) => <AsteroidCard {...item} distanceMode={distanceMode}/>)
        }
        <footer className={styles.footer}>2024 © Все права и планета защищены</footer>
    </div>
}

//Функция, генерирующая список астероидов
const generateAsteroids = () => {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
                            'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];  //месяцы для даты
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";    //набор символов для названий астероида
    const result= [];    //результирующий массив

    //цикл для генерации случайных астероидов
    for (let i = 0; i < 10; i++) {
        //наименование из 4 символов
        const name = characters[(Math.random() * 25).toFixed(0)] + characters[(Math.random() * 25).toFixed(0)] +
                     characters[(Math.random() * 25).toFixed(0)] + characters[(Math.random() * 25).toFixed(0)];
        //дата
        const date = `${(Math.random() * 27 + 1).toFixed(0)} ${months[(Math.random() * 12).toFixed(0)]} 2024`;
        //расстояние
        const distance = (Math.random() * 90000000).toFixed(0);
        //размер
        const size = (Math.random() * 100 + 10).toFixed(0);
        //признак опасности (true, если >= 0.5)
        const isDangerous = Math.random() >= 0.5;
        result.push({name, date, distance, size, isDangerous});
    }

    return result;
}