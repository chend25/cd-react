/*
 * @Date: 2022-07-27 20:15:09
 * @LastEditors: chend25
 * @LastEditTime: 2022-09-14 00:01:55
 * @FilePath: \cd-react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from "@/router/route.config.js"

import 'antd/dist/antd.css';
import "@/styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

