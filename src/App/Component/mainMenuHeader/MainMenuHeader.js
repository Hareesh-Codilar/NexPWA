import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMenuProducts } from '../../store/actions/MenuAction';

 class MainMenuHeader extends Component {
    componentDidMount() {
        console.log("lable");
        console.log("DId mount", this.props.fetchMenuProducts);
        this.props.fetchMenuProducts();
        // this.setState({productData: this.props.products});
    
      }
    render() {
        return (
          <div className="mainMenu-Header">
            <ul className="Menulist">
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Men</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Women</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Accessories</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Footwear</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Trending</span>
              </li>
            </ul>
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
        fetchMenuProducts: () => dispatch(fetchMenuProducts(dispatch)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps) (MainMenuHeader);