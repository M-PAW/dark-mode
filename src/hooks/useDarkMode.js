import React, { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {

    const [someValue, setSomeValue] = useLocalStorage(key)

    
    return [storedValues, setValue];

}