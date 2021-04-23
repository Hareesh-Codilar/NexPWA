import React, { Component } from "react";
import { connect } from "react-redux";
import "../Component.css";
import ProductComponents from "../ProductComponent/ProductComponent";
import { fetchProducts } from "../../store/actions/ProductionAction";
import { fetchMenuProducts } from "../../store/actions/MenuAction";
import MainMenuHeader from "../mainMenuHeader/MainMenuHeader";

/*
 * @Class ProductListing
 */
class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state={productData:[],menuProducts: []}
  }

  /*
   * fetchProducts() used to fetch the api
   */
  componentDidMount() {
    console.log("lable");
    console.log("DId mount", this.props.fetchProducts);
    this.props.fetchProducts();
    this.props.fetchMenuProducts();

    this.setState({productData: this.props.products, menuProducts:this.props.menuProducts});

  }

  componentDidUpdate(prevProps) {
    if(prevProps.products != this.props.products){
    this.setState({productData: this.props.products});
    }
    if(prevProps.menuProducts != this.props.menuProducts){
      this.setState({menuProducts: this.props.menuProducts});
      }
    console.log("Both menu and products", this.state);
  }

  render() {
    const { products } = this.props;
    return (<>
      <div className="image-container">
        <ProductComponents products={this.state.productData} />
      </div>
        <MainMenuHeader  />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.allPoducts,
    menuProducts: state.menuProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts(dispatch)),
    fetchMenuProducts: () => dispatch(fetchMenuProducts(dispatch)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
