import React, {useState, useEffect} from 'react';

const ToDoList = () => {

  const[toDoList, setToDoList]=useState([{'name': "Create Site", 'crossed': true}, {'name': 'Hook Up to AWS', 'crossed':true}, 
  {'name': 'Create To Do List', 'crossed':true}, {'name': 'Use a CMS for articles', 'crossed':false}, {'name': 'Improve Styling',
   'crossed':false}]);

  const[newToDo, setNewToDo]=useState('');

  const[buttonDisanled, setButtonDisabled]=useState(true);

const List = () => {
  return(
      <>
      <div>
      {toDoList.map((item,key)=>{
        return(
     <>   
      {!item.crossed && <div class="uncrossed"key={key}> {item.name} </div>}
      {item.crossed && <div class="crossed" key={key}> {item.name} </div>}
       </>   
        )
      })}
      </div>
      </>
  )
  }

  const addTask= ()=>{
    let obj={'name': newToDo, 'crossed': false};
    setToDoList([...toDoList,obj]);
    setNewToDo('');
  }

  //diable button when there is no text
return(
  <>
  <div class="to-do-list">
    <h2> To Do List</h2>
    <h4>Number of Tasks: {toDoList.length}</h4>
 
  <div class="toDo-add-section">
    <label >
      <input value={newToDo} onChange={event => setNewToDo(event.target.value)} />
    </label>
    <button class="to-do-button"onClick={() => addTask()}>Add Task</button>
    </div>
    <List/>
  </div>
  </>
)

}

export default ToDoList;