import style from './CheckIngredients.module.scss';

function CheckIngredients({id, value, name, label, price}) {

    return(
        <form className={style.checkIngredientsForm}>
            <section className={style.checkIngredientsContainer}>
                <input className={style.checkIngredientsInput} type="radio" id={id} name={name} value={value} />
                <label className={style.checkIngredientsLabel} htmlFor={id}>{label}</label>
            </section>
            <p className={style.checkIngredientsPrice}>{price}</p>
        </form>
    )
};

export default CheckIngredients;