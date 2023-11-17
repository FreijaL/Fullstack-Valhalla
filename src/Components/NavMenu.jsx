import style from './NavMenu.module.scss';

function NavMenu() {

    return (
        <nav className={style.navMenuContainer}>
            <img className={style.cross} src="./svg/cross.svg" alt="cross-option" />
            <ul className={style.navList}>
                <li className={style.navListItem}>Meny</li>
                <li className={style.navListItem}>Min beställning</li>
                <li className={style.navListItem}>Orderhistorik</li>
                <li className={style.navListItem}>Mitt konto</li>
                <li className={style.navListItem}>Om oss</li>
                <li className={style.navListItem}>FAQ</li>
            </ul>
            <section className={style.navListLogin}>
                <p>Logga in</p>
            </section>
        </nav>
    )
}

export default NavMenu;