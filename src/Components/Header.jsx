import style from './Header.module.scss';

function Header() {

    return (
        <header className={style.headerContainer}>
            <img className={style.headerMenuIcon} src="./svg/ham-menu.svg" alt="ham-menu-icon" />
            <section className={style.headerName}>
                <img className={style.headerNamePizzaIcon} src="./svg/pizza-slice.svg" alt="pizza-slice-logo" />
                <h1 className={style.headerNameH1}>Valhalla Pizza</h1>
            </section>
            <img className={style.headerCartIcon} src="./svg/cart.svg" alt="cart-icon" />
        </header>
    )
};

export default Header;