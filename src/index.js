import React from 'react';
import ReactDOM from 'react-dom/client';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/index.css';

const container = ReactDOM.createRoot(document.getElementById('root'));

container.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
