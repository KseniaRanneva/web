import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export const Header = () => {
    return <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
            <h1>ARMAGGEDON V</h1>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле</div>
        </div>
        <div className={styles.headerNav}>
            <Link to={'/asteroids'} className={styles.headerLink}>Астероиды</Link>
            <Link to={'/destroyment'} className={styles.headerLink}>Уничтожение</Link>
        </div>
    </div>
}