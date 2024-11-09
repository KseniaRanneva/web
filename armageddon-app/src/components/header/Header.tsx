import HistoryRouter, { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { getUserKey } from '../../utils/getUserKey';
import {memo, useState} from 'react';

export const Header = memo(() => {
    const [inputOpened, setInputOpened] = useState(false);
    return (
        <div>
            <div className={styles.apiContainer}>
                <button onClick={() => setInputOpened(!inputOpened)}>
                    {getUserKey() === 'DEMO_KEY' ? 'Ввести API-ключ' : 'Изменить API-ключ'}
                </button>
                {inputOpened ? (
                    <input className={styles.apiInput} onChange={(ev) => {
                            if (ev.target.value.length == 40) {
                                localStorage.setItem('API_KEY', ev.target.value);
                                setInputOpened(false);
                            }
                        }}
                    />
                ) : null}
            </div>
            <div className={styles.headerContainer}>
                <div className={styles.headerTitle}>
                    <h1>ARMAGGEDON V</h1>
                    <div>
                        Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле
                    </div>
                </div>
                <div className={styles.headerNav}>
                    <Link to={'/asteroids'} className={styles.headerLink}>Астероиды</Link>
                    <Link to={'/destroyment'} className={styles.headerLink}>Уничтожение</Link>
                </div>
            </div>
        </div>
    );
});

Header.displayName = "Header";  //установка displayName для Header (из-за "обертки" memo)