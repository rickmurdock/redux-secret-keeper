import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <App />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  
  
  , document.getElementById('root'));
registerServiceWorker();
