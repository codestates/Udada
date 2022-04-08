import React from 'react';
import { createRoot } from "react-dom/client";
import "antd/dist/antd.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import create from "./redux/create"
import { Provider } from "react-redux"



const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('루트 요소를 찾지 못했습니다')
const root = createRoot(rootElement);


const store = create();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
