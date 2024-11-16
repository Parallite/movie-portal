import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (newData: T) => void] {
    const [storageData, setValue] = useState<T>(() => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setStorageData = (newData: T): void => {
        try {
            localStorage.setItem(key, JSON.stringify(newData));
            setValue(newData);
        } catch (error) {
            console.log(error);
        }
    };

    return [storageData, setStorageData];
};