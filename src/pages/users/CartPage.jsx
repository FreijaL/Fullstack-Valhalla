//CartPage.jsx

import style from './CartPage.module.scss';
import Header from '../../Components/Header';
import ProductInfo from '../../Components/ProductInfo';
import DeliveryOption from '../../Components/DeliveryOption';
import CartProductCard from '../../Components/CartProductCard';
import ButtonLarge from '../../Components/ButtonLarge';
import { useSelector, useDispatch } from 'react-redux';

function CartPage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const cartItems = useSelector((state) => state.products.cartItems);

    console.log(cartItems);

    // const handleAddToCart = (product) => {
    //     dispatch(addToCart(product.id)); 
    // };

    const totalPrice = cartItems.reduce((total, itemId) => {
        const product = products.find(product => product.id === itemId);
        return product ? total + product.price : total;
    }, 0);

    return (
        <section className={style.cartPageContainer}>
            <Header />
            <main className={style.cartPageMainContainer}>
                <section className={style.cartPageDeliveryContainer}>
                    <DeliveryOption title='Välj leverans:'/>
                </section>
                <section className={style.cartPageProductContainer}>
                     {cartItems && cartItems.map((item) => (
                        <CartProductCard />
                     )
                        


                        /* const product = products.find(product => product.id === itemId);
                        return product && <CartProductCard key={product.id} product={product} />; */
                    )}
                    {/* <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard /> */}
                </section>
                <section className={style.cartPageSummary}>
                    <aside className={style.cartPageSummaryInfo}>
                        <label>Kommentar till köket:</label>
                        <textarea className={style.inputInfoToKitchen} />
                    </aside>
                    <aside className={style.cartPageSummaryPrice}>
                        <section className={style.summaryPrice}>
                            <p>Orderkostnad</p>
                            <p>250 kr</p>
                        </section>
                        <section className={style.summaryPrice}>
                            <p>Leveransavgift</p>
                            <p>0 kr</p>
                        </section>
                        <section className={style.summaryTotalPrice}>
                            <p>Totalt</p>
                            <p>250 kr</p>
                        </section>
                    </aside>
                    <ButtonLarge title='Gå till betalning' />
                </section>

            </main>
        </section>
    )
};

export default CartPage;
