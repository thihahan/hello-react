import { Badge, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { 
    DeleteSweep as ClearAllIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon
} from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from './Themes';
export default function Header({count, clear}){
    const {mode, setMode} = useContext(ThemeContext)
    return (
        <AppBar position='static'>
            <Toolbar>
            <Badge badgeContent={count} color="error" sx={{mr : 2}}>
                <ChecklistIcon color="action" />
            </Badge>
                <Typography sx={{flexGrow : 1}}>
                    CheckList
                </Typography>
                <>
                {
                    mode === "dark" ? 
                    <IconButton onClick={() => setMode("light")}>
                        <LightModeIcon />
                    </IconButton>
                    :
                    <IconButton onClick={() => setMode("dark")}>
                        <DarkModeIcon />
                    </IconButton>
                }
                </>
                <IconButton onClick={clear}>
                    <ClearAllIcon color="inherit"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    ) 
    
    
    // <h1>Hello React ({count})</h1>
}