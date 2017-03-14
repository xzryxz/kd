import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';


const middleware = [
  thunk,
  routerMiddleware(hashHistory),
];

const enhancer = composeWithDevTools(
  compose(
    responsiveStoreEnhancer,
    applyMiddleware(...middleware)
  )
);

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }
  return store;
}

const store = configureStore();

export default store;
