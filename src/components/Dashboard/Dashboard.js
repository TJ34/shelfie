import React, { Component } from "react";
import Product from '../Product/Product';

export default class Dashboard extends Component {
    

    render() {
        let productDisplay = this.props.productList.map((product,i) => {
            console.log(product);
            return <div key={i}>
                    <Product 
                        name={product.product_name}
                        price={product.price}
                        image={product.img}
                    />
                   </div>
        });
      return(
          <div className="">
            {productDisplay}
          </div>
      );
    }
  }