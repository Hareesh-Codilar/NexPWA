import React, { Component } from "react";
import "./SideNav.css";

export default class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      activeCollapse: "",
    };
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "330px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  handleExpandCollaps = (name) => {
    if (this.state.activeCollapse === name) {
      /*
      If collapsiable is already visible and clicked on same then this will hide it 
      */
      this.setState({ activeCollapse: "" });
    } else {
      /*
      To show collapsiable 
      */
      this.setState({ activeCollapse: name });
    }
  };
  render() {
    return (
      <div className="MenusideNavbar">
        <sidenav className="SideNavbar">
          <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={this.closeNav}>
              &times;
            </a>
            <button
              href="#"
              className={`Sidemenuitems ${
                this.state.activeCollapse === "About" ? "item-active" : ""
              }`}
              onClick={() => this.handleExpandCollaps("About")}
              data-id="about"
            >
              <span className="Sidenavspan">About</span>
              <span className="pluse-icon">&#43;</span>
              <div className="Sidesunmenus">Hello</div>
            </button>
            <hr></hr>
            <button
              href="#"
              className={`Sidemenuitems ${
                this.state.activeCollapse === "Services" ? "item-active" : ""
              }`}
              onClick={() => this.handleExpandCollaps("Services")}
              data-id="Services"
            >
              <span className="Sidenavspan">Services</span>
              <span className="pluse-icon">&#43;</span>
              <div className="Sidesunmenus">Hello</div>
            </button>
            <button
              href="#"
              className={`Sidemenuitems ${
                this.state.activeCollapse === "Clients" ? "item-active" : ""
              }`}
              onClick={() => this.handleExpandCollaps("Clients")}
              data-id="Clients"
            >
              <span className="Sidenavspan">Clients</span>
              <span className="pluse-icon">&#43;</span>
              <div className="Sidesunmenus">Hello</div>
            </button>
            <button
              href="#"
              className={`Sidemenuitems ${
                this.state.activeCollapse === "Contact" ? "item-active" : ""
              }`}
              onClick={() => this.handleExpandCollaps("Contact")}
              data-id="Contact"
            >
              <span>Contact</span>
              <span className="pluse-icon">&#43;</span>
              <div className="Sidesunmenus">Hello</div>
            </button>
          </div>
          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={this.openNav}
          >
            &#9776;
          </span>
        </sidenav>
      </div>
    );
  }
}
