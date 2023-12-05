import style from './Header.module.scss';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className={style.headerContainer}>
                <img 
                    onClick={() => setShowMenu(prevstate => !prevstate)}
                    className={style.headerMenuIcon} src="./svg/ham-menu.svg" alt="ham-menu-icon"
                />
                <section className={style.headerName}>
                    <img className={style.headerNamePizzaIcon} src="./svg/pizza-slice.svg" alt="pizza-slice-logo" />
                    <h1 className={style.headerNameH1}>Valhalla Pizza</h1>
                </section>
                <Link to="/cart">
                    <img className={style.headerCartIcon} src="./svg/cart.svg" alt="cart-icon" />
                </Link>
            </header>
            {
                showMenu
                ?
                <NavMenu />
                :
                ''
            }
        </>
    )
};

export default Header;