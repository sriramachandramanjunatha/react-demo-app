import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';

// render(<App/>,document.getElementById('app'))

import { Router, browserHistory } from 'react-router';



import routes from './routes'

render(<Router history={browserHistory} routes={routes}/>,document.getElementById('app'))