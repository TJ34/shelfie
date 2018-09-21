import React, { Component } from "react";
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            imgUrl: ,
            product_name: '',
            price: 0
        }

        this.imgChange = this.imgChange.bind(this);
    }

    imgChange(val) {
        this.setState({imgUrl: val})
    }

    productChange = (val) => {
        this.setState({product_name: val})
    }

    priceChange = (val) => {
        this.setState({price: val})
    }

    cancelInput = () => {
        this.setState({imgUrl: '', product_name: '', price: 0})
    }

    createProduct = (name, price, img) => {
        console.log(name, price, img);
        axios.post('/api/product', {name, price, img}).then(() => {
            this.props.getInventory();
        })

    }

    render() {
        const {imgUrl, product_name, price} = this.state;
      return(
          <div className="inputBox">
            <img src={this.state.imgUrl} className="pictureBox" alt="No Img"/>
            <div>Image URL: </div>
            <input onChange={e => this.imgChange(e.target.value)}/>
            <div>Product Name: </div>
            <input onChange={e => this.productChange(e.target.value)}/>
            <div>Price: </div>
            <input onChange={e => this.priceChange(e.target.value)} />
            <div>
                <button onClick={this.cancelInput}>Cancel</button>
                <button onClick={() => this.createProduct(product_name, price, imgUrl)}>Add to Inventory</button>
            </div>
          </div>
      );
    }
  }