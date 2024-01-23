import {
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material"

import AppRouter from "./main"
import { createContext, useMemo, useState } from "react"

export const ThemeContext = createContext()

export default function Theme(){
    const [mode, setMode] = useState("dark")
    const theme = useMemo(() => {
        return createTheme({
            palette : {
                mode
            }
        })
    }, [mode])
    return <ThemeContext.Provider value={{mode, setMode}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <AppRouter />
                </ThemeProvider>
        </ThemeContext.Provider>
    
}