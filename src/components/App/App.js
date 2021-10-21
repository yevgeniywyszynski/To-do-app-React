import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../FAQ/FAQ';
import MyHobby from '../MyHobby/MyHobby';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/myhobby' component={MyHobby} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;