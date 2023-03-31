import React from 'react';
import './App.css';

function App() {

  const handleAddTodo = () => {
    return 1
  }

  return (
    <div className="container">
      <h1 className='title'>My Todos</h1>
      <div className="flex">
        <div className='subcontainer'>
          <div className='subcontainer_item'>
            <div className='subcontainer_item_text'>Name</div>
            <input type='text' placeholder='enter name' className='subcontainer_item_input'></input>
          </div>
          <div className='subcontainer_item'>
            <div className='subcontainer_item_text'>Description</div>
            <input type='text' placeholder='enter description' className='subcontainer_item_input'></input>
          </div>
        </div>
        <button className='btn_add'>Add button</button>
      </div>
    </div>
  );
}

export default App;
