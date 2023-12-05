//ProductCard.jsx

import style from './ProductCard.module.scss';
import MiniButton from './MiniButton';


function ProductCard({name, price, toppings, image, onClick, onAddToCart}) {

    return(
        <section className={style.productCardContainer}>
            <img className={style.productCardImage} src={image} alt={name} />
            <section className={style.productCardInfo} onClick={onClick}>
                <h3>{name}</h3>
                <p>{toppings}</p>
                <h3>{price} kr</h3>
            </section>
            <section className={style.productCardButton}>
                <MiniButton title='+ Lägg till' onClick={onAddToCart}/>
            </section>
        </section>
    )
};

export default ProductCard;