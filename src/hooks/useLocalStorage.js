import React, { useState } from 'react';

export const useLocalStorage = (key, intitialValue = '') => {

    const [ storedValues, setStoredValues ] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))){
            return JSON.parse(window.localStorage.getItem(key));
        }   else {
            window.localStorage.setItem(key, JSON.stringify(intitialValue));

            return intitialValue;
        }

    });

    const setValue = value => {
        setStoredValues(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    
    return [storedValues, setValue];

}