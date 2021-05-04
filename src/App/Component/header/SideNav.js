import React, { Component } from "react";
import { connect } from "react-redux";
import MainMenuHeader from "../mainMenuHeader/MainMenuHeader";
import SideBarManu from "../SideBarMenu/SideBarManu";
import "./SideNav.css";
import styled from "styled-components";
const menus = [
  {
    label: "Menu 1",
  },
  {
    label: "Menu 2",
    submenu: [
      {
        label: "Sub Menu 1",
      },
      {
        label: "Sub Menu 2",
      },
    ],
  },
  {
    label: "Menu 3",
    submenu: [
      {
        label: "Sub Menu 1",
        submenu: [
          {
            label: "Boom 1",
          },
          {
            label: "Boom 2",
          },
        ],
      },
      {
        label: "Sub Menu 2",
        submenu: [
          {
            label: "Deep 1",
          },
          {
            label: "Deep 2",
            submenu: [
              {
                label: "Lorem 1",
              },
              {
                label: "Lorem 2",
                submenu: [
                  {
                    label: "Super Deep",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Sub Menu 3",
      },
      {
        label: "Sub Menu 4",
        submenu: [
          {
            label: "Last 1",
          },
          {
            label: "Last 2",
          },
          {
            label: "Last 3",
          },
        ],
      },
    ],
  },
  {
    label: "Menu 4",
  },
];
const Wrapper = styled.aside`
  background: #ccc;
  width: 300px;
`;
class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCollapse: "",
      menuProductsList:[],
      menuProducts:[]
    };
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
  }
  componentDidMount() {
    console.log("did mount--->>da", this.props.menuProducts);
    this.setState({ menuProductsList: this.props.menuProducts });
    console.log("List ->>", this.props.menuProducts);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.menuProducts != this.props.menuProducts) {
      this.setState({ menuProductsList: this.props.menuProducts });
      console.log("DId update...", this.props.menuProducts);
    }
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
    // const { produ } = this.props;
    // console.log(produ);
    
    console.log("data->>>", this.props.menuProducts);
    const { menuProductsList } =this.state;
    console.log("menuProductlist", menuProductsList);
    
    return (
      <div className="MenusideNavbar Header">
        <sidenav className="SideNavbar">
          <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={this.closeNav}>
              &times;
            </a>

            <button>
              <Wrapper>
                <SideBarManu menus={menus} productMenuData={menuProductsList} />
              </Wrapper>
            </button>

            {/* <button
              href="#"
              className={`Sidemenuitems ${
                this.state.activeCollapse === "Services" ? "item-active" : ""
              }`}
              onClick={() => this.handleExpandCollaps("Services")}
              data-id="Services"
            > */}

            {/* <MainMenuHeader /> */}
            {/* <div className="Sidesunmenus">Hello</div>
            </button> */}
            {/* <button
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
            </button> */}
          </div>

          <div className="Menu-logo">
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={this.openNav}
            >
              &#9776;
            </span>
          </div>
          <div className="header-logo">
            <img
              src="https://nexpwa.codilar.in/media/logo/stores/1/NexPWA_-_Color_2.png"
              alt="Nexpwa"
              className="Logo-image"
            />
          </div>
          <div className="My-account">{MyaccuntLlogo()}</div>
          <div className="cart">{Cartlogo()}</div>
        </sidenav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuProducts: state.menuProducts,
  };
};
export default connect(mapStateToProps) (SideNav);
