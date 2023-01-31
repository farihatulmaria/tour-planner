import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cartItems = props.cartItems;
    const {removeCart} = props; 
    const {name,img,ticketPrice,id} = cartItems;
   

    return (
            <div className="row my-3 align-items-center">
                <div className="col-md-2">
                    <img src={img} alt={name} className="cartItem-image" />
                </div>
                <div className="col-md-8">
                    <h6>{name}</h6>
                    <p>{ticketPrice} TK</p>
                </div>
                <div className="col-md-2">
                    <button className="deleteItem border-0" onClick={()=>removeCart(id)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            </div>
    );
};

export default Cart;