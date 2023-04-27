import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// document.querySelector('.video').addEventListener('loadedmetadata', function() {
//     this.currentTime = 1.2;
//   }, false);
