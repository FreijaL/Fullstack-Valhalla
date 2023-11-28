import style from './CartProductCard.module.scss';
import MiniButton from '../Components/MiniButton';


function CartProductCard() {


    return(
        <section className={style.cartProductCardContainer}>
            <p>Margherita</p>
            <section className={style.changeValue}>
                <button><code>&#8212;</code></button>
                <p>1</p>
                <button>+</button>
            </section>
            <p>110 kr</p>
            <MiniButton title='Ändra' />
        </section>
    )
};

export default CartProductCard;