import style from './CheckIngredients.module.scss';

function CheckIngredients({name, price, id}) {

    return(
        <form className={style.checkIngredientsForm}>
            <section className={style.checkIngredientsContainer}>
                <input 
                    className={style.checkIngredientsInput} 
                    type="checkbox" 
                    id={id} 
                    name={name} 
                    value={name}
                    
                    onChange={addIngredientToCart}
                    />
                <label className={style.checkIngredientsLabel} htmlFor={name}>{name}</label>
            </section>
            <p className={style.checkIngredientsPrice}>{price} kr</p>
        </form>
    )
};

export default CheckIngredients;