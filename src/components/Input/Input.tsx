import styles from './Input.module.css';

import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    name: string,
    isValid?: boolean,
    icon?: string,
    alt?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
    value,
    handleChange,
    placeholder,
    name,
    icon,
    alt
}, ref
) {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={name}>
                {
                    icon && <img className={styles.icon} src={icon} alt={alt} />
                }
                <input
                    type='text'
                    id={name}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    className={styles.input}
                    ref={ref}
                />
            </label>
        </div>
    );
});
