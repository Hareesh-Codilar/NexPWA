import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";

/*
 * @Class ProductComponent
 */
export default class ProductComponent extends Component {
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
                    <div className="ui-container">
                      <div className="four column wide">
                        <div className="ui link cards">
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
