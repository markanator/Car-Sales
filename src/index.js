import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import important imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {featureReducer} from './reducers/FeatureReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

// createStorage
const store = createStore(featureReducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
