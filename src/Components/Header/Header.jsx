import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <header className='p-2'>
            <nav>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <p className="logo">
                              <a href="/">  Tour Planer</a>
                            </p>
                        </div>
                        <div className="col-md-10 text-end">
                            <ul className="main-menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/question">Questions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;