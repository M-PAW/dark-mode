import React, { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key)
    useEffect(() => {
        const body = document.querySelector('body');

        if(value  === true){
            return body.classList.add('dark-mode')
            console.log('true');
        } else {
            return body.classList.remove('dark-mode')
            console.log('false');
        }
    },[value])    
    return [value, setValue]
}