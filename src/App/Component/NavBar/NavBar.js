import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = {};
  }

  render() {
    const MyaccuntLlogo = () => {
      return (
        <button
          aria-label="Open my account"
          className="Header-Button Header-Button_isVisible Header-Button_type_account"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 0 24 24"
            width="26"
            fill="grey"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
        </button>
      );
    };
    const Cartlogo = () => {
      return (
        <button
          aria-label="Minicart"
          class="Header-Button Header-Button_type_minicart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="grey"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </button>
      );
    };
    return (
      <>
        <nav className="header-nav center-header">
          <div className="header-searchwrapper">
            <input
              className="header-searchField"
              placeholder="Type a new search"
            />
          </div>
          <div className="header-logo">
            <img
              src="https://nexpwa.codilar.in/media/logo/stores/1/NexPWA_-_Color_2.png"
              alt="Nexpwa"
              className="Logo-image"
            />
          </div>
          <div className="header-profile">
            <div className="language-Select">
              <button>
                ENGLISH
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="Inr-Profile">
              <button>
                INR
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="My-account">{MyaccuntLlogo()}</div>
            <div className="cart">{Cartlogo()}</div>
          </div>
        </nav>
      </>
    );
  }
}
export default NavBar;
