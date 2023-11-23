import { useDispatch } from 'react-redux';
import { buyIngredient } from '../actions/ingredientsAction';

import style from './CheckIngredients.module.scss';

function CheckIngredients({ingredient}) {

    const dispatch = useDispatch();

    function addIngredientToCart() { 
        dispatch(buyIngredient(ingredient))
    };

    return(
        <form className={style.checkIngredientsForm}>
            <section className={style.checkIngredientsContainer}>
                <input 
                    className={style.checkIngredientsInput} 
                    type="checkbox" 
                    id={ingredient.id} 
                    name={ingredient.name} 
                    value={ingredient.name}
                    
                    action={addIngredientToCart}
                    />
                <label className={style.checkIngredientsLabel} htmlFor={ingredient.name}>{ingredient.name}</label>
            </section>
            <p className={style.checkIngredientsPrice}>{ingredient.price}</p>
        </form>
    )
};

export default CheckIngredients;