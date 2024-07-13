import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Dashboard from './Dashboard';
import Products from './Products';
import Categories from './Categories';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';
import Contact from './Contact';
import Profile from './Profile';

function Header() {
  
  return (
    <>
    
            
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="Daraz-logo.png"
              height="40"
              alt="Daraz logo"
              loading="lazy"
            />
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/dashboard' className="nav-link">
                Dashboard
              </Link>
            </li>
          
            <li className="nav-item">
              <Link to='/products' className="nav-link">Products</Link>
                
          
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-link">External</Link>
                
          
            </li>
            <li className="nav-item">
              <Link to='/Categories' className="nav-link">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/privacy-plicy' className="nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>

          <div className="dropdown">
            <a
              data-mdb-dropdown-init
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <a
              data-mdb-dropdown-init
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    <Routes>
  
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/products" element={<Products />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/about" element={<About />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/profile" element={<Profile />} />
  

  
  </Routes>
  </BrowserRouter>
    </>    
  );
}
export default Header;
