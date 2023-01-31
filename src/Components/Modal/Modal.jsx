import React from 'react';
import './Modal.css';
const Modal = (props) => {
    const cartItems = props.cartItems;
    const {name,img,ticketPrice} = cartItems;
    return (
        <div>
           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className='p-2'>{name}</h2>
                            <img src={img} className="img-thumbnail img-fluid" alt="" />
                            <p className='p-2'>Ticket Price : {ticketPrice} TK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;