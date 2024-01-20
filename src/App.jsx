import AddForm from "./AddForm";
import CheckList from "./CheckList";

export default function App({add, list, remove, toggle}){
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
      {/* <DrawerTest drawerOpen={drawerOpen}/> */}
  </div>
}
