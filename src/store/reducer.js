import { combineReducers } from 'redux';

import { reducer as notification } from 'react-notification-system-redux';

const rootReducer = combineReducers({ notification });

export default rootReducer;
