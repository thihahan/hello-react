import { Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppRoot(){
    return (
        <div>
            <Header />
            <Container sx={{mt : 4}} maxWidth="sm">
                <Outlet />
            </Container>
        </div>
    )
}