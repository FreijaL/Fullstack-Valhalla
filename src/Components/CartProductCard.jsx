import style from './CartProductCard.module.scss';
import MiniButton from '../Components/MiniButton';


function CartProductCard({price, name, quantity, onQuantityIncrease, onQuantityDecrease}) {


    return(
        <section className={style.cartProductCardContainer}>
            <section>
                <p>{name}</p>
                {/* <p className={style.productExtraIngredient}>+ Extra ost</p> */}
            </section>
            <section className={style.changeValue}>
                <button onClick={onQuantityDecrease}><code>&#8212;</code></button>
                <p>{quantity}</p>
                <button onClick={onQuantityIncrease}>+</button>
            </section>
            <p className={style.productPriceTotal}>{price} kr</p>
            <MiniButton title='Ändra' />
        </section>
    )
};

export default CartProductCard;