import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchproductDetails } from "../../store/actions/productDetailAction";
import getSymbolFromCurrency from "currency-symbol-map";
import "./ProductDetails.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetailData: [],
      count:1,
    };
    this.incremenhandler =this.incremenhandler.bind(this)
    this.decrementhandler =this.decrementhandler.bind(this)
  }
  incremenhandler(){
    this.setState({
        count: this.state.count + 1,
      })
  }
  decrementhandler(){
    this.setState({
        count: this.state.count - 1,
      })
  }
  

  componentDidMount() {
    console.log("lable", this.props.match.params.ProductId);
    console.log("lable datails didmount", this.props.productDetail);
    // this.props.fetchproductDetails()
    this.setState({ productDetailData: this.props.productDetail });
  }
  render() {
    console.log("render productDetailData-->>", this.state.productDetailData);
    const { productDetailData } = this.state;
    console.log("<<<", productDetailData);
    return (
      <>
        {productDetailData.productDetail ? (
          <>
            {productDetailData.productDetail.products &&
            productDetailData.productDetail.products.items.length > 0 ? (
              <>
                {productDetailData.productDetail.products.items.map((item) => {
                  const {
                    image: { url },
                    name,
                    sku,
                    price: {
                      regularPrice: {
                        amount: { value, currency },
                      },
                    },
                  } = item;
                  return (
                    <>
                      <div className="product-Detail-page">
                        <div className="card-action">
                          <section className="ProductActions-Section ProductActions-Section_type_name">
                            <h1
                              itemprop="name"
                              className="ProductActions-Title"
                            >
                              {/* Mustard Yellow Dori Embroidered Chanderi Cotton */}
                              {name}
                            </h1>
                          </section>
                          <section
                            aria-label="Product SKU and availability"
                            className="ProductActions-Section ProductActions-Section_type_sku"
                          >
                            <span itemprop="sku" className="ProductActions-Sku">
                              SKU:{sku}
                            </span>
                          </section>
                          <div class="ProductConfigurableAttributes ProductActions-Attributes">
                            <article class="ExpandableContent ProductConfigurableAttributes-Expandable">
                              <button class="ExpandableContent-Button ExpandableContent-Button_isContentExpanded ProductConfigurableAttributes-ExpandableContentButton">
                                <span class="ExpandableContent-Heading ProductConfigurableAttributes-ExpandableContentHeading">
                                  Size
                                </span>
                                <span class="ExpandableContent-SubHeading ProductConfigurableAttributes-ExpandableContentSubHeading"></span>
                              </button>
                              <div class="ExpandableContent-Content ExpandableContent-Content_isContentExpanded ProductConfigurableAttributes-ExpandableContentContent ProductConfigurableAttributes-ExpandableContentContent_isContentExpanded">
                                <div class="ProductConfigurableAttributes-SwatchList">
                                  <a
                                    href="#"
                                    aria-hidden="false"
                                    class="ProductAttributeValue "
                                  >
                                    <span
                                      title="S"
                                      class="ProductAttributeValue-String"
                                    >
                                      S
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    aria-hidden="false"
                                    class="ProductAttributeValue "
                                  >
                                    <span
                                      title="M"
                                      class="ProductAttributeValue-String"
                                    >
                                      M
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    aria-hidden="false"
                                    class="ProductAttributeValue "
                                  >
                                    <span
                                      title="L"
                                      class="ProductAttributeValue-String"
                                    >
                                      L
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    aria-hidden="false"
                                    class="ProductAttributeValue "
                                  >
                                    <span
                                      title="XL"
                                      class="ProductAttributeValue-String"
                                    >
                                      XL
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="product-main-content">
                            <p className="price">{getSymbolFromCurrency("INR")}{value}</p>
                            <div className="Field Field_type_number ProductActions-Qty">
                              {/* <input
                                data-skip-value="false"
                                type="number"
                                id="item_qty"
                                name="item_qty"
                                value="1"
                                
                                className="input-item_qty"
                              /> */}
                              <span className="count-span">{this.state.count}</span>
                              <button className="pluseIcon-inproductdetials ">
                                <span onClick={this.incremenhandler}>+</span>
                              </button>
                              <button
                                disabled=""
                                className="minusIcon-inproductdetials "
                              >
                                <span onClick={this.decrementhandler}>–</span>
                              </button>
                            </div>
                            <p className="addtocard">
                              <button className="add-to-card">
                                Add to Cart
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <> no data</>
            )}
          </>
        ) : (
          <> no... data </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productDetail: state.productDeatil,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchproductDetails: (ProductId) => {
      dispatch(fetchproductDetails(ProductId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
