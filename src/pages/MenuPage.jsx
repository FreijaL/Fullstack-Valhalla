import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';

function MenuPage() {

    return (
        <section className={style.menuPageContainer}>
            <NavMenu />
            <h1>menu</h1>
        </section>
    )
};

export default MenuPage;
