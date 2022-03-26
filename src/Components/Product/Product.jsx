import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';



const Product = (props) => {
    const product = props.product;
    const addToCart = props.addToCart;
    const {name,img,ticketPrice} = product;
    return (
        <div className="col h-100 text-center">
            <div className='product border m-2'>
                <img src={img} alt={name} className="w-100 d-block" />
                <div className="product-info">
                    <p className="product-name">
                        {name}
                    </p>
                    <p className="product-price">Ticket Price: {ticketPrice} taka</p>
                    <button className='cart-btn btn bg-primary text-white' onClick={()=> addToCart(product)}>
                        Add Ticket to Cart <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;