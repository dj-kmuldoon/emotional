
import App from './App';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { ThemeManager } from './style/themes/ThemeManager'
import { Event } from './constants/events'

function Environment() {

    const [theme, setTheme] = useState(0)
    const [mode, setMode] = useState(false)

    window.addEventListener(Event.DARK_MODE, ((e: CustomEvent) => {
        e.preventDefault()
        setMode(!mode);
    }) as EventListener);

    window.addEventListener(Event.SET_THEME, ((e: CustomEvent) => {
        e.preventDefault()
        console.log("LEMME SEE", e.detail.value)
        let value = parseInt(e.detail.value)
        setTheme(value)
        // setMode(!mode);
    }) as EventListener);

    return (
        <ThemeProvider theme={ThemeManager(theme, mode)}>
            <App/>
        </ThemeProvider>
    );

}

export default Environment;
