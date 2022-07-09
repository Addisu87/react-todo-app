import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

const TodoContainer = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  // update state
  const handleChange = (id) => {
    setTodos((prevState) => {
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
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
      completed: false,
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
      }),
    );
  };

  // side effects(lifecycle methods using function)

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <Routes>
      <Navbar />

      <Route exact path="/">
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
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Routes>
  );
};

export default TodoContainer;
