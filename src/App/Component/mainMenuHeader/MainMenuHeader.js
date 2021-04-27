import React, { Component } from "react";
import "../mainMenuHeader/mainMenuHeader.css";
// import "../mainMenuHeader/mainMenuHeader.css"
import { connect } from "react-redux";
import { fetchMenuProducts } from "../../store/actions/MenuAction";
import { withRouter } from "react-router-dom";
import { fetchProducts } from "../../store/actions/ProductionAction";

class MainMenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuProductsData: [],
      menuList: false,
      isVisible: false,
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

    // this.setState({productData: this.props.products});
  }
  componentDidUpdate(prevProps) {
    if (prevProps.menuProducts != this.props.menuProducts) {
      this.setState({ menuProductsData: this.props.menuProducts });
      console.log("DId update", this.props.menuProducts);
      // console.log(
      //   "Men",
      //   this.state.menuProductsData.menuProducts.categoryList[0].children.find(
      //     (item) => item.position === this.state.menuPosition
      //   )
      // );
    }
  }
  menuClickhandler(id) {
    console.log("handler id", id);
    // this.props.history.push('/page');
    // let catId = this.props.match.params.catId;
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
  // toggleHidden = () => {
  //   this.toggleHidden();

  // };
  //  renderSubmenu(menuProductsData, menuPosition) {
  //    return(
  //      <>
  //   {this.state.menuList && (
  //     <div className="Container">
  //       <div className={`MegaMenuSubLevelContainer ${this.state.isVisible ? 'visible': ''}`}>
  //         <div className="MenuSubDiv show-menu-2 show-menu-2-0">
  //           <div className="SecondLevel HasThreeLevels">
  //             <div className="FinalLevelContainer">
  //               <div className="MenuThirdLevel show-menu-3 show-menu-3-1">
  //                 <div className="ThirdLevel">
  //                   <div className="MenuThirdLevelList">
  //                     <div
  //                       className="MenuThirdLevelSubList"
  //                       style={{ flexBasis: "25%" }}
  //                     >
  //                       <ul>
  //                         {menuProductsData &&
  //                           menuProductsData.menuProducts.categoryList[0].children
  //                             .find(
  //                               (item) =>
  //                                 item.position ===
  //                                 menuPosition
  //                             )
  //                             .children.sort(
  //                               (a, b) =>
  //                                 a.position - b.position
  //                             )
  //                             .map((item) => (
  //                               <li
  //                                 className="ListItem Level-3 Level-3-0 main-menu-column active"
  //                                 key={item.id}
  //                               >
  //                                 <a className="parent">
  //                                   <span className="span-3">
  //                                     {item.name}
  //                                   </span>
  //                                 </a>
  //                               </li>
  //                             ))}
  //                       </ul>
  //                     </div>

  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )}
  //    </>
  //    )
  //  }
  renderNestedSubmenu(nestedSubmenuData) {
    return (
      <>
        {nestedSubmenuData
          .sort((a, b) => a.position - b.position)
          .map((item) => (
            <>
              <li
                className="ListItem Level-4 Level-4-0 main-menu-column"                
              >
                <a className="parent">
                  <span className="span-4">{item.name}</span>
                </a>
              </li>
            </>
          ))}
      </>
    );
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
                <div className="SecondLevel HasThreeLevels" >
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
                                <span className="span-3">{item.name}</span>
                              </a>
                            </li>
                            {/* {console.log("lable", item)} */}
                            {item.children.length > 0
                              ? this.renderNestedSubmenu(item.children)
                              : null}
                          </>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  render() {
    const { menuProductsData, menuPosition } = this.state;
    console.log("Menu data--->>>", menuProductsData);
    return (
      <div className="mainMenu-Header">
        {menuProductsData.menuProducts ? (
          <>
            {menuProductsData.menuProducts.categoryList &&
            menuProductsData.menuProducts.categoryList.length > 0 ? (
              <>
                <ul className="MenuList">
                  {menuProductsData.menuProducts.categoryList[0].children
                    .sort((a, b) => a.position - b.position)
                    .map((value, index) => {
                      return (
                        <>
                          <li
                            className="ListItem Level-2 Level-2-0 arrow"
                            onClick={() => this.menuClickhandler(value.id)}
                          >
                            <span
                              className="span-2"
                              onMouseLeave={this.toggleHidden}
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
    );
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
