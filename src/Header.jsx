import { Badge, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ChecklistIcon from '@mui/icons-material/Checklist';
export default function Header({count, clear}){
    return (
        <AppBar position='static'>
            <Toolbar>
            <Badge badgeContent={count} color="error" sx={{mr : 2}}>
                <ChecklistIcon color="action" />
            </Badge>
                <Typography sx={{flexGrow : 1}}>
                    CheckList
                </Typography>
                <IconButton onClick={clear}>
                    <ClearAllIcon color='inherit'/>
                </IconButton>
            </Toolbar>
        </AppBar>
    ) 
    
    
    // <h1>Hello React ({count})</h1>
}