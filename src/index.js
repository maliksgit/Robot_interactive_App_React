import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.css';
import Robotslist from './Components/Robotslist';
import 'tachyons';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Robotslist />, document.getElementById('root'));
registerServiceWorker();
