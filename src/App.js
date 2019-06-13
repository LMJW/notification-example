import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

import rootReducer from './store/reducer';
import Demo from './component/demo';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())));
const store = composeWithDevTools(applyMiddleware(thunk, createLogger()))(createStore)(rootReducer, {});

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Demo />
				<NotificationsSystem theme={theme} />
			</Provider>
		);
	}
}

export default App;
