import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState();

    useEffect(() => {
        let storedValue = JSON.parse(localStorage.getItem(key));
        if(!storedValue){
            storedValue = initialValue;
            localStorage.setItem(key, JSON.stringify(initialValue));
        }

        setValue(storedValue);
    }, []);

    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return { value, updateValue };
};

export default useLocalStorage;