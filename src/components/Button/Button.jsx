import styles from './Button.module.css';

export const Button = ({ buttonText }) => {
    return (
        <button className={styles.button}>{buttonText}</button>
    );
};
