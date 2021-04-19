import React, { Component } from "react";
import NavBar from '../NavBar/NavBar'

class Header extends Component {
  constructor(props){
    super(props)
    this.props={
      
    }
  }
  render() {
    return (
        <header className="header-container">
          <div className="header-topbar">
            <div className="topbar-content">
              <span>
                GET THIS PWA FOR YOUR MAGENTO STORE. LEARN MORE AT
                WWW.NEXPWA.COM
              </span>
            </div>
          </div>
          <NavBar />
        </header>
    );
  }
}
export default Header;
