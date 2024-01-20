import { Input, IconButton } from "@mui/material"
import {Save as SaveIcon, ArrowBack as BackIcon} from "@mui/icons-material"
import { useRef, useState } from "react"
import { Link, redirect, useLocation, useNavigate } from "react-router-dom"


export default function Edit({update}){
    const inputRef = useRef()
    const {state} = useLocation()
    const [subject, setSubject] = useState(state?.item?.subject)
    const navigate = useNavigate()

    return (

        <div>
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                update(state.item._id, subject)
                navigate("/")
            }}>
                <Input 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                inputRef={inputRef}
                sx={{my : 4}}
                fullWidth
                endAdornment={<IconButton><SaveIcon /></IconButton>}
                />
            </form>
            <IconButton>
                <Link to={'/'}>
                    <BackIcon />
                </Link>
            </IconButton>
        </div>
    )
}