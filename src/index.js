import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import AppRouter from './routes/router';
import store from './redux'

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
     </Provider>
    
, document.getElementById('root'));
registerServiceWorker();
