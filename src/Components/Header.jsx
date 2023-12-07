import style from './Header.module.scss';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className={style.headerContainer}>
                <motion.img 
                    onClick={() => setShowMenu(prevstate => !prevstate)}
                    className={style.headerMenuIcon} 
                    src="/svg/ham-menu.svg" 
                    alt="ham-menu-icon"

                    initial={{ scale: 1}}
                    whileHover={{ scale: 1.2}}
                />
                <Link 
                    className={style.headerName}
                    to="/menu"
                >
                    <img className={style.headerNamePizzaIcon} src="/svg/pizza-slice.svg" alt="pizza-slice-logo" />
                    <h1 className={style.headerNameH1}>Valhalla Pizza</h1>
                </Link>
                <Link to="/cart">
                    <motion.img 
                        className={style.headerCartIcon} 
                        src="/svg/cart.svg" 
                        alt="cart-icon" 
                    
                        initial={{ scale: 1}}
                        whileHover={{ scale: 1.2}}
                    />
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