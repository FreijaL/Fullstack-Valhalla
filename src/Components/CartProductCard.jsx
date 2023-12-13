import style from './CartProductCard.module.scss';
import MiniButton from '../Components/MiniButton';


function CartProductCard({price, name, quantity, onQuantityIncrease, onQuantityDecrease}) {


    return(
        <section className={style.cartProductCardWrapper}>
            <section className={style.cartProductCardContainer}>
                <section className={style.cartProductName}>
                    <p>{name}</p>
                </section>
                <section className={style.changeValue}>
                    <button onClick={onQuantityDecrease}><code>&#8212;</code></button>
                    <p>{quantity}</p>
                    <button onClick={onQuantityIncrease}>+</button>
                </section>
            </section>
            <section className={style.cartProductCardContainer}>
            <p className={style.productPriceTotal}>{price} kr</p>
                <MiniButton title='Ändra' />
            </section>
        </section>
    )
};

export default CartProductCard;