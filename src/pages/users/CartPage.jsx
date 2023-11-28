import style from './CartPage.module.scss';
import Header from '../../Components/Header';
import ProductInfo from '../../Components/ProductInfo';
import DeliveryOption from '../../Components/DeliveryOption';
import CartProductCard from '../../Components/CartProductCard';

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
                </section>

            </main>
        </section>
    )
};

export default CartPage;
