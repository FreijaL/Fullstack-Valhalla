import { useDispatch } from 'react-redux';
import { buyIngredient } from '../actions/ingredientsAction';

import style from './CheckIngredients.module.scss';

function CheckIngredients() {
    const [ingredients, setIngredients] = useState([]);
    const dispatch = useDispatch();
    
    function addIngredientToCart() { 
        dispatch(buyIngredient(ingredients))
    };

    return(
        <form className={style.checkIngredientsForm}>
            <section className={style.checkIngredientsContainer}>
                <input 
                    className={style.checkIngredientsInput} 
                    type="checkbox" 
                    id={ingredients.id} 
                    name={ingredients.name} 
                    value={ingredients.name}
                    
                    action={addIngredientToCart}
                    />
                <label className={style.checkIngredientsLabel} htmlFor={ingredients.name}>{ingredients.name}</label>
            </section>
            <p className={style.checkIngredientsPrice}>{ingredients.price}</p>
        </form>
    )
};

export default CheckIngredients;