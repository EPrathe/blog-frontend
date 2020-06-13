import React, {useState, useEffect} from 'react';

const ToDoList = () => {
  const [buttonDisabled, setButtonDisabled]= useState(true);
  const[toDoList, setToDoList]=useState([{}]);
  const[newToDo, setNewToDo]=useState('');

  useEffect(() =>{
      async function fetchData(){const result = await fetch(`/api/toDoList`);
      const body = await result.json();
      setToDoList(body);
  }
  fetchData();
  },[]);

  const addToLIst = async ()=>{
    const result=await fetch(`/api/toDoList/add`, {
      method: 'post',
      body: JSON.stringify({name:newToDo, crossed:false}),
      headers:{
        'Content-Type': 'application/json',
      }
    });
    debugger;
    const body = await result.json();
    debugger;
    setToDoList(body);
    setNewToDo('');
  }
  
const List = () => {
  return(
      <div>
      {toDoList.map((item,key)=>{
        return(
        <div key={key}>   
      {!item.crossed && <div className="uncrossed"> {item.name}</div>}
      {item.crossed && <div className="crossed">{item.name}</div>}
       </div>   
        )})}
      </div>
  )}

  useEffect(()=>{
    if(newToDo.length>0) setButtonDisabled(false);
       else setButtonDisabled(true);
}, [newToDo]);

return(
  <>
  <div className="to-do-list">
    <h2> To Do List</h2>
    <h4>Number of Tasks: {toDoList.length}</h4>
    <div className="toDo-add-section">
    <label >
      <input value={newToDo} onChange={event => setNewToDo(event.target.value)} />
    </label>
    <button className="to-do-button" disabled={buttonDisabled} onClick={() => addToLIst()}>Add Task</button>
    </div>
    <List/>
  </div>
  </>
)

}

export default ToDoList;