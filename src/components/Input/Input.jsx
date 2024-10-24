import './Input.css';

export const Input = ({
    value,
    handleChange,
    placeholder,
    name,
    icon,
    alt
}) => {
    return (
        <div className='input-box'>
            <label className='input-box__label' htmlFor={name}>
                {
                    icon && <img className='input-box__icon' src={icon} alt={alt} />
                }
                <input
                    type='text'
                    id='input'
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    className='input-box__input'
                />
            </label>
        </div>
    );
};
