import { useEffect, useState } from "react"

const useOSTheme = () => {
    const [theme, setTheme] = useState(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
            return { dark : true, light : false };
        else
            return { dark : false, light : true };
    });

    useEffect(() => {
        const handleThemeChange = (event) => {
            if(event.matches){
                setTheme({
                    dark : true,
                    light : false 
                });
            } else {
                setTheme({
                    dark : false,
                    light : true 
                });
            } 
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    }, []);

    return theme;
}

export default useOSTheme;