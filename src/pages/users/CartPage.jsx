//CartPage.jsx

import style from './CartPage.module.scss';
import Header from '../../Components/Header';
import DeliveryOption from '../../Components/DeliveryOption';
import CartProductCard from '../../Components/CartProductCard';
import ButtonLarge from '../../Components/ButtonLarge';
import { useSelector, useDispatch } from 'react-redux';
import { calculatePriceTotal, decreaseQuantity, filterCart, increaseQuantity } from '../../app/productSlice';

function CartPage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const cartItems = useSelector((state) => state.products.cartItems);
    const priceTotal = useSelector((state) => state.products.priceTotal);

    const handleQuantityIncrease = (item) => {
        dispatch(increaseQuantity(item));
        dispatch(calculatePriceTotal());
    }

    const handleQuantityDecrease = (item) => {
        dispatch(decreaseQuantity(item));
        dispatch(filterCart(item));
        dispatch(calculatePriceTotal());
    }

    return (
        <section className={style.cartPageContainer}>
            <Header />
            <main className={style.cartPageMainContainer}>
                <section className={style.cartPageDeliveryContainer}>
                    <DeliveryOption title='Välj leverans:'/>
                </section>
                <section className={style.cartPageProductContainer}>
                    {
                        cartItems && 
                            cartItems.map((item) => (
                            <CartProductCard 
                                onQuantityIncrease={() => handleQuantityIncrease(item)}
                                onQuantityDecrease={() => handleQuantityDecrease(item)}
                                name={item.itemName}
                                quantity={item.quantity}
                                price={item.price}
                                key={item.id}
                            />
                        )
                    )}
                </section>
                <section className={style.cartPageSummary}>
                    <aside className={style.cartPageSummaryInfo}>
                        <label>Kommentar till köket:</label>
                        <textarea className={style.inputInfoToKitchen} />
                    </aside>
                    <aside className={style.cartPageSummaryPrice}>
                        <section className={style.summaryPrice}>
                            <p>Orderkostnad</p>
                            <p>{priceTotal} kr</p>
                        </section>
                        <section className={style.summaryPrice}>
                            <p>Leveransavgift</p>
                            <p>0 kr</p>
                        </section>
                        <section className={style.summaryTotalPrice}>
                            <p>Totalt</p>
                            <p>{priceTotal} kr</p>
                        </section>
                    </aside>
                    <ButtonLarge onClick={() => handleNav()} title='Gå till betalning' />
                </section>

            </main>
        </section>
    )
};

export default CartPage;
