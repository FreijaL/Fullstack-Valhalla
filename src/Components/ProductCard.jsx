import style from './ProductCard.module.scss';
import { motion } from 'framer-motion';
import MiniButton from './MiniButton';


function ProductCard({name, price, toppings, image, onClick, onAddToCart, i}) {

    return(
        <motion.section 
            className={style.productCardContainer}
            initial={{ opacity: 0, translateX: -100}}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: .3, delay: i * .1}}
        >
            <img className={style.productCardImage} src={image} alt={name} />
            <section className={style.productCardInfo} onClick={onClick}>
                <h3>{name}</h3>
                <p>{toppings}</p>
                <h3>{price} kr</h3>
            </section>
            <section className={style.productCardButton}>
                <MiniButton title='+ Lägg till' onClick={onAddToCart}/>
            </section>
        </motion.section>
    )
};

export default ProductCard;