import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

export default function DoneList({list, remove, toggle}){
    return <List>
      {list.map(item => {
        return (<ListItem sx={{opacity : 0.5}}
        key={item._id}
        secondaryAction={<>
        <IconButton><EditIcon color="info"/></IconButton>
        <IconButton onClick={() => remove(item._id)}><DeleteIcon color="error"/></IconButton>

        </>}
        >
            <ListItemIcon>
            <IconButton onClick={() => toggle(item._id)}>
                <CheckCircleIcon color="success"/>
            </IconButton>
        </ListItemIcon>
            <ListItemText primary={item.subject}></ListItemText>
        </ListItem>)
        
      })}
    </List>
}