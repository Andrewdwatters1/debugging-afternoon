import reducer from './reducer';
import promiseMiddleware from 'redux-promise-middleware';
import {createStore, applyMiddleware} from 'redux';

export default createStore(reducer, applyMiddleware(promiseMiddleware()));