import style from './ProductInfo.module.scss';
import CheckIngredients from '../Components/CheckIngredients';
import ButtonSmall from '../Components/ButtonSmall';

function ProductInfo() {

    return(
        <aside className={style.productInfoContainer}>
            <header className={style.productInfoHeader}>
                <h2>Pizzans namn</h2>
                <img src="./svg/cross.svg" alt="cross" />
            </header>
            <main className={style.productInfoMain}>
                <section>
                    <h3>Ta bort</h3>
                    <section className={style.productInfoIngredients}>
                        <CheckIngredients id='ost' value='ost' name='default' label='ost' />
                        <CheckIngredients id='ost' value='ost' name='default' label='ost' />
                        <CheckIngredients id='ost' value='ost' name='default' label='ost' />
                    </section>
                </section>
                <section>
                    <h3>Lägg till</h3>
                    <section className={style.productInfoIngredients}>
                        <CheckIngredients id='extra ost' value='extra ost' name='extra' label='extra ost' price='+5:-'/>
                    </section>
                </section>
            </main>
            <footer className={style.productInfoFooter}>
                <ButtonSmall title='+ Lägg till' />
                <section className={style.productInfoFooterPrize}>
                    <p>Totalt: 100kr</p>
                </section>
            </footer>
        </aside>

    )
};

export default ProductInfo;