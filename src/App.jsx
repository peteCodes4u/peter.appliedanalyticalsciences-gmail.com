// pull in components from the 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavigationTabs';

function App() {
    // outlet component to switch between diff pages according to url
    return(
        <>
        <Nav />
        <main className="">
            <Outlet />
        </main>
        </>
    );
};

export default App;