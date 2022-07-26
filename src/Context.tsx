
import React, { useState } from 'react';

import App from './App';
import { ThemeProvider } from '@emotion/react'

// colors : {
//     primary: string;
//     secondary: string;
//     negative: string
//   };

const themeLight = {
    color: {
        primary: "#1E7CBB",
        secondary: "#1E7CBB",
        negative: "#1E7CBB"
    }
}

const themeDark = {
    color: {
        primary: "#8856CB",
        secondary: "#8856CB",
        negative: "#8856CB"
    }
}

function Environment() {
    const [isDark, setIsDark] = useState(false)
    return (
        <ThemeProvider theme={isDark ? themeDark : themeLight}>
            <App isDark={isDark}/>
        </ThemeProvider>
    );
}

export default Environment;
