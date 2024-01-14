import { useState } from "react"
import Header from "./Header";
import AddForm from "./AddForm";
import CheckList from "./CheckList";
import Container from '@mui/material/Container';

export default function App(){
  const [list, setList] = useState([
    {_id : 1, subject : "Apple", done : false},
    {_id : 2, subject : "Orange", done : false},
    {_id : 3, subject : "Mango", done : false}
  ])

  const add = subject => {
    if (!subject) return false;
    const _id = list.length ? list[list.length - 1]._id + 1 : 1
    setList([...list, {_id , subject}]) 
  }

  const remove = _id => {
    setList(list.filter(item => item._id != _id))
  }

  return <div>
    <Header count={list.length}/>
    <Container maxWidth="sm">
    <AddForm add={add} />
    <CheckList list={list} remove={remove} />
      </Container>
  </div>
}
