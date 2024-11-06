import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue = '') => {
    const [storageData, setValue] = useState(defaultValue);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(key));
        if (data) setValue(data);
    }, [key]);

    const setStorageData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setValue(newData);
    };

    return [storageData, setStorageData];
};