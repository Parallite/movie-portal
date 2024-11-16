import styles from './Button.module.css';

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
    children,
    ...props
}, ref
) {
    return (
        <button className={styles.button} ref={ref} {...props}>
            {children}
        </button>
    );
});
