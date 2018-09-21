import React from 'react';
import './Product.css';

export default function Product (props){
    console.log(props);
    return (
        <div className="wholeProduct">
            <img src={props.image} className="image"/>
            <div className="itemPrice">
                {props.name}
                {props.price}
            </div>
        </div>
    )
}