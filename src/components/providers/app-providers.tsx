import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme=createTheme({
    palette:{
        mode:'dark',
    }
})

export const AppProviders=({children}:{children:React.ReactNode})=>{
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}