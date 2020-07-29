import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import HomePage from './components/HomePage'
import Projects from './components/Projects'
import Blogs from './components/Blogs'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio-webpage/blog" component={Blogs} />
        <Route exact path="/portfolio-webpage" component={HomePage} />
        <Route path="/portfolio-webpage/:id" component={Projects} />
      </Switch>

    </>
  )
}