import styles from './Spinner.module.css';

export const Spinner = () => {
    return (
        <div className={styles.spinner_wrapper}>
            <div className={styles.spinner}></div>
        </div>
    );
};
