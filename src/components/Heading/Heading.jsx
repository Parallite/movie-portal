import styles from './Heading.module.css';

export const Heading = ({ as, headingText }) => {
    const TagSize = `h${as}`;

    return (
        <TagSize className={styles.heading}>{headingText}</TagSize>
    );
};
