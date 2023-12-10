import { useState } from 'react';
import style from './CategoryScrollBar.module.scss';

function CategoryScrollBar( {onCategoryChange} ) {

    const [isSelected, setIsSelected] = useState('pizzas')

    function categoryStyle(category, isSelected) {
        if(category === isSelected){
            return{
                border: '2px solid #F9A66C'
            };
        } else {
            return {};
        }
    }
    

    return(
        <aside 
            className={style.categoryScrollBarContainer}>
            <section 
                className={style.categoryCard} 
                onClick={() => {onCategoryChange('pizzas'); setIsSelected('pizzas');}}
                style={categoryStyle('pizzas', isSelected)}
            >
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/pizza.png" alt="pizza-category" />
                </section>
                <h3 className={style.categoryHeading}>Pizza</h3>
            </section>
            <section 
                className={style.categoryCard}
                onClick={() => {onCategoryChange('kebabs'); setIsSelected('kebabs');}}
                style={categoryStyle('kebabs', isSelected)} 
            >
                <section className={style.categoryCardImageContainer} >
                    <img className={style.categoryCardImage} src="./images/kebab.png" alt="kebab-category" />
                </section>
                <h3 className={style.categoryHeading}>Kebab</h3>
            </section>
            <section 
                className={style.categoryCard} 
                onClick={() => {onCategoryChange('sides'); setIsSelected('sides')}}
                style={categoryStyle('sides',isSelected)}
            >
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/extra.png" alt="extra-category" />
                </section>
                <h3 className={style.categoryHeading}>Tillbehör</h3>
            </section>
            <section 
                className={style.categoryCard} 
                onClick={() => {onCategoryChange('drinks'); setIsSelected('drinks')}}
                style={categoryStyle('drinks', isSelected)}
            >
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/drink.png" alt="drink-category" />
                </section>
                <h3 className={style.categoryHeading}>Dryck</h3>
            </section>
            <section 
                className={style.categoryCard} 
                onClick={() => {onCategoryChange('desserts'); setIsSelected('desserts')}}
                style={categoryStyle('desserts', isSelected)}
            >
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/desert.png" alt="drink-category" />
                </section>
                <h3 className={style.categoryHeading}>Dessert</h3>
            </section>
        </aside>
    )
};

export default CategoryScrollBar;