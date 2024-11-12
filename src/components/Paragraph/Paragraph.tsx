import styles from './Paragraph.module.css';

import { FC, ReactNode } from 'react';

interface ParagraphProps {
    children: ReactNode
}

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
    return (
        <div className={styles.paragraph}>
            {children}
        </div>
    );
};
