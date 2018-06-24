import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.css';
import 'tachyons';
import Mainapp from './Containers/Mainapp';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Mainapp />, document.getElementById('root'));
registerServiceWorker();
