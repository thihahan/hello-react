import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIconOutline from '@mui/icons-material/CheckCircleOutline';
import { CheckCircle as DoneIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CheckList({list, remove, toggle, done}){
    return <List>
      {list.map(item => {
        return (<ListItem sx={{opacity: done ? 0.5 : 1}}
        key={item._id}
        secondaryAction={<>
  
        {/* Edit Icon */}
          <IconButton>
            <Link to={'/edit'} state={{item}}>
              <EditIcon color="info"/>
            </Link>
          </IconButton>


        <IconButton onClick={() => remove(item._id)}><DeleteIcon color="error"/></IconButton>

        </>}
        >
            <ListItemIcon>
            <IconButton onClick={() => toggle(item._id)}>
              {
                done ? <DoneIcon color="success"/>:<CheckCircleIconOutline />
              }
            </IconButton>
        </ListItemIcon>
            <ListItemText primary={item.subject}></ListItemText>
        </ListItem>)
        
      })}
    </List>
}