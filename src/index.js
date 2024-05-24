import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import './common/style/frame.css'
import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );  
// ReactDOM.render(<App />, document.getElementById('root'))

// react-redux提供的Provider，把store传给了整个App。
 const Apps = (
    <Provider store={store}>
        <App />
    </Provider>
 )

 ReactDOM.render(Apps, document.getElementById('root'))
