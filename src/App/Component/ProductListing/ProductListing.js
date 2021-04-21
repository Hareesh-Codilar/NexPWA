import React, { Component } from "react";
import { connect } from "react-redux";
import "../Component.css";
import ProductComponents from "../ProductComponent/ProductComponent";
import { fetchProducts } from "../../store/actions/ProductionAction";

/*
 * @Class ProductListing
 */
class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state={productData:[]}
  }

  /*
   * fetchProducts() used to fetch the api
   */
  componentDidMount() {
    console.log("lable");
    console.log("DId mount", this.props.fetchProducts);
    this.props.fetchProducts();
    this.setState({productData: this.props.products});

  }

  componentDidUpdate(prevProps) {
    if(prevProps.products != this.props.products){
    this.setState({productData: this.props.products});
    }
  }

  render() {
    const { products } = this.props;
    return (
      <div className="image-container">
        <ProductComponents products={this.state.productData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts(dispatch)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
