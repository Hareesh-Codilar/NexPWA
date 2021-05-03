
import React, { Component } from 'react'

export default class ProductDetails extends Component {
    constructor(props){
        super(props)
      }
    render() {
     const itemDetails=this.props.ProductDetails;
     console.log("power", itemDetails);
        return (
            <div>
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 
               <h1>ProductDetails</h1> 

            </div>
        )
    }
}
