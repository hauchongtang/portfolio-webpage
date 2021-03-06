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
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={Blogs} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </>
  )
}