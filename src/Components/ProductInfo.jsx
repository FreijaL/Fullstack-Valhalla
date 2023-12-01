import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import style from './ProductInfo.module.scss';
import CheckIngredients from '../Components/CheckIngredients';
import ButtonSmall from '../Components/ButtonSmall';


function ProductInfo() {
    const [ingredients, setIngredients] = useState([]);

    const state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        setIngredients(state.ingredients);
    }, [state]);


    
    console.log(ingredients)

    return(
        <section className={style.productInfoContainer}>
            <header className={style.productInfoHeader}>
                <h2>Pizzans namn</h2>
                <img src="./svg/cross.svg" alt="cross" />
            </header>
            <main className={style.productInfoMain}>
                <section>
                    <h3>Ta bort</h3>
                    <section className={style.productInfoIngredients}>
                        {
                            ingredients &&
                            ingredients.map((ingredient) => 
                                <CheckIngredients 
                                    key={ingredient.id} 
                                    ingredient={ingredient}
                                    name={ingredient.name}
                                    id={ingredient.id}
                                />)
                        }
                    </section>
                </section>
                <section>
                    <h3>Lägg till</h3>
                    <section className={style.productInfoIngredients}>
                        {
                            ingredients &&
                            ingredients.map((ingredient) => 
                                <CheckIngredients 
                                    key={ingredient.id} 
                                    ingredient={ingredient} 
                                    name={ingredient.name} 
                                    price={ingredient.price} 
                                />)
                        }
                    </section>
                </section>
                <section className={style.productInfoMoreOptions}>
                    <p>Fler alternativ</p>
                    <img src="./svg/arrow-down.svg" alt="arrow-pointing-down" />
                </section>
            </main>
            <footer className={style.productInfoFooter}>
                <ButtonSmall title='+ Lägg till' />
                <section className={style.productInfoFooterPrize}>
                    <p>Totalt: 100kr</p>
                </section>
            </footer>
        </section>

    )
};

export default ProductInfo;