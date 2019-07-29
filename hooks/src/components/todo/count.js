import React, { useContext } from 'react';

import { ToDoContext } from './todo-provider';

const Count = props => {
  const context = useContext(ToDoContext);
  return (
    <div>
      <h2>There are {context.todoList.length} items in the list</h2>
    </div>
  );
};

export default Count;
