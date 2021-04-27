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
    this.state = { menuProductsData: [], menuList: false, menuPosition:""} ;
    this.menuClickhandler = this.menuClickhandler.bind(this);
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
      // console.log('Men',this.state.menuProductsData.menuProducts.categoryList[0].children[0].children.find(item => item.position === this.state.menuPosition));
    }
  }
  menuClickhandler(id) {
    console.log("handler id", id);
    // this.props.history.push('/page');
    // let catId = this.props.match.params.catId;
    this.props.fetchProducts(id);
    this.props.history.push(`/ProductListing/${id}`);
  }
  mouseOverEvent = (pos) => {
    
    this.setState({ ...this.state, menuList: !this.state.menuList, menuPosition: pos });
    
  };
  mouseOutEvent = () => {
    this.mouseOverEvent();
  };

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
                              onMouseOut={this.mouseOutEvent}
                              onMouseOver={() => this.mouseOverEvent(value.position)}
                            >
                              {" "}
                              {value.name}
                            </span>
                          </li>
                          {this.state.menuList && (
                            <div className="Container">
                              <div className="MegaMenuSubLevelContainer">
                                <div className="MenuSubDiv show-menu-2 show-menu-2-0">
                                  <div className="SecondLevel HasThreeLevels">
                                    <div className="FinalLevelContainer">
                                      <div className="MenuThirdLevel show-menu-3 show-menu-3-1">
                                        <div className="ThirdLevel">
                                          <div className="MenuThirdLevelList">
                                            <div
                                              className="MenuThirdLevelSubList"
                                              style={{ flexBasis: "25%" }}
                                            >
                                              <ul>
                                                {menuProductsData && menuProductsData.menuProducts.categoryList[0].children.find(item => item.position === menuPosition).children.map(item => (
                                                   <li className="ListItem Level-3 Level-3-0 main-menu-column active">
                                                   <a className="parent">
                                                     <span className="span-3">
                                                       {item.name}
                                                       
                                                     </span>
                                                   </a>
                                                   
                                                 </li>
                                                 
                                                ))}                                                    
                                              </ul>
                                            </div>
                                            <div
                                              className="MenuThirdLevelSubList"
                                              style={{ flexBasis: "25%" }}
                                            >
                                              {/* <ul>
                          <li className="ListItem Level-4 Level-4-0">
                            <a className="child" href="/men/ethnic-wear/occasion">
                              <span className="span-4"> Occasion</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-1 main-menu-column">
                            <a className="parent" href="/men/denim-jeans">
                              <span className="span-3"> Denim Jeans</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-2 active">
                            <a className="child" href="/men/denim-jeans/shorts">
                              <span className="span-4"> Shorts</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-3">
                            <a className="child" href="/men/denim-jeans/pants">
                              <span className="span-4"> Pants</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-4 main-menu-column">
                            <a className="parent" href="/men/sweatshirt">
                              <span className="span-3"> Sweatshirt</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-5">
                            <a className="child" href="/men/sweatshirt/zipped">
                              <span className="span-4"> Zipped</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-6">
                            <a className="child" href="/men/sweatshirt/casual">
                              <span className="span-4"> Casual</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-7 main-menu-column">
                            <a className="parent" href="/men/jackets">
                              <span className="span-3"> Jackets</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-8">
                            <a className="child" href="/men/jackets/casual">
                              <span className="span-4"> Casual</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-9">
                            <a className="child" href="/men/jackets/denim">
                              <span className="span-4"> Denim</span>
                            </a>
                          </li>
                        </ul> */}
                                            </div>
                                            <div
                                              className="MenuThirdLevelSubList"
                                              style={{ flexBasis: "25%" }}
                                            >
                                              {/* <ul>
                          <li className="ListItem Level-3 Level-3-0 main-menu-column active">
                            <a className="parent" href="/men/sportswears">
                              <span className="span-3"> Sportswears</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-1 main-menu-column">
                            <a className="parent" href="/men/trouser">
                              <span className="span-3"> Trouser</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-2 active">
                            <a className="child" href="/men/trouser/casual">
                              <span className="span-4"> Casual</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-3">
                            <a className="child" href="/men/trouser/formal">
                              <span className="span-4"> Formal</span>
                            </a>
                          </li>
                        </ul> */}
                                            </div>
                                            <div
                                              className="MenuThirdLevelSubList"
                                              style={{ flexBasis: "25%" }}
                                            >
                                              <ul></ul>
                                            </div>
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
