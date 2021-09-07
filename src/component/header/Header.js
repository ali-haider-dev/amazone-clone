import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../stateProvider/stateProvider';
import { auth } from '../../config/firebase';
import { useHistory } from "react-router-dom"

function Header() {
    const [{ basket, user }] = useStateValue()
    const history = useHistory()
    const login = () => {
        if (user) {
            auth.signOut()
                .then(function () {
                    history.push("/login")
                }).catch(function (error) {
                    // An error happened.
                });
        }
    }
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
                <Link to={!user && "/login"} className="header__link">
                    <div onclick={login} className="header__option">
                        <span className="header__optionOne">hello {user?.email}</span>
                        <span className="header__optionTwo">{user ? "Sign Out" : "Sign In"}</span>
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
                        <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
