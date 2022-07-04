import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/index.css';

const container = document.getElementById('root');
const TodoWrapper = createRoot(container);
TodoWrapper.render(<TodoContainer />);

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoContainer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
