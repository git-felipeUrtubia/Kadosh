import { useEffect, useState } from "react"



export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })

    useEffect(() => {
        const root = window.document.documentElement;

        if(theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        }else {
            root.removeAttribute('data-theme');
        }

        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    };

    return { theme, toggleTheme };

}