import {Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function DrawerList(){
    const items = ["Item1", "Item2", "Item3", "Item4"]
    return <List>
        {
            items.map(item => <ListItem>
                <ListItemButton>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>)
        }
    </List>
}
export default function DrawerTest({drawerOpen}){
    return <>
    <Drawer anchor="left" open={drawerOpen}>
        <DrawerList />
    </Drawer>
    </>
}