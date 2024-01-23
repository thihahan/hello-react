import { Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Template({count, clear}){
    return (
        <div>
            <Header count={count} clear={clear}/>
            <Container sx={{mt : 4}} maxWidth="sm">
                <Outlet />
            </Container>
        </div>
    )
}