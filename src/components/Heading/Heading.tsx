import styles from './Heading.module.css';

import { FC, ReactNode } from 'react';

interface HeadingProps {
    as: 1 | 2 | 3 | 4 | 5 | 6,
    children: ReactNode
}

type TagSizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const Heading: FC<HeadingProps> = ({ as, children }) => {
    const TagSize: TagSizeType = `h${as}`;

    return (
        <TagSize className={styles.heading}>
            {children}
        </TagSize>
    );
};
