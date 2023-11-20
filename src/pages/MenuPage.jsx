import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';



function MenuPage() {

    return (
        <section className={style.menuPageContainer}>
            <Header />
            <CategoryScrollBar />
            <main className={style.menuPageMain}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </main>
        </section>
    )
};

export default MenuPage;
