import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../../images/dev-mountain-logo.png'
import { Link } from 'react-router-dom';
import StoreFront from '../StoreFront/StoreFront';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { connect } from 'react-redux';


class NavBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link to="/"><img className="logo-image" src={Logo} alt="" /></Link>
                    </div>

                    <div className="navbar-links-container">
                        <ul className="navbar-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/storefront">Store</Link></li>
                            <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        state: this.state
    }
}

export default connect(mapStateToProps)(NavBar);