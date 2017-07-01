import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="Noclip" />, document.getElementById('root'));
// setInterval(() => {
//     const ele = (
//         <h1>{new Date().toLocaleTimeString()}</h1>
//     );
//     ReactDOM.render(ele, root)
// }, 1000);
registerServiceWorker();
