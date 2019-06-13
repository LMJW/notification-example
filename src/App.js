import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './store/reducer';
import Container from './component/container';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container />
			</Provider>
		);
	}
}

export default App;
