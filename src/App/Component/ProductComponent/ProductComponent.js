import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchproductDetails } from "../../store/actions/productDetailAction";


/*
 * @Class ProductComponent
 */
 class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      productDetailData:[],
    }
    this.routeChange = this.routeChange.bind(this)
  }
  renderImage = (url, name) => {
    return (
      <div className="image">
        <img src={url} alt={name} />
      </div>
    );
  };
  componentDidMount() {
    console.log("lable", this.props.match.params.ProductId);
    console.log("lable didid", this.props.productDetail);
    this.setState({ productDetailData: this.props.productDetail});
  }
  routeChange= (id) => {
    console.log("id details -->>", id);
    this.props.fetchproductDetails(id);
    // console.log("details", this.props);
    this.props.history.push(`/Product/${id}`);
  }

  render() {
    const { products } = this.props.products;
    // console.log("....",this.props.productDetailData);
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
    productDetail: state.productDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchproductDetails: (ProductId) => {
      dispatch(fetchproductDetails(ProductId));
    },
  };
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductComponent))
