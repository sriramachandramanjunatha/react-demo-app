import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';

// render(<App/>,document.getElementById('app'))

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
import routes from './routes';

const store = createStore(

  // (state = {}) => state,
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

)
render(

<Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
</Provider>,document.getElementById('app')
)
