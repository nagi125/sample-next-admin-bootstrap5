import Link from  "next/link";
import React from "react";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = () => {

  /**
   * @returns {Promise<void>}
   */
  function handleLogout() {
  }

  return (
      <>
        <nav className="sidebar">
          <ul className="nav flex-column accordion" id="nav_accordion">
            <li className="nav-item">
              <a className="nav-link" href="#">メニュー1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#menu_item1"
                 aria-controls="menu_item2" aria-expanded="true" href="#">
                メニュー2<i className="bi bi-caret-down-fill ms-1" />
              </a>
              <ul id="menu_item1" className="submenu collapse accordion-collapse" data-bs-parent="#nav_accordion">
                <li><a className="nav-link" href="#"><i className="bi bi-chevron-right me-1" />サブメニュー1</a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-chevron-right me-1" />サブメニュー2</a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-chevron-right me-1" />サブメニュー3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#menu_item2" aria-controls="menu_item2"
                 aria-expanded="true" href="#">
                メニュー3<i className="bi bi-caret-down-fill ms-1" />
              </a>
              <ul id="menu_item2" className="submenu collapse accordion-collapse show" data-bs-parent="#nav_accordion">
                <li><a className="nav-link" href="#"><i className="bi bi-chevron-right me-1" />サブメニュー1</a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-chevron-right me-1" />サブメニュー2</a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-chevron-right me-1" />サブメニュー3</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </>
  )
}

export default SideBar;