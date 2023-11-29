import style from './CartPage.module.scss';
import Header from '../../Components/Header';
import ProductInfo from '../../Components/ProductInfo';
import DeliveryOption from '../../Components/DeliveryOption';
import CartProductCard from '../../Components/CartProductCard';
import ButtonLarge from '../../Components/ButtonLarge';

function CartPage() {

    return (
        <section className={style.cartPageContainer}>
            <Header />
            <main className={style.cartPageMainContainer}>
                <section className={style.cartPageDeliveryContainer}>
                    <DeliveryOption title='Välj leverans:'/>
                </section>
                <section className={style.cartPageProductContainer}>
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
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
