import styles from './Paragraph.module.css';

export const Paragraph = ({ children }) => {
    return (
        <div className={styles.paragraph}>{children}</div>
    );
};
