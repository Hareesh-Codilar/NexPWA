import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMenuProducts } from "../../store/actions/MenuAction";
import { withRouter } from "react-router-dom";

class MainMenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state={menuProductsData: []}
    this.menuClickhandler = this.menuClickhandler.bind(this);
    
  }
  componentDidMount() {
    console.log("lable");
    console.log("DId mount", this.props.menuProducts);
    this.props.fetchMenuProducts();
    this.setState({menuProductsData:this.props.menuProducts});
  }
  componentDidUpdate(prevProps) {
    if(prevProps.menuProducts != this.props.menuProducts){
      this.setState({menuProductsData: this.props.menuProducts});
      console.log("DId update", this.props.menuProducts);
      }
  }
  menuClickhandler (id) {
      console.log("handler id", id);
      // this.props.history.push('/page');
      this.props.history.push(`/ProductListing/:${id}`);
  }

  render() {
    const { menuProductsData } = this.state;
    console.log("Menu data--->>>", menuProductsData);
    return (
      <div className="mainMenu-Header">
        {menuProductsData.menuProducts ? (
          <>
              
            {menuProductsData.menuProducts.categoryList && menuProductsData.menuProducts.categoryList.length > 0 ? 
              <>
              <ul className="MenuList">
                {menuProductsData.menuProducts.categoryList[0].children.sort((a, b) => a.position - b.position).map((value, index) => {
                  return (
                  <li className="ListItem Level-2 Level-2-0 arrow" onClick={() => this.menuClickhandler(value.id)}>
                    
                      <span className="span-2"> {value.name}</span>
                   
                  </li>);
                })}
                </ul>
              </>
             : 
              <> no data</>
            }
          </>
        ) : (
          <> loading...</>
        )}
       
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
                        {/* <ul>
                          <li className="ListItem Level-3 Level-3-0 main-menu-column active">
                            <a className="parent" href="/men/t-shirts">
                              <span className="span-3"> T Shirts</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-1">
                            <a className="child" href="/men/t-shirts/casual">
                              <span className="span-4"> Casual</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-2 active">
                            <a className="child" href="/men/t-shirts/v-neck">
                              <span className="span-4"> V-neck</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-3">
                            <a className="child" href="/men/t-shirts/long-sleeves">
                              <span className="span-4"> Long Sleeves</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-4 main-menu-column">
                            <a className="parent" href="/men/ethnic-wear">
                              <span className="span-3"> Ethnic Wear</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-5">
                            <a
                              className="child"
                              href="/men/ethnic-wear/men-s-suits"
                            >
                              <span className="span-4"> Men's Suit</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-6">
                            <a className="child" href="/men/ethnic-wear/sherwani">
                              <span className="span-4"> Sherwani</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-7">
                            <a className="child" href="/men/ethnic-wear/kurtas">
                              <span className="span-4"> Kurtas</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-8">
                            <a className="child" href="/men/ethnic-wear/safa">
                              <span className="span-4"> Safa</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-9">
                            <a
                              className="child"
                              href="/men/ethnic-wear/waistcoat-kurtas"
                            >
                              <span className="span-4"> Waistcoat Kurtas</span>
                            </a>
                          </li>
                        </ul> */}
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
          <div className="MenuSubDiv show-menu-2 show-menu-2-1">
            <div className="SecondLevel HasThreeLevels">
              <div className="FinalLevelContainer">
                <div className="MenuThirdLevel show-menu-3 show-menu-3-1">
                  <div className="ThirdLevel">
                    <div className="MenuThirdLevelList">
                      <div
                        className="MenuThirdLevelSubList"
                        style={{ flexBasis: "25%" }}
                      >
                        {/* <ul>
                          <li className="ListItem Level-3 Level-3-0 main-menu-column active">
                            <a className="parent" href="/women/saree">
                              <span className="span-3"> Saree</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-1">
                            <a className="child" href="/women/saree/casual">
                              <span className="span-4"> Casual</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-2 active">
                            <a className="child" href="/women/saree/handloom-silks">
                              <span className="span-4"> Handloom Silks</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-3">
                            <a className="child" href="/women/saree/patola-silks">
                              <span className="span-4"> Patola Silks</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-4">
                            <a className="child" href="/women/saree/banarasi-saree">
                              <span className="span-4"> Banarasi Saree</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-5 main-menu-column">
                            <a className="parent" href="/women/salwar-kameez">
                              <span className="span-3"> Salwar Kameez</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-6">
                            <a
                              className="child"
                              href="/women/salwar-kameez/anarkali-salwars"
                            >
                              <span className="span-4"> Anarkali Salwars</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-7">
                            <a
                              className="child"
                              href="/women/salwar-kameez/designer-salwars"
                            >
                              <span className="span-4"> Designer Salwars</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-8">
                            <a
                              className="child"
                              href="/women/salwar-kameez/party-wear-salwar-kameez"
                            >
                              <span className="span-4">
                                {" "}
                                Party Wear Salwar Kameez
                              </span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-9">
                            <a
                              className="child"
                              href="/women/salwar-kameez/occasion"
                            >
                              <span className="span-4"> Occasion</span>
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
                            <a className="parent" href="/women/lehenga">
                              <span className="span-3"> Lehenga</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-1">
                            <a
                              className="child"
                              href="/women/lehenga/bridal-lehenga"
                            >
                              <span className="span-4"> Bridal Lehenga</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-2 active">
                            <a
                              className="child"
                              href="/women/lehenga/bridesmaids-lehenga"
                            >
                              <span className="span-4"> Bridesmaids Lehenga</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-3">
                            <a className="child" href="/women/lehenga/occasion">
                              <span className="span-4"> Occasion</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-4">
                            <a
                              className="child"
                              href="/women/lehenga/jacket-lehenga"
                            >
                              <span className="span-4"> Jacket Lehenga</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-5 main-menu-column">
                            <a className="parent" href="/women/gowns">
                              <span className="span-3"> Gowns</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-6">
                            <a className="child" href="/women/gowns/occasion">
                              <span className="span-4"> Occasion</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-7">
                            <a className="child" href="/women/gowns/bridal-gowns">
                              <span className="span-4"> Bridal Gowns</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-8 main-menu-column">
                            <a className="parent" href="/women/tops-tees">
                              <span className="span-3"> Tops &amp; Tees</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-9 main-menu-column">
                            <a className="parent" href="/women/bottom">
                              <span className="span-3"> Bottom</span>
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
                            <a className="parent" href="/women/dress">
                              <span className="span-3"> Dress</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-1 main-menu-column">
                            <a className="parent" href="/women/sportswear">
                              <span className="span-3"> Sportswear</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-2 active">
                            <a className="child" href="/women/sportswear/jogger">
                              <span className="span-4"> Jogger</span>
                            </a>
                          </li>
                          <li className="ListItem Level-4 Level-4-3">
                            <a className="child" href="/women/sportswear/short">
                              <span className="span-4"> Short</span>
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
          <div className="MenuSubDiv show-menu-2 show-menu-2-2">
            <div className="SecondLevel HasThreeLevels">
              <div className="FinalLevelContainer">
                <div className="MenuThirdLevel show-menu-3 show-menu-3-1">
                  <div className="ThirdLevel">
                    <div className="MenuThirdLevelList">
                      <div
                        className="MenuThirdLevelSubList"
                        style={{ flexBasis: "25%" }}
                      >
                        {/* <ul>
                          <li className="ListItem Level-3 Level-3-0 main-menu-column active">
                            <a className="parent" href="/accessories/bag">
                              <span className="span-3"> Bag</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-1 main-menu-column">
                            <a className="parent" href="/accessories/cap">
                              <span className="span-3"> Cap</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-2 main-menu-column">
                            <a className="parent" href="/accessories/laptop-sleeve">
                              <span className="span-3"> Laptop Sleeve</span>
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
                      <div
                        className="MenuThirdLevelSubList"
                        style={{ flexBasis: "25%" }}
                      >
                        <ul></ul>
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
          <div className="MenuSubDiv show-menu-2 show-menu-2-3">
            <div className="SecondLevel HasThreeLevels">
              <div className="FinalLevelContainer">
                <div className="MenuThirdLevel show-menu-3 show-menu-3-1">
                  <div className="ThirdLevel">
                    <div className="MenuThirdLevelList">
                      <div
                        className="MenuThirdLevelSubList"
                        style={{ flexBasis: "25%" }}
                      >
                        {/* <ul>
                          <li className="ListItem Level-3 Level-3-0 main-menu-column active">
                            <a className="parent" href="/footwear/men">
                              <span className="span-3"> Men</span>
                            </a>
                          </li>
                          <li className="ListItem Level-3 Level-3-1 main-menu-column">
                            <a className="parent" href="/footwear/women">
                              <span className="span-3"> Women</span>
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
                      <div
                        className="MenuThirdLevelSubList"
                        style={{ flexBasis: "25%" }}
                      >
                        <ul></ul>
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
    fetchMenuProducts: () => dispatch(fetchMenuProducts(dispatch)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (MainMenuHeader));