import { useEffect, useState } from 'react';
import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';
import ProductInfo from '../Components/ProductInfo';
import { useDispatch, useSelector } from 'react-redux';



function MenuPage() {

    const [openInfo, setOpenInfo] = useState(false);
    // const [products, setProducts] = useState([]);

    const state = useSelector((state) => state.products);
    const dispatch = useDispatch();

    console.log(state)

    return (
        <section className={style.menuPageContainer}>
            <Header />
            <CategoryScrollBar />
            <main className={style.menuPageMain}>
                {
                    state &&
                    product.map((product) =>
                    <ProductCard 
                        //onClick={() => setOpenInfo(prevstate => !prevstate)}
                        name={product.itemName}
                        toppings={product.toppings}
                        price={product.price}
                        image={product.image}
                        key={product.id}
                        
                    />)
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
