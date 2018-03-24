import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';//react自带的
import reducer from './reducers';
require('./static/css/style.css');
require('./static/css/normalize.css');
require('./static/css/designer.css');
require('./static/js/elian.js');

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)

registerServiceWorker();
