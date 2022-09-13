/*
 * @Date: 2022-08-06 21:10:11
 * @LastEditors: chend25
 * @LastEditTime: 2022-09-13 23:12:59
 * @FilePath: \cd-react\src\router\route.config.js
 */
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from '@/pages/login';
import About from '@/pages/base/about';
import Home from '@/pages/base/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <Router>
        <Routes>
          {/* Navigate 重定向 */}
          <Route exact path={"/"} element={<Navigate to ={"/login"} />}/>
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/home"} element={<Home/>} />
        </Routes>
      </Router>
    )
  }
}
// const App = () => (
//   <Router>
//     <Routes>
//       {/* Navigate 重定向 */}
//       <Route exact path={"/"} element={<Navigate to ={"/login"} />}/>
//       <Route path={"/login"} element={<Login/>} />
//       <Route path={"/about"} element={<About/>} />
//       <Route path={"/home"} element={<Home/>} />
//     </Routes>
//   </Router>
// )
export default App;