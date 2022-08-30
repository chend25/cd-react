/*
 * @Date: 2022-07-27 20:15:09
 * @LastEditors: chend25
 * @LastEditTime: 2022-08-30 22:59:06
 * @FilePath: \cd-react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from "@/router/route.config.js"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

