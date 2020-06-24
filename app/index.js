import React from 'react';
import ReactDOM from 'react-dom';
import {  HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './redux/store';
import './scss/app.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import '!file-loader?name=[name].[ext]!./assets/images/favicon.png';
// import '!file-loader?name=[name].[ext]!./assets/images/arewethere-twitter-card.png';
import '!file-loader?name=[name].[ext]!./assets/manifest.json';
import '!file-loader?name=[name].[ext]!./assets/robots.txt';
import '!file-loader?name=[name].[ext]!./assets/ads.txt';

ReactDOM.render(
    <Provider store={store}>
    <HelmetProvider>
        <App/>
    </HelmetProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
