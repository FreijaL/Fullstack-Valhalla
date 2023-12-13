import style from './CartPage.module.scss';
import Header from '../../Components/Header';
import DeliveryOption from '../../Components/DeliveryOption';
import CartProductCard from '../../Components/CartProductCard';
import ButtonLarge from '../../Components/ButtonLarge';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { calculatePriceTotal, decreaseQuantity, filterCart, increaseQuantity } from '../../app/productSlice';
import { addCommentToOrder } from '../../app/orderSlice';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const dispatch = useDispatch();
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

    const handleCommentInput = (event) => {
        dispatch(addCommentToOrder(event.target.value));
    };

    const navigate = useNavigate();


    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        setCartQuantity(cartItems.length);
    }, [cartItems])

    return (
        <section className={style.cartPageContainer}>
            <Header classnameCartItem={`${cartQuantity > 0 ? style.inCart : ''}`} cartQuantity={cartQuantity} />
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
                        <textarea className={style.inputInfoToKitchen} onInput={handleCommentInput} />
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
                    <ButtonLarge onClick={() => navigate("/payment")} title='Gå till betalning' />
                </section>

            </main>
        </section>
    )
};

export default CartPage;
