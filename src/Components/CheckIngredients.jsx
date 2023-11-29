import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { buyIngredient } from '../actions/ingredientsAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import style from './CheckIngredients.module.scss';

function CheckIngredients({name, price, id}) {
    
    
    function addIngredientToCart() { 
        dispatch(buyIngredient(ingredients))
    };

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