import styles from './Heading.module.css';

export const Heading = ({ as, children }) => {
    const TagSize = `h${as}`;

    return (
        <TagSize className={styles.heading}>
            {children}
        </TagSize>
    );
};
