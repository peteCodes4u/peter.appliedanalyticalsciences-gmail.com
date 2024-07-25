// styling
// import React from 'react';
import './App.css';

// pull in components from the 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavigationTabs';
import Footer from './components/Footer';

function App() {
    // outlet component to switch between diff pages according to url
    return(
        <>
        <Nav />
        <main className="content">
            <Outlet />
        </main>
        <Footer />
        </>
    );
}

export default App;