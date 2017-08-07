import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';
import RegisterForm from './components/RegisterForm';
import { Provider } from "react-redux";
import store from './store/store';

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
 

  
  
  , document.getElementById('root'));
registerServiceWorker();
