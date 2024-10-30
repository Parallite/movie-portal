import styles from './Input.module.css';

export const Input = ({
    value,
    handleChange,
    placeholder,
    name,
    icon,
    alt
}) => {
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
                />
            </label>
        </div>
    );
};
