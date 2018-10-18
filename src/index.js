import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './redux-reducer/reducer-action.js';
// routes
import CenteralRoot from './root-file.js'
// store creation
const store = createStore(RootReducer);

ReactDOM.render(
    <Provider store={store}>
        <CenteralRoot />
    </Provider>,
    document.getElementById('root')
);