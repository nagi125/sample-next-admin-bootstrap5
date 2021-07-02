import Link from  "next/link";
import React from "react";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {

  /**
   * @returns {Promise<void>}
   */
  function handleLogout() {
  }

  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="me-auto">
              <a className="navbar-brand" href="#">App Name</a>
            </div>
            <div className="ms-auto">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDropdown"
                      aria-controls="navDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse flex-row" id="navDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navDropdownMenuLink" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person me-1" />
                      ユーザー名
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navDropdownMenuLink">
                      <li><a className="dropdown-item text-white" href="#">ログアウト</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Header