import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header_nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">hello Ali</span>
                        <span className="header__optionTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">return</span>
                        <span className="header__optionTwo">& order</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Your</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
