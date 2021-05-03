import React, { Component } from "react";
import { connect } from "react-redux";
import "../Component.css";
import ProductComponents from "../ProductComponent/ProductComponent";

/*
 * @Class ProductListing
 */
class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: [] };
  }

  /*
   * fetchProducts() used to fetch the api
   */
  componentDidMount() {
    console.log("lable", this.props.match.params.catId);
    this.setState({ productData: this.props.products });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({ productData: this.props.products });
    }
    console.log("Both menu and products", this.state);
  }

  render() {
    const { products } = this.props;
    // console.log("...",products);
    return (
      <>
        <div className="image-container">
          <ProductComponents products={this.state.productData} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: { ...state.allPoducts },
  };
};
export default connect(mapStateToProps)(ProductListing);
