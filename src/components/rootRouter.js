/*
 * @Author: shifan
 * @Date: 2018-06-12 15:27:41
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-23 14:54:22
 * @功能: {}
 */

import React from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import Login from './Login/index';
import Main from './Main/index';
import NotFoundPage from './NotFoundPage';


const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact render={() => (false ? (<Redirect to={{ pathname: '/Main' }} />) : (<Redirect to={{ pathname: '/Login' }} />))} />
        <Route path="/Login" component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
