import React, { Component } from "react";
import "../mainMenuHeader/mainMenuHeader.css";
import { connect } from "react-redux";
import { fetchMenuProducts } from "../../store/actions/MenuAction";
import { withRouter } from "react-router-dom";
import { fetchProducts } from "../../store/actions/ProductionAction";
import SideNav from "../header/SideNav";

/* 
 @MainMenuHeader class component
*/
class MainMenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuProductsData: [],
      menuList: false,
      isVisible: false,
      singleSubmenuList: [],
      menuPosition: [],
    };
    this.menuClickhandler = this.menuClickhandler.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  componentDidMount() {
    console.log("lable");
    console.log("DId mount", this.props.menuProducts);
    this.props.fetchMenuProducts("23");
    this.setState({ menuProductsData: this.props.menuProducts });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.menuProducts != this.props.menuProducts) {
      this.setState({ menuProductsData: this.props.menuProducts });
      console.log("DId update", this.props.menuProducts);
    }
  }
  menuClickhandler(id) {
    console.log("handler id", id);
    this.props.fetchProducts(id);
    this.props.history.push(`/ProductListing/${id}`);
  }
  toggleHidden = (pos) => {
    this.setState({
      ...this.state,
      menuList: !this.state.menuList,
      isVisible: !this.state.isVisible,
      menuPosition: pos,
    });
  };
  renderNestedSubmenu(nestedSubmenuData) {
    return (
      <>
        {nestedSubmenuData
          .sort((a, b) => a.position - b.position)
          .map((item) => (
            <>
              <li className="ListItem Level-4 Level-4-0 main-menu-column">
                <a className="child">
                  <span
                    className="span-4"
                    onClick={() => this.menuClickhandler(item.id)}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            </>
          ))}
      </>
    );
  }
  renderMenuList(menuProductsData, menuPosition) {
    {
      return (
        <>
          <div className="MenuThirdLevelSubList">
            <ul>
              {menuProductsData &&
                menuProductsData.menuProducts.categoryList[0].children
                  .find((item) => item.position === menuPosition)
                  .children.sort((a, b) => a.position - b.position)
                  .map((item) => (
                    <>
                      <li
                        className="ListItem Level-3 Level-3-0 main-menu-column active"
                        key={item.id}
                      >
                        <a className="parent">
                          <span
                            className="span-3"
                            onClick={() => this.menuClickhandler(item.id)}
                          >
                            {item.name}
                          </span>
                        </a>
                      </li>

                      {item.children.length > 0
                        ? this.renderNestedSubmenu(item.children)
                        : null}
                    </>
                  ))}
            </ul>
          </div>
        </>
      );
    }
  }
  renderSubmenu(menuProductsData, menuPosition) {
    return (
      <>
        {this.state.menuList && (
          <div className="Container">
            <div
              className={`MegaMenuSubLevelContainer ${
                this.state.isVisible ? "visible" : ""
              }`}
            >
              <div className="MenuSubDiv show-menu-2 show-menu-2-0">
                <div
                  className="SecondLevel HasThreeLevels"
                  onMouseLeave={this.toggleHidden}
                >
                  <div className="FinalLevelContainer">
                    <div className="MenuThirdLevel show-menu-3 show-menu-3-1 active">
                      <div className="ThirdLevel">
                        <div className="MenuThirdLevelList">
                          {this.renderMenuList(menuProductsData, menuPosition)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  // renderSubmenuMobile(menuProductsData, menuPosition) {
  //   return (
  //     <>
  //       {this.state.menuList && (
  //         <div className="Container">
  //           <div
  //             className={`MegaMenuSubLevelContainer ${
  //               this.state.isVisible ? "visible" : ""
  //             }`}
  //           >
  //             <div className="MenuSubDiv show-menu-2 show-menu-2-0">
  //               <div
  //                 className="SecondLevel HasThreeLevels"
                  
  //               >
  //                 <div className="FinalLevelContainer">
  //                   <div className="MenuThirdLevel show-menu-3 show-menu-3-1 active">
  //                     <div className="ThirdLevel">
  //                       <div className="MenuThirdLevelList">
  //                         {this.renderMenuListMobile(menuProductsData, menuPosition)}
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // }
  // renderMenuListMobile(menuProductsData, menuPosition) {
  //   {
  //     return (
  //       <>
  //         <div className="MenuThirdLevelSubList">
  //           <ul>
  //             {menuProductsData &&
  //               menuProductsData.menuProducts.categoryList[0].children
                  
  //                 .children
  //                 .map((item) => (
  //                   <>
  //                     <li
  //                       className="ListItem Level-3 Level-3-0 main-menu-column active"
  //                       key={item.id}
  //                     >
  //                       <a className="parent">
  //                         <span
  //                           className="span-3"
  //                           onClick={() => this.menuClickhandler(item.id)}
  //                         >
  //                           {item.name}
  //                         </span>
  //                       </a>
  //                     </li>

  //                     {item.children.length > 0
  //                       ? this.renderNestedSubmenuMobile(item.children)
  //                       : null}
  //                   </>
  //                 ))}
  //           </ul>
  //         </div>
  //       </>
  //     );
  //   }
  // }
  // renderNestedSubmenuMobile(nestedSubmenuData) {
  //   return (
  //     <>
  //       {nestedSubmenuData

  //         .map((item) => (
  //           <>
  //             <li className="ListItem Level-4 Level-4-0 main-menu-column">
  //               <a className="child">
  //                 <span
  //                   className="span-4"
  //                   onClick={() => this.menuClickhandler(item.id)}
  //                 >
  //                   {item.name}
  //                 </span>
  //               </a>
  //             </li>
  //           </>
  //         ))}
  //     </>
  //   );
  // }
  render() {
    const { menuProductsData, menuPosition } = this.state;
    console.log("Menu data--->>>", menuProductsData);
    return (
      <>
      <div className="mainMenu-Header">
        {menuProductsData.menuProducts ? (
          <>
            {menuProductsData.menuProducts.categoryList &&
            menuProductsData.menuProducts.categoryList.length > 0 ? (
              <>
                <ul className="MenuList">
                  {menuProductsData.menuProducts.categoryList[0].children
                    
                    .map((value, index) => {
                      return (
                        <>
                          <li
                            className="ListItem Level-2 Level-2-0 arrow"
                            onClick={() => this.menuClickhandler(value.id)}
                          >
                            <span
                              className="span-2"
                              onMouseEnter={() =>
                                this.toggleHidden(value.position)
                              }
                            >
                              {" "}
                              {value.name}
                            </span>
                           
                          </li>
                          {this.renderSubmenu(menuProductsData, menuPosition)}
                        </>
                      );
                    })}
                </ul>
              </>
            ) : (
              <> loading...</>
            )}
          </>
        ) : (
          <> No Data</>
        )}
      </div>
      <div className="catagory-mobile"> 
      {menuProductsData.menuProducts ? (
          <>
            {menuProductsData.menuProducts.categoryList &&
            menuProductsData.menuProducts.categoryList.length > 0 ? (
              <>
                <ul className="MenuList-mobile">
                  {menuProductsData.menuProducts.categoryList[0].children
                    .sort((a, b) => a.position - b.position)
                    .map((value, index) => {
                      return (
                        <>
                          <li
                            className="ListItem Level-2 Level-2-0 arrow"
                            // onClick={() => this.menuClickhandler(value.id)}
                          >
                            <span
                              className="span-2"
                            >
                              {" "}
                              {value.name}
                            {/* <span className="pluse-icon-mobile">&#43;</span> */}
                            </span>
                          </li>
                          {/* {this.renderSubmenuMobile(menuProductsData, menuPosition)} */}
                        </>
                      );
                    })}
                </ul>
              </>
            ) : (
              <> loading...</>
            )}
          </>
        ) : (
          <> No Data</>
        )}
      </div>
  </>  );
  }
}
const mapStateToProps = (state) => {
  return {
    menuProducts: state.menuProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenuProducts: (id) => dispatch(fetchMenuProducts(id)),
    fetchProducts: (catId) => {
      dispatch(fetchProducts(catId));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainMenuHeader)
);
