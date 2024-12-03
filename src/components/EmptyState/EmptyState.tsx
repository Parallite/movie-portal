import { FC } from 'react';
import styles from './EmptyState.module.css';

interface EmptyState {
    heading: string,
    text?: string
}

export const EmptyState: FC<EmptyState> = ({
    heading,
    text
}) => {
    return (
        <div className={styles.empty_state_wrapper}>
            <h2 className={styles.empty_state_heading}>
                {heading}
            </h2>
            {
                text && <p className={styles.empty_state_text}>
                    {text}
                </p>
            }
        </div>
    );
};
