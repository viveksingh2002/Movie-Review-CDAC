import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid px-5">

          <div>
            <Link className="navbar-brand" to="/">
              MovieReview
            </Link>
          </div>


          <div className="collapse navbar-collapse ms-5" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                {/* Use Link component with 'to' attribute */}
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center"> {/* Use a div instead of form for profile area */}
              <div className="dropdown"> {/* Bootstrap dropdown wrapper */}
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    id='profile_img'
                    className='rounded-circle me-2' // Added rounded-circle and me-2 for margin
                    // If image is in public folder, use '/img/profile.png'
                    src="../../assets/img/platipus.png"
                    alt="profile"
                    style={{ width: '30px', height: '30px' }} // Added basic styling
                  />
                  {/* Optional: Add user name here */}
                </button>
                <ul className="dropdown-menu dropdown-menu-end"> {/* Use dropdown-menu-end to align right */}
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                  <li><hr className="dropdown-divider" /></li> {/* Divider option */}
                  <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
