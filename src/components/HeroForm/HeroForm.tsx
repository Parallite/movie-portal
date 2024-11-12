import style from './HeroForm.module.css';

import { FC, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';


interface HeroFormProps {
    inputPlaceholder: string,
    buttonText: string,
    inputName: string,
    onSubmit: (value: string) => void,
    icon?: string,
    alt?: string,
    className?: string
}

export const HeroForm: FC<HeroFormProps> = ({
    inputPlaceholder,
    buttonText,
    inputName,
    icon,
    alt,
    onSubmit,
    className
}) => {
    const [value, setValue] = useState<string>('');
    const InputRef = useRef<HTMLInputElement | null>(null);
    const ButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            onSubmit={(e) => handleSubmit(e)}
            className={clsx(
                style.form,
                className && style.className
            )}
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
