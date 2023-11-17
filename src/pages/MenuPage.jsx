import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';

function MenuPage() {

    return (
        <section className={style.menuPageContainer}>
            {/* <NavMenu /> */}
            <Header />
            <main>
                <h1>menu</h1>
            </main>
        </section>
    )
};

export default MenuPage;
