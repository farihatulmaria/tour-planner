import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import Product from '../Product/Product';
import './Order.css';


const productUrl = 'https://raw.githubusercontent.com/farihatulmaria/fake-tour-api/main/fake-tour.json';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      //fetch(productUrl)
      //.then(res => res.json())
      //.then(data => setProducts(data))
    }, []);
    // adding items to cart
    const addToCart = (product) =>{
        const newCart  = [...cart , product];
        setCart(newCart);
    }
    // removing items to cart
    const removeCart = (id) => {
        const newTours = cart.filter((cartItems) => cartItems.id !== id);
        setCart(newTours);
    }
    
    const randomTOur = () =>{
        const randomNum = Math.floor(Math.random() * cart.length);
        setIndex(randomNum);
    }
    
    if(cart.length > 4){
        alert("Please only add four items");
    }

    return (
        <section className='order-section pt-5 pb-5'>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-8">
                        <div className="products-container">
                           <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1">
                            {
                                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)
                            }
                           </div>
                        </div>
                   </div>
                   <div className="col-md-4">
                       <div className="cart-container p-5">
                           <h2>
                                Select Your Tour Destination
                           </h2>
                           <div className="cart-info">
                                <p>Selected Tour destinations : {cart.length}</p>
                                <div className="container">
                                    {
                                        cart.map(cartItems => <Cart cartItems={cartItems} removeCart={removeCart}/>)
                                    }
                                </div>

                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={randomTOur}>
                                    Choose Best One
                                </button>

                                <button className='btn btn-outline-primary mx-3' onClick={()=>setCart([])}>Clear</button>
                                {
                                    cart.length === 0 ? " " :<Modal cartItems={cart[index]}/>
                                }
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    );
};
export default Order;