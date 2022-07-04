import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  // update state
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  // delete item
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  // add item
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // update item
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  // side effects(lifecycle methods using function)
  // useEffect(() => {
  //   console.log('test run');

  //   // getting stored items
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
