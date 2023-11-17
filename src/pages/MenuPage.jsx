import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';


function MenuPage() {

    return (
        <section className={style.menuPageContainer}>
            <Header />
            <main>
                <CategoryScrollBar />
            </main>
        </section>
    )
};

export default MenuPage;
