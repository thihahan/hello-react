import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Edit from './Edit.jsx';
import AppRoot from './AppRoot.jsx';


const AppRouter = () => {
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

  const update = (_id, subject) => {
    if(!subject) return false
    setList(list.map(item => {
      if(item._id === _id) item.subject = subject
      return item;
    }))
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
  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppRoot count={list.filter(item => !item.done).length} clear={clear}/>,
      children : [
        {
          path : "/",
          element : <App add={add} remove={remove} toggle={toggle} list={list}/>
        },
        {
          path : "/edit",
          element : <Edit update={update}/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <AppRouter />
  </React.StrictMode>,
)
