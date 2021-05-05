
import React, { Component } from 'react'
import "./ProductDetails.css"
export default class ProductDetails extends Component {
    constructor(props){
        super(props)
      }
    //   componentDidMount(){
    //       console.log("details", this.props.product);
    //   }
    render() {
        console.log("details-->>", this.props.productDetail);

        return (
            <div className="product-Detail-page">
               <h1>ProductDetails</h1> 
            </div>
        )
    }
}
