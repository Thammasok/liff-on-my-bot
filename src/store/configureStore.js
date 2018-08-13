import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import promise from 'redux-promise';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  let middlewares = []

  if(process.env.NODE_ENV === 'production') {
    middlewares = [thunkMiddleware, createLogger()]
  } else {
    middlewares = [thunkMiddleware, createLogger()]
  }
 
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  
  return store;
}
