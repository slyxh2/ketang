import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = React.lazy(() => import(/*webpackChunkName:'Home' */'./Home/index'));
const Cart = React.lazy(() => import(/*webpackChunkName:'Cart' */'./Cart/index'));
const Profile = React.lazy(() => import(/*webpackChunkName:'Profile' */'./Profile/index'));

const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/*' element={<Navigate to='/home' />}></Route>
        </Routes>
    )
};

export default App;