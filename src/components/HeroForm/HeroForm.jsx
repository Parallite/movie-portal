import style from './HeroForm.module.css';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

export const HeroForm = ({
    inputPlaceholder,
    buttonText,
    inputName,
    icon,
    alt,
    onSubmit,
    className
}) => {
    const [value, setValue] = useState('');
    const InputRef = useRef(null);
    const ButtonRef = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            onSubmit(value);
            setValue('');
        }
    };

    useEffect(() => {
        if (InputRef.current) {
            InputRef.current.focus();
        }
        return () => {
            InputRef.current = null;
        };
    }, [InputRef]);

    return (
        <form
            className={`${style.form} ${style[className]}`}
            onSubmit={(e) => handleSubmit(e)}
        >
            <Input
                name={inputName}
                value={value}
                handleChange={handleChange}
                placeholder={inputPlaceholder}
                icon={icon}
                alt={alt}
                ref={InputRef}
            />
            <Button
                ref={ButtonRef}
            >
                {buttonText}
            </Button>
        </form >
    );
};
