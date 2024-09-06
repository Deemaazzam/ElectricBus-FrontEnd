import {createStore,applyMiddleware,compose} from 'redux';
import  {thunk} from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

import {sessionService} from 'redux-react-session';

const initialeState={};
const middlewares=[thunk];
const store=createStore(rootReducer,initialeState,compose(applyMiddleware(...middlewares)));
sessionService.initSessionService(store);

export default store;


