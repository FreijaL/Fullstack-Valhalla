import { useState } from 'react';
import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';
import ProductInfo from '../Components/ProductInfo';
import { useSelector } from 'react-redux';



function MenuPage() {
    const [openInfo, setOpenInfo] = useState(false);
   
    const products = useSelector((state) => state.products);
    console.log("state:", products);

    return (
        <section className={style.menuPageContainer}>
            <Header />
            <CategoryScrollBar />
            <main className={style.menuPageMain}>
                {products &&
                    products.products.map((product) => (
                        <ProductCard
                        image={product.image}
                        name={product.itemName}
                        toppings={product.toppings}
                        price={product.price}
                        key={product.id}
                        />
                    ))
                }
                {/* <ProductCard onClick={() => setOpenInfo(prevstate => !prevstate)} /> */}
                
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
