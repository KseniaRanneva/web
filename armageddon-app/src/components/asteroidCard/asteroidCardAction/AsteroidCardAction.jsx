import styles from "./AsteroidCardAction.module.css"

export const AsteroidCardAction = (props) => {
    const {isDangerous} = props;
    return <div className={styles.action}>
        <p className={styles.actionGrade}>{`Оценка: ${isDangerous ? `опасен` : `не опасен`}`}</p>
        <button className={styles.actionText}>На уничтожение</button>
    </div>
}