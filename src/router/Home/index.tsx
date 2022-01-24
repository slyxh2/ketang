import React from "react";
import { useSelector } from 'react-redux'

const Home: React.FC = () => {
    let store = useSelector(state => state);
    console.log(store);
    return (
        <>
            Home
        </>
    )
};

export default Home;