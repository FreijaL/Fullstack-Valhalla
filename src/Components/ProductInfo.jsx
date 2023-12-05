import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import style from './ProductInfo.module.scss';
import CheckIngredients from '../Components/CheckIngredients';
import ButtonSmall from '../Components/ButtonSmall';


function ProductInfo({product, closeModal}) {

    return(
        <section className={style.productInfoContainer}>
            <header className={style.productInfoHeader}>
                <h2>{product.itemName}</h2>
                <img src="./svg/cross.svg" alt="cross" onClick={closeModal}/>
            </header>
            <main className={style.productInfoMain}>
                <section>
                    <h3>Ta bort</h3>
                    <section className={style.productInfoIngredients}>
                        
                    </section>
                </section>
                <section>
                    <h3>Lägg till</h3>
                    <section className={style.productInfoIngredients}>
                       
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
                    <p>Totalt: {product.price}kr</p>
                </section>
            </footer>
        </section>

    )
};

export default ProductInfo;