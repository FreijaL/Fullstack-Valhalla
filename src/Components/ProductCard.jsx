import style from './ProductCard.module.scss';
import SmallButton from '../Components/SmallButton';


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
                <SmallButton />
            </section>
        </section>
    )
};

export default ProductCard;