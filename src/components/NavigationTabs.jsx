import { Link, useLocation } from 'react-router-dom';

function NavigationTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul id="nav" className="nav nav-tabs">
      <h1 id="main-heading">Peter J. Smith</h1>
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
          <h3>About Me</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            <h3>Portfolio</h3> 
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            <h3>Resume</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            <h3>Contact</h3>
          </Link>
        </li>
    </ul>
  )
}

export default NavigationTabs;