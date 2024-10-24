import './HeroForm.css';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { useState } from 'react';

export const HeroForm = ({
    inputPlaceholder,
    buttonText,
    inputName,
    icon,
    alt
}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <form
            className='hero-form'
            onSubmit={(e) => handleSubmit(e)}
        >
            <Input
                name={inputName}
                value={value}
                handleChange={handleChange}
                placeholder={inputPlaceholder}
                icon={icon}
                alt={alt}
            />
            <Button buttonText={buttonText} />
        </form>
    );
};
