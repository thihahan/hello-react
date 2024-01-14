import { IconButton, Input } from "@mui/material"
import { useRef } from "react"
import AddIcon from '@mui/icons-material/Add';
export default function AddForm({add}){
    const inputRef = useRef()
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            add(inputRef.current.value)
            inputRef.current.value = ""
            inputRef.current.focus()
          }}>
            <Input 
            inputRef={inputRef}
            fullWidth
            endAdornment={<IconButton type="submit"><AddIcon /></IconButton>}
            />
            {/* <input type="text" ref={inputRef} /> */} 
            {/* <input type="submit" value="add" /> */}
          </form>
    )
}

// UI library
// MUI, radix, shadcn, react aria 