import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Todos from './todos/Todos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todos />, document.getElementById('root'));
registerServiceWorker();
