import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { withRouter } from "react-router";
import ProductDetails from "../ProductDetails/ProductDetails";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/ProductionAction";

/*
 * @Class ProductComponent
 */
 class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this)
  }
  renderImage = (url, name) => {
    return (
      <div className="image">
        <img src={url} alt={name} />
      </div>
    );
  };
  routeChange=(id)=> {
    console.log("id -->>", id);
    this.props.fetchProducts(id);
    console.log("details", this.props.products);
    this.props.history.push(`/Product:/${id}`);
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
                        <div className="ui link cards"  onClick={ () => this.routeChange(item.id)}>
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
const mapStateToProps = (state) => {
  return {
    menuProducts: state.menuProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchMenuProducts: (id) => dispatch(fetchMenuProducts(id)),
    fetchProducts: (catId) => {
      dispatch(fetchProducts(catId));
    },
  };
};
export default withRouter(connect(mapDispatchToProps, mapStateToProps)(ProductComponent))
