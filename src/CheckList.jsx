import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIconOutline from '@mui/icons-material/CheckCircleOutline';

export default function CheckList({list, remove}){
    return <List>
      {list.map(item => {
        return (<ListItem
        key={item._id}
        secondaryAction={<>
        <IconButton><EditIcon color="info"/></IconButton>
        <IconButton onClick={() => remove(item._id)}><DeleteIcon color="error"/></IconButton>

        </>}
        >
            <ListItemIcon>
            <IconButton>
                <CheckCircleIconOutline />
            </IconButton>
        </ListItemIcon>
            <ListItemText primary={item.subject}></ListItemText>
        </ListItem>)
        
      })}
    </List>
}