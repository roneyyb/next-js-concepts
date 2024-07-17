"use client"
import React, { createContext, useContext } from "react"

interface ITheme {
    primary: string
    secondary: string
}

const Theme: ITheme = {
    primary: "p",
    secondary:
        "s"
}

const ThemeContext = createContext<ITheme>(Theme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeContext.Provider value={Theme}>
        {children}
    </ThemeContext.Provider>
}

export { ThemeProvider, useTheme };

const useTheme = () => useContext(ThemeContext);



