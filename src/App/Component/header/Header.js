import React, { Component } from "react";
import MainMenuHeader from "../mainMenuHeader/MainMenuHeader";
import NavBar from "../NavBar/NavBar";
import SideNav from "./SideNav";

/* 
 @Header class component
*/
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header className="header-container">
          <div className="header-div desktop-view">
            <div className="header-topbar">
              <div className="topbar-content">
                <span>
                  GET THIS PWA FOR YOUR MAGENTO STORE. LEARN MORE AT
                  WWW.NEXPWA.COM
                </span>
              </div>
            </div>
            <NavBar />
            <MainMenuHeader />
          </div>
          <div className="header-mobile-view">
            <SideNav />
          </div>
        </header>
      </>
    );
  }
}
export default Header;
