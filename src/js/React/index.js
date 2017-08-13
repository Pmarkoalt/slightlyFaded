import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import registerServiceWorker from './app/utilities/registerServiceWorker';
import App from './app/App';
import store from './app/state/store';

const RootHtml = ( ) => (
    <ReduxProvider store={ store }>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
);

render( <RootHtml />, document.getElementById( "app" ) );
registerServiceWorker();
