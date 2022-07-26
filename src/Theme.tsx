
import { useState } from 'react';
import App from './App';
import { ThemeProvider } from '@emotion/react'
import { themeLight, themeDark } from './style/themes/dj'

function Environment() {

    const [isDark, setIsDark] = useState(false)

    return (
        <ThemeProvider theme={isDark ? themeDark : themeLight}>
            <App isDark={isDark}/>
        </ThemeProvider>
    );
}

export default Environment;
