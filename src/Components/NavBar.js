import { useLocation, Link, NavLink} from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Recat Crud
        </Link>
        {!isLoginPage && (
          <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link className="btn btn-outline-light" to="/">
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
