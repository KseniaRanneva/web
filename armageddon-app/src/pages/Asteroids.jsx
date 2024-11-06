import {Header} from "../components/header/Header";
import {useEffect, useState} from "react";
import styles from "./Asteroids.module.css";
import {AsteroidCard, DangerAsteroidCard} from "../components/asteroidCard/AsteroidCard";

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState([]);  //астероиды //хук для хранения внутреннего состояния компонента
    const [onlyDangerous, setOnlyDangerous] = useState(false);  //признак "опасных" астероидов
    const [distanceMode, setDistanceMode] = useState(true);    //тип единиц для отображения расстояния (true - км)

    //Загрузка астероидов с API NASA        //запуск "эффектов"
    useEffect(  () => {
        const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY").then((res) => {
            return res.json();
        }).then((response) => {
            //получение свойств
            let rawAsteroids = [];  //массив из объектов (астероидов)
            for (const data in response.near_earth_objects) {
                rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data]);
            }
            const asteroids = rawAsteroids.map(item => {
                //вычисление среднего значения размера астероида
                const mediumSize = ((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min)/2).toFixed(1);
                const close = item.close_approach_data[0];  //данные о сближении
                return {
                    id: item.id,
                    name: item.name,
                    date: close.close_approach_date,
                    distance: {kilometers: close.miss_distance.kilometers, lunar: close.miss_distance.lunar},
                    size: mediumSize,
                    isDangerous: item.is_potentially_hazardous_asteroid
                }
            });
            setAsteroids(asteroids);
        }).catch( (err) => {
            console.log(err);
            setAsteroids(generateAsteroids());
        });
    }, []);

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
                ? asteroids.filter((item) => item.isDangerous).map((item) => <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>)
                : asteroids.map((item) => <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>)
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
        //уникальный идентификатор астероида
        const id = name;
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
        result.push({id, name, date, distance, size, isDangerous});
    }

    return result;
}