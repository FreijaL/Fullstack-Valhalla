import { useState } from 'react';
import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';
import ProductInfo from '../Components/ProductInfo';



function MenuPage() {

    const [openInfo, setOpenInfo] = useState(true);

    return (
        <section className={style.menuPageContainer}>
            <Header />
            <CategoryScrollBar />
            <main className={style.menuPageMain}>
                <ProductCard onClick={() => setOpenInfo(prevstate => !prevstate)} />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </main>
            {
                openInfo
                ?
                <ProductInfo />
                :
                ''
            }
        </section>
    )
};

export default MenuPage;
