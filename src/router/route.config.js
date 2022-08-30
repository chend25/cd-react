/*
 * @Date: 2022-08-06 21:10:11
 * @LastEditors: chend25
 * @LastEditTime: 2022-08-30 22:41:55
 * @FilePath: \cd-react\src\router\route.config.js
 */
import React, {Component} from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import Login from '@/pages/login';
import About from '@/pages/base/about';
import Home from '@/pages/base/home';

const App = () => (
  <Router>
    <Routes>
      <Route path={"/"} element={<Login/>} />
      <Route path={"/about"} element={<About/>} />
      <Route path={"/home"} element={<Home/>} />
    </Routes>
  </Router>
)
export default App;