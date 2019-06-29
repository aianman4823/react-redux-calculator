import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculatorContainer from './containers/CalculatorContainer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import logger from 'redux-logger';

const store = createStore(reducer,applyMiddleware(logger))


ReactDOM.render(
    <Provider store={store}>
        <CalculatorContainer />
    </Provider>,
    document.getElementById('root')
    );

