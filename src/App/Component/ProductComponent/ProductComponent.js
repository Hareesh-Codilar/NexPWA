import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { withRouter } from "react-router";
import ProductDetails from "../ProductDetails/ProductDetails";

/*
 * @Class ProductComponent
 */
 class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }
  renderImage = (url, name) => {
    return (
      <div className="image">
        <img src={url} alt={name} />
      </div>
    );
  };
  routeChange=()=> {
    this.props.history.push(`/Product/:ProductId`);
  }

  render() {
    const { products } = this.props.products;
    console.log("Child data", products);
    return (
      <div className="main-container">
        {products ? (
          <>
            {products.products && products.products.items.length > 0 ? (
              <>
                {products.products.items.map((item) => {
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
                    <div className="ui-container">
                      <div className="four column wide">
                        <div className="ui link cards"  onClick={this.routeChange}>
                          <div className="card">
                            {this.renderImage(url, name)}
                            <div className="content">
                              <div className="header"></div>
                              <div className="productPrice">
                                {" "}
                                <strong itemprop="lowPrice">{getSymbolFromCurrency("INR")}</strong>
                                <span> {value}</span>
                              </div>
                              <div className="product-name"> {name} </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                    
                    </>
                  );
                })}
              </>
            ) : (
              <>loading...</>
            )}
          </>
        ) : (
          <>No Data </>
        )}
      </div>
    );
  }
}
export default withRouter(ProductComponent)
