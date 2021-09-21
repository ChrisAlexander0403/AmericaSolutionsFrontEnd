import { createContext, useEffect, useReducer } from 'react';
import { ThemeReducer } from '../reducers/ThemeReducer';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {

    const [isDark, dispatch] = useReducer(ThemeReducer, false, () => {
        const localData = localStorage.getItem('isDark');
        return localData ? JSON.parse(localData) : false
    });

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, dispatch }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
