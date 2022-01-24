import React, { Suspense } from "react";
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from "react-dom";
import Loading from "./components/common/Loading";
import App from './router/index';
import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(<Router>
    <Provider store={store}>
        <Suspense fallback={<Loading />}>
            <App></App>
        </Suspense>
    </Provider>
</Router>,
    document.getElementById('root'));