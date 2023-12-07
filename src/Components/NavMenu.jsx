import { NavLink } from 'react-router-dom';
import style from './NavMenu.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

function NavMenu() {

    const [showMenu, setShowMenu] = useState(true);

    const navMenuAlternative = {
        normal: {
            scale: 1,
            color: rgb(255, 255, 255),
            x: 0
        },
        hover: {
            scale: 1.2,
            color: rgb(253, 244, 231),
            x: 10
        }
    }

    return (
        <>
            {
                showMenu &&
                <nav className={style.navMenuContainer}>
                    <img 
                        onClick={() => setShowMenu(prevstate => !prevstate)}
                        className={style.cross} src="/svg/cross.svg" alt="cross-option" />
                    { window.location.pathname.includes('/staff') ? 
                    <ul className={style.navList}>
                        <motion.NavLink 
                            className={style.navListItem} 
                            to="/staff" 

                            variants={navMenuAlternative} 
                            initial={normal}
                            animation={hover}
                        >Hem
                        </motion.NavLink>
                        <NavLink className={style.navListItem} to="/staff/kitchen">Köket</NavLink>
                        <NavLink className={style.navListItem} to="/staff/service">Kassan</NavLink>
                        <NavLink className={style.navListItem} to="/staff/history">Orderhistorik</NavLink>
                        <NavLink className={style.navListItem} to="/staff/guide" >Snabbguide</NavLink>
                    </ul> : 
                    <ul className={style.navList}>
                        <NavLink className={style.navListItem} to="/menu" >Meny</NavLink>
                        <NavLink className={style.navListItem} to="/confirmation">Min beställning</NavLink>
                        <NavLink className={style.navListItem}>Orderhistorik</NavLink>
                        <NavLink className={style.navListItem}>Mitt konto</NavLink>
                        <NavLink className={style.navListItem} to="/aboutus" >Om oss</NavLink>
                    </ul>
                    } 
                    <section className={style.navListLogin}>
                        <NavLink to="/login">Logga in</NavLink>
                    </section>
                </nav>
            }
        </>
    )
}

export default NavMenu;