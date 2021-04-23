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
    this.state = { productData: [] };
  }

  /*
   * fetchProducts() used to fetch the api
   */
  componentDidMount() {
    console.log("lable", this.props.match.params.catId);
    if (this.props.match.params.catId) {
      console.log("checking data", this.props.match.params.catId);
      let catId = this.props.match.params.catId;
      this.props.fetchProducts(catId);
    } else {
      console.log("no data ");
    }
    // this.props.fetchProducts(this.props.match.params.catId);
    console.log("DId mount", this.props.fetchProducts);
    // this.props.fetchProducts();

    this.setState({ productData: this.props.products });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products != this.props.products) {
      this.setState({ productData: this.props.products });
    }
    console.log("Both menu and products", this.state);
  }

  render() {
    const { products } = this.props;
    return (
      <>
        <div className="image-container">
          <ProductComponents products={this.state.productData} />
        </div>
        {/* <MainMenuHeader  /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.allPoducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (catId) => {
      dispatch(fetchProducts(catId));
    },
  };
};
// function mapDispatchToProps(dispatch) {
//   return {
//       doStuff: (value) => dispatch(doStuffAction(value))
//   };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     nameofActionCreator: (args) => {
//       dispatch(nameOfActionCreator(args))
//     }
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
