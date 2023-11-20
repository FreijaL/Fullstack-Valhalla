import style from './CartPage.module.scss';
import Header from '../../Components/Header';
import ProductInfo from '../../Components/ProductInfo';

function CartPage() {

    return (
        <section className={style.cartPageContainer}>
            <Header />
            <ProductInfo />
        </section>
    )
};

export default CartPage;
