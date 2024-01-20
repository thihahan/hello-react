import { useState } from "react"
import Header from "./Header";
import AddForm from "./AddForm";
import CheckList from "./CheckList";
import Container from '@mui/material/Container';
import DrawerTest from "./MUI/Drawer";
import { Button } from "@mui/material";
import DoneList from "./DoneList";

export default function App(){
  const [list, setList] = useState([
    {_id : 1, subject : "Apple", done : false},
    {_id : 2, subject : "Orange", done : false},
    {_id : 3, subject : "Mango", done : false}
  ])

  

  const [drawerOpen, setDrawerOpen] = useState(false)
  window.addEventListener("click", () => {
    setDrawerOpen(false)
  })
  const add = subject => {
    if (!subject) return false;
    const _id = list.length ? list[list.length - 1]._id + 1 : 1
    setList([...list, {_id , subject}]) 
  }

  const remove = _id => {
    setList(list.filter(item => item._id != _id))
  }

  const toggle = _id => {
    setList(
      list.map(item => {
        if(item._id === _id) item.done = !item.done
        return item;
      })
    )
  }

  const clear = () => setList(list.filter(item => !item.done))

  return <div>
      <AddForm add={add} />
      <CheckList 
      list={list.filter(item => !item.done)} 
      remove={remove} 
      toggle={toggle}/>
      <CheckList list={list.filter(item => item.done)}
       remove={remove} 
       toggle={toggle}
       done={true}
       />
      <DrawerTest drawerOpen={drawerOpen}/>
  </div>
}
