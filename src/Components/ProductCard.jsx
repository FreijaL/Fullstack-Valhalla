import style from './ProductCard.module.scss';
import MiniButton from './MiniButton';


function ProductCard() {

    return(
        <section className={style.productCardContainer}>
            <img className={style.productCardImage} src="./images/pizza.png" alt="pizza" />
            <section className={style.productCardInfo}>
                <h3>Margarita</h3>
                <p>Ost, tomatsås</p>
                <h3>110 kr</h3>
            </section>
            <section className={style.productCardButton}>
                <MiniButton />
            </section>
        </section>
    )
};

export default ProductCard;