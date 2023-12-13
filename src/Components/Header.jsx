import style from './Header.module.scss';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Header({classnameCartItem, cartQuantity}) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className={style.headerContainer}>
                <img 
                    onClick={() => setShowMenu(prevstate => !prevstate)}
                    className={style.headerMenuIcon} src="/svg/ham-menu.svg" alt="ham-menu-icon"
                />
                <section className={style.headerName}>
                    <img className={style.headerNamePizzaIcon} src="/svg/pizza-slice.svg" alt="pizza-slice-logo" />
                    <h1 className={style.headerNameH1}>Valhalla Pizza</h1>
                </section>
                <Link to="/cart">
                    <section className={style.cartIconContainer}>
                        <motion.img 
                            className={style.headerCartIcon} 
                            src="/svg/cart.svg" 
                            alt="cart-icon" 
                        
                            initial={{ scale: 1}}
                            whileHover={{ scale: 1.3}}
                        />
                        <p className={classnameCartItem}>{cartQuantity > 0 ? cartQuantity : ''}</p>
                    </section>
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