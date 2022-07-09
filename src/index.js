import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/index.css';

const container = ReactDOM.createRoot(document.getElementById('root'));

container.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
