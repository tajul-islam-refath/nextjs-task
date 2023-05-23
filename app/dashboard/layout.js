"use client";

import { useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import NavLink from "./ActiveLink";

const DashboardLayout = ({ children }) => {
  let sideNavRef,
    contentRef,
    topBarRef = useRef();

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    let topNav = topBarRef;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
      topNav.classList.remove("bi-chevron-left");
      topNav.classList.add("bi-chevron-right");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
      topNav.classList.add("bi-chevron-left");
      topNav.classList.remove("bi-chevron-right");
    }
  };

  return (
    <>
      <div className="user-admin-topBar">
        <div className="container-fluid">
          <button className="hamburger" onClick={() => MenuBarClickHandler()}>
            <i
              ref={(div) => (topBarRef = div)}
              className="bi bi-chevron-left"></i>
          </button>
        </div>
      </div>

      <div
        ref={(div) => (sideNavRef = div)}
        className="user-admin-sideNav side-nav-open">
        <div className="logo">
          {/* <img src="../../content/images/logo.png" alt="" /> */}
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarMenu__list">
            <li className="sidebarMenu__list__item">
              <NavLink
                classname="sidebarMenu__list__item__link"
                href="/dashboard">
                <p>Dashboard</p>
              </NavLink>
            </li>

            <li className="sidebarMenu__list__item">
              <a
                className="sidebarMenu__list__item__link"
                onClick={() => signOut({ callbackUrl: "/" })}>
                <p>SignOut</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div ref={(div) => (contentRef = div)} className="content" id="content">
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
