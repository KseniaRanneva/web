import styles from './AsteroidCardAction.module.css';
import {useContext} from "react";
import {AsteroidsContext} from "../../asteroidsContext/AsteroidsContext";

export const AsteroidCardAction = (props: { id: string, isDangerous: boolean, onClick: (asteroid: any) => void }) => {
    const { id, isDangerous, onClick } = props;
    const { destroyment } = useContext(AsteroidsContext);

    return (
        <div className={styles.action}>
            <p
                className={styles.actionGrade}
            >{`Оценка: ${isDangerous ? `опасен` : `не опасен`}`}</p>
            <button className={styles.actionText} onClick={onClick}> {destroyment.find(item => item.id == props.id) ? `Готов к уничтожению` : `На уничтожение`} </button>
        </div>
    );
};